<template>
	<div>
        <div class="r-deng">
            <div class="bei">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
            <button class="beijing" type="button" @click="dl">用户登录</button>
        </div>
        <div class="r-geshou">
            <div class="tiao">
                <div class="box5"><b>入住歌手</b></div>
                <div class="box6"><h6>查看全部></h6></div>
            </div>
        </div>
        <ul class="bang">
            <li v-for="(i,index) in s"><div class="box7"><img :src="i.img"/></div> 
                <div class="box8"><h5>{{i.singer}}</h5><p>{{i.type}}</p></div>
            </li>                		
        </ul>
        <button type="button" class="shen"><b>申请成为网易音乐人</b></button>
        <div class="zhubo"><b>热门主播</b></div>
        <ul class="zhu">
            <li><div class="box9"><img src="http://ozcpgl12w.bkt.clouddn.com/1407374893913311.jpg"/></div>
                <div class="box10"><h6>陈立</h6><p>心理学家 美食家陈立教授</p></div>
            </li>
            <li><div class="box9"><img src="http://ozcpgl12w.bkt.clouddn.com/7942872001461517.jpg"/></div>
                <div class="box10"><h6>DJ艳秋</h6><p>著名音乐节目主持人</p></div>
            </li>
            <li><div class="box9"><img src="http://ozcpgl12w.bkt.clouddn.com/3427177769086282.jpg"/></div>
                <div class="box10"><h6>国家大剧院古典音乐频道</h6><p>国家大剧院古典音乐官方</p></div>
            </li>
            <li><div class="box9"><img src="http://ozcpgl12w.bkt.clouddn.com/3130309604335651.jpg"/></div>
                <div class="box10"><h6>谢谢收听</h6><p>南京电台主持人王馨</p></div>
            </li>
            <li><div class="box9"><img src="http://ozcpgl12w.bkt.clouddn.com/3440371884651965.jpg"/></div>
                <div class="box10"><h6>DJ晓苏</h6><p>独立DJ CRI环球广播..</p></div>
            </li>
        </ul>
    </div>
</template>

<script>
	import $ from 'jquery'
	export default{
		name:'center',
		data(){
			return{					
				first:[],
			    it:true	,
			    him:false,
			    g:[],
			    l:[],
			    zhuanji:[],
			    s:[]
			}
		},
		methods:{	
			Newdata:function(index){//传数据
				console.log(this.zhuanji)
				var index = this.zhuanji[index]				
				this.$store.commit('hello',index)				
			},
			dl:function(){
				this.$store.state.login=true
			}
		},
		 mounted(){	
		 	var This = this;
		 	this.$http.get('http://localhost:3000/rightsql').then(function(res){
		 		This.s = res.data
		 		
		 	})
		},
		computed:{
			login(){
				return this.$store.state.login
			}
		},
			
	}	
</script>

<style>
	.r-deng{
		width: 250px;height: 126px;
		background: url(http://ozcpgl12w.bkt.clouddn.com/index.png) no-repeat;
		background-position: 0 0;		
	}
	.r-deng .bei{
		padding-top: 20px;font-size: 12px;color: #333;
		text-align: center;	
	}
	.r-deng .beijing{
		color: white;margin-left: 75px;
		margin-top: 25px;
		background: url(http://ozcpgl12w.bkt.clouddn.com/index.png) no-repeat;
		background-position: -110px -195px;
		width: 100px;text-align: center;
		height: 31px;line-height: 31px;
		text-shadow: 0 1px 0 #8a060b;
		border: 0px;outline: 0px;
	}
	.r-geshou{
		width: 250px;margin: 0 auto;
	}
	.r-geshou .tiao{
		width: 240px;height: 24px;
		border-bottom: 2px solid #D4D4D4;
	}
	.box5{
		float: left;width: 160px;height:24px ;margin-left: 4px;
	}
	.bang img{
		width: 62px;height: 62px;		
	}
	 .box7{
		float: left;
		width: 62px;height: 62px;
	}
	.bang{
		margin-left: 15px;		
	}
	.bang li{
		list-style: none;
		width: 220px;height: 62px;		
		background-color: #FAFAFA;		
	}
	 .box8{		
		width: 150px;height: 62px;
		margin-left: 72px;	    		
	}
	.box8 h5{
		padding-top: 13px;
	}
	.box8 p{
		color: #999999;
		font-size: 13px;		
	}
	.shen{
		background-color: #F2F2F2;
		width: 205px;
		height: 31px;
		margin-left: 18px;
		margin-top: 10px;
	}
	.zhubo{
		margin-top: 20px;
		border-bottom: 2px solid #D4D4D4;
		width: 240px;height: 24px;
		margin-left: 8px;
	}
	.zhu img{
		width: 40px;height: 40px;
	}
	.zhu .box9{
		float: left;
		width: 40px;height: 40px;
	}
	.zhu li{
		list-style: none;
		width: 240px;height: 62px;
		padding-left: 20px;
	}
	.zhu .box10{		
		width: 190px;height: 40px;	
		margin-left: 55px;    		
	}
	.zhu .box10 p{
		color: #999999;
		font-size: 10px;
		margin-top: 5px;
	}
</style>