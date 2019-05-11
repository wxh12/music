<template>
	<div>
		<el-carousel :interval="5000" arrow="always">			
	    <el-carousel-item v-for="item in a" :key='item.img'>
	    	<div class="lunbo">
	    		<img :src="item.img">
	    	</div>	        
	    </el-carousel-item>
	    </el-carousel>
	    	<div class="load1">
	    		<router-link to='/load'><div class="load2"></div></router-link>
	    	</div>
	    
 	</div>
</template>

<script>
	import $ from 'jquery'
	export default{
		name:'lun',
		data(){
			return{
				a:[]
			}
		},
		 methods:{
		 
	    },
	   mounted(){
	    	var This = this;
			this.$http.get('http://localhost:3000/sql').then(function(res){
				//console.log(res.data)
				This.a = res.data
		 })
	 }		
}		
</script>

<style scoped>
  .el-carousel__item:nth-child(3) {
    background-color: #060702;
  }
  
  .el-carousel__item:nth-child(4) {
    background-color: #080613;
  }
   .el-carousel__item:nth-child(5) {
    background-color: #161B1F;
  }
  
  .el-carousel__item:nth-child(6) {
    background-color: #FCF9F8;
  }
    .el-carousel__item:nth-child(7) {
    background-color: #FFFFFF;
  }
  
  .el-carousel__item:nth-child(8) {
    background-color: #FABE00;
  }
   .el-carousel__item:nth-child(9) {
    background-color: #FFD202;
  }
  
  .el-carousel__item:nth-child(10) {
    background-color: #6563C8;
  }
  .lunbo{ 
  	width: 984px;
  	height: 300px;
  	margin: 0 auto;
  }
  .lunbo img{
  	width: 730px;
  	height: 300px;
  }
  .load1{
  	width: 254px;height: 300px;
  	z-index: 10;
  	position: absolute;
  	top: 100px;
  	left: 913px;
  	background: url(http://ozcpgl12w.bkt.clouddn.com/download.png)no-repeat 0 0;
  }
  .load2{
  	background: url(http://ozcpgl12w.bkt.clouddn.com/download.png)no-repeat;
  	background-position: 0 -340px;
  	width: 215px;height: 56px;
  	display: block;
  	margin-top: 212px;
  	margin-left: 19px;
  }
</style>