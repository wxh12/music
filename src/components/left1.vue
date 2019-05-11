<template>
	<div>
	<div class="ltop">
        <div class="lsp"><span></span><span>热门推荐</span></div>
        <div class="menu">
            	<ul>            				
            		<li><a href="#">华语</a></li>
            		<li>|</li>
            		<li><a href="#">流行</a></li>
            		<li>|</li>
            		<li><a href="#">摇滚</a></li>
            		<li>|</li>
            		<li><a href="#">民谣</a></li>
            		<li>|</li>
            		 <li><a href="#">电子</a></li>
            	</ul>
        </div>
        <div class="m1"><span>更多</span></div>
     </div>
            	<div class="bofang">
            		    <ul class="box"><router-link to='/singer'>
            			    <li v-for="(item,index) in music" @click="Newdata2(index)">            			    	
            		            <div>
            				        <img :src='item[0].albumcover' width="140px" height="140px"/>
            				        <a></a>
            				        <div><i class="iconfont icon-erji "  v-for="e in h">{{e.name}}</i>
            				        	<i class="iconfont icon-bofang i1" ></i></div>
            			        </div>
            			         <p>{{item[0].author}}</p>
            			    </li> </router-link>        			  
            		    </ul>           			           			
            	    </div>
            	 </div>            	    
</template>
<script>
	import $ from 'jquery'
	export default{
		name:'center',
		data(){
			return{	
				h:[{name:'12万'}
				],
			    zhuanji:[],
			    zhuan:[],
			    music:[]
			}
		},
		methods:{			
			Newdata2:function(index){//传数据
				//console.log(this.music)
				var index2 = this.music[index]				
				this.$store.commit('hello2',index2)				
			}
		},
		 mounted(){	
		 	var This = this;	
		 	function s (arr){//去重
				var newArr1 = [];
				var obj ={};
				for(var i = 0;i<arr.length;i++){
					if(!obj[arr[i]]){
						newArr1.push(arr[i]);
						obj[arr[i]] = 1;
					}
				}
				return newArr1;
			}
		 	this.$http.get('http://localhost:3000/mysql').then(function(res){
		 		This.s = res.data
		 		var newarr1 =[];
		 		for(var i=0;i<This.s.length;i++){
					newarr1.push(This.s[i].author)
				}
		 		This.g = s(newarr1)
		 		var music = [];
		 		for(let i=0;i<This.g.length;i++){
					 music[music.length]= i;//增加长度
					 //console.log(i)
					 music[i]=[];
				}
		 		for (let i=0;i<This.s.length;i++) {//分专辑
					for (let q= 0; q<(This.g).length; q++) {
						if (This.s[i].author == This.g[q]) {
							music[q].push(This.s[i]);
						}
					}
				}
		 		This.music=music;
		 	})					 	
		}
	}
</script>

<style>
	.ltop{
	border-bottom: 2px solid #C10D0C;
	width: 680px;
	height: 35px;
	margin-top: 20px;
	margin-left: 8px
}
.menu{
	width: 360px;
	height: 35px;
	line-height: 35px;
	float:left;margin-left: 5px;
	
}
.menu ul{
	display: flex;
	justify-content: space-around;
	height: 35px;
	line-height: 35px;
}
.menu ul li {
	list-style: none;
}
.menu ul li a{
	color: black;
	text-decoration: none;
	font-size: 10px;
}
.menu ul li a:hover{
	color: black;
	text-decoration: underline;
}
.lsp{
	height: 35px;line-height: 35px;	
	float: left;
}
.lsp span{
	font-size: 24px;
	color: black;
}
.m1 span{
    color: black;opacity: 0.6;	
    display: block;
    height: 35px;line-height: 35px;
    width: 50px;margin-left: 630px;
}
.box li{
	display: inline-block;
	margin-right: 36px;
	list-style: none;
	width: 140px;
	height: 204px;
}
.bofang{
	margin-top: 20px;
	height: 408px;
	width: 708px;
	margin-left: 10px;
}
.bofang .box img{
	width: 141px;height: 141px;
}
.bofang .box li>div{
	width: 141px;
	height: 141px;
}
.bofang .box li>div div{
	margin-top: -25px;
	height: 25px;width: 140px;z-index: 10;
	background-color: black;opacity: 0.5;color: white;
}
.i1{
	margin-left: 60px;
}
</style>