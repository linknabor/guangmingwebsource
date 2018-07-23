<template>
    <div class="content">
      <div class="header" id="header" >
        <!-- 搜索框 -->
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" placeholder="搜索商品" v-model="sousuo" @change="search()" >
      </div>
      <div  class="mian">
          <div class="left " id="left" ref="lefts">
                <ul>
                  <li class="firstType " v-for="(item,i) in manlist" :key="item.id" :class="{active:item.id==elm}" > 
                      <span  @click="show(item.id,i)">{{item.name}}</span> 
                  </li>

                </ul>
          </div>
          <div class="right" id="right"  ref="rights">
            <div class="hui"></div>
             <div class="head-r">
                <mt-swipe :auto="1000">
                <mt-swipe-item v-for="item in manImg">
                  <a :href="item.bannerUrl">
                   <img :src='item.picture' alt="">
                   </a>
                </mt-swipe-item>
              </mt-swipe>
             </div>
             <div class="footers">
               <ul>
                 <li v-for="v in manlink">
                  <router-link :to="{path:'/item',query:{id:0}}">
                  <div class="footers-header">
                    <!-- :onerror="defaultImg" -->
                   <img v-bind:src="v.picturepath" alt="" >
                   </div>
                   <span>
                    {{v.name}}
                   </span>
                   
                   </router-link>
                 </li>
                
               </ul>
             </div>
          </div>
      </div>
   
     </div>
</template>

<script>
   let vm;
import axios from 'axios';
import { Swipe, SwipeItem } from 'mint-ui';
export default {
   data () {
       return {
           manlist:[],//一级菜单
           manlink:[],//二级菜单
           manImg:[],//图片
           elm:0,
           sousuo:'',//搜索内容
          clientHeight:'',
          cateList:'',
          // defaultImg:'this.src="' + require('../../assets/timg.jpg') + '"'
       };
   },
   created() {
        vm =this;
       
   },
   mounted() {
      vm.elm=this.$route.query.id
      vm.navigate();
      vm.Particulars(this.$route.query.id);
      vm.listImg();
      
       // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`          //document.body.clientWidth;
      //console.log(self.clientHeight);
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };
    
   },
    watch: {
      // 如果 `clientHeight` 发生改变，这个函数就会运行
      clientHeight: function () {
        this.changeFixed(this.clientHeight)
      }
    },
   components: {
     
   },

   methods: {
     //屏幕高度
     changeFixed(clientHeight){                        //动态修改样式
        this.$refs.rights.style.height = clientHeight-60+'px';
         this.$refs.lefts.style.height = clientHeight-60+'px';
      },
     //搜索页面跳转
      search(){
        if(vm.sousuo!=""){
          this.$router.push('/search/'+vm.sousuo);
        }
      },
     //点击
      show(id,index) {
        if(vm.elm===id) {
          vm.elm="";
        }else if(vm.elm !==id) {
          vm.elm = id;
        }
      //获取当前firsttype
        for(var i=0;i<vm.manlist.length;i++) {
          if(i===index) {
            vm.Particulars(id)
          }
        }
      },
  
      Particulars:function (id) {
         let url = "ProductclassificationController/getByParentId?parentid="+id;
         vm.receiveData.getData(vm,url,'res',function () {
           if(vm.res){
              vm.manlink = vm.res;
           } else{
              vm.manlink=[];
           }
         })
      },
      navigate:function() {
        let url = "ProductclassificationController/getParent";
        vm.receiveData.getData(vm,url,'res',function () {
          vm.manlist = vm.res;
        })
      },
      listImg:function () {
        let url = "banner/23";
        vm.receiveData.getData(vm,url,'res',function () {
          vm.manImg = vm.res.result;
        })
      },

   },
   computed: {
     
   },
  
}
</script>

<style  scoped>
body {
  width:100%;
  height: 100%;
  background-color:#fff;
}
  .content {width:100%;height: 100%; background-color: #fff;overflow: auto;}
.header{width: 100%;height: 1.2rem;padding: 10px 5px;position:relative; box-sizing: border-box;
 text-align: center;background-color:#fff;z-index:999;}

.header i {position: absolute;top: 28%;left: 39%;font-size: 0.44rem;}
.header input {background-color: #F1F2F6;border:none;width: 100%;height: 100%;
  border-radius: 5px;line-height: 0.8rem;outline:none;font-size:0.32rem;
  padding-left: 45%;box-sizing: border-box;}
img {vertical-align: top;width:100%;height:100%;}
.mian {width: 100%;overflow: hidden;}

.left {float: left;width: 24%;overflow-y: auto;background-color: #fff; height:calc(100% - 80px);box-sizing: border-box}


.left ul{    background-color: #F1F2F6; padding-right: 0.2rem;}
.right {width: 76%;height: 100%; float:left; background-color: #fff;overflow-y: auto;
  }

.hui {
  width:100%;
  height:0.2rem;
  background-color:#F1F2F6;
}

.head-r { width: 100%;height:2.8rem;}
.head-r a { display: block;    width: 100%;
    height: 100%}
.left ul li{text-align: center;font-size: 0.28rem;border-bottom:0.04rem solid #F6F7F9; 
  color:#727274; background-color:#fff}
.firstType span {font-size: 0.3rem;line-height: 1rem;width: 100%;display: block;
    letter-spacing: 0.04rem;}
#left>ul>li.active {color: #000; width: 100%;line-height: 1rem;background-color:#F1F2F6;}
#left>ul>li>ul {height: auto;overflow: hidden;}
.footers {width:100%;height: 100%;background-color: #fff;}
.footers ul {overflow: hidden;}



.footers ul li {float: left;width:33.33%; height:2.2rem;text-align: center;
 box-sizing: border-box; padding-top:0.2rem;}
  
.footers-header {
width:1.4rem;
height:1.4rem;
margin:auto;
box-sizing:border-box;
margin-bottom:0.04rem; 
} 

</style>