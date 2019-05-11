<template>
	<div class="nav">
		<div class="na">
			<ul>
			  <li class="our" ><router-link to='/home3'>推荐</router-link></li>
			  <li><router-link to='/charts'>排行榜</router-link></li>
			  <li><router-link to='/'>歌单</router-link></li>
			  <li><router-link to='/'>主播电台</router-link></li>
			  <li><router-link to='/singers'>歌手</router-link></li>
			  <li><router-link to='/'>新碟上架</router-link></li>
		    </ul>
		</div>
		
	</div>
</template>

<script>
	  import $ from 'jquery'
	export default{
		name:'nav',
		data(){
			return{				
			}
		},
		 mounted(){
		/* $('body').on('click','.na ul li',function(){		
			var index = $(this).index()
			$($('.na ul li')[index]).css('background-color','yellow');
		    $($('.na ul li')[index]).siblings().css('background-color','none');
		 })*/
	}	
}	
</script>

<style>
	div{
		border: 0px solid red;
	}
	.nav{
		height: 30px;
		width: 100%;
		background-color: #C20C0C;		
	}
	.na{
		height: 30px;line-height: 30px;
		width: 800px;margin: 0 auto;		
	}
	.na ul li{
		list-style: none;
		width: 70px;	
		height: 30px;line-height: 30px;
		vertical-align: middle;
	}
	.na ul{
		display: flex;
		justify-content: space-around;
	}
	.na ul li a{
		color: white;opacity: 0.9;
		text-decoration: none;
		text-align: center;
		width: 70px;
		display: block;
		height: 20px;
		line-height: 20px;
		margin-top: 5px;
	}
	.na ul li a:hover{
		display: block;
		width: 70px;
		height: 20px;line-height: 20px;
		color: white;opacity: 0.9;
		text-decoration: none;
		background-color: #9B0909;
		border-radius: 13px;
		text-align: center;
	}

</style>