<style scoped>
html{font-size: 16px;}
.fl{float: left;}
.fr{float: right;}
.por{position: relative;}
.poa{position: absolute;}
.item{font-family: PingFangSC-Regular;margin-bottom:50px}	

.product-uls{width: 98%;margin: 0 auto; height:100%;overflow:hidden;}
.product-li{width: 49.2%;height:4.2rem;float: left;background-color: #fff; box-sizing:border-box;border:1px solid #e0e0e0;margin-right: 0.2%;}

.product{width: 100%;height: 150px;background-color: #fff;border-bottom:1px solid #e0e0e0;}
.product img{width:98%;height: 146px;padding: 2px 1%;margin: auto; }
.product-name{font-size: 16px;padding:5px 5px 0;color: black;overflow: hidden;height: 16px;line-height: 16px;}
.product-price{margin-top: 10px;float: left;}
.price-now{font-size: 14px;color:#ff8a00; }
.price-old{font-size: 10px;color:#999;text-decoration: line-through; }
.price-sale{margin-top: 12px;font-size: 12px;color: white;background:#ff8a00;
	border-radius: 5px;float: right;margin-right: 5px;}
</style>
<template>
	<div class="item">
		<mt-loadmore
		:bottomMethod="loadBottom"
		:bottomAllLoaded="allLoaded"
		:auto-fill="false"
		ref="loadmore">
		<ul class="product-uls">
			<li class="product-li" v-for="item in hotSale " >
				<!-- <a href="https://www.e-shequ.com/guangming/weixin/group/onsaledetail.html?ruleId=1234&type=30"> -->
				<router-link :to="{path:'/onsaledetail',query:{ruleId:item.id}}">
					
				<div class="product">
					<img :src="item.mainPicture" alt="">
				</div>
				<p class="product-name">{{item.shortName}}</p>
				<p class="product-price">
					<strong class="price-now">￥{{item.miniPrice}}</strong>
					<span class="price-old">{{item.oriPrice?"￥"+item.oriPrice:item.oriPrice}} </span> 	
				</p>
				<span class="price-sale">已售{{item.totalSale}}</span>
				</router-link>
				<!-- </a> -->
			</li>
		</ul>
		</mt-loadmore>
		<navwx></navwx>	
	</div>
</template>
<script>
	let vm;
	import {Indicator, Loadmore} from 'mint-ui';
	import navwx from '../../components/navwx.vue';
	export default {
		name:'item',
		components:{
			navwx
		},
		data(){
			return {
				routerParams:{
					type:this.$route.query.id,
				},
				product:[],
				hotSale:'',
				pageNow:0,
				allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉
				bottomLoadingTextVal: '加载中...',
			}
		},
		beforeCreate(){//刷新页面
			
		},
		created(){
			vm = this;
		},
		watch:{
			
		},
		mounted(){
			var firstQuery = true;
			  this.query();
		},
		methods:{
			query:function () {
				let url = "productCotroller/getByproductCfi?productcfiid="+this.$route.query.id+"&pageNow="+vm.pageNow;
				vm.receiveData.getData(vm,url,'res',function(){
					vm.hotSale = vm.res;
				})
				
		        
			},
			    // overflow: scroll;
			//上滑加载
			loadBottom(){
				vm.pageNow += 7;
					let url = "productCotroller/getByproductCfi?productcfiid="+this.$route.query.id+"&pageNow="+vm.pageNow;
				let tempArr = null;
				vm.receiveData.getData(vm,url,'res',function () {
					tempArr = vm.res;
					if(tempArr && tempArr.length>0){
						vm.hotSale = vm.hotSale.concat(tempArr);
					}else {
						vm.allLoaded = true;
					}
				})
						vm.$refs.loadmore.onBottomLoaded();
			
			},
			
		}
	}
</script>