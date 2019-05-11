<template>
	<div>
		<v-header></v-header> 
		<div class="hongtiao"></div>
		<div class="fcenter">
			<div class="fcenter1">
				<div class="wen">
					<p>
						你可以关注明星和好友品味他们的私房歌单<br />
						通过他们的动态发现更多精彩音乐
					</p>
				</div>
				<div class="fcenter2"><a href="javascript:void(0)" @click="dl">登录</a></div>
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
	.fcenter{
		height: 500px;width: 980px;
		margin: 0 auto;
		background-color: white;
	}
	.fcenter1{
		padding-top: 70px;margin: 0 auto;
		height: 414px;width: 910px;				
		background: url(http://ozcpgl12w.bkt.clouddn.com/notlogin.jpg) no-repeat;
		position: 0 70px;
	}
	.fcenter2 a{
		background: url(http://ozcpgl12w.bkt.clouddn.com/notlogin.jpg) no-repeat;
		background-position: 0 -430px;
		width: 157px;height: 48px;
		display: block;
		margin: 30px 0 0 535px;
		text-indent: -430px;
	}
	.wen{
		margin-left: 535px;
		margin-top: 120px;
		color: #666666;
	}
</style>