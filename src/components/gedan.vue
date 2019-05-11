<template>
	<div>
		<v-header></v-header> 
	 	<v-nav></v-nav>
	 	<div class="sing">
	 		<div class="sleft">
	 			<div class="sleft1">
	 				<img :src="y.albumcover"/>
	 			</div>
	 			<div class="sleft2">
	 				<div class="boo">
	 					<div class="wang"></div>
	 					<div><span class="ti" id="geming">{{y.songname}}</span></div>
	 				</div>
	 				<div class="suo" ><span>歌手:</span>
	 					<router-link to='/singer'>
	 						<span class="lun" id="geshou" @click="singer1(y)">{{y.author}}</span>
	 					</router-link>
	 				</div>
	 				<div class="suo"><span>所属专辑:</span>
	 					<router-link to='/list'>
	 						<span @click="Newdata1(y)">{{y.album}}</span>
	 					</router-link>	 					
	 				</div>
	 				<div class="lan1">
	 					<a href="javascript:void(0)" class="butt her" @click="play(y)"><span>播放</span></a><a  href="# " class="butt1 her"></a>	 					
	 					<a href="javascript:void(0)" class="butt2 her" @click="post1"><span class="bb" @click="tianjia(y)">收藏</span></a><a class="butt6 her"></a>
	 					<a href="javascript:void(0)" class="butt3 her"><span class="bb">分享</span></a><a class="butt6 her"></a>
	 					<a href="javascript:void(0)" class="butt4 her"><span class="bb">下载</span></a><a class="butt6 her"></a>
	 					<a href="javascript:void(0)" class="butt5 her"><span class="bb">(3307)</span></a><a class="butt6 her"></a>
	 				</div>
	 			</div>
	 		</div>
	 		<div class="sright">
	 			<div style="width: 200px; margin: 0 auto;">
		    		<img src="http://ozcpgl12w.bkt.clouddn.com/ad.bid.jpg" style="width: 200px;"/>
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
	 			<div class="xiazai">
			    	<div class="happy"><b>网易云音乐多端下载</b></div>
			    	<div class="xia">
			    		<a class="xiazai1"></a><a class="xiazai2"></a><a class="xiazai3"></a>
			    	</div>			   		
			    </div>
	 		</div>
	 	</div>
	 	<v-footer></v-footer>
	 	<!--<v-aud></v-aud>-->
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
				s:[],
				ss:[],
			}
		},
		components:{
    		'v-header':header,
  			'v-nav':nav,
			'v-footer':footer,
			'v-aud':aud,
		},
		computed:{
			y(){//全部数据
				//return JSON.parse(sessionStorage.obj)
				return this.$store.state.pp					
			}

		},
		methods:{			
			Newdata1:function(y){
				console.log(y)
				this.$store.commit('hello',y)								
			},
			singer1:function(y){
				console.log(y)
				this.$store.commit('hello2',y)								
			},
			play:function(y){//传到播放器 bofang
				console.log(y)
				this.$store.commit('hello8',y)								
			},
			tianjia:function(y){//传到播放器 
				console.log(y)
				this.$store.commit('soucang',y)								
			},
			/*将收藏数据传到数据库*/
			post1:function(){
				var This = this;
				var author = This.y.author
				var songname =This.y.songname
				console.log(songname)
				function same(){	
					for(var i=0; i<This.ss.length;i++){
					if(songname===This.ss[i].songname){
						return true;break;
						}					
					}									
				}
				var flag = false; 
				if(same()){  
			       alert('已收藏');
			      }
				else{
					flag = true;  	
					}
				if(flag==true){
					this.$http.post('http://localhost:3000/a',{author:author,songname:songname}).then(function(res){		 			
		 			})									
				}
				
			}
		},
		mounted(){	
		 	var This = this;
		 	this.$http.get('http://localhost:3000/peo').then(function(res){
		 		This.s = res.data
		 	})	 				 	
		 	this.$http.get('http://localhost:3000/shoucang').then(function(res){
		 		This.ss = res.data
		 	})
		},
	}
</script>

<style>
body{
	background-color: #F2F2F2;
}
.sing{
	width: 900px;height: 600px;
	margin: 0 auto;
	background-color: white;
}
.sleft{
	width: 690px;height: 600px;
	padding: 47px 30px 40px 39px;
	border-right: 1px solid #E1E1E1;
	float: left;
}
.sright{
	width: 200px;height: 600px;
	padding: 10px 40px 40px 30px;
	margin-left: 665px;
}
.sleft1{
	width: 205px;height: 205px;
	float: left;	
	background: url(http://ozcpgl12w.bkt.clouddn.com/coverall.png) no-repeat;
	background-position: -140px -580px;
}
.sleft1 img{
	width: 130px;height: 130px;
	margin-top: 38px;margin-left: 38px;
	border-radius: 100%;
}
.sleft2{
	margin-left: 245px;
	border: 0px solid red;
}
.sleft2 .ti{
	font-size: 24px;color: black;
	height: 26px;line-height: 26px;
}
.sleft2 .lun{
	font-size: 16px;
	color: #0C73C2;
}
.sleft2 div{
	margin-bottom: 10px;
}
.sleft2 .boo{
	height: 26px;line-height: 26px;	
}
.suo{
	color: #999999;font-size: 16px;	
	height: 26px;line-height: 26px;
}
.wang{
	background: url(http://ozcpgl12w.bkt.clouddn.com/icon.png) no-repeat;
	background-position: 0px -463px;
	width: 54px;height: 24px;float: left;
}
.her{
	background: url(http://ozcpgl12w.bkt.clouddn.com/button2.png) no-repeat;
	height: 33px;line-height: 33px;float: left;display: inline-block;
}
.butt{
	background-position: 0 -630px;overflow: hidden;
	float: left;height: 35px;line-height: 35px;
	margin-top: -3px;text-decoration: none;
}
.lan1 a:hover{
	text-decoration: none;
}
.butt span{
	margin-left: 32px;color: white;vertical-align: middle;
}
.lan1{
	width: 423px;
}
.butt1{
	background-position: 0px -1588px;
	width: 32px;
	margin-right: 5px;
}
.butt2{
	background-position: 0px -1063px;
	width: 54px;
	margin-right: 5px;
}
.butt6{	
	background-position: -243px -1106px;
	width: 10px;margin-left: -10px;	
	}
.bb{
	margin-left: 25px;
}
.butt3{
	background-position: 0px -1268px;width: 54px;
	margin-right: 5px;
}
.butt4{
	background-position: 0px -2805px;width: 54px;
	margin-right: 5px;
}
.butt5{
	background-position: 0px -1508px;width: 70px;
	margin-right: 5px;
}
.xiazai{
	border: 0px solid white;
	width: 200px;
	height: 200px;margin: 0 auto;
}
.xia{
	border-top: 1px solid  #CCCCCC;
	width: 200px;
	margin-top: 5px;height: 60px;
	padding-top: 12px;
}
.xia a{	
	display: block;height: 48px;
}
.xiazai1{
	background: url(http://ozcpgl12w.bkt.clouddn.com/sprite.png) no-repeat;
	background-position: 0px -391px;float: left;width: 42px;margin-left: 15px;
}
.xiazai2{
	background: url(http://ozcpgl12w.bkt.clouddn.com/sprite.png) no-repeat;
	background-position: -70px -391px;float: left;width: 63px;margin-left: 15px;
}
.xiazai3{
	background: url(http://ozcpgl12w.bkt.clouddn.com/sprite.png) no-repeat;
	background-position: -160px -391px;float: left;width: 45px;margin-left: 15px;
}
.happy{
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