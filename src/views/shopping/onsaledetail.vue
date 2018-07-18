<style scoped>
	[v-cloak]{display: none;}
	.fl{float: left;}
	.fr{float: right;}
	.por{position: relative;}
	.poa{position: absolute;}
	.height{width: 100%;height: 100px;background-color: white;}
	#onsaledetail{font-family: PingFangSC-Regular;
	      background-color: #f2f2f2;font-size: 14px;}
	.ban1{width:100%;/*height:162px;*//*margin: auto;*/}
	.ban1 img{width: 100%;/*height: 100%;margin:auto;*/}	

	.product-name{font-size: 16px;background-color: #fff;color: black;
		letter-spacing:1px;padding: 10px 10px 0 10px;line-height: 26px;height: 50px;/*font-weight: 600;*/}
	.product-price{background-color: white;}	
	.price-new{font-size: 18px;color: #bd2630;padding: 10px;}
	.price-old{font-size: 12px;color: #666;text-decoration:line-through; }

	.guige{padding: 0;background-color: white;list-style: none;margin-top: 5px;}
	.guige li{padding: 0 0.2rem;height: 1rem;line-height: 1rem;
			border-bottom:1px solid #cecdc9;}
	.font-style{font-size: 14px;color: #6e6e6e;}
	.icon-style{font-size: 22px;color: #6e6e6e;opacity: .8;padding-right: 10px;}
	.can-use{width: 1.35rem;height: 0.45rem;color:#c3c3c3;font-size: 12px;
		text-align: center;letter-spacing: 2px;}
	.coupon{color: #ff8a05;}
	.payCount{padding: 0 0.2rem;height:1rem;line-height: 1rem;margin-top: 0.3rem;background-color: #f6f7f1;color: #ff8a05;border:1px solid #cecdc9}
	.bigfont{font-size: 0.32rem;-font-weight: bold;}
	.show-guige{display: none;}
	.box-bg {width: 100%;opacity: .5;height: 100%;position: fixed;
	    background-color: #666;top: 0;left: 0;z-index: 100;}
	.show-guige .choose-guige-main{ position: fixed;left: 0;bottom: 0;z-index: 101;
		width: 100%;/*height: 10.5rem;*/background-color: white;-webkit-transform: translateY(10rem);
	    transform: translateY(10rem);
	    -webkit-transition: -webkit-transform .2s cubic-bezier(0,0,.25,1);}
	.show {
	    -webkit-transform: translateY(0) !important;
	}
	.guige-top{width: 100%;height: 3rem;background-color: #fff;}
	.guige-top-tupian{width: 40%;height: 100%;float: left;}
	.guige-top-tupian img{width: 90%;height: 100%;margin-top: -20px;margin-left: 10%;border:3px solid #ededed;}
	.guige-top-xq{float: left;width: 60%;height: 100%;}
	.box-close {width: 100%;height: 20px;}
	.box-close img{width: 20px;height: 20px;float: right;margin-top: 10px;margin-right: 10px;border:1px solid black;border-radius: 50%;}
	.guige-price{font-size: 22px;color: red;padding: 10px 15px}
	.guige-kucun{font-size: 16px;color: #454545;padding-left: 15px;}
	.guige-danwei{font-size: 16px;color: #454546;padding: 10px 2px 10px 15px;}

	.guige-yanse{width: 100%;padding: 20px 20px 0 20px;}
	.guige-name{font-size: 18px;}
	.guige-yanse-main{width: 100%;overflow: hidden;}
	.guige-yanse-main ul{width: 100%;}
	.guige-yanse-li{width: 20%;height: 0.6rem;float: left;border:1px solid #ccc;text-align: center;line-height: 0.6rem;border-radius: 20px;margin-top:0.2rem;margin-right: 10%;}
	
	.noneActive {background-color: #ccc;opacity: 0.5;
        color: #000;pointer-events: none;}
	.productActive {background-color:#dd0000;color: #fff; }
	
	.guige-shuliang{width: 100%;padding: 20px 20px 0 20px;font-size: 18px;margin-bottom: 20px;}
	.shuliang-div{float: left;}
	.sl{float: right; padding-right: 50px;}
	.sl-jian{display: inline-block;background: #eee;width: 40px;height: 28px;text-align: center; font-size: 20px;}
	.sl-zhi{width: 40px;height: 28px;line-height: 24px;text-align: center;border:none;}
	.sl-jia{display: inline-block;background: #eee;font-size: 20px;width: 40px;height: 28px;text-align: center;}


	.inner2{width: 100%;height:40px;}
	.inner2-con{width: 262px;height: 100%;margin: 0 auto;}
	.inner21{width: 60px;height: 2px;background-color: #9c9c9c;left: 0px;top: 19px;}
	.inner22{width: 6px;height: 6px;background-color:#9c9c9c;left: 60px;top:17px; border-radius: 50%; }
	.inner231{width: 130px;height: 40px;line-height: 40px;color: #0e0e0e;font-size: 15px;left: 66px;letter-spacing: 1px;font-weight: bold;}
	.inner232{width: 130px;height: 40px;line-height: 40px;color: #0e0e0e;font-size: 15px;left: 66px;letter-spacing: 1px;font-weight: bold;}
	.inner233{width: 130px;height: 40px;line-height: 40px;color: #0e0e0e;font-size: 15px;left: 52px;letter-spacing: 1px;font-weight: bold;}
	.inner231 .icon-xq{width: 20px;height: 20px;top: 5px;left: 20px}
	.inner232 .icon-xq{width: 20px;height: 20px;top: 5px;left: 15px}
	.icon-xq img{width: 100%;height: 100%;margin: auto;}
	.txt-xq{width: 60px;height: 40px;left: 60px;}
	.text-xq{width: 70px;height: 40px;left: 48px;}
	.txt-daodi{width: 80px;height: 40px;left: 40px;color: #999}
	.inner24{width: 6px;height: 6px;background-color:#9c9c9c;right: 60px;top:17px;border-radius: 50%;}
	.inner25{width: 60px;height: 2px;background-color: #9c9c9c;right: 0px;top: 19px;}


	.xq-img{width: 100%;background: #fff;}
	.xq-img >>> img{max-width: 100%;}
	.xq-div{width: 96%;/*display: block;position: relative;*/margin: 2px auto 2px;
 		border: 1px solid #f4eff8;padding: }
 	.xq-div img{width: 100%;}	
/*	.xq-div {width: 100%;height: 100%;margin: auto;}
*/	.product-ul{width: 98%;margin: 0 auto;height: 430px;overflow: hidden;}
	.product-li{width: 47%;height:210px;float: left;background-color: #fff;border:1px solid #dedede;margin-left: 1.35%;margin-right: 1%;margin-bottom: 5px; border-radius: 10px;overflow: hidden;}
	.product{width: 100%;height: 150px;background-color: #fff;border-bottom: 1px solid #dedede;}
	.product img{width:100%;height: 150px;/*padding: 2px 1%;*/margin: auto; }
	.product-name-tuijian{font-size: 12px;padding: 5px 5px 0;color: black;line-height: 14px;height:28px;font-weight: 600;overflow: hidden;}
	.product-price-tuijian{margin-top: 5px;float: left;padding-left: 5px;}
	.price-now{font-size: 12px;color:#ff8a00; }
	.price-danwei{font-size: 12px;color:#999; }
	.price-sale{margin-top: 6px;font-size: 12px;color:#ccc;;float: right;margin-right: 12px;}

	.bottom-nav{width: 100%;height: 1rem;position: fixed;left: 0;bottom: 0;background-color: pink;}
	.bottom-nav>div{float: left;}
	.bottom-left{width:20%;height: 100%;background-color: #fff; text-align: center;color: #707070;font-size: 14px;letter-spacing: 2px;position: relative;}
	.gouwuche-icon{width: 40%;height: 40%;margin: 10% auto 0%;}
	.bottom-left img{width: 80%;height: 80%;margin: auto;}
	.gouwuche-sl{height:18px;width: 18px; position: absolute;right: 15%;top: 0;border:1px solid red;border-radius: 50%;color: white;font-size: 12px;background: red;letter-spacing: 0.1px;}
	.cart-text{color: #707070;}
	.bottom-zhong{width: 40%;height: 100%;background-color:#fbae00;text-align: center;
		line-height: 50px;color: #fff;font-size: 20px;}
	.bottom-right{width: 40%;height: 100%;background-color: #dd0000;color: #fff;font-size: 20px;line-height: 50px;text-align: center;}

	.loading{width: 100%;height: 400px;margin-top: 80px;}
	.loading img{width: 100%;height: 100%;margin:auto;}
</style>
<template>
	<div id="onsaledetail" v-cloak>
		<div v-if="loading">
			<!-- <h1 style="padding: 20px;background: white;">页面加载中...</h1> -->
			<!-- <div class="loading">
				<img src="../../assets/common/loading.gif" alt="">
			</div> -->
		</div>
		<div v-else>
	<!-- 顶部banner图 -->
			<swiper :options="swiperOption" ref="mySwiper">
		      <swiper-slide v-for="(banner,index) in imgList">
		        <div class="ban1">
		            <img :src="banner" alt="tt">               
		        </div> 
		      </swiper-slide>
		      <div class="swiper-pagination" slot="pagination"></div>    
		    </swiper>
		    <p class="product-name">{{rule.shortName}}</p>
		    <p class="product-price">
		    	<span class="price-new">￥{{rule.displayPrice}}</span>
		    	<span class="price-old">原价￥{{rule.displayPrice}}</span>
		    </p>
	<!-- 规格 -->
	    	<ul class="guige" v-cloak>
				<!-- <li class="ov">
					<div class="fl font-style">参数 <span class="can-use">&nbsp;<strong></strong>&nbsp;选择参数&nbsp;</span></div>
					<div class="fr icon-style"> &gt;</div> 
				</li> -->
				<li class="ov choose-guige" @click="chooseGuige()">
					<div class="fl font-style">规格 <span class="can-use">&nbsp;<strong></strong>&nbsp;选择规格&nbsp;</span></div>
					<div class="fr icon-style"> &gt;</div> 
				</li>
			</ul>
	<!-- 选择规格弹窗 -->
			<div class="show-guige">
				<div class="box-bg"></div>
				<div class="choose-guige-main">
					<div class="guige-top">
						<div class="guige-top-tupian">
							<img v-bind:src="choose.mainPicture" alt="">
						</div>
						<div class="guige-top-xq">
							<div class="box-close">
								<img src="../../static/image/index/guige-top-close.png" alt="">
							</div>
							<p class="guige-price">￥{{choose.displayPrice}}</p>
							<p class="guige-kucun">库存<strong>{{choose.canSaleNum}}</strong>件</p>
							<p class="guige-danwei" v-if="choose.ISdifference">已选择：{{choose.specList}}</p>
							<p class="guige-danwei" v-else>请选择：<strong>{{choose.specList}}</strong></p>
						</div>
					</div>
					<div>
						
					</div>
					<div class="guige-yanse" v-for="(ProductItem,n) in guigeList">
						<p class="guige-name">{{ProductItem.name}}：</p>
						<div class="guige-yanse-main">
							<ul>
								<li class="guige-yanse-li" v-for="(oItem,index) in ProductItem.values" v-on:click="specificationBtn(oItem,n,$event,index)"  v-bind:class="[ProductItem.isShow?'':'noneActive',ProductItem.iscanmai?'':'noneActive', subIndex[n] == index?'productActive':'']">
									<div class="yanse-li">
										{{oItem}}
									</div>
								</li>
							</ul>
						</div>
					</div>
					


					<div class="guige-shuliang">
						<div class="shuliang-div">数量：</div>
						<div class="sl">
							<span @click="decrace()" class="sl-jian">-</span>
							<input type="number" class="sl-zhi"  v-model="numqq" value="1" v-on:input="inputNum">
							<span @click="add()" class="sl-jia">+</span>
						</div>
					</div>
					<div style="width:100%;height:1.5rem;background:#fff;"></div>
					<div class="bottom-nav">
						<div class="bottom-left">
							<router-link to="cart">
								<div class="gouwuche-icon">
									<img src="../../static/image/index/shopp-cart.png" alt="">
								</div>
								<div class="gouwuche-sl">
									{{cartNum}}
								</div>
								<span class="cart-text">购物车</span>
							</router-link>
						</div>
						<div class="bottom-zhong" @click="addCart()">
							<span>加入购物车</span>
						</div>
						<div class="bottom-right" @click="topay">
							<span>立即购买</span>
						</div>
					</div>
					
				</div>
			</div>
	<!-- 详情 -->
			<div class="inner2" v-show="xiangqing">
		      <div class="inner2-con por">
		        <div class="inner21 fl poa"></div>
		        <div class="inner22 fl poa"></div>
		        <div class="inner231 fl poa">
		          <span class="icon-xq fl poa">
		          	<img src="../../static/image/index/icon-xiangqing.png" alt="">
		          </span>
		          <span class="txt-xq fl poa">详情</span>
		        </div>
		        <div class="inner24 fl poa"></div>
		        <div class="inner25 fl poa"></div>
		      </div>
		    </div>
		    <div class="xq-img">
		    	<div class="xq-div" v-html="xiangqingimg"></div>
		    </div>
	<!-- 推荐 -->
		    <div class="inner2">
		      <div class="inner2-con por">
		        <div class="inner21 fl poa"></div>
		        <div class="inner22 fl poa"></div>
		        <div class="inner232 fl poa">
		          <span class="icon-xq fl poa">
		          	<img src="../../static/image/index/icon-nb.png" alt="">
		          </span>
		          <span class="text-xq fl poa">推荐产品</span>
		        </div>
		        <div class="inner24 fl poa"></div>
		        <div class="inner25 fl poa"></div>
		      </div>
		    </div>
		    <ul class="product-ul">
				<li class="product-li" v-for="item in shopshow" >
					<!-- <a href="https://www.e-shequ.com/guangming/weixin/group/onsaledetail.html?ruleId=1234&type=30"> -->
					<router-link :to="{path:'/onsaledetail',query:{ruleId:item.id}}" @click.native="go()">
					<div class="product">
						<img :src="item.mainPicture" alt="">
					</div>
					<p class="product-name-tuijian">{{item.shortName}}</p>
					<p class="product-price-tuijian">
						<strong class="price-now">￥{{item.miniPrice}}</strong>
						<span class="price-danwei">/个</span> 	
					</p>
					<span class="price-sale">已售{{item.totalSale}}</span>
					</router-link>
					<!-- </a> -->
				</li>
			</ul>
			<div class="inner2">
		      <div class="inner2-con por">
		        <div class="inner21 fl poa"></div>
		        <div class="inner22 fl poa"></div>
		        <div class="inner233 fl poa">
		          <span class="txt-daodi fl poa">已经到底了</span>
		        </div>
		        <div class="inner24 fl poa"></div>
		        <div class="inner25 fl poa"></div>
		      </div>
		    </div>
			<div style="width:100%;height:1rem;background:white;"></div>

	<!-- 底部导航 -->
			<div class="bottom-nav">
				<div class="bottom-left">
					<router-link to="cart">
						<div class="gouwuche-icon">
							<img src="../../static/image/index/shopp-cart.png" alt="">
						</div>
						<div class="gouwuche-sl">
							{{cartNum}}
						</div>
						<span class="cart-text">购物车</span>
					</router-link>
				</div>
				<div class="bottom-zhong"  @click="chooseGuige()">
					<span>加入购物车</span>
				</div>
				<div class="bottom-right" @click="chooseGuige()">
					<span>立即购买</span>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
	let vm;
	import wx from 'weixin-js-sdk';
	import { Toast } from 'mint-ui';
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	import '../../static/css/swiper.min.css'
	export default {
		name:'onsaledetail',
		data(){
			return {
				swiperOption:{
			        notNextTick:true,
			        autoplay:true,
			        autoplay:{
			          disableOnInteraction:false,
			          delay:3000
			        },
			        speed:1000,
			        pagination: {
			          el: '.swiper-pagination',
			          clickable:true,
			        },
			        loop: true,			        
			    },
			    tianjiaak:{},
			    zhifuak:{},
			    numqq:1,
			    loading:true,
			    imgList:"",
			    xiangqing:true,
			    xiangqingimg:"",
			    kucun:"",
			    cart:"",
		        ruleId:"",
		        finished:false,
		        rule:"",
		        guige:"",
		        choose:{},
		        number:1,//默认购买数量为1
		        guigeList:"",
		        productData:"",
		        shopshow:"",
		        cartNum:0,
		        routeParams:{
					ruleId : this.$route.query.ruleId,
				},
		        selectArr: [], //存放被选中的值
		        shopItemInfo: {}, //存放要和选中的值进行匹配的数据		        
		        subIndex: [], //是否选中 因为不确定是多规格还是但规格，所以这里定义数组来判断

			}
		},
		beforeCreate(){//刷新页面
			
		},
		created(){
			vm = this;	
			if(vm.routeParams.ruleId != ""){

				this.query();

			};
			this.toCart();		
			this.shoptuijian();
			
		},
		watch:{
			
		},
		mounted(){
		},
		computed:{
		    swiper(){
		      return this.$refs.mySwiper.SWIPER
		    },
		},
		methods:{
			inputNum(){
	        	// if($('.sl-zhi').val()>vm.choose.canSaleNum){
	        	// 	alert('库存不足，请重选数量');
	        	// 	$('.sl-zhi').val() == vm.choose.canSaleNum;
	        	// }
	        	if(vm.numqq>vm.choose.canSaleNum){
	        		Toast({
					  message: '亲，选购数量超过库存',
					  position: 'middle',
					  duration: 1000
					});
					vm.numqq = vm.choose.canSaleNum;
	        	}
	        	
	        	
	        },
			//请求购物车商品数量
			toCart(){
				
				let url = "/shopping/toCart";
				vm.receiveData.getData(vm,url,"Data",function(){
					vm.cart = vm.Data.result;
					vm.cartNum =0;
					for (var i = 0; i < vm.cart.length; i++) {
						for (var j = 0; j < vm.cart[i].items.length; j++) {
							//console.log(vm.cart[i].items.length);
							vm.cartNum+=1;

						}
					}
				})
			},

			//底部推荐商品
			shoptuijian(){
				
				let url = 'getHotSaleItems/1/0';
		        vm.receiveData.getData(vm,url,'Data',function(){
		            vm.shopshow = vm.Data.result;
		        });
			},
			//获取
			query(){
				let url2 = "getProductByItem/" + vm.routeParams.ruleId;
				vm.receiveData.getData(vm,url2,'data2',function(){
					vm.rule = vm.data2.result.productItem; //商品信息接口
					vm.guige = vm.data2.result.productList;//规格接口信息

					vm.choose = {};
					vm.data2.result.choose = vm.choose;
					vm.choose.mainPicture = vm.data2.result.productItem.mainPicture;
					vm.choose.displayPrice = vm.data2.result.productItem.displayPrice
					vm.choose.canSaleNum = vm.data2.result.totalStock;
					vm.choose.specList = vm.data2.result.productItem.specList;
					
					vm.guigeList = vm.data2.result.specs;//规格排列
					vm.xiangqingimg = vm.data2.result.productList[0].serviceDesc;//详情图片

					vm.imgList = []; //轮播图
					for (var i = 0; i < vm.guige.length; i++) {
						vm.imgList.push(vm.guige[i].pictureList[0]);
					};
					for(var i in vm.guige){
						// if(i<vm.guige.length){
						// 	//console.log(i)
						// 	vm.shopItemInfo[vm.guige[i].specVals]=vm.guige[i];
						// 	//console.log(vm.guige[i].specVals)
						// }else{
						// 	vm.shopItemInfo[i]=vm.guige[i]
						// }
						vm.shopItemInfo[vm.guige[i].specVals]=vm.guige[i];
						//
					}


					vm.loading = false;
					vm.checkItem();

				});
			},
			checkItem: function () {
				//console.log(vm.shopItemInfo)


				let vm = this;
	            var option = vm.guigeList;
	            var result = [];  //定义数组存储被选中的值
	            for (var i in option) {
	                result[i] = vm.selectArr[i] ? vm.selectArr[i] : '';
	            }
	            for (var i in option) {
	                var last = result[i];  //把选中的值存放到字符串last去
	                for (var k in option[i].values) {
	                    result[i] = option[i].values[k]; //赋值存在直接覆盖，不存在往里面添加name值
	                    option[i].isShow = vm.isMay(result); 
	                    option[i].iscanmai = vm.isData(result);

	                    //在数据里面添加字段isShow来判断是否可以选择
	                }
	                result[i] = last; //还原，目的是记录点下去那个值，避免下一次执行循环时避免被覆盖
	            }
	            vm.$forceUpdate(); //重绘
	        },
	        isData:function(result){
	        	// for (var i in result) {
	        	// 	if (result[i] == '') {
	         //            return true; 
	         //        }
	        	// }
	        	// var nowDate = new Date().getTime();
	         //    return vm.shopItemInfo[result].endDate >= nowDate ? true :  false;
	            return true;
	        },
	        isMay: function (result) {
	            // for (var i in result) { 
	            //     if (result[i] == '') {
	            //         return true; 
	            //     }
	            // }
	            // return  vm.shopItemInfo[result].canSaleNum == 0 ? false : true;
	            return true;
	        },

			//添加商品到购物车
			addCart(){
				if(vm.guigeList!=""){
					if(vm.choose.specList == vm.rule.specList){
						Toast({
						  message: '亲，请选择商品属性',
						  position: 'middle',
						  duration: 2000
						});
						return;
					}
					vm.tianjiaak = {
						amount:vm.numqq,
						ruleId:vm.choose.guizeId,
						skuId:vm.choose.id,
					};
				}else{
					vm.tianjiaak = {
						amount:vm.numqq,
						ruleId:vm.guige[0].ruleId,
						skuId:vm.guige[0].id,
					};
				}
				
				
				
				let urladdCart = "/shopping/buyerCart";
				vm.receiveData.getData(vm,urladdCart,"addCartData",function(){
					if(vm.addCartData.success == true){
						vm.toCart();
						Toast({
						  message: '添加成功，在购物车等亲',
						  iconClass: 'icon icon-success',
						  position: 'middle',
						  duration: 1000
						});
					} else {
						Toast({
						  message: vm.addCartData.message,
						  iconClass: 'icon icon-success',
						  position: 'middle',
						  duration: 1000
						});
						return;
					}
					
				},vm.tianjiaak)
				
			},
			topay(){
				if(vm.guigeList!=""){
					if(vm.choose.specList == vm.rule.specList){
						Toast({
						  message: '亲，请选择商品属性',
						  position: 'middle',
						  duration: 2000
						});
						return;
					};
					vm.zhifuak = {
						amount:vm.numqq,
						ruleId:vm.choose.guizeId,
						skuId:vm.choose.id,
					};
				}else{
					vm.zhifuak = {
						amount:vm.numqq,
						ruleId:vm.guige[0].ruleId,
						skuId:vm.guige[0].id,
					};
				}
				
				
				
				let urladdCart = "/shopping/buyerCart";
				vm.receiveData.getData(vm,urladdCart,"addCartData",function(){
					if(vm.addCartData.success == true){
						//生产跳转地址
						// let header = 'https://www.e-shequ.com/pay/';
						// let url = header+'topay.html?#/?ruleIds='+vm.choose.guizeId+'&skuIds='+vm.choose.id;
						// location.href = url;

						//测试跳转路由
						vm.$router.push({
							path:'/zhifu',
							query:{
								ruleIds :vm.choose.guizeId,
								skuIds :vm.choose.id
							}
						});
					}else{
						alert(vm.addCartData.message);
						return
					}
					
				},zhfuak)
			},
			go:function(){
				this.$router.go(0);
			},
			decrace:function(){
				// var count = parseInt($('.sl-zhi').val());
				// if(count>1){
				// 	$('.sl-zhi').val(function(){
				// 		return --count;
				// 	})
				// }
				if(vm.numqq>1){
					return --vm.numqq;
				}else{
					return 1;
				}
				
			},
			add:function(){
				// var count = parseInt($('.sl-zhi').val());
				// $('.sl-zhi').val(function(){				
				// 	return ++count;				
				// })
				if(vm.numqq<vm.choose.canSaleNum){
					return ++vm.numqq;
				}else{
					return vm.choose.canSaleNum;
				}
			},
			//打开选择规格弹窗
			chooseGuige(){
				//vm.checkItem();
				$('.show-guige').show();
				setTimeout(function(){
					$('.choose-guige-main').addClass('show');
				},0)
				$('.box-close').click(function(){
					vm.closeGuige();
				})
			},

			//关闭规格弹窗
			closeGuige(){
				$('.choose-guige-show').removeClass('show');
				setTimeout(function(){
					$('.show-guige').hide();
				})
			},

			//选择规格参数
			specificationBtn: function (item, n, event, index) {
	            var vm = this;
	            if (vm.selectArr[n] != item) {
	                vm.selectArr[n] = item;
	                vm.subIndex[n] = index;
	                var shop_name = vm.selectArr.join(",");
	                
	                var arr = shop_name.split(",");
	                if(arr.length==2){
	                	shop_name = arr[1]+"," +arr[0];
	                }
	                
	                console.log(shop_name);
	                console.log(vm.shopItemInfo[shop_name])
                    if (vm.shopItemInfo[shop_name]) {
                        vm.choose = {
                        	id: vm.shopItemInfo[shop_name].id,
                        	displayPrice: vm.shopItemInfo[shop_name].rulePrice,
                            mainPicture: vm.shopItemInfo[shop_name].mainPicture,
                            canSaleNum: vm.shopItemInfo[shop_name].canSaleNum,
                            guizeId: vm.shopItemInfo[shop_name].ruleId,
                            specList: shop_name,
                            ISdifference: true,
                        };
                    }
	            } else {
	            	//alert(124)
	                vm.selectArr[n] = "";
	                vm.subIndex[n] = -1; //去掉选中的颜色 
	                vm.choose.ISdifference = false;
	                vm.choose.specList = vm.rule.specList;
	            }
	            console.log(vm.guige);
	            vm.checkItem();
	        },
	        
	        	
		},
		updataed(){
			$('.xq-div').addClass("xq-div");
		}
	}
</script>