<template>
    <div class="all">
        <div class="middle">
        	<div class="center">
                <div class="left ">
            	    <v-left1></v-left1> 
                    <v-left2></v-left2> 
                    <v-left3></v-left3>
                </div>
                <div class="right">               
                    <v-right></v-right>
                </div>
            </div>
        </div>   
	</div>
</template>

<script>
import left1 from './left1'
import left2 from './left2'
import left3 from './left3'
import right from './right'
import $ from 'jquery'
	export default{
		name:'center',
		data(){
			return{
				zhuanji:[],
			}
		},
		methods:{
			add:function(){
				this.it = !this.it,	
				this.him =!this.him				
			},
			
			Newdata:function(index){//传数据
				console.log(this.zhuanji)
				var index = this.zhuanji[index]				
				this.$store.commit('hello',index)				
			}
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
			})	 
		},
		components:{ 	
 		'v-left1':left1,
 		'v-left2':left2,
 		'v-left3':left3,
 		'v-right':right,
		},
	}	
</script>

<style >
.all{
	width: 100%;
	height: 1320px;
}
div{
	border: 0px solid red;
}
body{
	background-color: #F2F2F2;
	width: 100%;
}
.center{
	width: 979px;
	height: 1320px;
	margin: 0 auto;
	border: 0px solid yellow;
	background-color: white;
}
.left{
	height: 1320px;
	float: left;
	width: 720px;
	margin-left: 10px;
	border-right: 1px solid #D4D4D4;
}
.right{
	width: 250px;
	margin-left: 730px;
	height: 1000px;
}

</style>