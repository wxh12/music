<template>
	<div>
		<v-header></v-header> 
		<v-nav></v-nav>
		<div id="singer">		
     		<div class="geshou">
				<div id="singer_left">
					<div id="singer_left_commend">
						<h3 class="txt">推荐</h3>
						<ul class="li">
							<li><span>推荐歌手</span></li>
							<li><span>入驻歌手</span></li>
						</ul>
					</div>
					<div id="singer_left_area" v-for="i in area">
						<h3 class="txt1">{{i.title}}</h3>
						<ul class="li1">
							<li><span>{{i.line1}}</span></li>
							<li><span>{{i.line2}}</span></li>
							<li><span>{{i.line3}}</span></li>
						</ul>
					</div>
				</div>
				<div id="singer_right">
				<!--推荐歌手  -->
					<div v-for="i in right">
						<div id="singer_right_title">
							<h3 class="txt3">{{i.name}}</h3>
							<a href="" class="gengduo">更多&gt;</a>
						</div>
						<div id="singer_right_con">
							<ul class="li3">
								<li v-for="i in singercon">
									<div class="boxx">
										<router-link to="album"><img :src="i.src"/></router-link>
									</div>
									<p class="txt4"><a>{{i.name}}</a><span></span></p>
								</li>
							</ul>
						</div>						
					</div>
				<!-- 热门歌手 -->
				</div>
			</div>		
		</div>
		<v-footer></v-footer>
	</div>
</template>

<script type="text/javascript">
import header from './home'
import nav from './Found'
import footer from './Footer'
	export default{
		name:'singer',
		data (){
			return{
				area:[
					{title:'华语',line1:'华语男歌手',line2:'华语女歌手',line3:'华语组合/乐队'},
					{title:'欧美',line1:'欧美男歌手',line2:'欧美女歌手',line3:'欧美组合/乐队'},
					{title:'日本',line1:'日本男歌手',line2:'日本女歌手',line3:'日本组合/乐队'},
					{title:'韩国',line1:'韩国男歌手',line2:'韩国女歌手',line3:'韩国组合/乐队'},
					{title:'其他',line1:'其他男歌手',line2:'其他女歌手',line3:'其他组合/乐队'},
				],
				right:[
					{name:'入驻歌手'},
					{name:'热门歌手'}
				],
				singercon:[
					{src:'http://p3.music.126.net/F9asgcj7C7qSl_je9XDvRw==/603631883675241.jpg?param=130y130',name:"张惠妹"},
					{src:'http://p3.music.126.net/7BUW9dnqOMF1dn3ioKJOMg==/109951162820707114.jpg?param=130y130',name:"Fine乐团"},
					{src:'http://p3.music.126.net/TiRAIiIihOgtBgYB6DZRXA==/109951162916034289.jpg?param=130y130',name:"万晓利"},
					{src:'http://p3.music.126.net/w_UWOls2uCkFN_U62788Xg==/18806046882229308.jpg?param=130y130',name:"赵雷"},
					{src:'http://p3.music.126.net/NDsX060FnCtiDMZN-c_9Gw==/3438172872737957.jpg?param=130y130',name:"王三溥"},
					{src:'http://p3.music.126.net/TQZGbxp-xnJla-q7ii9z0A==/1364493985498917.jpg?param=130y130',name:"吴莫愁"},
					{src:'http://p4.music.126.net/aSFrKm-igpxlvzYrdJOMPQ==/279275953476688.jpg?param=130y130',name:"洪启"},
					{src:'http://p3.music.126.net/6Bk5th_qi4DlWSMLJzOt8w==/255086697661219.jpg?param=130y130',name:"李霄云"},
					{src:'http://p4.music.126.net/YOmW5GdOWA44oascVdjfUw==/280375465100304.jpg?param=130y130',name:"孙楠"},
					{src:'http://p3.music.126.net/1GIlkxKmvKu66ufU83FyvA==/31885837222663.jpg?param=130y130',name:"老狼"},
				],
			}
		},
		mounted(){

		},
		components:{
    		'v-header':header,
  			'v-nav':nav,
			'v-footer':footer,
		},
		methods:{

		}
	}
