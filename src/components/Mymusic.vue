<template>
	<div>
		<v-header></v-header> 
		<div class="hongtiao"></div>
		<div class="cen">
			<div class="bai">
				<div class="lu" @click="dl"><a href="javascript:void(0)"></a></div>
			</div>
		</div>	
		<v-footer></v-footer>
		<!--<v-aud></v-aud>-->
	</div>
</template>

<script>
	import header from './home'
	import footer from './Footer'
	import aud from './Audio'
	export default {
  		name: 'home1',
  		data(){
  			return{  		
  			}
 		},
 		components:{
  			'v-header':header,
 			'v-footer':footer,
 			'v-aud':aud,
		},
		computed:{
			login(){
				return this.$store.state.login
			}
		},
		methods:{
			dl:function(){
				this.$store.state.login=true
			}
		}
}
</script>

<style>
	body{
		background-color: #F2F2F2;
	}

	.hongtiao{
		height: 5px;
		width: 100%;
		background-color: #C20C0C;
	}
	.cen{
		background-color: white;
		width: 980px;height:500px;
		margin: 0 auto;
	}
	.bai{		
		margin: 0 auto;
		width: 807px;height: 380px;
		background: url(http://ozcpgl12w.bkt.clouddn.com/mymusic.png) no-repeat;
		background-position: 0 104px;
		padding-top: 104px;
	}
	.lu a{
		background: url(http://ozcpgl12w.bkt.clouddn.com/mymusic.png) no-repeat;
		background-position: 0 -280px;
		width: 167px;height: 45px;
		display: block;
		margin: 203px 0 0 482px;
	}
</style>