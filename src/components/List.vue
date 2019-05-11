<template>
	<div>
		<v-header></v-header> 
	 	<v-nav></v-nav>
		<div class="max1">
			<div class="left3">
			 	<div class="paisong">
			  		<img :src="music"/>
			 	</div>
				<div class="zhuan">
			  		<div>
			  			<div class="wxh"></div>
			  			<div><h4>专辑歌单|{{album }}</h4></div>
			  		</div>
			  		<div>2017-11-15创建</div>
			   		<div></div>
			  		<div class="baioqian">标签:
			  			<el-tag type="info">快乐</el-tag>
						<el-tag type="warning">感动</el-tag>
						<el-tag type="danger">流行</el-tag>			  			
			  		</div>
			  		<div class="lan3">
	 					<a href="javascript:void(0)" class="shui ha"><span>播放</span></a><a  href="# " class="shui1 ha"></a>	 					
	 					<a href="javascript:void(0)" class="shui2 ha"><span class="uu">收藏</span></a><a class="shui6 ha"></a>
	 					<a href="javascript:void(0)" class="shui3 ha"><span class="uu">分享</span></a><a class="shui6 ha"></a>
	 					<a href="javascript:void(0)" class="shui4 ha"><span class="uu">下载</span></a><a class="shui6 ha"></a>
	 					<a href="javascript:void(0)" class="shui5 ha"><span class="uu">(3307)</span></a><a class="shui6 ha"></a>
	 				</div>			    	
				</div>
				<div class="jie">
			   			<p style="font-size: 10px;">
			   				<b>专辑介绍：</b>
			   				<p style="font-size: 10px;">
			   					夜深了
								猫头鹰出没
								数完第一千零一个尖叫声
								开始听
								周杰伦 的床边故事
								Jay Chou’s Bedtime Stories         
								今年最令人激动的乐坛震撼弹
								周杰伦2016年最新着魔专辑强势暗袭你的床边！
								超乎想象、最自由的古典灵魂摇滚嘻哈
								听周杰伦说书！10个出神入化的音乐故事									 
								等待是值得的！2016年周杰伦终于推出全新...
			   				</p>			   				 
			   			</p>
			   	 	</div>
				<div class="ltop2">
    				<div class="lsp2">
    					<span></span>
    					<span>歌曲列表</span>
    				</div>
    		   	 	<div class="m3">
    		  	    	<span>播放2267460次</span>
    		    	</div>    		    
            	</div>
            	<table class="biao1" border="0px">       	
        			<th><div style="width: 70px;"></div></th>
        			<th><div style="width: 200px;">歌曲标题</div></th>
        			<th><div style="width: 100px;">时长</div></th>
        			<th><div style="width: 80px;">歌手</div></th>
        			<th><div style="width: 100px;">专辑</div></th>
        	
        			<tr v-for='(e,index) in x'>
        				<td style="width: 70px;">{{index+1}}  </td>
        				<td style="width: 200px;" @click="Newdata3(e)"><router-link to='/gedan'>{{e.songname}}</router-link></td>
        				<td style="width: 100px;">{{j.name}}</td>
        				<td style="width: 80px;">{{e.author}}</td>
        				<td style="width: 100px;">{{e.album}}</td>
        			</tr>
       	 		</table>       	 	
		    </div>
		    <div class="right3">
		    	<div style="width: 210px; margin: 0 auto;padding-top: 10px;">
		    		<img src="http://ozcpgl12w.bkt.clouddn.com/ad.bid.jpg" style="width: 210px;"/>
		    	</div>
		    	<div class="like">
		    		<span>喜欢这个专辑的人</span>
		    		<div class="people">
		    			<ul>
		    				<li v-for="(e,index) in s">
		    					<img :src="e.imgs" />
		    				</li>
		    			</ul>
		    		</div>
		    	</div>
			   <div class="hhh">
			    	<div class="happy1"><b>网易云音乐多端下载</b></div>
			    	<div class="xia1">
			    		<a class="le"></a><a class="le1"></a><a class="le2"></a>
			    	</div>			   		
			    </div>	
		    </div>
		</div>
		<v-footer></v-footer>
		<!--<v-aud></v-aud>-->
	<router-view></router-view>	
	</div>
</template>

<script>
import header from './home'
import nav from './Found'
import footer from './Footer'
import aud from './Audio'
	export default{
		name:'center',
		data(){
			return{	
				s:0,
				j:{name:'4:05'},
				y:[],
				music:'',
				album:''				
			}
		},
		computed:{
			x(){
				//return JSON.parse(sessionStorage.obj)
				return this.$store.state.ss				
			}			
		},
		components:{
    		'v-header':header,
  			'v-nav':nav,
			'v-footer':footer,
			'v-aud':aud,
		},
		mounted(){
			var This = this;
		 	this.$http.get('http://localhost:3000/peo').then(function(res){
		 		This.s = res.data
		 	})
//			console.log(this.musci)
			this.$http.get('http://localhost:3000/mysql').then(res=>{
//			console.log(this.x)
				var fu = [];
				for (let i = 0;i<res.data.length;i++) {	
					if (res.data[i].album == this.x[0].album ) {					
						fu.push(res.data[i])
					}
				}
				this.y = fu
				this.music = this.y[0].albumcover
				this.album = this.y[0].album
			})
		},
		methods:{
			Newdata3:function(f){//传到歌单
				//console.log(f)					
				this.$store.commit('hello1',f)
				//console.log(f)	
			}
		},
	}	
