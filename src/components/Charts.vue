<template>
  <div>
	<v-header></v-header> 
	<v-nav></v-nav>		
	<div class="box1">
	  	<div class="left1">
	  		<v-paihangleft></v-paihangleft>	
	    </div>
	  	<div class="right1">
        	<v-right1></v-right1>
	  	</div>	  
	</div>
	<v-footer></v-footer>
	<!--<v-aud></v-aud>-->
  </div>
</template>

<script>
	import header from './home'
  import nav from './Found'
	import footer from './Footer'
	import paihangleft from './paihangleft'
	import right1 from './right1'
	import aud from './Audio'
	export default{
		name:'header',
		data(){
			return{	
				s:[
				
				]
			}
		},
		mounted(){
		},
		components:{
			'v-header':header,
  			'v-nav':nav,
  			'v-footer':footer, 	
  			'v-paihangleft':paihangleft,
  			'v-right1':right1,
  			'v-aud':aud,
		},
	}
</script>

<style>
	*{
		padding: 0px;
		margin: 0px;
	}
	div{
		border: 0px solid red;
	}
	.box1{
		width: 1000px;
		margin: 0 auto;	
		border: 0px solid red;	
		margin-top: 2px;
	}
	.left1{
		width: 240px;
		height: 2600px;
		background-color: #F9F9F9;float: left;
	}
	body{
		background-color:#F5F5F5 ;
	}
	.right1{
		width: 740px;height: 2600px;
		margin-left: 240px;
		background-color: white;
	}
</style>