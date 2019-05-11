<template>
	<div>
		<div class="ltop">
    		<div class="lsp">
    			<span></span>
    			<span>榜单</span>
    		</div>
    		<div class="m1">
    		  	<span>更多</span>
    		</div>
        </div>
        <div class="bill">
            <dl class="blk">
                <dt>
                    <div class="blk1">
                    <router-link to='/charts'>
                    	<img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100"/>
                    </router-link>
                    				
                    </div>
                    <div class="blk2">
                    	<h5><b>云音乐飙升榜</b></h5>
                    	<a></a><a></a>
                    </div>
                </dt>
                <router-link to='/gedan'>
                <dd v-for="(e,index) in s1"  @click="newdata(e.songid)">{{index+1}}{{e.songname}}</dd>
                </router-link>
                    <a href="#"><dd>查看更多></dd></a>
            </dl>
            <dl class="blk">
                <dt>
                    <div class="blk1"><img src="http://p3.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100"/></div>
                    <div class="blk2">
                    	<h5><b>云音乐新歌榜</b></h5>
                    	<a></a><a></a>
                    </div>
                </dt>
                <router-link to='/gedan'>
                    <dd v-for="(e,index) in s2"  @click="newdata(e.songid)">{{index+1}}{{e.songname}}</dd>
                </router-link>                   		
                <a href="#"><dd>查看更多></dd></a>
            </dl>
            <dl class="blk">
                <dt>
                    <div class="blk1"  ><img src="http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100"/></div>
                    <div class="blk2">
                    	<h5><b>网易原创歌曲榜</b></h5>
                    	<a></a><a></a>
                    </div>
                </dt>
                <router-link to='/gedan'>
                <dd v-for="(e,index) in s3"  @click="newdata(e.songid)">{{index+1}}{{e.songname}}</dd>
                </router-link>                    		
                <a href="#"><dd>查看更多></dd></a>
            </dl>
        </div>
	</div>
</template>

<script>
	import $ from 'jquery'
	export default{
		name:'center',
		data(){
			return{					
               
				s:[				
				],s1:[],s2:[],s3:[],
				first:[],
			    it:true	,
			    him:false,
			    g:[],
			    l:[],
			    zhuanji:[]
			}
		},
		methods:{			
			newdata:function(f){//传到歌单
				var word = ''
				for (let i = 0;i<this.s.length;i++) {
					if(this.s[i].songid == f){
						word = this.s[i]
					}
				}
				this.$store.commit('hello1',word)	
				console.log(word)
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
				
				var s1=[];
			    for (let y=0;y<10;y++) {
			    	s1.push(This.s[y]);
			    }
			    This.s1=s1;
			    var s2=[];
			    for (let y=20;y<30;y++) {
			    	s2.push(This.s[y]);
			    }
			    This.s2=s2;
			    var s3=[];
			    for (let y=60;y<70;y++) {
			    	s3.push(This.s[y]);
			    }
			    This.s3=s3;
			    //console.log(s3)
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
.bill{
	width: 689px;
	height: 472px;
	border: 1px solid gainsboro;
	margin-left: 5px;
	margin-top: 20px;background-color: #F4F4F4;
}
.blk{
	width: 229px;
	height: 472px;
	border: 1px solid gainsboro;
	float: left;
}
.blk dt{
	width: 210px;
	height: 100px;
	margin: 20px 0 0 20px;
}
.blk dd{
	height: 32px;line-height: 32px;
	width: 229px;
	text-align: left;
	padding-left: 20px;
	font-size: 11px;
}
.blk dd:nth-child(even) {
	background-color: #E8E8E8;
}
.blk1{
	width: 80px;height: 80px;float: left;
}
.blk1 img{
	width: 80px;height: 80px;
}
.blk2{
	width: 116px; height: 48px; margin-left: 80px;margin-top: 20px;
}
.blk a{
	color: black;text-decoration: none;
}
.blk a dd:hover{
	color: black;text-decoration: underline;
}
</style>