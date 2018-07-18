<style scoped>
html{font-size: 16px;}
.fl{float: left;}
.fr{float: right;}
.por{position: relative;}
.poa{position: absolute;}
.item{font-family: PingFangSC-Regular;}	
.clear{clear:both;}  
.daodi{width: 100%;height: 80px;background: #ccc;text-align: center;line-height: 30px;}
.product-ul{width: 98%;margin: 0 auto;width: 100%;height: 100%;background: #fff;}
.product-li{width: 50%;height:220px;float: left;background-color: #fff; }
.product{width: 100%;height: 150px;background-color: #fff;}
.product img{width:98%;height: 146px;padding: 2px 1%;margin: auto; }
.product-name{font-size: 14px;padding-left: 5px;color: black;height: 20px;overflow: hidden;}
.product-price{margin-top: 20px;float: left;}
.price-now{font-size: 18px;color:#ff8a00; }
.price-old{font-size: 10px;color:#999;text-decoration: line-through; }
.price-sale{margin-top: 18px;font-size: 14px;color: white;background:#ff8a00;
	border-radius: 5px;float: right;margin-right: 20px;
	padding: 3px 5px;}	
.ui-empty {width: 100%;text-align: center;padding-top: 50px}
.ui-empty-icon {width: 120px;height:120px;background:cyan;border-radius: 50%;margin: 0 auto;
	}
.ui-empty-icon img{width: 100%;height: 100%;margin: auto;}	
.ui-empty-text {margin: 15px 0 10px}
.qusou{width: 100%;height: 30px; position: relative;padding-bottom: 10px;}
.qusou span{width: 100px;text-align: center; height: 30px;line-height: 30px; background: #bd2630;color: white; left:50%;margin-left: -50px; position: absolute;letter-spacing: 2px;}

.inner2{width: 100%;height:30px;background: #e0e0e038;}
.hot{margin-top: 10px;}
.inner2-con{width: 202px;height: 100%;margin: 0 auto;}
.inner21{width: 45px;height: 2px;background-color: #9c9c9c;left: 0px;top: 14px;}
.inner22{width: 6px;height: 6px;background-color:#9c9c9c;left: 45px;top:12px; border-radius: 50%; }
.inner23{width: 100px;height: 30px;line-height: 30px;color: #0e0e0e;font-size: 15px;left: 51px;letter-spacing: 1px;font-weight: bold;text-align: center;}
.inner24{width: 6px;height: 6px;background-color:#9c9c9c;right: 45px;top:12px;border-radius: 50%;}
.inner25{width: 45px;height: 2px;background-color: #9c9c9c;right: 0px;top: 14px;}
.inner5{width: 96%;height: 378px;background-color: #fff;margin: 0 auto 10px;overflow: hidden;}
.hot-ul{width: 100%;}
.hot-li{width: 31%;height: 180px;background-color: #fff;float: left;margin: 5px 0.84% 0px;text-align: left;border:1px solid #ededed;border-radius: 5px;}
.hot-img{height: 120px;width: 100%;border-bottom: 1px solid #ededed;}
.hot-img img{width: 100%;height: 120px;margin: auto;}
.hotli-name{font-size: 12px; color: #0e0e0e;padding: 5px 5px 0px;height: 28px;line-height: 14px;display: -webkit-box;-webkit-box-orient: vertical;
    -webkit-line-clamp:2;overflow: hidden;}
.hotli-price{font-size: 12px;color: #666;padding-left: 2px;margin-top: 4px;}
.price-color{font-size: 12px;color: #bd2630;font-weight: 600;}
.hotli-danwei{display:inline-block;font-size: 10px;transform: scale(0.8);}
.hotli-num{float: right;display:inline-block;font-size: 10px;transform: scale(0.8);color: #666;padding-right: 2px;padding-top: 2px;}
.height{height:80px;width:100%;background:white;}
</style>
<template class="back">
	<div class="item">
		<mt-loadmore
		:bottomMethod="loadBottom"
		:bottomAllLoaded="allLoaded"
		:auto-fill="false">
		<ul class="product-ul">	
			<li class="product-li" v-for="item in search" >
				<!-- <router-link to="onsaledetail"> -->
				<router-link :to="{path:'/onsaledetail',query:{ruleId:item.id}}">	
				<div class="product">
					<img :src="item.mainPicture" alt="">
				</div>
				<p class="product-name">{{item.name}}</p>
				<p class="product-price">
					<strong class="price-now">￥&nbsp;{{item.miniPrice}}</strong>
					<span class="price-old">￥{{item.displayPrice
}}</span> 	
				</p>
				<span class="price-sale">已售&nbsp;{{item.totalSale}}</span>
				</router-link>
			</li>
			<li class="clear"></li>			
		</ul>
		</mt-loadmore>
		<!-- <div class="daodi" v-show="daodi">到底了</div> -->
		<div v-show="ifshow">
			<div class="ui-empty">
				<div class="ui-empty-icon">
					<img src="../../assets/common/notcart.png" alt="">
				</div>
	            <p class="ui-empty-text">抱歉，暂无相关商品～</p>
	            <router-link to="/">
					<h2 class="qusou">
						<span>去逛逛</span>
					</h2>
				</router-link> 
			</div>
			
			<div class="inner2 hot" >
		      <div class="inner2-con por">
		        <div class="inner21 fl poa"></div>
		        <div class="inner22 fl poa"></div>
		        <div class="inner23 fl poa">
		          推荐产品
		        </div>
		        <div class="inner24 fl poa"></div>
		        <div class="inner25 fl poa"></div>
		      </div>
		    </div>
		    <div class="inner5">
				<ul class="hot-ul">
					<li class="hot-li" v-for="hotli in hotSale">
						<router-link :to="{path:'/onsaledetail',query:{ruleId:hotli.id}}">
							<div class="hot-img">
								<img :src="hotli.mainPicture" alt="" class="">
							</div>
							<p class="hotli-name">{{hotli.shortName}}</p>
							<p class="hotli-price">
								<span class="price-color">￥{{hotli.miniPrice}}
								</span>
								<span class="hotli-danwei">/个</span>
								<span class="hotli-num">已售&nbsp;{{hotli.totalSale}}</span>
							</p>
						</router-link>
					</li>
				</ul>
			</div>			
		</div>
		<div class="height"></div>
		<navwx></navwx>	
	</div>

</template>
<script>
	let vm;
	import {Indicator, Loadmore} from 'mint-ui';
	import navwx from '../../components/navwx.vue';
	export default {
		name:'search',
		components:{
			navwx
		},
		data(){
			return {
				params:{
					sousuo:this.$route.params.sousuo,
				},
				daodi:false,
				ifshow:false,
				scrollH:false,
				search:[],
				hotSale:"",
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
			this.searchList();
			this.shopshow();
		},
		methods:{
			//获取搜索商品信息
			searchList(){
				let url = "productCotroller/search?name="+this.params.sousuo+"&pageNow="+vm.pageNow;
				vm.receiveData.getData(vm,url,'Data',function(){
					vm.search = vm.Data;
					if(vm.Data.length==0){
						vm.ifshow=true;
					}else{
						vm.daodi=true;
					}
				});
			},
			//上滑加载
			loadBottom(){
				vm.pageNow += 20;
				let url = "productCotroller/search?name="+this.params.sousuo+"&pageNow="+vm.pageNow;
				let tempArr = null;
				vm.receiveData.getData(vm,url,'res',function () {
					tempArr = vm.res;
					if(tempArr && tempArr.length>0){
						vm.search = vm.search.concat(tempArr);
						this.$refs.loadmore.onBottomLoaded();
					} else{
						vm.allLoaded = true;
						this.$refs.loadmore.onBottomLoaded();
					}
				})

			},
			
			//获取底部商品信息
			shopshow(){
				let url = 'getHotSaleItems/1/0';
		        vm.receiveData.getData(vm,url,'Data',function(){
		            vm.hotSale = vm.Data.result;
		        });
			},
		}
	}
</script>