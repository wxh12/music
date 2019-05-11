<template>
	<div>
		<v-header></v-header> 
	 	<v-nav></v-nav>
		<div class="max">
			<div class="left2">
				<h2>{{author}}</h2>
				
				<div class="time">
					<img :src="singerimg" />
				</div>
				<div class="hot">
					<ul class="mv">
						<li class="act"><a href="javascript:void(0);">热门单曲</a></li>
						<li><a href="javascript:void(0);">所有专辑</a></li>
						<li><a href="javascript:void(0);">相关MV</a></li>
						<li><a href="javascript:void(0);">歌手介绍</a></li>
					</ul>
				</div>
				<div class="lan2">
	 					<a href="javascript:void(0)" class="eeg hers"><span>播放</span></a><a  href="# " class="eeg1 hers"></a>	 					
	 					<a href="javascript:void(0)" class="eeg2 hers"><span class="tt">收藏热门</span></a><a class="eeg6 hers"></a>
	 					<a href="javascript:void(0)" class="eeg3 hers"><span class="tt">分享</span></a><a class="eeg6 hers"></a>
	 					<a href="javascript:void(0)" class="eeg4 hers"><span class="tt">下载</span></a><a class="eeg6 hers"></a>
	 					<a href="javascript:void(0)" class="eeg5 hers"><span class="tt">(3307)</span></a><a class="eeg6 hers"></a>
	 				</div>
				<div class="ltop3">
    				<div class="lsp3">
    					<span></span>
    					<span>歌曲列表</span>
    				</div>
    		   	 	<div class="m4">
    		  	    	<span>播放2267460次</span>
    		    	</div>
    		    
            	</div>
            	<table class="biao2" border="0px">       	
        			<th><div style="width: 80px;"></div></th>
        			<th><div style="width: 225px;">歌曲标题</div></th>
        			<th><div style="width: 90px;">时长</div></th>
        			<th><div style="width: 105px;">专辑</div></th>
        			<th><div style="width: 110px;">歌手</div></th>
        	
        			<tr v-for='(e,index) in z'>
        				<td style="width: 80px;">{{index+1}}  </td>
        				<td @click="newdata2(e)" style="width: 225px;"><router-link to='/gedan'>{{e.songname}}</router-link></td>
        				<td style="width: 90px;">{{h.name}}</td>
        				<td style="width: 105px;">{{e.album}}</td>
        				<td style="width: 110px;">{{e.author}}</td>
        			</tr>
       	 		</table>
       	 	
		    </div>
		    <div class="right2">
		    	<div style="width: 210px; margin: 0 auto;padding-top: 5px;">
		    		<img src="http://ozcpgl12w.bkt.clouddn.com/ad.bid.jpg" style="width: 210px;"/>
		    	</div>
		    	<div class="like">
		    		<span>喜欢这个歌手的人</span>
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
				h:{name:'04:12'},
				s:[],
				author:[],
				music:[],
				a:[],
				singerimg:[],
			}
		},
		computed:{
			z(){
				//return JSON.parse(sessionStorage.obj)
				return this.$store.state.aa
				//console.log(z)
			}			
		},
		components:{
    		'v-header':header,
  			'v-nav':nav,
			'v-footer':footer,
			'v-aud':aud,
		},
		methods:{
			newdata2:function(f){//传到歌单					
				this.$store.commit('hello1',f)
				console.log(f)	
			}
		},	
		mounted(){	
		 	var This = this;
		 	this.$http.get('http://localhost:3000/peo').then(function(res){
		 		This.s = res.data
		 	})
		 	this.$http.get('http://localhost:3000/mysql').then(res=>{
					var aut=[];
					for(let i=0;i<res.data.length;i++){
						if(res.data[i].author == this.z[0].author){
							aut.push(res.data[i]);
							
						};
					};
				this.y = aut
				this.music = this.y[0].albumcover
				this.author = this.y[0].author
				this.singerimg = this.y[0].singerimg
				});	
		}
	}	
</script>

<style>
body{
		background-color: #F2F2F2;
	}
.max{
		width: 980px;
		height: 2600px;
		background-color: white;
		margin: 0 auto;
	}
.left2{
		width:709px ;
		height: 2600px;
		padding: 10px 30px 0 39px;
		border-right: 1px solid #E1E1E1;
		float: left;
		
	}
.right2{
		width: 270px;
		height: 2600px;	
		margin-left: 709px;	
	}
