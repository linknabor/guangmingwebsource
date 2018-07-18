import Vue from 'vue'
import Router from 'vue-router'

//公共组件
import navwx from '@/components/navwx' //底部导航

import index from '@/views/shopping/index'  //悦商城首页
import search from '@/views/search/search'  //搜索商品展示页
import item from '@/views/shopping/item'    //商品列表
import onsaledetail from '@/views/shopping/onsaledetail' //商品详情页

import zhifu from '@/views/zhifu/zhifu'//支付页
import addAddr from '@/views/zhifu/addAddr'//选择地址页
import editAddr from '@/views/zhifu/editAddr'//填写收货地址
import cart from '@/views/cart/cart' //购物车
import classify from '@/views/classify/classify' //商品分类


Vue.use(Router)

const router= new Router({
  routes: [
    {
      path:'/',name:'index',component:index,
      meta:{title:'悦商城'},
    }, 
    {
      path:'/zhifu',name:'zhifu',component:zhifu,
      meta:{title:'确认订单'}
    },
    {
      path:'/addAddr',name:'addAddr',component:addAddr,
      meta:{title:'选择地址'}
    },
    {
      path:'/editAddr',name:'editAddr',component:editAddr,
      meta:{title:'编辑地址'}
    },
    {
      path:'/search/:sousuo',name:'search',component:search,
      meta:{title:'商品列表'}
    },
    {
      path:'/item',name:'item',component:item,
      meta:{title:'社区集市'}
    },
    {
      path:'/onsaledetail',name:'onsaledetail',component:onsaledetail,
      meta:{title:'商品详情'}
    },
    {
      path:'/cart',name:'cart',component:cart,
      meta:{title:'购物车'}
    },
    {
      path:'/classify',name:'classify',component:classify,
      meta:{title:'商品分类'}
    }
    
  ]
});
//路由的钩子函数，
//在每一次路由跳转之前会进入这个方法 to：到哪去  from：从哪来 next() 调用这个方法来完成这个钩子函数
router.beforeEach((to, from, next) => {
    //动态改变title
    changeTitle(to.meta.title)
    next();
});

//动态改变title
function changeTitle(title) {
    title = title ? title : '';
    window.document.title = title;
};

export default router
