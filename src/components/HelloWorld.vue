<template>
  <div class="hello">
   <v-header></v-header>
  </div>
</template>

<script>
	import header from './home'

	
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	'v-header':header
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
