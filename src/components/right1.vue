<template>
	<div>
		<div class="rtop">
	  			<div class="im1"><img :src="w.bigimg"/></div>
	  			<div class="box4">
	  				<h4>{{w.name}}</h4>
	  				<p>最近更新:{{w.newup}}({{w.uptime}})</p>	  			
	  			</div>	 
	  			<div class="lan">
	 					<a href="javascript:void(0)" class="hi him"><span>播放</span></a><a  href="# " class="hi1 him"></a>	 					
	 					<a href="javascript:void(0)" class="hi2 him"><span class="bb">收藏</span></a><a class="hi6 him"></a>
	 					<a href="javascript:void(0)" class="hi3 him"><span class="bb">分享</span></a><a class="hi6 him"></a>
	 					<a href="javascript:void(0)" class="hi4 him"><span class="bb">下载</span></a><a class="hi6 him"></a>
	 					<a href="javascript:void(0)" class="hi5 him"><span class="bb">(3307)</span></a><a class="hi6 him"></a>
	 				</div>
	  		</div>
	  		<div class="ltop1">
    			<div class="lsp1">
    				<span style="font-size: 20px;">歌曲列表 <b style="font-size: 12px;">{{r.length}}首歌</b> </span>   			
    			</div>
    			<div class="m2">
    		  		<span>播放:{{r.length+62383732}}次</span>
    			</div>
       		</div>
        	<table class="biao" border="0px">       	
        		<th><div style="width: 75px;"></div></th>
        		<th><div style="width: 388px;margin-left: 10px;">标题</div></th>
        		<th><div style="width: 80px;margin-left: 10px;">时长</div></th>
        		<th><div style="width: 82px;margin-left: 10px;">歌手</div></th>	
        	
        		<tr v-for="(e,index) in r">
        			<td style="width: 75px;">{{index+1}}<span style="color: #278431;">New</span></td>
        			<td @click="Newdata4(e)" style="width: 398px;"><router-link to='/gedan'>{{e.songname}}</router-link></td>
        			<td style="width: 90px;">{{d.name}}</td>
        			<td style="width: 92px;">{{e.author}}</td>
        		</tr>
        	</table>
	</div>
</template>

<script>
	export default{
		name:'header',
		data(){
			return{	
				s:[
				
				],
				k:[],
				d:{name:'03:49'}
			}
		},
		mounted(){
						
		},
		computed:{
			w(){				
				return this.$store.state.dd				
			},
			r(){				
				return this.$store.state.tt			
			}
			
		},
		methods:{
			Newdata4:function(f){//传到歌单
				//console.log(f)					
				this.$store.commit('hello1',f)
				//console.log(f)	
			}
		},
	}
</script>

<style>
	.rtop{
		width: 660px;height: 155px;
		margin-left: 40px;padding-top: 40px;
		
	}
    .rtop img{
    	width: 150px;height: 150px;
    }
	.rtop .im1{
    	width: 154px;height: 154px;
    	float: left;
    	border: 1px solid #CCCCCC;    	
    }
	.box4{   	
    	text-align: left;
    	margin-left: 180px;
    }
	.lsp1{
	height: 35px;line-height: 35px;	
	float: left;
}
.lsp1 span{
	font-size: 24px;
	color: black;
}
.m2 span{
    color: black;opacity: 0.6;	
    display: block;
    height: 35px;line-height: 35px;
    width: 200px;margin-left: 520px;
}
.ltop1{
	border-bottom: 2px solid #C10D0C;
	width: 660px;
	height: 35px;
	margin-top: 60px;
	margin-left: 40px;
}
.biao{
	width: 660px;margin-left: 40px;
	text-align: left;
	border: 1px solid #D9D9D9;
	font-size: 10px;
}
.biao  th{
	background: url(http://ozcpgl12w.bkt.clouddn.com/table.png) repeat-x;
	background-position: 0 0;
	height: 34px;line-height: 34px;
	margin-left: 5px;
	border-right: 1px solid #D8D8D8;
}
table>tr:nth-child(odd){
	background-color: #F7F7F7;
}

.biao tr{
	height: 30px;
}
.him{
	background: url(http://ozcpgl12w.bkt.clouddn.com/button2.png) no-repeat;
	height: 33px;line-height: 33px;float: left;display: inline-block;
}
.hi{
	background-position: 0 -630px;overflow: hidden;
	float: left;height: 35px;line-height: 35px;
	margin-top: -3px;text-decoration: none;
}
.lan a:hover{
	text-decoration: none;
}
.hi span{
	margin-left: 32px;color: white;vertical-align: middle;
}
.lan{
	width: 650px;
	margin-left: 180px;
}
.hi1{
	background-position: 0px -1588px;
	width: 32px;
	margin-right: 5px;
}
.hi2{
	background-position: 0px -1063px;
	width: 54px;
	margin-right: 5px;
}
.hi6{	
	background-position: -243px -1106px;
	width: 10px;margin-left: -10px;	
	}
.bb{
	margin-left: 25px;
}
.hi3{
	background-position: 0px -1268px;width: 54px;
	margin-right: 5px;
}
.hi4{
	background-position: 0px -2805px;width: 54px;
	margin-right: 5px;
}
.hi5{
	background-position: 0px -1508px;width: 70px;
	margin-right: 5px;
}
.zan{
	background: url(http://ozcpgl12w.bkt.clouddn.com/table.png) no-repeat;
	background-position: 0px -103px;
	width: 17px;height: 17px;float: left;margin-top: 3px;
}
</style>