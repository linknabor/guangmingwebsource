// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/*自己添加的开始  引入mint-ui 和 axios*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import $ from 'jquery'

import Qs from 'qs';
import axios from 'axios';
//axios.defaults.withCredentials=true; //存储cookie？
import VueAxios from 'vue-axios';
import './static/css/base.css'


import './static/js/rem.js'

// const FastClick = require('fastclick')
// FastClick.attach(document.body) 
// import wechatAuth from './wechatAuth.js'//微信登录插件

// Vue.use(wechatAuth, {appid: wx89c743b2fa762a2c});

import cookie from 'js-cookie'
import common from './common.js'

Vue.prototype.common = common;

import receiveData from './receiveData.js'
Vue.prototype.receiveData = receiveData;

// import fangfa from './fangfa.js'
// Vue.prototype.fangfa = fangfa;
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../src/static/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)

// let str = 'https://www.e-shequ.com/guangming/weixin/';
// Vue.prototype.str = str;


Vue.use(MintUI)
//创建axios 实例

var axiosInstance = axios.create({
    transformRequest: [function (data) {
        //data = Qs.stringify(data);
        data = JSON.stringify(data);
        return data;
    }],
    headers: {
        //'Content-Type': 'application/x-www-form-urlencoded',
        //'Content-Type':'application/json;charset=utf-8',
        'Content-Type':"application/json",

        //'Accept': '*/*',
        'Accept': 'application/json',

    },
    // baseURL: 'https://www.e-shequ.com/guangming/wechat/hexie/wechat',
    baseURL: 'https://test.e-shequ.com/guangming/wechat/hexie/wechat',
    //baseURL:'http://192.168.0.233/',
    withCredentials:true,
    transformResponse: [function (data) {//数据转换
      return data;
    }],
});
//创建axios拦截器 给请求头加cookie

axiosInstance.interceptors.request.use(
    config => {
        if( !cookie.get('session')){//没有seesion 判断  暂时跳过直接在首页就存seesion
          
        }else{//在请求头加 session
          config.headers.Cookie =`${ cookie.get('Cookie') }`
        }

        // config.headers.Authorization = // token
        //     `${ Cookies.get('yesmywine_mall$token_type') } ${ Cookies.get('yesmywine_mall$token') }`
         // 不添加 return config 不会执行http请求
         return config
    },
    err => {
        return Promise.reject(err)
    }
)

Vue.use(VueAxios, axiosInstance);


//生产环境提示
Vue.config.productionTip = false
// 开启debug模式
Vue.config.debug = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
