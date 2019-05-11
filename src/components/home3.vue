<template>
<div >
     <v-header></v-header> 
	 <v-nav></v-nav>
     <v-lun></v-lun>
  	 <v-center></v-center>
  	 <v-footer></v-footer>
  	 <!--<v-aud></v-aud>-->
  	 <v-top></v-top>
  	 <router-view/> 
</div>
	
</template>

<script>
import header from './home'
import nav from './Found'
import lun from './lunbo'
import center from './Recom'
import footer from './Footer'
import top from './top'
import aud from './Audio'
export default {
name: 'app',
   data(){
	return{
		
	}
},
components:{
    'v-header':header,
  	'v-nav':nav,
	'v-lun':lun,
	'v-center':center,
	'v-footer':footer,
	'v-top':top,
	'v-aud':aud,
},
}
</script>

<style>
</style>