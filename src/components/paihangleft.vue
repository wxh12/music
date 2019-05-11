<template>
	<div>
		<ul class="liebiao1">
			<li><h5 style="text-align: left;"><b>云音乐特色榜</b></h5></li>
			<li v-for="(e,index) in ss1" @click="mydata(e.id);mdata(index)">
				<div class="box2"><img :src="e.imgs"/></div>
	  			<div class="box3"><p>{{e.name}}</p><p>{{e.newup}}</p></div>
			</li>	
			<li><h5 style=" text-align: left;"><b>云音乐特色榜</b></h5></li>
			<li v-for="(e,index) in ss2" @click="mydata(e.id);mdata(index)">
				<div class="box2"><img :src="e.imgs"/></div>
	  			<div class="box3"><p>{{e.name}}</p><p>{{e.newup}}</p></div>
			</li>
	  	</ul>
	</div>
</template>

<script>
	import $ from 'jquery'
	import axios from 'axios' 
	export default{
		name:'header',
		data(){
			return{	
				s:[				
				],
				k:[],
				ss:[],
				ss1:[],
				ss2:[],	
				g:[]
			}
		},
		mounted(){
			var This = this;
			this.$http.get('http://localhost:3000/mysql').then(function(res){//全部歌单
				//console.log(res.data)
				This.s = res.data;			     
		   })
			
			this.$http.get('http://localhost:3000/sqls').then(function(res){//排行榜
				//console.log(res.data)
				This.ss = res.data
				var ss1=[];
			    for (let y=0;y<4;y++) {
			    	ss1.push(This.ss[y]);
			    }
			    This.ss1=ss1;
			    var ss2=[];
			    for (let y=4;y<10;y++) {
			    	ss2.push(This.ss[y]);
			    }
			    This.ss2=ss2;
			    var s1=[];
			    for (let y=0;y<20;y++) {
			    	s1.push(This.s[y]);
			    }
			    This.s1=s1;
		    
			//console.log(This.s)
			This.$store.commit('hello3',This.ss[0])
			This.$store.commit('hello4',This.s1)
			})
		},
		methods:{			
			mydata:function(index){//tu
				var g=[];
			for (let i = 0;i<this.ss.length;i++) {	
				if(this.ss[i].id == index){
					 g = this.ss[i]					
				}
			}
				this.$store.commit('hello3',g)								
			},
			mdata:function(index){//ge
				var k = [];					
					var good=Math.floor(Math.random()*25);
			    		for (let y=good;y<this.s.length;y++) {
			    			k.push(this.s[y]);
			    		}								
				this.k=k;			
				this.$store.commit('hello4',k)				
			},
		}		
	}
</script>

<style>
	.liebiao1 img{
		width: 40px;height: 40px;
	}
	.liebiao1 .box2{
		float: left;
		width: 40px;height: 40px;
	}
	.liebiao1 li{
		list-style: none;
		width: 240px;height: 62px;
		padding-left: 20px;
		padding-top: 10px;
	}
	.liebiao1 li:hover{
		background-color:#E6E6E6;
	}
	.liebiao1 .box3{		
		width: 140px;height: 40px;	   		
	}
	.liebiao1 .box3 p{
		color: #999999;
		font-size: 10px;
		margin-top: 2px;
		margin-bottom: 3px;
	}
	
</style>