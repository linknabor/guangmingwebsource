<template>
	<div class="main">
		<!-- 停车缴费开始 -->
		<mt-loadmore 
		  	:bottomMethod="carLoadBottom" 
		  	:auto-fill = "false"
		  	:bottomAllLoaded = "carisLastPage"
		>
		  	<Bill :bill-info="carBillInfo" @itemClick="itemClick"></Bill>
		</mt-loadmore>
		<div style="widtt:100%;height:0.92rem;"></div>
	  	<div class="btn-fixed">
    		<div class="fl select-btn" :class="{allSelected:carAllselect }" @click="allSelect(carBillInfo,'carAllselect')">全选&nbsp;</div>
    		<div class="pay" @click="pay('carBillInfo','carAllPrice','carAllselect')">
    			我要缴费
    			<span>
    				￥{{carAllPrice}}
    			</span>
    		</div>
		</div>
		<!-- 停车缴费结束 -->
	</div>
</template>
<script>
	let vm;
	import wx from 'weixin-js-sdk';
	import Bill from '../../components/bill.vue';
	export default {
		components:{Bill},
		computed:{
			//停车缴费总价
		  	carAllPrice : function(){
		  		let ap = 0;
		  		for(let i in this.carBillInfo){
		  			if(this.carBillInfo[i].selected == true){
		  				ap+=Number(this.carBillInfo[i].fee_price)
		  			}
		  		}
		  		return parseFloat(ap).toFixed(2)
		    },

		},
		data(){
			return {
				url : '/billList',
				stmtId:'',//快捷缴费 扫描出来的账单号
		  		params : {
		  			startDate:'',
		  			endDate:'',
		  			payStatus: '02', //写死
		  			currentPage : 1, //页码
		  			totalCount : 0, //第几条开始
		  		},
				carisLastPage:false,//停车缴费是否最后一页
				carAllselect:false,//停车缴费全选
				carBillInfo:[],//停车缴费数据
				selected:'c', //选项卡 默认选中
				carBillPage :1, //停车缴费页码
			}
		},
		created(){
		  	vm = this;
		},
		mounted(){
			//微信配置
		  	let url = location.href.split('#')[0]
		  	vm.receiveData.wxconfig(vm,wx,['scanQRCode'],url);
		  	
		  	//请求 停车缴费 和 物业缴费首屏数据
		  	vm.receiveData.getData(vm, vm.url, 'data',function(){
		  		// vm.billInfo = vm.data.result.bill_info;//物业缴费
		  		vm.reduceMode = vm.data.result.reduce_mode;//减免方式
		  		vm.carBillInfo = vm.data.result.car_bill_info;//停车缴费
				vm.pay_least_month = vm.data.result.pay_least_month;  
		  	},vm.params) ;
		  	//查询缴费 小区数据
		  	// vm.receiveData.getData(vm,'/getSect','sectList',function(){
		  	// 	vm.sectList = vm.sectList.result
		  	// })
		},
		methods:{
			carLoadBottom(){//停车缴费，上拉加载数据
		  		//临时接收的数组
		  		let tempArr = null;
		  		//页码自增 
		  		vm.carBillPage+=1
				vm.params.currentPage = vm.carBillPage;
				//请求接口数据
				vm.receiveData.getData(
					vm,
					vm.url,
					'pageData2',
					function(){
		  				tempArr = vm.pageData2.result.car_bill_info;//停车缴费
		  				if(tempArr && tempArr.length > 0){
		  					vm.carBillInfo =vm.carBillInfo.concat(tempArr) //停车缴费
		  					vm.carAllselect = false;
		  				}else{
		  					vm.carisLastPage = true;
		  				}
		  			},
		  			vm.params
		  		)
		  	},
		  	//点击物业缴费按钮
		  	pay(list,allPrice,allselect){//第一个参数 账单数组，第二个参数 总价 第三个参数 是否全选,所有参数 string
		  		if( vm[allPrice] < 0.1){
		  			alert('请选择账单后支付');
		  			return
		  		}
		  		let selectedArr = [];
		  		if(vm[allselect] == true){
		  			//全部选中
		  			selectedArr = vm[list];
		  		}else{
		  			//只选中一部分
		  			for( let i in vm[list]){
		  				if(vm[list][i].selected){
		  					selectedArr.push(vm[list][i])
		  				}
		  			}
		  		}
		  		let bills="";
		  		let pay_addr = selectedArr[0].pay_addr;
		  		for(let i in selectedArr){
		  			if(selectedArr.length - 1 == i){
		  				bills+=selectedArr[i].bill_id;
		  			}else{
		  				bills+=selectedArr[i].bill_id+',';	
		  			}
		  			
		  		};
				if(vm.pay_least_month>0){
					if(vm.pay_least_month>selectedArr.length){
						alert("请至少选择"+vm.pay_least_month+"个月的账单进行支付。");
						return false;
					}
				}
		  		//------测试
		  		vm.str = 'https://test.e-shequ.com/guangming/weixin/';
		  		let url = vm.str + "paymentdetailtest.html?#/?billIds="+bills+"&stmtId="+vm.stmtId+"&payAddr="+escape(pay_addr)+"&totalPrice="+vm[allPrice]+"&reduceMode="+vm[allPrice];
	            window.location.href = url;

	            //------光明
	     // 		vm.str = 'https://www.e-shequ.com/pay/';
		  		// vm.baseUrl='https://www.e-shequ.com/wechat-sit/hexie';
		  		// let url = vm.str +"gm"+ "paymentdetail.html?#/?billIds="+bills+"&stmtId="+vm.stmtId+"&payAddr="+escape(pay_addr)+"&totalPrice="+vm[allPrice]+"&reduceMode="+vm.reduceMode+"&basePageUrl="+vm.baseUrl;
	     //    	window.location.href = url;
		  	},
		  	//点击某个选中按钮 params1:被点击按钮的下标 params2:被点击按钮所属的数组
		  	itemClick:function(index,b){//3个页面对应不同的三个数组 
		  		let len = b.length
		  		if(b[index].selected){//选中状态下
		  			for(let i=index;i< len;i++){
		  				//后面的全部取消选中
		  				vm.$set(b[i],'selected',false);	
		  			}
		  			//某一个点击了取消后全选消失
	 	  			vm.bAllSelect = false;
		  		}else{//未选中状态下，前面全部选中
		  			for(let j=index;j >= 0;j--){//
		  				vm.$set(b[j],'selected',true);	
		  			}
		  		}
		  	},

		  	//点击全选按钮 params:需要被全部选中的数组
		  	allSelect:function(arr,a){
		  		if(vm[a] ){//取消全选
		  			for(let i in arr){
		  				vm.$set(arr[i],'selected',false);
		  			}
		  		}else{//全部选中
		  			for(let i in arr){
		  				vm.$set(arr[i],'selected',true);
		  			}
		  		}
		  		//取反
		  		vm[a] = !vm[a];
		  	},
		}
	}
