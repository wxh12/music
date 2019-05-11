// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(ElementUI)

const store = new Vuex.Store({
	state:{
		ss:[],
		aa:[],
		dd:[],
		tt:[],
		pp:[],
		login:false,
		run:[],
		yu:{			
			songid: 4, 
			src: "http://on3skkgj3.bkt.clouddn.com/%E5%91%8A%E7%99%BD%E6%B0%94%E7%90%83.mp3 ", 
			songname: "告白气球", 
			author: "周杰伦",
			album: "床边的故事",
			albumcover:"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=0be29b1c53b5c9ea62f304e5ed02d13d/5366d0160924ab18a8524c203dfae6cd7b890b64.jpg ",
		},
	},
	mutations:{
		hello(state,index){//专辑数据
			axios.get('http://localhost:3000/mysql').then(function(res){
				var fu = [];
				for (let i = 0;i<res.data.length;i++) {	
					if (res.data[i].album == index.album ) {	
						fu.push(res.data[i]);
						state.ss = fu	
				}
			}
		})					
		//console.log(index)		
		state.ss = index
		//var str = JSON.stringify(state.ss);
		//sessionStorage.obj=str;
		},		
		hello1(state,index){//传单曲
		state.pp = index
		},
		hello2(state,index){//传歌手所有数据			
				axios.get('http://localhost:3000/mysql').then(function(res){
					var aut=[];
					for(let i=0;i<res.data.length;i++){
						if(res.data[i].author == index.author){
							aut.push(res.data[i]);
							state.aa=aut;
						};
					};
				});			
		state.aa = index
		},
		hello3(state,index){//排行榜
		state.dd = index	
		},
		hello4(state,index){//排行榜
		state.tt = index	
		},
		hello8(state,index){//传到播放器 play
		state.yu = index	
		},
		soucang(state,index){//传到播放器 soucang 
		state.run = index	
		//var str = JSON.stringify(state.run);
		//sessionStorage.obj1=str;
		},
	},
})

import axios from 'axios' 
Vue.prototype.$http=axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