.time{
		width:640px ;	
		height: 300px;
		padding-top: 15px;
	}
.time img{
		width:640px ;	
		height: 300px;
		padding-top: 10px;
	}
.hot{
	width:640px ;
	height: 39px;	
	margin-top: 16px;
	}
.hot .mv{
	width:640px ;height: 39px;
	background: url(http://ozcpgl12w.bkt.clouddn.com/tab.png) ;
	background-position: 0 0px;
	border: 1px solid #CCCCCC ;
	
}
.hot .mv li{
	display: inline-block;
	list-style: none;
	width:138px;height: 39px;line-height: 39px;
	text-align: center;
	text-decoration: none;
	margin-left: 0px;margin-right: -4px;
}
.hot .mv li:hover{
	display: inline-block;
	list-style: none;
	background: url(http://ozcpgl12w.bkt.clouddn.com/tab.png) ;
	background-position: 0 -45px;
	width:138px;height: 38px;
	margin-left: 0px;
	text-decoration: none;
}
.hot .mv li a{
	text-decoration: none;
}
.hot .mv  .act{
	display: inline-block;
	list-style: none;
	background: url(http://ozcpgl12w.bkt.clouddn.com/tab.png) ;
	background-position: 0 -90px;
	width:138px;height: 39px;
	margin-left: 0px;text-decoration: none;
}
.paisong{
		width: 208px;height: 208px;
		float: left;
	}
.paisong img{
		width: 208px;height: 208px;
	}
.zhuan2{
		width: 300px;height: 240px;
		margin-left: 230px;
	}
.baioqian{
		margin-top: 20px;margin-bottom: 20px;
	}
.lsp3{
	height: 35px;line-height: 35px;	
	float: left;
}
.lsp3 span{
	font-size: 24px;
	color: black;
}
.m4 span{
    color: black;opacity: 0.6;	
    display: block;
    height: 35px;line-height: 35px;
    width: 200px;margin-left: 440px;
}
.ltop3{
	border-bottom: 2px solid #C10D0C;
	width: 640px;
	height: 35px;
	margin-top: 10px;
	
}
.biao2{
	width: 640px;
	text-align: left;
	border: 1px solid #D9D9D9;
}
.biao2  th{
	height: 34px;line-height: 34px;
	background: url(http://ozcpgl12w.bkt.clouddn.com/table.png) repeat-x;
	background-position: 0 0;
	border-right: 1px solid #D8D8D8;
}
table>tr:nth-child(odd){
	background-color: #F7F7F7;
}

.biao2 tr{
	height: 30px;
}
.wxh1{
	background: url(http://ozcpgl12w.bkt.clouddn.com/icon.png) no-repeat;
	background-position: 0px -243px;
	width: 54px;height: 24px;float: left;
}
.zan1{
	background: url(http://ozcpgl12w.bkt.clouddn.com/table.png) no-repeat;
	background-position: 0px -103px;
	width: 17px;height: 17px;float: left;margin-top: 3px;
}
.hers{
	background: url(http://ozcpgl12w.bkt.clouddn.com/button2.png) no-repeat;
	height: 33px;line-height: 33px;float: left;display: inline-block;
}
.eeg{
	background-position: 0 -630px;overflow: hidden;
	float: left;height: 35px;line-height: 35px;
	margin-top: -3px;text-decoration: none;
}
.lan2 a:hover{
	text-decoration: none;
}
.eeg span{
	margin-left: 32px;color: white;vertical-align: middle;
}
.lan2{
	width: 400px;height: 35px;
	margin-top: 20px ;margin-bottom: 5px;
}
.eeg1{
	background-position: 0px -1588px;
	width: 32px;
	margin-right: 5px;
}
.eeg2{
	background-position: 0px -1063px;
	width: 90px;
	margin-right: 5px;
}
.eeg6{	
	background-position: -243px -1106px;
	width: 10px;margin-left: -10px;	
	}
.tt{
	margin-left: 25px;
}
.eeg3{
	background-position: 0px -1268px;width: 54px;
	margin-right: 5px;
}
.eeg4{
	background-position: 0px -2805px;width: 54px;
	margin-right: 5px;
}
.eeg5{
	background-position: 0px -1508px;width: 70px;
	margin-right: 5px;
}
.xiazai{
	border: 1px solid white;
	width: 200px;
	height: 300px;margin: 0 auto;
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
	margin-top: 10px;
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