</script>

<style scoped>
a{color:black}
/*查询缴费*/

.query-data{
	height: 100%;
	padding: 0.25rem 1.2rem;
	margin-bottom: 0.2rem;
}
.virtual-input{
	width:3.4rem;
	border:1px solid #4c4c4c;
	border-radius: 5px;
	padding-left: 0.2rem;
	display: inline-block;
	height: 0.5rem;
}
.input-row{
	padding-bottom: 0.3rem;
	font: 0.26rem/0.5rem "";
	color: #a6937c;
	height: 0.5rem;
}
.top2{
	position: relative;
	top: -0.2rem;

}

.btn-fixed{
	position: fixed;
	color: #fff;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.92rem;
    line-height: 0.92rem;
    text-align: center;
}

.select-btn{
	padding-left: 36px;
    background: url('../../static/image/icon_unselect_white.png') no-repeat;
    background-color: rgba(0,0,0,0.6);
    background-size: 16px;
    background-position: 15px center;
    height: 0.92rem;
    line-height: 0.92rem;
}

.allSelected{
	background: url('../../static/image/icon_selected_white.png') no-repeat;
	 background-color: rgba(0,0,0,0.6);
    background-size: 16px;
    background-position: 15px center;

}

.pay{
	overflow: hidden;
	background: #ff8a00;
	text-align: center;	
}	

.main{
	margin:0 0.3rem;
}

 .mint-navbar .mint-tab-item{
 	border-bottom: 1px solid #cdcdcb;
 }

 .mint-navbar .mint-tab-item.is-selected{
 	border-bottom: 1px solid #ff8a00;
 	margin-bottom: 0;
 	color:#ff8a00;
 }
</style>