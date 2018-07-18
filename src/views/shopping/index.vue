<style scoped>
[v-cloak]{display: none;}
html{font-size: 16px;}
.fl{float: left;}
.fr{float: right;}
.por{position: relative;}
.poa{position: absolute;}
.ban1{width:100%;/*height:162px;*//*margin: auto;*/}
.ban1 img{width: 100%;/*height: 100%;margin:auto;*/}
.search{position: fixed;width: 86%;z-index: 1001;margin-top: 10px;left: 7%;height: 35px;background:rgba(60,60,60,0.52);border-radius: 5px;}
.icon-div{width: 8%;height: 35px;position: absolute;left: 2%;top: 7px;}
.icon-search{width: 80%;height: 60%;margin: auto; }
.search-input{display: inline-block;height: 35px;width:89%;position: absolute;left:11%;  border: none;text-align: center;letter-spacing: 2px;background:rgba(160,160,160,0.32);font-size: 16px;margin-left: -10px;outline:none;}
input::-webkit-input-placeholder{color:#dcdcdc;}
.index{font-family: PingFangSC-Regular;/*font-size: 0.8rem;*/text-align: center;}


/*.serach-input{ float: left;display: inline-block;width: 300px;height: 30px;}*/

.inner2{width: 100%;height:30px;}
.hot{margin-top: 10px;}
.inner2-con{width: 202px;height: 100%;margin: 0 auto;}
.inner21{width: 45px;height: 2px;background-color: #9c9c9c;left: 0px;top: 14px;}
.inner22{width: 6px;height: 6px;background-color:#9c9c9c;left: 45px;top:12px; border-radius: 50%; }
.inner23{width: 100px;height: 30px;line-height: 30px;color: #0e0e0e;font-size: 15px;left: 51px;letter-spacing: 1px;font-weight: bold;}
.inner24{width: 6px;height: 6px;background-color:#9c9c9c;right: 45px;top:12px;border-radius: 50%;}
.inner25{width: 45px;height: 2px;background-color: #9c9c9c;right: 0px;top: 14px;}

.inner3{width: 96%;height: 231px;margin: 0 auto;}
.inner3-left{width: 45%;height: 231px;/*background:url(../../assets/images/img2.png) 100% 100%;*/position: relative;}
.lingshou-bg{width:100%;height: 231px;}
.lingshou-bg img{width: 100%;height: 100%;margin:auto;}
.lingshou{background-color: #fff;width: 85px;height: 25px;border-radius: 8px; bottom: 10px;right: 10px;position: absolute;opacity: 0.63;/*line-height: 25px;letter-spacing: 1.14px;text-align: center;color: #000;*/}
h2{line-height: 25px;letter-spacing: 1.14px;color: #000;opacity: 1;}
.inner3-right{width: 54%;height:231px;}
.inner3-right-top{width: 100%;height: 113px;position: relative;}
.inner3-right-top img{width: 100%;height: 100%;margin: auto;}
.inner3-right-bottom{width: 100%;height: 113px;margin-top: 5px;position: relative;}
.inner3-right-bottom img{width: 100%;height: 100%;margin: auto;}

.inner4{width: 100%;height: 108px;margin-top: 5px;}
.inner4 img{width: 100%;height: 100%;margin: auto;}

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

.height{height:40px;width:100%;background:white;}


</style>
<template>
	<div class="index" v-cloak>
		<div class="search">
			<div class="icon-div">
				<img class="icon-search" src="../../static/image/index/search.png"></img>
			</div>						
			
			<input type="text" class="search-input"  v-model="sousuo" @change="search()" placeholder="搜索商品">
		</div>
		<swiper :options="swiperOption" ref="mySwiper">
	      <swiper-slide v-for="banner in banners">
	        <div class="ban1">
	            <img :src="banner.picture" alt="">               
	        </div> 
	      </swiper-slide>
	      <div class="swiper-pagination" slot="pagination"></div>    
	    </swiper>
		<div class="inner2">
	      <div class="inner2-con por">
	        <div class="inner21 fl poa"></div>
	        <div class="inner22 fl poa"></div>
	        <div class="inner23 fl poa">
	          分类专区
	        </div>
	        <div class="inner24 fl poa"></div>
	        <div class="inner25 fl poa"></div>
	      </div>
	    </div>

	    <div class="inner3">
	      <div class="inner3-left fl">
	      	<router-link :to="{path:'/classify',query:{id:2}}">
	          <div class="lingshou-bg">
	            <img :src="lszq" alt="">
	          </div>
	          <div class="lingshou">
	            <h2>零售专区</h2>
	          </div>
	        </router-link>
	      </div>
	      <div class="inner3-right fr">
	        <div class="inner3-right-top">
	          <router-link :to="{path:'/classify',query:{id:3}}">
	          	<img :src="bgjj"  alt="">
	            <div class="lingshou">
	              <h2>办公家具</h2>
	            </div>
	          </router-link>        
	        </div>
	        <div class="inner3-right-bottom">
	          <router-link :to="{path:'/classify',query:{id:4}}">
	            <img :src="bgyp" alt="">
	            <div class="lingshou">
	              <h2>办公用品</h2>
	            </div>
	          </router-link> 
	        </div>
	      </div>
	    </div>

	    <div class="inner4">
	    	<router-link :to="{path:'/classify',query:{id:4}}">
	            <img :src="chj" alt="">
	        </router-link>   
	    </div>

		<div class="inner2 hot" >
	      <div class="inner2-con por">
	        <div class="inner21 fl poa"></div>
	        <div class="inner22 fl poa"></div>
	        <div class="inner23 fl poa">
	          特价商品
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
	    <div class="height"></div>
		<navwx></navwx>
	</div>
</template>
<script>
	let vm
	import wx from 'weixin-js-sdk';
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	import '../../static/css/swiper.min.css'
	import navwx from '../../components/navwx.vue';
	export default {
		name:'index',
		components:{
			navwx
		},
		data(){
			return {
				swiperOption:{
			        notNextTick:true,
			        autoplay:true,
			        autoplay:{
			          disableOnInteraction:false,
			          delay:2000
			        },
			        speed:1000,
			        pagination: {
			          el: '.swiper-pagination',
			          clickable:true,
			        },
			        loop: true,			        
			    },
			    banners:"",
			    picture:"",
			    // classifys:{
			    // 	picture:"",
			    // },
			    lszq:"",
			    bgjj:"",
			    bgyp:"",
			    chj:"",
				hotSale:[],
				sousuo:"",
				scrollH:true,
				classifys:'',
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
			this.initSession4Test();
			//this.userInfo();//获取用户授权
	        this.banner();
	        this.classi();
			
	        this.shopshow();
	  		window.addEventListener('scroll', this.menu)
		},
		computed:{
		    swiper(){
		      return this.$refs.mySwiper.SWIPER
		    },

		},
		methods:{
			//模仿线上用户信息
			//105/747/384
			initSession4Test(){
				let url = '/initSession4Test/747';
					vm.receiveData.getData(vm,url,'Data',function(){
				});
			},
			//搜索框滚动监听			
			menu(){
				if(vm.scrollH){
					this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
	        		if(this.scroll>=1){
	        			$('.search').fadeOut(100);
	        		}else{
	        			$('.search').fadeIn(100);
	        		}
				}
				
			},
			//搜索页面跳转
			search(){
				if(vm.sousuo!=""){
					this.$router.push('/search/'+vm.sousuo);
				}
			},
			//获取用户信息
			userInfo(){
				let  n = "GET",
		        a = "userInfo",
		        i = null,
		        e = function(n) {
		          console.log(JSON.stringify(n));
		          console.log(n.result);
		        },
		        r = function() {     
		        };
		        this.common.invokeApi(n, a, i, null, e, r);
			},
			//获取底部商品信息
			shopshow(){
				
				let url = 'getHotSaleItems/1/0';
		        vm.receiveData.getData(vm,url,'Data',function(){
		            vm.hotSale = vm.Data.result;
		        });
			},
			//获取顶部轮播图
			banner(){
				let url = "banner/17";
				vm.receiveData.getData(vm,url,'Data',function(){
					vm.banners = vm.Data.result;
					
				})
			},
			//商品分类图片
			classi(){
				let url = "banner/20";
				vm.receiveData.getData(vm,url,'Data',function(){
					vm.classifys = vm.Data.result;
					// for (var i = 0; i < vm.classifys.length; i++) {
					// 	vm.classifys[i].picture = vm.Data.result[i].picture;
					// }
					// vm.classifys[0].picture = vm.Data.result[0].picture;
					// vm.classifys[1].picture = vm.Data.result[1].picture;
					// vm.classifys[2].picture = vm.Data.result[2].picture;
					// vm.classifys[3].picture = vm.Data.result[3].picture;
					vm.lszq = vm.Data.result[0].picture;
					vm.bgjj = vm.Data.result[1].picture;
					vm.bgyp = vm.Data.result[2].picture;
					vm.chj = vm.Data.result[3].picture;
				})
			}
		}
	}
</script>