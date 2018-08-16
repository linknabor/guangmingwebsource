<style scoped>

	/*.foot{
    width: 100%;height: 49px;text-align: center;
    position: fixed;bottom: 0;box-shadow: 0 0 5px rgba(0,0,0,.8);
  }
  .foot-item{
    display: block;width: 25%;height: 100%; float: left;font-size: 12px;
  }
  .foot-item:link,.foot-item:visited{
    background-color: white;color: black;
  }
  .foot-item:hover,.foot-item:active{
    display: block;color: white;background-color: #C8C6C6;
  }
  .icon{width: 100%;height: 30px;position: relative;}
  .icon-box{width: 30%;height: 23px;position: absolute;left: 35%;top: 6px;}
  .icon-box img{width:100%;height: 100%;margin:auto;}
	.foot-item span{letter-spacing: 0.08rem;line-height: 19px;}
	.content  {
		padding-bottom: 72px;	
	}*/
.footer{width: 100%;height: 49px;background-color: #fff; position:fixed;bottom: 0px;box-shadow: 0 0 5px rgba(0,0,0,.2);}
.footer li{width: 25%;float: left;text-align: center;height: 100%;}
.footer a{color:#777;font-size: 10px;position: relative;height: 100%;padding-top: 10px;}
.footer span{letter-spacing: 0.1rem;}
.icon{width: 100%;height: 30px;position: relative;}
.icon-box{width: 30%;height: 23px;position: absolute;left: 35%;top:6px;}
.icon-box img{width:100%;height: 100%;margin:auto;}

</style>

<template>
	<div class="index">
		<router-view class="contetn"></router-view>
    <footer class="footer">
      <ul>
        <li >
          <a href="https://test.e-shequ.com/guangming/weixin/home/index.html">
            <div class="icon">
              <div class="icon-box">
                <img src="../static/image/wuye/yfw.png"  alt="tt">
              </div>             
            </div>
            <span class="foot-span">悦服务</span>
          </a>
        </li>
        <li >
          <a href="https://test.e-shequ.com/guangming/weixin/group/onsalesindex.html">
            <div class="icon">
              <div class="icon-box">
                <img src="../static/image/wuye/ysc.png"  alt="tt">
              </div>              
            </div>
            <span class="foot-span">悦商城</span>
          </a>
        </li>
        <li >
          <a href="https://test.e-shequ.com/guangming/weixin/wuye/index.html">
            <div class="icon">
              <div class="icon-box">
                <img src="../static/image/wuye/ysq-sel.png"  alt="tt">
              </div>              
            </div>
            <span class="foot-span">悦社区</span>
          </a>
        </li>
        <li >
          <a href="https://test.e-shequ.com/guangming/weixin/person/index.html">
            <div class="icon">
              <div class="icon-box">
                <img src="../static/image/wuye/yyz.png"  alt="tt">
              </div>             
            </div>
            <span class="foot-span">悦业主</span>
          </a>
        </li>
      </ul>
    </footer>			
	</div>
</template>

<script>
  import cookie from 'js-cookie'
	export default{
    mounted(){
        // let url = '/initSession4Test/105'
        // this.axios.get(
        //     url, 
        //     {
        //       params: {},
        //     },
        // ).then(
            
        //     function(res) {
        //         //alert('cg')
        //         //alert(res)
        //         console.log(res)
        //     }
        // ).catch(
        //     function(err) {
        //         //alert('sb')
        //         //alert(err)
        //         console.log(err)
        //     }
        // );
    }
	}
</script>