<template>
	<div>
	<div class="ltop">
    			        <div class="lsp">
    				        <span></span>
    				        <span>新碟上架</span>
    			        </div>
    		            <div class="m1">
    		  	            <span>更多</span>
    		            </div>
                    </div>
                    <div class="hui">
                    	<button @click="add" class="phone"><</button>  
                    	
                    	<ul v-if="it">
                    		<li  v-for="(e,index) in zhuan1" @click="Newdata(index)">
                    			<router-link to='/list'>
                    				<div class="wxh3"><img :src="e[0].albumcover"/></div>
                    				<div class="bor"></div>
                    			</router-link>
                    		</li>                  		
                    	</ul>	
                    	<ul v-if="him">
                    		<li  v-for="(e,index) in zhuan2" @click="Newdata(index+5)">
                    			<router-link to='/list'>
                    				<div class="wxh3"><img :src="e[0].albumcover"/></div>
                    				<div class="bor"></div>
                    			</router-link>                    			
                    		</li>                   		
                    	</ul> 
                    	<button v-on:click="add" class="quick">></button>		
                    </div>
    </div>
    
</template>

<script>
	import $ from 'jquery'
	export default{
		name:'center',
		data(){
			return{															
			    it:true	,
			    him:false,
			    g:[],
			    l:[],
			    zhuanji:[],
			    zhuan1:[],
			    zhuan2:[]
			}
		},
		methods:{
			add:function(){
				this.it = !this.it,	
				this.him =!this.him				
			},			
			Newdata:function(index){//传数据
				//console.log(this.zhuanji)
				
				var indexx = this.zhuanji[index]				
				this.$store.commit('hello',indexx)
				console.log(indexx)
			},
		},
		 mounted(){		 	
		 	var This = this;
			
			function s (arr){//去重
				var res = [];
				var json ={};
				for(var i = 0;i<arr.length;i++){
					if(!json[arr[i]]){
						res.push(arr[i]);
						json[arr[i]] = 1;
					}
				}
				//console.log(json)
				//console.log(res)
				return res;
			}
			this.$http.get('http://localhost:3000/mysql').then(function(res){				
				This.s = res.data
			//	console.log(This.s.length)
				var newarr =[];
				for(var i=0;i<This.s.length;i++){
					newarr.push(This.s[i].album)
				}
				This.g = s(newarr)//去重以后的数组  s是调用上边的去重方法
				var zhuanji = [];
				for(let i=0;i<This.g.length;i++){
					 zhuanji[zhuanji.length]= i;//增加长度
					 //console.log(i)
					 zhuanji[i]=[];
				}
				for (let i=0;i<This.s.length;i++) {//分专辑
					for (let q= 0; q<(This.g).length; q++) {
						if (This.s[i].album == This.g[q]) {
							zhuanji[q].push(This.s[i]);
						}
					}
				}
				This.zhuanji=zhuanji;
			   
			    var zhuan1=[];
			    for (let y=0;y<5;y++) {
			    	zhuan1.push(This.zhuanji[y]);
			    }
			    This.zhuan1=zhuan1;
			    var zhuan2=[];
			    for (let y=5;y<10;y++) {
			    	zhuan2.push(This.zhuanji[y]);
			    }
			    This.zhuan2=zhuan2;
			})	 
		},

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
.hui{
	width: 670px;height: 186px;
	background-color: #F5F5F5;
	margin-left: 10px;margin-top: 8px;
}
.hui ul {	
	display: flex;
	justify-content: space-around;	
	position: absolute;
	float: left;
	margin-left: 22px;
	
}
.hui ul li{
	list-style: none;
	margin-left: 5px;
	width: 120px;
}
.wxh3 img{
	width: 100px;height: 100px;
	margin-top: 40px;
}

.phone{
    position: absolute;
    float: left;
	margin-top: 80px;
}
.quick{
	margin-top: 80px;
	margin-left: 656px;	
}
.bor{
	width: 125px;height: 100px;
	float: left;	
	background: url(http://ozcpgl12w.bkt.clouddn.com/coverall.png) no-repeat;
	background-position: -0px -570px;
	margin-top: -100px;
	
}
</style>