<template>
  <div id="app">
 	<!-- <v-header></v-header>  	 
  	 <v-nav></v-nav>  	
  	 <v-lun></v-lun>
  	 <v-center></v-center>
  	 <v-footer></v-footer>-->
  	 <v-audio></v-audio>
    <router-view/>   
  </div>
</template>

<script>
/*		import header from './components/home'
		import nav from './components/Found'
		import lun from './components/lunbo'
		import center from './components/Recom'
		import footer from './components/Footer'*/
		import audio from './components/audio'	
export default {
  name: 'app',
   data(){
  	return{
  		
  	}
  },
  components:{
  /*	'v-header':header,
  	'v-nav':nav,
  	'v-lun':lun,
  	'v-center':center,
  	'v-footer':footer,*/
  	'v-audio':audio,
  	
},
}
</script>

<style>

</style>
