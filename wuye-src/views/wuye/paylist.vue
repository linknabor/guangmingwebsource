<style scoped>
/* import { constants } from 'http2'; */
.paylist{font-family: PingFangSC-Regular;width: 100%;height: 600px;
      background-color:#cad2bb4d;font-size: 14px;padding: 15px;}
.ov{overflow: hidden;padding: 1px;}
.fs13 {font-size: 13px;}
.fs14 {	font-size: 14px;}
.fs15 {	font-size: 15px;}
.fs18 {font-size: 18px;}
.fl {float: left;}
.fr {float: right;}
.highlight {color: #ff8a00;}      
.dropdown-wrap {position: relative;padding: 15px 0;border-bottom: 1px solid #d4cfc8;
    background: url('../../static/image/wuye/icon_top.png') no-repeat;
    background-size: 12px 7px;background-position: 70px;font-size: 14px;}
.dropdown {position: absolute;top: 42px;width: 100%; z-index: 1;
    border: 1px solid #d4cfc8;background-color: #fffff8;}
.shuaixuan{margin-left: 5px;}
.dropdown-item { padding: 15px 0;margin: 0 15px;border-bottom: 1px solid #d4cfc8;}        
.collapsed {background-image: url('../../static/image/wuye/icon_bottom.png');}
.card-header {border-bottom: 1px solid #d4cfc8; padding: 20px 10px;}
.card-content { border-bottom: 1px solid #d4cfc8;
      padding: 20px 10px 5px 10px;background: #fdfdef;}
.card {margin-bottom: 15px;border: 1px solid #d4cfc8;border-radius: 3px;
		  color: #666;}
.icon-item {margin-bottom: 15px;font-size: 13px;}
.icon {height: 13px; width:13px;background-size: 13px;vertical-align: top;}
.fold-btn {height: 32px;line-height: 32px;text-align: center;}
.fold-btn i {display: inline-block;}
.more-icon {width: 15px;height: 3px;}
.top-icon {width: 12px;height: 7px;}
.info-wrap {padding-top: 0;padding-bottom: 0;}
.input-wrap {overflow: hidden;line-height: 45px;}
.card-title {font-size: 15px;color: #3b3937;}
.item {padding:20px 10px;border-top: 1px solid #d4cfc8;}
.emptytip{padding: 50px 0;text-align: center;font-size: 30px;color: #ff8a00;
		  background-position: 35px center;background-size: 35px;}
.btn {display: block;margin: 15px;height: 44px;line-height: 44px;color: #fff!important;
	font-size: 15px;text-align: center;background-color: #ff8a00;border-radius: 3px;
	outline: none;border: none;text-decoration: none;}
</style>
<template>
  <div class="paylist">
    <section v-show="currentpage=='list'">
      <div class="dropdown-wrap" v-bind:class="{collapsed:dropdownCollapsed}" v-on:click="toggleDropdown">
        <span v-show="selectedDropdown == ''" class="shuaixuan">账单筛选</span>
        {{selectedDropdown.name}}
        <div class="dropdown" v-show="!dropdownCollapsed">
          <div class="dropdown-item" v-for="item in dropdowns" v-on:click="selectedDropdown">{{item.name}}</div>
        </div>
      </div>
      <div class="card" v-for="itemqq in paymentHises">
        <div class="card-header">
          <div class="ov" style="margin-bottom:25px">
            <span class="fs15" style="color:#3b3937">{{itemqq.tran_time}}</span>
            <span class="fr fs18 heighlight">￥&nbsp;{{itemqq.bill_tran_amt}}</span>
          </div>
          <div class="ov fs13">
            流水号:{{itemqq.trade_water_id}}
            <span class="fr">{{itemqq.paymethodStr}}</span>
          </div>
        </div>
        <div class="fold-btn" v-on:click="showDetail">
          <i></i>
        </div>
      </div>
    </section> 
    <section v-show ="currentpage=='empty'">
      <div class="emptytip">没有缴费记录,快用微信进行缴费吧</div>
    </section>
    <section v-show="currentpage=='detail'">
      <div class="info-wrap">
        <div class="input-wrap lite-divider">
          <span class="fl fs15">交易时间</span>
          <span class="fr fs14">{{payInfo.tran_time}}</span>
        </div>
        <div class="input-wrap lite-divider">
          <span class="fl fs15">支付类型</span>
          <span class="fr fs14">{{payInfo.paymethodStr}}</span>
        </div>
        <div class="input-wrap">
            <span class="fl fs15">账单总金额</span>
            <span class="fr fs14 highlight">¥&nbsp;{{payInfo.bill_tran_amt}}</span>
        </div>
      </div>
      <div class="p15" style="padding-bottom:50px"  v-for="data in payInfofee_data">
        <div class="card" style="padding:21px 10px">
            <span class="card-title">户号&nbsp;{{data.ver_no}}</span>
            <div class="ov fs13" style="margin-top:20px">
                <span class="ib text-el" style="width:250px">{{data.cell_addr}}</span>
                <span class="fr">{{data.cnst_area}}m</span>
            </div>
        </div>
        <div class="card fs15" v-for="feename in data.fee_name">
            <div class="ov item" style="border:none">
                <span class="card-title">{{feename.service_fee_name}}</span>
                <span class="fs15 fr highlight">¥{{feename.totalFee}}</span>
            </div>
            <div class="ov fs13 item" v-for="detail in feename.fee_detail">
                {{detail.service_fee_cycle}}
                <span class="fr">{{detail.fee_price}}</span>
            </div>
        </div>      
      </div>
      <a href="#" class="btn btn-fixed" ms-click="back">返回到列表</a>
    </section>
  </div>
</template>

<script>
let vm;
export default {
  
  data () {
    return {
      dropdownCollapsed:true,
      selectedDropdown: '',
      startDate:'',
      paymentHises: [],
      paymentDetail:{},
      currentpage:'list',
      payInfo:{},
      payInfofee_data:[],
      
      dropdowns: [
          {
              name: '近三个月账单',
              startDate: this.threemonthago
          },
          {
              name: '近半年账单',
              startDate: this.halfyearbefore
          },
          {
              name: '近一年账单',
              startDate: this.oneyearbefore
          },
          {
              name: '全部账单',
              startDate: ''//根据需要传给后台的查询参数修改这些value
          }
      ],
    };
  },
  created(){
    vm = this;
    this.gettoday();
    this.getthreemonthago();
    this.gethalfyearbefore();
    this.getoneyearbefore();
  },
  components: {},

  computed: {
    
  },

  mounted(){
    let url1 = "paymentHistory?startDate="+vm.startDate;
    vm.receiveData.getData(vm,url1,'data1',function(){
        console.log(vm.data1);
        console.log(JSON.stringify(vm.data1));
        // vm.currentpage = 'datail';
        // vm.payInfo = vm.data1.result;
        // vm.payInfofee_data = vm.data1.result.fee_data;
    });

    // function back(){
    //     vm.currentpage='list';
    // };
    
    
  },

  methods: {
    gettoday () {
      this.today = new Date();
      console.log(this.today)
    },
    getthreemonthago () {
      this.threemonthago = (new Date(this.today.getTime()-92*24*3600000)).format('yyyy-MM-dd');
    },
    gethalfyearbefore () {
      this.halfyearbefore = (new Date(this.today.getTime()-183*24*3600000)).format('yyyy-MM-dd');
    },
    getoneyearbefore () {
      this.getoneyearbefore = (new Date(this.today.getTime()-365*24*3600000)).format('yyyy-MM-dd');
    },
    toggleDropdown () {
        vm.dropdownCollapsed = !vm.dropdownCollapsed;
    },
    selectDropdown (idx) {
        vm.selectedDropdown = dropdowns[idx];
        //根据选择的筛选条件刷新列表数据
        if(startDate!=dropdowns[idx].startDate){
          vm.startDate=vm.dropdowns[idx].startDate;
          // this.query();
        }
    },
  },
}

</script>
