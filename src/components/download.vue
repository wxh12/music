<template>
	<div>
		<v-header></v-header> 
		<div class="hongtiao"></div>
		<div id="downloadtop">
			<div>
				<div id="downfirst">
					<el-carousel :interval="5000" arrow="always" height="480px" trigger='click'>
						<el-carousel-item v-for="i in s1" >
							<div id='downdiv'></div>
						</el-carousel-item>
					</el-carousel>
				</div>
				<div id="downfirstR">
					<img src="http://ozcpgl12w.bkt.clouddn.com/QQ%E5%9B%BE%E7%89%8720171128113433.png" />
				</div>
			</div>
		</div>
		<div class="downmes">
			<div id="downh1">
				<div>
					<h3 class="downtit">千万曲库 首首CD音质</h3>
					<p>囊括百万无损SQ音乐，你在用手机听歌时，也能感受到纤毫毕现的CD音质，更能免费离线收听</p>
				</div>
				<div>
					<img src="http://ozcpgl12w.bkt.clouddn.com/b1.jpg" />
				</div>
			</div>
		</div>
		<div class="downmes">
			<div id="downh2">
				<div>
					<img src="http://ozcpgl12w.bkt.clouddn.com/b2.jpg" />
				</div>
				<div>
					<h3 class="downtit">千位明星 亲自推荐音乐</h3>
					<p>陶喆，羽泉等千位明星已入驻，亲自创建私房歌单，录制独家DJ节目，推荐他们心中的好音乐</p>
				</div>
			</div>
		</div>
		<div class="downmes">
			<div id="downh3">
				<div>
					<h3 class="downtit">社交关系 发现全新音乐</h3>
					<p>你可以关注明星、DJ和好友，通过浏览他们的动态、收藏和分享，发现更多全新好音乐</p>
				</div>
				<div>
					<img src="http://ozcpgl12w.bkt.clouddn.com/b3.jpg" />
				</div>
			</div>
		</div>
		<div class="downmes">
			<div id="downh4">
				<div>
					<img src="http://ozcpgl12w.bkt.clouddn.com/b4.jpg" />
				</div>
				<div>
					<h3 class="downtit">手机电脑 歌单实时同步</h3>
					<p>只要一个帐号，你就可以同步在手机、电脑上创建、收藏的歌单，随时随地畅享好音乐</p>
				</div>
			</div>
		</div>
		<div class="downmes">
			<div id="downh5">
				<div>
					<h3 class="downtit">听歌识曲 助你疯狂猜歌</h3>
					<p>歌曲很动听却不知道歌名，歌名在嘴边却想不起来……用听歌识曲功能，几秒钟就知道歌名</p>
				</div>
				<div>
					<img src="http://ozcpgl12w.bkt.clouddn.com/b5.jpg" />
				</div>
			</div>
		</div>
		<div id="downtype">
			<div>
				<h3>网易云音乐</h3>
				<p>下载网易云音乐客户端，随时随地畅享动听好音乐</p>
			</div>
			<div>
				<div class="downbottom" v-for="i in s2">
					<div><img :src="i.img" /></div>
					<span>{{i.type}}</span>
				</div>
			</div>
		</div>
		<div id="code">
			<img src="http://ozcpgl12w.bkt.clouddn.com/code.png "/>
			<p>扫描二维码下载</p>
		</div>
		<v-footer></v-footer>
		<!--<v-aud></v-aud>-->
	</div>
</template>

<script>
	import $ from 'jquery'
	import header from './home'
	import footer from './Footer'
	import aud from './Audio'
	export default{
		name:'download',
		data(){
  			return{
  				s1:[],s2:[], 				
  			}
  		},
  		mounted(){
  			$('.cor').css('display','none');
			$('#topnavL ul li').css({'background': '#242424','color': '#CCCCCC'});
			$('#topnavL ul li:eq(5)').css({'background': 'black','color': 'white'});
			$('.cor:eq(5)').css('display','inline');
			var This = this;
			this.$http.get('http://localhost:3000/loadsql').then(function(res){
		 		This.s1 = res.data
			})
			this.$http.get('http://localhost:3000/loadtwo').then(function(res){
		 		This.s2 = res.data
			})
  		},
  		methods:{
  		},
  		components:{
  			'v-header':header,
  			'v-footer':footer,
  			'v-aud':aud,
  		}
  	}
</script>