</script>

<style type="text/css" scoped="scoped">
	*{
		color: #666;
	}
	#singer{
		width: 100%;
		height: 1000px;
		background: #f5f5f5;
	}
	.geshou{
		margin: 0 auto;
		width: 980px;
	}
/*----------------左侧--------------------*/
	#singer_left{
		border:1px solid #ddd;
		width: 170px;
		height: 1000px;	
		background:#f9f9f9; 
		padding:10px;
		float: left;
	}
	#singer_left #singer_left_commend{
		margin-top: 30px;
	}
	#singer_left #singer_left_commend .txt{
		height: 25px;
	    font-size: 16px;
	    font-family: "Microsoft Yahei";
		text-align: left;
		color: #333!important;
	}
	#singer_left #singer_left_commend .li{
		display: block;
		border-bottom: 1px solid #ddd;
		padding-bottom: 10px;
		list-style: none;
	}
	#singer_left #singer_left_commend .li li{
		margin:0 auto;
		font-size: 12px;
		width: 130px;
		height: 30px;
		padding-left: 30px;
		line-height: 34px;
		cursor: pointer;
	}
	#singer_left ul li:first-child{
		background:url(http://ozcpgl12w.bkt.clouddn.com/singer.png);
		background-position: 0px 2px; 
	}
	#singer_left ul li:last-child{
		background:url(http://ozcpgl12w.bkt.clouddn.com/singer.png);
		background-position: 0px -28px; 
	}

	#singer_left #singer_left_area{
		margin-top: 10px;
	}
	#singer_left #singer_left_area .txt1{
		height: 25px;
	    padding-left: 14px;
	    font-size: 16px;
	    font-family: "Microsoft Yahei";
		text-align: left;
		color: #333!important;
	}
	#singer_left #singer_left_area .li1{
		display: block;
		border-bottom: 1px solid #ddd;
		padding-bottom: 10px;
		list-style: none;
	}
	#singer_left #singer_left_area .li1 li{
		margin:0 auto;
		font-size: 12px;
		width: 130px;
		height: 30px;
		padding-left: 30px;
		line-height: 34px;
		cursor: pointer;
		background:url(http://ozcpgl12w.bkt.clouddn.com/singer.png)no-repeat;
		background-position: 0px -29px; 
	}
/*---------------------右侧-----------------*/
	#singer_right{
		border-right:1px solid #ddd;
		width:810px;
		height: 1000px;	
		background:#fff;
		padding: 0px 30px 30px 30px;
		float: left;
	}
	#singer_right #singer_right_title{
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
		border-bottom:2px solid red;
		padding-bottom: 10px;
	}
	#singer_right #singer_right_title .gengduo{
		margin-top: 30px;
		height: 30px;
		color:#555;
		font-size: 12px;
		line-height:30px;
	}
	#singer_right #singer_right_con{
	}
	#singer_right #singer_right_con .li3{
		display: flex ;
		justify-content: space-between ;
		flex-flow: row wrap; 
		list-style: none ;
	}
	#singer_right #singer_right_con .li3 li{
		margin-top: 10px;
		width: 130px;
		height: 150px;
	}
	#singer_right #singer_right_con .li3 li .boxx{
		height: 130px;
	}
	#singer_right #singer_right_con .li3 li .txt4{
		display: flex;
		justify-content: space-between;
	}
	#singer_right #singer_right_con .li3 li .txt4 a{
		display: inline-block;
		font-size: 12px;
		color:#000;
		margin-left: 2px;
		line-height: 20px;
	}
	#singer_right #singer_right_con .li3 li .txt4 a:hover{
		text-decoration: underline;
	}
	#singer_right #singer_right_con .li3 li .txt4 span:last-child{
		display: inline-block;
		width: 20px;
		height: 20px;
		background:url(http://ozcpgl12w.bkt.clouddn.com/icon.png)no-repeat;
		background-position: 2px -738px; 
	}
</style>