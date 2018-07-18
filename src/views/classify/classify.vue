<template>
    <div class="content">
      <div class="header" >
        <!-- 搜索框 -->
        <i class="iconfont icon-fangdajing"></i>
        <input type="text" placeholder="搜索商品" v-model="sousuo" @change="search()" >
      </div>
      <div  class="mian">
          <div class="left" id="left">
                <ul>
                  <li class="firstType " v-for="(item,i) in manlist" :key="item.id" :class="{active:item.id==elm}" >
                      <span  @click="show(item.id,i)">{{item.name}}</span> 
                  </li>
                </ul>
          </div>
          <div class="right" id="right">
             <div class="head-r">
                <mt-swipe :auto="0">
                <mt-swipe-item v-for="item in manImg">
                   <img :src='item.picture' alt="">
                </mt-swipe-item>
              </mt-swipe>
             </div>
             <div class="footer">
               <ul>
                 <li v-for="v in manlink" :key="v.id">
                  <router-link :to="{path:'/item',query:{id:0}}">
                   <img v-bind:src="v.picturepath" alt="">
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
   },

   components: {
     
   },

   methods: {
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
/* @import '../assets//style/style.css'; */
 html{font-family: PingFangSC-Regular;} 

 .content {width:100%;height: 100%;}
.header{width: 100%;height: 60px;padding: 10px 5px; box-sizing: border-box;top: 0px;
  position: fixed;text-align: center;background-color:#fff;z-index:999;}
.header i {position: absolute;top: 24%;left: 39%;font-size: 22px;}
.header input {background-color: #F1F2F6;border:none;width: 100%;height: 100%;
  border-radius: 5px;line-height: 60px;outline:none;font-size:16px;
  padding-left: 45%;box-sizing: border-box;}
img {vertical-align: top;width:100%;height: 100%;}
.mian {width: 100%;overflow: hidden;margin-top:60px;}
.left {top: 60px;float: left;width: 22%;height: 100%;overflow-y: auto;position:fixed;}
.right {width: 75%;height: 100%;background-color: #F1F2F6;padding-top: 10px;
  padding-left: 10px;margin-left:22%;}
.head-r { width: 100%;height:140px;}
.left ul li{text-align: center;font-size: 14px;border-bottom:2px solid #F6F7F9; 
  color:#727274;}
.firstType span {font-size: 15px;line-height: 50px;width: 100%;display: block;
    letter-spacing: 2px;}
#left>ul>li.active {color: #000; width: 100%;line-height: 50px;background-color:#F1F2F6;}
#left>ul>li>ul {height: auto;overflow: hidden;}
.footer {width:100%;height: 100%;background-color: #fff;}
.footer ul {overflow: hidden;}
.footer ul li {float: left;width:33.33%; height:110px;text-align: center;
  padding: 10px 10px 0px;box-sizing: border-box;}
.footer ul li img {width:100%;height: 70px;margin-bottom: 7px;}
</style>