<style>
	body{
		background-color: #F2F2F2;
	}
	.hongtiao{
		height: 5px;
		width: 100%;
		background-color: #C20C0C;
	}
	#downloadtop{
		height: 483px;
		background-image: url(http://ozcpgl12w.bkt.clouddn.com/bg.jpg);
		background-position: center;
	}
	#downloadtop>div{
		width: 980px;
		margin: 0px auto;
		display: flex;
	}
	#downfirst{
		width: 580px;
	}
	#downfirst .el-carousel__item:nth-child(3) {
		height: 480px;
		background-image: url(http://ozcpgl12w.bkt.clouddn.com/banner-aos.png);
		background-position: center;
		background-repeat: no-repeat;		
	}
	#downfirst .el-carousel__item:nth-child(4) {
		height: 480px;
		background-image: url(http://ozcpgl12w.bkt.clouddn.com/banner-ios.png);
		background-position: center;
		background-repeat: no-repeat;
	}
	#downfirst .el-carousel__item:nth-child(5) {
		height: 480px;
		background-image: url(http://ozcpgl12w.bkt.clouddn.com/banner-pc.png);
		background-position: center;
		background-repeat: no-repeat;
	}
	#downfirst .el-carousel__container>button{
		display: none;
	}
	#downfirst .el-carousel__button{
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}
	#downfirst .el-carousel__indicators{
		left: 50px;
	}
	#downfirstR{
		position: relative;
		overflow: hidden;
		width: 360px;
		height: 200px;
		transform: translate(40px,180px);
	}
	#downfirstR>img{
		position: absolute;
		transform: translate(-10px,-20px);
	}
	.downmes:nth-child(2n){
		height: 438px;
		background: white;
		border-bottom: 1px solid #e3e3e3;
	}
	.downmes>div{
		width: 908px;
		margin: 0px auto;
		display: flex;
		padding-top: 120px;
		justify-content: space-between;
	}
	.downmes>div>div:last-child{
		vertical-align: middle;
	}
	.downmes:nth-child(2n+1){
		height: 438px;
		background: #f8f8f8;
		border-bottom: 1px solid #e3e3e3;
	}
	.downtit{
		font-size: 40px;
	    font-weight: normal;
	    padding: 45px 0 5px 0;
	}
	.downtit+p{
		width: 390px;
		font-size: 16px;
	    color: #666;
	    line-height: 24px;
	}
	#downh1{
		padding-top: 120px;
	}
	#downh2{
		padding-top: 106px;
	}
	#downh3{
		padding-top: 72px;
	}
	#downh4{
		padding-top: 95px;
	}
	#downh5{
		padding-top: 53px;
	}
	#downtype{
		text-align: center;
		height: 438px;
		background: #f8f8f8;
		border-bottom: 1px solid #e3e3e3;
	}
	#downtype>div{
		width: 980px;
		margin: 0px auto;
	}
	#downtype h3{
		font-size: 26px;
		font-weight: normal;
    	padding: 45px 0 5px 0;
    	margin-top: 0px;
	}
	#downtype p{
		font-size: 12px;
		color: #999;
	}
	#downtype>div:nth-child(2){
		display: flex;
		justify-content: space-between;
	}
	.downbottom{
		margin-top: 80px;
	}
	.downbottom>div{
		height: 120px;
		margin-left: -5px;
	}
	.downbottom>span{
		width: 124px;
		height: 31px;
		display: inline-block;
		line-height: 31px;
		font-size: 12px;
		color: white;
		padding-left: 5px;
		background-image: url(http://ozczx4lnh.bkt.clouddn.com/sprite.png);
	}
	.downbottom:nth-child(1)>span{
		background-position: 0px -464px;
	}
	.downbottom:nth-child(1)>span:hover{
		cursor: pointer;
		background-position: 0px -495px;
	}
	.downbottom:nth-child(2)>span{
		background-position: 0px -526px;
	}
	.downbottom:nth-child(2)>span:hover{
		cursor: pointer;
		background-position: 0px -557px;
	}
	.downbottom:nth-child(3)>span{
		background-position: 0px -526px;
	}
	.downbottom:nth-child(3)>span:hover{
		cursor: pointer;
		background-position: 0px -557px;
	}
	.downbottom:nth-child(4)>span{
		background-position: 0px -588px;
	}
	.downbottom:nth-child(4)>span:hover{
		cursor: pointer;
		background-position: 0px -619px;
	}
	.downbottom:nth-child(5)>span{
		background-position: 0px -402px;
	}
	.downbottom:nth-child(5)>span:hover{
		cursor: pointer;
		background-position: 0px -433px;
	}
	#code{
		position: fixed;
		margin-top: 390px;
		margin-left: 1220px;
		background: white;
		opacity: 0.75;
		top: 0px;
		box-shadow: 0 0 5px #666;
	}
	#code>p{
		font-size: 12px;
		text-align: center;
		padding-bottom: 3px;
	}
</style>