</script>

<style>
body{
		background-color: #F2F2F2;
	}
.max1{
		width: 860px;
		height: 1000px;
		background-color: white;
		margin: 0 auto;
	}
.left3{
		width:640px ;
		height: 1000px;
		padding: 45px 30px 0 39px;
		border-right: 1px solid #E1E1E1;
		float: left;
	}
.right3{
		width: 220px;
		height:1000px;
		margin-left: 640px;	
	}
.paisong{
		width: 208px;height: 208px;
		float: left;
	}
.paisong img{
		width: 208px;height: 208px;
	}
.zhuan{
		width: 300px;height: 220px;
		margin-left: 230px;
	}
	.jie{
		height: 50px;width: 600px;
	}
.baioqian{
		margin-top: 20px;margin-bottom: 20px;
	}
.lsp2{
	height: 35px;line-height: 35px;	
	float: left;
}
.lsp2 span{
	font-size: 24px;
	color: black;
}
.m3 span{
    color: black;opacity: 0.6;	
    display: block;
    height: 35px;line-height: 35px;
    width: 200px;margin-left: 440px;
}
.ltop2{
	border-bottom: 2px solid #C10D0C;
	width: 570px;
	height: 35px;
	margin-top: 60px;	
}
.biao1{
	width: 570px;
	text-align: left;
	border: 1px solid #D9D9D9;	
}
.biao1  th{	
	height: 34px;line-height: 34px;
	height: 34px;line-height: 34px;
	background: url(http://ozcpgl12w.bkt.clouddn.com/table.png) repeat-x;
	border-right: 1px solid #D8D8D8;
}
table>tr:nth-child(odd){
	background-color: #F7F7F7;
}
.biao1 tr{
	height: 30px;
}
.wxh{
	background: url(http://ozcpgl12w.bkt.clouddn.com/icon.png) no-repeat;
	background-position: 0px -186px;
	width: 54px;height: 24px;float: left;
}
.zan1{
	background: url(http://ozcpgl12w.bkt.clouddn.com/table.png) no-repeat;
	background-position: 0px -103px;
	width: 17px;height: 17px;float: left;margin-top: 3px;
}
.ha{
	background: url(http://ozcpgl12w.bkt.clouddn.com/button2.png) no-repeat;
	height: 33px;line-height: 33px;float: left;display: inline-block;
}
.shui{
	background-position: 0 -630px;overflow: hidden;
	float: left;height: 35px;line-height: 35px;
	margin-top: -3px;text-decoration: none;
}
.lan3 a:hover{
	text-decoration: none;
}
.shui span{
	margin-left: 32px;color: white;vertical-align: middle;
}
.lan3{
	width: 423px;
}
.shui1{
	background-position: 0px -1588px;
	width: 32px;
	margin-right: 5px;
}
.shui2{
	background-position: 0px -1063px;
	width: 54px;
	margin-right: 5px;
}
.shui6{	
	background-position: -243px -1106px;
	width: 10px;margin-left: -10px;	
	}
.uu{
	margin-left: 25px;
}
.shui3{
	background-position: 0px -1268px;width: 54px;
	margin-right: 5px;
}
.shui4{
	background-position: 0px -2805px;width: 54px;
	margin-right: 5px;
}
.shui5{
	background-position: 0px -1508px;width: 70px;
	margin-right: 5px;
}
.hhh{
	border: 1px solid white;
	width: 200px;
	height: 300px;margin: 0 auto;
}
.xia1{
	border-top: 1px solid  #CCCCCC;
	width: 200px;
	margin-top: 5px;height: 60px;
	padding-top: 12px;
}
.xia1 a{	
	display: block;height: 48px;
}
.le{
	background: url(http://ozcpgl12w.bkt.clouddn.com/sprite.png) no-repeat;
	background-position: 0px -391px;float: left;width: 42px;margin-left: 15px;
}
.le1{
	background: url(http://ozcpgl12w.bkt.clouddn.com/sprite.png) no-repeat;
	background-position: -70px -391px;float: left;width: 63px;margin-left: 15px;
}
.le2{
	background: url(http://ozcpgl12w.bkt.clouddn.com/sprite.png) no-repeat;
	background-position: -160px -391px;float: left;width: 45px;margin-left: 15px;
}
.happy1{
	margin:8px 0;margin-left: 10px;font-size: 10px;
}
.like{
	border: 1px solid white;
	width: 200px;
	height: 130px;margin: 0 auto;
	margin-top: 15px;
}
.people{
	width: 200px;
}
.people ul{
	display: flex;
	justify-content: space-around;
	flex-flow: row wrap;
}
.people ul li{
	list-style: none;
	margin-left: 3px;
	margin-top: 8px;
}
.people ul li img{
	width: 40px;
	height: 40px;
}
.like span{
	font-size: 10px;
	font-weight: bold;
	margin-left: 5px;
}
</style>