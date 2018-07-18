<style scoped>
	/*选择地址*/
	.xzaddr{background: white;}
	.addr_item{overflow: hidden;border-bottom:1px solid #cccccc;width: 90%;margin:0 auto;}
	.checkbox { float:left; margin-top:15px;display: inline-block; width: 16px;height: 16px;
       background:url("http://7xkdq7.com1.z0.glb.clouddn.com/icon_unselect.png") no-repeat;background-size: 16px;margin-top: 25px;}
    .addr_info{margin: 10px 0 10px 30px;}
    .addr_info>span{margin-right:15px;}
    .default_item{color:#FF7E00;border:1px solid #FF7E00;
        padding: 4px 8px;border-radius: 2px;}
    .addr_region_location{margin: 10px 0 10px 30px;}
    .addr_btn_area{text-align: center;margin-top:20px;overflow: hidden;}    
	.addr_btn_area{text-align: center;margin-top:20px;overflow: hidden;}
	.addr_btn_plain{padding: 10px 20px;border:1px solid #777777;color: black;
        border-radius: 4px;display: inline-block;}
</style>
<template>
	<div>
		<div class="xzaddr">
			<div class="addr_item">
				<i class="checkbox"></i>
				<div class="addr_info">
					<span>唐勇</span>
					<span>18818229179</span>
					<span class="default_item">默认</span>
				</div>
				<div class="addr_region_location">上海市浦东新区6666好666栋</div>
			</div>
			<div class="addr_btn_area">
				<router-link to="/editAddr">
					<span class="addr_btn_plain">新增收货地址</span>
				</router-link>
				
			</div>
		</div>
	</div>
</template>
<script>
	let vm;
	export default {
		name:'addAddr',
		data(){
			return {
				params:{
					ruleIds:this.$route.query.ruleIds,
					skuIds:this.$route.query.skuIds,
				},
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
			
	  		console.log(this.$route.query.ruleIds,)
		},
		methods:{
			

		}
	}
</script>