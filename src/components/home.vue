<template>
	<div class="top">
		<div class="logo"><img src="http://ozc1304hh.bkt.clouddn.com/logo1.PNG" /></div>		
		<div class="dao">
			<ul>	
				<li class="me"><router-link to='/'>发现音乐</router-link></li>
				<li class="wo"><router-link to='/mymusic'>我的音乐</router-link></li>
				<li><router-link to='/friend'>朋友</router-link></li>
				<li><router-link to='/'>商城</router-link></li>
				<li><router-link to='/'>音乐人</router-link></li>
				<li><router-link to='/load'>下载客户端</router-link></li>
			</ul>
		</div>
		<div class="sousuo">
			<span class="glyphicon glyphicon-search">
			<input type="text" placeholder="音乐/电台/用户"></span>
		</div>			
		<router-link to='/'>
			<div class="shipin">		    
			<span class="glyphicon glyphicon-facetime-video ">视频投稿</span>			
			</div>
		</router-link>
		<v-login></v-login>			
	</div>	
</template>
<script>
    import $ from 'jquery'
    import login from './login'
	export default{
		name:'header',
		data(){
			return{
				
			}
		},
		 mounted(){

		 	$(function(){
    		$('.log ul li').css('display','none')
    		$('.log').hover(function(){
    		$('.log ul li').css('display','block')
    		$(this).css({'vertical-align':'top','position':'absolute','z-index':'12'})
    	},function(){
    		$('.log ul li').css('display','none')
    	  })
    	})		 	
	},
	
	  components:{  
 	'v-login':login,
},			
  }		
</script>

<style>
	*{
		padding: 0;
		margin: 0;
	}
	div{		
		border: 0px solid red;
	}	
	.top{
		width: 1349px;
		height: 70px;
		background-color: #242424;
	}
	.logo{
		height: 70px;
		line-height: 70px;
		float: left;
		margin-left: 100px;
		width: 175px;
	}
	.dao{
		height: 70px;
		line-height: 70px;
		width: 485px;		
		float: left;
	}
	.dao ul {
		width: 485px;
		display: flex;
		justify-content: space-around;
	}
	.dao ul li{
		width: 100px;
		list-style: none;
		text-align: center;
	}
	.dao ul li a{
		color: white;
		text-decoration: none;	
		display: block;
		height: 69px;
		line-height: 69px;
		width: 80px;	
	}
	.dao ul li a:hover{
		display: block;
		height: 68px;
		line-height: 68px;
		width: 80px;
		background-color: black;
	}
	.sousuo{
		float: left;
		height: 28px;line-height: 28px;
		margin-top: 24px;
		width: 150px;
		margin-left: 100px;
		background-color: white;
		border-radius: 13px;
	}
	.sousuo span{
		display: block;
		width: 150px;
		height: 28px;line-height: 28px;
		color: gainsboro;
		float: left;
		
	}
	.sousuo input{
		border: 0px;
		height: 18px;line-height: 18px;
		outline: 0;	
		width: 120px;	
	}
	.shipin{
		border: 1px solid #4F4F4F;
		margin-top: 24px;
		float: left;
		height: 28px;line-height: 28px;
		width: 90px;
		color: white;opacity: 0.8;
		border-radius: 10px;margin-left: 15px;
	}
	.shipin span{
		display: block;
		width: 90px;
		height: 28px;line-height: 28px;
	}
	.shipin:hover span{
		color: white;opacity: 1;
	}
</style>