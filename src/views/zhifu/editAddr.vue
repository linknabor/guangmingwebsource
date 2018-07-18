<style scoped>
	.fl{float: left;}
	.fr{float: right;}
	.fs15{font-size: 15px;}
	.fs14{font-size: 14px;}
	a{color: black;}
	.clear{clear:both}
	/*填写详细地址*/
	.addr_form{padding:0 15px}
	.input-wrap {overflow: hidden;line-height: 45px;}
	.lite-divider {border-bottom: 1px solid #d4cfc8;padding-left: 15px;}
	.hidden-input {height: 20px;margin-top: 12px;border: none;outline: none;
		background-color: transparent;text-align: right;}
	.hidden-input::-webkit-input-placeholder {
		font-size: 15px;color: #bfbfbf;}
	.menu-link {display: block;background: url("http://7xkdq7.com1.z0.glb.clouddn.com/icon_arrow.png") no-repeat;
	    background-size: 7px 12px;background-position: right center;padding-right: 15px;}
	.region{font-size: 12px;width: 32%;text-align: center;height: 30px;
		line-height: 30px;}
	.check{color: #f60;border-right: 1px solid #ddd;border-left: 1px solid #ddd;
		  border-top: 2px solid #f60;background: #fff;}
	.city{font-size: 14px;color: #000;background-color: #FFF;width: 25%;
		 height:40px;padding-top:10px;text-align: center;}
	.city2{font-size: 14px;color: #000;background-color: #E0E0E0;width: 25%;
		 height:40px;padding-top:10px;text-align: center;}
	.btn {display: block;margin: 15px;height: 44px;line-height: 44px;color: #fff!important;
		font-size: 15px;text-align: center;background-color: #ff8a00;border-radius: 3px;
		outline: none;border: none;text-decoration: none;}	
	/*高德地图*/
	.location-wrap {position: relative;/*padding: 0 10px;*/height: 49px;
		line-height: 49px;border-bottom: 1px solid #d4cfc8;width: 100%;}
	.location-input-wrap {position: relative;padding: 5px 10px ;
		margin-right: 80px;left:0px;}
	.location-input {display: block;height: 36px;width: 100%;outline: none;font-size: 15px;
		border: 1px solid #d4cfc8;border-radius: 4px;vertical-align: middle;text-indent: 16px;}	
	.location-btn-cancel {position: absolute;top: 5px;right: 4px;display: inline-block;
		height: 36px;width: 36px;background: url("../../assets/common/icon_cancel.png") no-repeat;background-size: 15px;background-position: center;}	
	.location-btn-ensure {position: absolute;display: block;top: 0;height: 36px;
		line-height:36px;margin-top:5px;right: 15px;color: #3b3937;border-radius: 4px;
		font-size: 15px;width: 65px;text-align:center;border:1px solid #d4cfc8;}
	.location-empty-tip {margin: 0 auto;margin-top: 105px;font-size: 12px;
		color: #888;width: 165px;text-align: center;line-height: 18px;}		
	.location-location {margin: 0 15px;padding: 15px 0;border-bottom: 1px solid #d4cfc8;}	

</style>
<template>
	<div class="addr_form">
		<div v-show="currentPage=='addAddressForm'">
			<div class="input-wrap lite-divider">
				<span class="fl fs15">联系人</span>
				<input placeholder="请输入联系人姓名" class="fr fs14 hidden-input" v-model="receiveName"/>
			</div>
			<div class="input-wrap lite-divider">
				<span class="fl fs15">手机号</span>
				<input type="tel" placeholder="请输入手机号码" class="fr fs14 hidden-input" v-model="tel"/>
			</div>
			<div @click="chooseRegion" style="color: #3b3937"  class="input-wrap lite-divider menu-link">
				<span class="fl fs15">所在地区</span>
				<span class="fr fs14" style="color: #aeaeae" v-if="!distinct">请选择所在地区</span>
				<span class="fr fs14" v-else>{{distinct}}</span>
			</div>
			<div v-show="selectRegion==true">
				<div class="tc">
					<div class="region fl" @click="backRegion(1)" :class="{check:currentRegionType==1}">选择省</div>
					<div class="region fl" :class="{check:currentRegionType==2}" @click="backRegion(2)">市</div>
					<div class="region fl":class="{check:currentRegionType==3}">区县</div>
				</div>
				<div style="width:100%;clear:both;background-color: #e0dede;height: 50px;">
					<div class="fs14 fl" :class="[Math.floor((index/4)%2)==0?'city':'',Math.floor((index/4)%2)==1?'city2':'',]" v-for="(region, index) in regions"  @click="updateRegion(region)">{{region.name}}</div>
				</div>
				<div> &nbsp;</div>
			</div>
			<div style="clear: both;" v-show="selectRegion==false">
				<div class="input-wrap lite-divider  menu-link"  style="color: #3b3937" @click="showLocation()" >
					<span class="fl fs15">小区或大厦</span>
					<span class="fr fs14"  style="color: #aeaeae" v-if="xiaoquName==''">请输入小区或大厦</span>
					<span class="fr fs14" v-else>{{xiaoquName}}</span>
				</div>
				<div class="input-wrap lite-divider">
					<span class="fl fs15">小区地址</span>
					<input placeholder="例如：三林路128弄" class="fr fs14 hidden-input" v-model="xiaoquAddress"/>
				</div>
				<div class="input-wrap lite-divider">
					<span class="fl fs15">楼栋门牌号</span>
					<input placeholder="例如：1号楼402室" class="fr fs14 hidden-input" v-model="homeAddress"/>
				</div>
				<span href="#" class="btn" @click="addAddress">保存</span>
			</div>
		</div>
		<!--	使用高德地图搜索-->
		<div style="background-color: #fffff8" v-show="currentPage=='location'">
			<div class="location-wrap">
				<div class="location-input-wrap">
					<input placeholder="请输入小区名称" class="location-input" v-model="location" @change="yuceaddr()"/>
					<i class="location-btn-cancel" @click="cancelLocation" v-show="suggestion"></i>
				</div>
				<span class="location-btn-ensure" @click="submitLocation">确定</span>
			</div>
			<div class="location-empty-tip" v-show="!suggestions.length">
				准确的小区、街道或大厦名称能加快送货速度
			</div>
			<div class="location-location" @click="chooseLocation(suggestion)" v-for="suggestion in suggestions" v-show="suggestions.length">
				<span style="position:relative;font-color:#cccccc">{{suggestion._name}} - {{suggestion._address}}</span>
			</div>
		</div>

	</div>
</template>
<script>
	let vm;
	export default {
		name:'editAddr',
		data(){
			return {
				receiveName:'',
				tel:'',
				distinct:'',
				selectRegion:false,
				currentRegionType:1,
				regions:[],
				xiaoquName:'',
				xiaoquAddress:'',
				homeAddress:'',
				provinces:[],
				citys:[],
				countys:[],
				province:{},
				suggestion:{},
    			suggestions:[],

				city:{},
				county:{},
				addresses:[],
				currentPage:'addAddressForm',
				location:"",
				amapId:"",
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
			
	  		
		},
		methods:{
			//选择省市区
			chooseRegion(){
				vm.selectRegion = !vm.selectRegion;
				if(vm.selectRegion){
					vm.currentRegionType=1;
					vm.updateRegion();
				}
			},
			//点击省市县tab
			backRegion(regionType){
				if(regionType==1){
					vm.currentRegionType=regionType;
					if(vm.provinces.length<=0){
						updateRegion();
					}else{
						vm.regions=vm.provinces;
					}
				}else if (regionType==2) {
					if(vm.province!={}){
						vm.currentRegionType=regionType;
						updateRegion(vm.province);
					}
				}
			},
			//点击省市区菜单
			updateRegion(region){
				var e = function(n) {
					console.log("success:" + JSON.stringify(n));
					vm.provinces = n.result;
					vm.regions = vm.provinces;
			    },
			    r = function(n) {
					alert("网络异常，请稍后重试！");
			    };
				if(!region){
					if(vm.provinces.length==0){
						vm.getRegions(1,1,e,r);
					}else {
						vm.regions = vm.provinces;
					}
				}else{
					if(region.regionType == 1){
						if(vm.province.id != region.id || vm.citys.length == 0){
							e = function (n) {
								vm.citys = n.result;
								vm.regions = vm.citys;
								vm.currentRegionType = 2;
							},
							vm.getRegions(region.regionType+1,region.id,e,r);
						}else{
							vm.regions = vm.citys;
							vm.currentRegionType = 2;
						}
						vm.province = region;
					} else if(region.regionType == 2){
						if(vm.city.id != region.id || vm.countys.length==0){
							e = function (n) {
								vm.countys = n.result;
								vm.regions = vm.countys;
								vm.currentRegionType = 3;
							},
							vm.getRegions(region.regionType+1,region.id,e,r)
						}else{
							vm.regions = vm.countys;
							vm.currentRegionType = 3;
						}
						vm.city = region;
					}else if(region.regionType==3){
						vm.county = region;
						vm.distinct = vm.province.name+vm.city.name+vm.county.name;
						vm.selectRegion = false;
					}
				}
			},
			//省市区递归选择
			getRegions(type,id,sucfun,errfun){
				vm.currentRegionType=type;
				var n = "GET",
			    a = "regions/" +type+"/"+id,
			    i = null;
			    this.common.invokeApi(n, a, i, null, sucfun, errfun)
			},
			//点击小区时检测地区是否已选
			showLocation(){
				if(vm.city.name == null || vm.county.name == null || vm.province.name == null){
					alert('请先选择你所在的区域');
					return;
				}
				vm.suggestions = [];
				vm.currentPage = "location";
			},
			cancelLocation(){
				vm.location = '';
				vm.currentPage = 'addAddressForm';
			},
			//点击搜索
			submitLocation(){
				vm.xiaoquName = vm.location;
				vm.currentPage = 'addAddressForm';
			},
			//搜索结果
			chooseLocation(suggestion){
				vm.suggestion = suggestion;
				vm.suggestions = [];
				vm.location = suggestion._name;
				vm.amapId = suggestion._id;
				vm.xiaoquAddress = suggestion.detailaddress;
			},
			//预测地址
			yuceaddr(){
				if(vm.location==""){
					return
				};
				let url ="amap/"+vm.city.name+""+vm.location;
				vm.receiveData.getData(vm,url,'res',function () {
					vm.suggestions = vm.res.result;
				})
			},
			//点击保存
			addAddress(){
				if(vm.province.name==null||vm.city.name==null||vm.county.name==null){
					alert("请选择地址");
					return;
				}
				if(vm.xiaoquAddress==""||vm.receiveName==""||vm.tel==""||vm.xiaoquName==""){
					alert("请填写完整相关信息！");
					return;
				}
				if(!(/^1[3-9][0-9]\d{4,8}$/.test(vm.tel))){
					alert("请填写正确的手机号！");
					return;
				}
				vm.saveAddress()
			},
			//保存地址信息
			saveAddress(){
				let url = 'addAddress';
				this.axios.post(
				url,
				{
					provinceId: vm.province.id,
					province: vm.province.name,
					cityId: vm.city.id,
					city: vm.city.name,
					countyId: vm.county.id,
					county: vm.county.name,
					xiaoquName: vm.xiaoquName,
					receiveName: vm.receiveName,
					detailAddress: vm.xiaoquAddress + vm.homeAddress,
					amapId: vm.amapId,
					amapDetailAddr: vm.xiaoquAddress,
					tel: vm.tel
				},)
				.then(function(res){
					// console.log(JSON.parse(res.data).result) 
					vm.$router.push('/zhifu');
				})
			},
		}
	}
</script>