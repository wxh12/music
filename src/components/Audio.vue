<template>
	<div style="z-index: 10000; position: fixed;">
		<audio id="audio" controls hidden="hidden" :src="y.src"></audio>		
		<div id="media">
			<div id="media_bar">
			<!-- 按钮 -->
				<div id="med_btn">
					<a id=""></a>
					<a @click="play"></a>
					<a></a>
				</div>
			<!-- 歌曲 -->
				<div id="med_song">
					<div id="med_song_img" @click="danqu(y)">
						<router-link to='/gedan' ><img :src="y.albumcover" alt="图片"></router-link>
					</div>
					<div id="med_song_con">
					<!-- 歌名 -->
						<h5>
							<router-link to='/gedan' ><span @click="danqu(y)">{{y.songname}}</span></router-link>
							<router-link to='/singer'><span @click="geshou(y)">{{y.author}}</span></router-link>
							<a href="#"></a>
						</h5>

					<!-- 进度条部分 -->
						<div id="med_song_time">
					<!-- 进度条 -->
						
							
							<div id="med_song_bar" @click="move">
							<!-- 进度条缓存 -->	
								<div id="song_bar_buffer">
									<div id="song_bar_length">
										<div id="song_bar_btn" @mousedown="drag"></div>
									</div>
								</div>
							</div>
							
					<!-- 时间 -->
							<time id="med_song_bar_time">
								<span id="bar_time_now"></span>/<span id="bar_time_total"></span>
							</time>
						</div>

						
					</div>	
				</div>
			<!-- 操作 -->
				<div id="med_control">
					<ul>
						<li @click="collect"><a ></a></li>
						<li @click="share"><a ></a></li>
						<li >
							<div id="control_sound" @click="volumeshow"></div>
							<div id="sound_pattern" v-show="a">
								
								<div id="volume_back" @click="voladjust">
									<div id="pattern_volume" ></div>
								</div>
								<div id="volume_btn"></div>
							</div>
						</li>
						<li>
							<div id="control_pattern" @click="pattern">
								<div id="pattern_character" v-show="b">
									
								</div>	
							</div>
						</li>
						<li @click="singer">
							<a id="control_singer" >
								<!-- 歌单 -->
								<div id="singer_number"></div>
								<!-- 歌词 -->
								<div id="singer_lyric"></div>
							</a>
						</li>
					</ul>
				</div>
			<!-- 锁 -->
				<div id="med_angle">
					<a class="med_lock" @click="lock"></a>
				</div>
			</div>
		</div>

<!-- 歌单歌词 -->
		<div id="song_list" v-show="c">
			<!-- 歌曲表头 -->
			<div id="song_list_nav">
				<!-- 左 -->
				<div id="number_title">
					<div>
						<h4>播放列表</h4>
					</div>
					<div>收藏|清除</div>
				</div>
				<!-- 右 -->
				<div id="lyric_title">
					<div>歌名</div>
					<div>关闭</div>
				</div>
			</div>

			<!-- 歌曲内容 -->
			<div id="song_list_con">
				<!-- 左 -->
				<div id="list_number">
					<ul>
						<li>
							<div>箭头</div>
							<div>歌名</div>
							<div>添加，收藏</div>
							<div>作者</div>
							<div>时间</div>
							<div>链接</div>
						</li>						
						<li v-for="(e,index) in ss">
							<div></div>
							<div>{{e.songname}}</div>
							<div></div>
							<div>{{e.author}}</div>
							<div></div>
							<div></div>
						</li>
						<li >
							<div></div>
							<div>{{x.songname}}</div>
							<div></div>
							<div>{{x.author}}</div>
							<div></div>
							<div></div>
						</li>
					</ul>
				</div>
				<!-- 右 -->
				<div id="list_lyric">
					歌词
				</div>
			</div>

		</div>

	</div>
</template>

<script type="text/javascript">

	import $ from 'jquery'

var index=0;

	export default{
		name:'song',
		data(){
			return{
				med_btn:[
					{id:1},
					{id:2},
					{id:3}
				],
				a:false,
				b:false,
				c:false,
				s:[],
				ss:[],
			}
		},
		computed:{
			y(){				
				return this.$store.state.yu
			},
			x(){				
				return this.$store.state.run
				//return JSON.parse(sessionStorage.obj1)
			}
		},
		mounted(){//处理钩子函数
			var This=this 
			this.$http.get('http://localhost:3000/shoucang').then(function(res){
		 		This.ss = res.data
		 	})

// -----------------------进度条模块----------------------------------
		// 时间
			var bar_time_now=$('#bar_time_now');
			var bar_time_total=$('#bar_time_total');
		//进度条变量 
			var song_bar=$('#med_song_bar');
			var song_bar_btn=$('#song_bar_btn');
			var song_bar_length=$('#song_bar_length');
			var song_bar_buffer=$('#song_bar_buffer');

		// 音量
			var volume_btn=$('#volume_btn');
			var pattern_volume=$('#pattern_volume');
			var control_sound=$('#control_sound');

// 媒体事件 progress 当浏览器正在下载音频或视频
// 		 canplay  当浏览器可以播放音频或视频
// 		 canplaythrough  当浏览器可在不因缓冲而停顿的情况下进行播放

			$('#audio').on('canplay',function(){
				// var startTime=Math.floor(audio.currentTime); //当前时间 秒
				var endTime=Math.floor(audio.duration); //总时长 秒
				var med_btn_play=$('#med_btn a:eq(1)'); //按钮

				audio.volume=0.4;//默认声音的大小
				var x=Math.floor(audio.volume*80);
				console.log(x);volume_btn.css({
					'bottom':x
				});
				pattern_volume.css({
					'height':x
				});

	// 获取 已缓冲部分的TimeRanges对象
				var timeRanges=audio.buffered;
				// console.log(timeRanges);
				// 获取 已缓冲的时间
				var timeBuffered=Math.floor(timeRanges.end(0));
				// console.log(timeBuffered);
				// 获取缓存进度
				// var bufferPercent=(timeBuffered/endTime);
				// console.log(bufferPercent);
				song_bar_buffer.css({'width':Math.floor(timeBuffered*(493/endTime))});

//----------------------startTime------------------------
				var start_time_m=0;
				var start_time_s=0;
				var start_time_ms=0;
				bar_time_now.html(start_time_m+':'+start_time_s+start_time_ms);

				function barTime(){				 
					
			// 初始化
					start_time_m=0;
					start_time_s=0;
					start_time_ms=0;

			// 开始
					var startTime=Math.floor(audio.currentTime); //当前时间 秒
					start_time_ms=startTime;

			// 秒针  个位的变化
					if(start_time_ms>9){
						start_time_ms='';
						start_time_s=startTime;

			// 秒针  十位的变化
						if(start_time_s>59){
							start_time_s=0;
							start_time_ms=(startTime%60);

							if(start_time_ms>9){
								start_time_ms='';
								start_time_s=(startTime%60);
							}

						}
						
					}

			//分钟的变化
				if(startTime<60){
					start_time_m=0;
				}else if(startTime<120){
					start_time_m=1;
				}else if(startTime<180){
					start_time_m=2;
				}else if(startTime<240){
					start_time_m=3;
				}else if(startTime<300){
					start_time_m=4;
				}else if(startTime<360){
					start_time_m=5;
				}

			// 判断结束，停止播放			    
					if(startTime==endTime){
				    	// console.log('Over')
						med_btn_play.css({
							'background-position':'150px 410px', //播放
						});

			    	}

			//显示 
			    	song_bar_length.css({'width':Math.floor(startTime*(493/endTime))});
			    	song_bar_btn.css({'left':Math.floor(startTime*((493-song_bar_btn.width())/endTime))});

					bar_time_now.html(start_time_m+':'+start_time_s+start_time_ms); 

				}
				// barTime();
				// setInterval(barTime,1000);

				function barTimestart(){
					var timeGo=setInterval(barTime,1000);
				} 
				barTimestart();
				function barTimeStop(){
					clearInterval(timeGo);
				}
//-------------------- endTime---------------------------
				var end_time_m=Math.floor((endTime)/60);
				// console.log(end_time_m);
				var end_time_s=endTime-(end_time_m)*60;
				// console.log(end_time_s);
				bar_time_total.html(end_time_m+':'+end_time_s);

			});
// -------------------------进度条模块结束---------------------------
			//数据库
			/*var This = this;
			this.$http.get('http://localhost:3000/mysql').then(function(res){
				This.s = res.data
				//console.log(This.s)
			})*/
		},
		methods:{//封装函数
			danqu:function(y){//传到歌单		
				this.$store.commit('hello1',y)
			},
			geshou:function(y){//传到singer		
				this.$store.commit('hello2',y)
			},
		// 上一首
			perv:function(y){
				/*var This = this;
				this.$http.get('http://localhost:3000/mysql').then(function(res){
				This.s = res.data
				if(This.s.songid==y.songid){
					y.songid++;
				}
				//console.log(This.s)
				})*/
				var med_btn_prev=$('#med_btn a:eq(0)');
			},
		// 播放
			play:function(){
				var med_btn_play=$('#med_btn a:eq(1)');
				// console.log(audio.buffered);
				if(audio.paused){
					audio.play();
					med_btn_play.css({
						'background-position':'150px 449px', //暂停
					});
					
// 鼠标悬浮
					med_btn_play.hover(function(){
							// alert('o')
						med_btn_play.css({
							'background-position':'110px 449px', //暂停亮
						});
					},function(){
						med_btn_play.css({
							'background-position':'150px 449px', //
						});
					});

				}else{
					audio.pause();
					med_btn_play.css({
						'background-position':'150px 410px', //播放
					});

//鼠标悬浮
					med_btn_play.hover(function(){
						med_btn_play.css({
							'background-position':'110px 410px', //播放亮
						});
					},function(){
						med_btn_play.css({
							'background-position':'150px 410px', 
						});
					});
				}
			},
		//下一首 
			next:function(y){
				var med_btn_next=$('#med_btn a:eq(2)');				
			},
		
		// 进度条 点击
			move:function(){
				
				var song_bar=$('#med_song_bar');
				var song_bar_btn=$('#song_bar_btn');
				var song_bar_length=$('#song_bar_length');

				var endTime=Math.floor(audio.duration); //总时长 秒
				// console.log(endTime)
				// 获取鼠标点击的位置
				var x=event.x-song_bar.offset().left;
				// console.log(x);
				// 当前秒数
				audio.currentTime=Math.floor((x*endTime)/(493));

				// 显示
				song_bar_length.css({'width':x});
				song_bar_btn.css({'left':x-song_bar_btn.width()});
			},
		// 进度条 拖拽
			drag:function(){
				console.log('进度条拖拽');
			},
		//收藏
			collect:function(){
				console.log('收藏歌曲');
			},
		//分享
			share:function(){
				console.log('分享歌曲');
			},
		//声音 
			volumeshow:function(){
				// console.log('音量调节');
				this.a=!this.a;
			},
			voladjust:function(){
				var control_sound=$('#control_sound');	
				var sound_pattern=$('#sound_pattern');

				var volume_btn=$('#volume_btn');
				// var volume_back=$('#volume_back');

				var pattern_volume=$('#pattern_volume');
				var y=Math.floor(event.y-sound_pattern.offset().top);
				var Y=Math.floor(80-y+volume_btn.height());
				audio.volume=Y/80;
				volume_btn.css({
					'bottom':Y,
				});
				pattern_volume.css({
					'height':Y,
				})
				// console.log(y);

	// 声音大小 显示
				if(y>80){
					control_sound.css({
						'background-position':'50px 554px'
					});

					control_sound.hover(function(){
						control_sound.css({
							'background-position':'28px 554px'
						});
					},function(){
						control_sound.css({
							'background-position':'50px 554px'
						});
					});

				}else{

					control_sound.css({
						'background-position':'302px 375px'
					});

					control_sound.hover(function(){
						control_sound.css({
							'background-position':'273px 375px'
						});
					},function(){
						control_sound.css({
							'background-position':'302px 375px'
						});
					});

				}

			},
		//模式
			pattern:function(){
				// console.log('音乐模式');
				// this.b=!this.b;

				var pattern_character=$('#pattern_character');
				
				pattern_character.show();

				index++;
				if(index==1){
			
					pattern_character.html('循环');
					
					function index1(){
						pattern_character.hide();
					};
					setTimeout(index1, 2000);
					
					
				}else if(index==2){
					pattern_character.show();
					pattern_character.html('随机');
					function index1(){
						pattern_character.hide();
					};
					setTimeout(index1, 2000);
					
				}else if(index==3){
					pattern_character.show();
					pattern_character.html('单曲循环');
					function index1(){
						pattern_character.hide();
					};
					setTimeout(index1, 2000);
					index=0;

				}

			},

		//歌单
			singer:function(){
				console.log('歌单歌词');
				var song_list=$('#song_list');
				this.c=!this.c;

			},
		// 锁
			lock:function(){
				var media=$('#media');
				var med_lock=$('.med_lock');
				// med_lock.toggleClass('padlock');
				med_lock.toggleClass('deblock');
				if(med_lock.hasClass('deblock')){
					console.log('解锁');
					media.css({
						'transform':'translateY(40px)'
					})

				}else{
					media.css({
						'transform':'translateY(0px)'
					})
				}

			},
			
		}
	}
</script>
<style type="text/css">
	#media{
		/*border:1px solid red;*/
		position: fixed; 
		bottom:0;
		width: 100%;
		height:44px; 
		background: url(../assets/spriteSheet/playbar.png) 0 -10px;
		/*border:1px solid red;*/
		transition: all 1s;
	}
	#media #media_bar{
		height: 100%;
		display: flex;
		justify-content: center;
	}
/*-----------------------按钮------------------------*/
	#media #med_btn{
		width: 120px;
		/*border:1px solid red; */
		display: flex;
		align-items: center; 
		justify-content: space-between;
	}
	#media #med_btn a{
		width: 32px;
		height: 32px;
		border-radius: 30px;
		/*border:1px solid red;*/
		line-height: 30px;
		color: #fff;
		cursor: pointer;
	}

	#media #med_btn a:nth-child(1){
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 153px 488px;

	}
	#media #med_btn a:nth-child(1):hover{
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 123px 488px;
	}
	#media #med_btn a:nth-child(2){
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 150px 410px;
	}

	#media #med_btn a:nth-child(2):hover{
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 110px 410px;
	}
	#media #med_btn a:nth-child(3){
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 73px 488px;

	}
	#media #med_btn a:nth-child(3):hover{
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 195px 488px;

	}
/*------------------------歌曲进度条------------------------*/
	#media #med_song{
		width: 700px;
		/*border:1px solid green; */
		display: flex;
		margin-left: 20px;
	}
	#media #med_song #med_song_img{
		width: 46px;
		box-shadow: 0 0 0px green;
	}
	#media #med_song #med_song_img img{
	    width: 46px;
	    height: 40px;
	}
	#media #med_song #med_song_con{
		margin-left: 16px;
		margin-top: -3px;
	}
	#media #med_song #med_song_con h5 a:hover{
		 
	}
	#media #med_song #med_song_con h5 a:nth-child(1){
		font-size: 12px;
		font-family: '微软雅黑';
		color: #e8e8e8;
	}
	#media #med_song #med_song_con h5 a:nth-child(2){
		font-size:;
		color: #e8e8e8;
	}
	#media #med_song #med_song_con h5 a:hover{
		text-decoration: underline;
	}

	/*链接*/
	#media #med_song #med_song_con h5 a:nth-child(3){
		margin-left: 10px;
		padding-left:20px;
		padding-top: 6px;
		/*border:1px solid red;*/
		background: url(../assets/spriteSheet/playbar.png);
		background-position:-106px 518px; 
		
	}
	#media #med_song #med_song_con h5 a:nth-child(3):hover{
		background: url(../assets/spriteSheet/playbar.png);
		background-position:-126px 518px; 
		
	}
/*----------------------进度条---------------------------*/
	#media #med_song #med_song_time{
		margin-top: 4px;
		display: flex;
		/*border:1px solid red;*/
	}
	#media #med_song #med_song_con #med_song_bar{
		width: 493px;
		height: 8px;
		background: url(../assets/spriteSheet/statbar.png);
		background-position:0 0px; 
		border-radius: 5px;
	}
	#media #med_song #med_song_con #med_song_bar #song_bar_buffer{
		background:url(../assets/spriteSheet/statbar.png);
		background-position:0 -30px;
	}
	#media #med_song #med_song_con #med_song_bar #song_bar_length{
		width: 7px; 
		height: 8px;
		background: url(../assets/spriteSheet/statbar.png);
		background-position:0 -66px; 
	}
	#media #med_song #med_song_con #med_song_bar #song_bar_length #song_bar_btn{
		position: relative;
		width: 14px;
		height: 14px;
		background: #fff;
		/*background: url();*/
		border-radius: 50%;
		top:-3px;
		cursor: pointer;
	}
	#media #med_song #med_song_con time{
		width: 80px;
		/*border:1px solid red;*/
		color: #fff;
		margin-left: 5px;
		transform: translateY(-6px);
	}


/*----------------------------右边的控制按钮-------------------------*/
	#media #med_control{
		width: 200px;
		border:0px solid blue; 
	}
	#media #med_control ul{
		display: flex;
	}
/*-----------------------------control_collect 收藏歌曲--------------------------*/	
	#media #med_control ul li:nth-child(1){
		margin-left: -30px;margin-top: 4px;
		height: 30px;
		width: 30px;
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 70px 458px;
	}
	#media #med_control ul li:nth-child(1):hover{
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 70px 432px;
	}
/*-----------------------------control_share 歌曲分享--------------------------*/
	#media #med_control ul li:nth-child(2){
		height: 30px;
		width: 30px;
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 40px 458px;
		margin-right: 30px;margin-top: 4px;
		border-right: 0px solid red;
	}
	#media #med_control ul li:nth-child(2):hover{
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 40px 432px;
	}

/*----------------------control_sound 音量-------------------------------*/
	#media #med_control ul li #control_sound{
		/*border:1px solid red;*/
		width: 30px;
		height: 30px;
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 302px 375px;
		cursor: pointer;
		margin-top: -18px;
	}
	#media #med_control ul li #control_sound:hover{
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 273px 375px;
	}
	#media #med_control ul li #sound_pattern{
		/*border:1px solid red;*/
		width: 30px;
		height: 100px;
		transform: translateY(-130px);
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 304px 98px;
		display: flex;
		flex-flow: column;
		align-items:  center;		
	}
	#media #med_control ul li #sound_pattern #volume_btn{
		width: 12px;
		height: 12px;
		background:#fff;
		border-radius: 50%;
		position: relative;
	}
	#media #med_control ul li #sound_pattern #volume_back{
		margin-top: 4px;
		width: 4px;
		height: 80px;
		/*border: 1px solid red; */
	}
	#media #med_control ul li #sound_pattern #pattern_volume{
		width: 4px;
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 264px 85px;
		transform-origin: left top;
		transform: rotate(180deg)translate(-4px,-83px);
	}
/*---------------------control_pattren 模式--------------------------------*/
	#media #med_control ul li #control_pattern{
		/*border:1px solid red;*/
		height: 30px;
		width: 30px;
		position: fixed;
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 305px 280px;
		cursor: pointer;
		margin-top: -18px;
	}
	#media #med_control ul li #control_pattern:hover{
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 275px 280px;
	}
	#media #med_control ul li #control_pattern #pattern_character{
		width: 76px;
		height: 40px;
		
		/*border:1px solid red;*/
		transform: translate(-22px,-40px); 
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 301px 162px;
		color:#fff;
		text-align:center;
		line-height: 40px;
	}
/*-----------------------------control_singer 歌词歌单--------------------------*/
	#media #med_control ul li:nth-child(5){
		height: 40px;
		width: 60px;
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 265px 555px; 
		margin-left: 35px;
	}
	#media #med_control ul li:nth-child(5):hover{
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 265px 525px; 
	}
/*-----------------------song_list 歌单歌词显示------------------------------------------*/
	#song_list{
		/*border:1px solid red;*/
		width: 100%;
		position: fixed;
		bottom:40px;
	}
	/*歌曲表头*/
	#song_list #song_list_nav{
		/*border:1px solid red;*/
		display: flex; 
		justify-content: center;
	}
	#song_list #song_list_nav #number_title{
		/*border:1px solid red;*/
		border-radius: 5px 0 0 0;
		background: #0f0f0f;
		color: firebrick;
		display: flex;
		width: 600px;
		height: 40px;
		align-items: center;
	}

	#song_list #song_list_nav #lyric_title{
		/*border:1px solid red;*/
		border-radius:0 5px 0 0;
		background: #0f0f0f;
		color: firebrick;
		display: flex;
		width: 400px;
		height: 40px;
		align-items: center;
	}
	/*歌曲内容*/
	#song_list #song_list_con{
		/*border:1px solid red;*/
		display: flex; 
		justify-content: center;
		margin-bottom: 1px;
	}
	#song_list #song_list_con #list_number{
		 width: 600px; 
		/*border: 1px solid red;*/
	}
	#song_list #song_list_con #list_number ul{
		/*border: 1px solid red;*/
		height: 240px;
		display: block;
		background: rgba(36,33,33,.9);
	}
	#song_list #song_list_con #list_number ul li{
		color: royalblue;
		height: 30px;
		display: flex;
		justify-content: space-around;
	}
	#song_list #song_list_con #list_number ul li div{
		height: 30px;width: 120px;
	}
	#song_list #song_list_con #list_number ul li:hover{
		background: rgba(60,60,64,1);
	}
	#song_list #song_list_con #list_lyric{
		width: 400px;
		height: 240px;
		background: rgba(60,60,64,.6);
	}
/*---角---*/
	#media #med_angle{
		width: 60px;
		padding-top: 5px;
		/*position: flex;*/
		transform: translate(50px,-35px);
		/*border:1px solid red;*/
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 618px 250px;
	}
/*锁*/
	#media #med_angle .med_lock{
		cursor: pointer;
		display: inline-block;
		/*border:1px solid red;*/
		width: 18px;
		height: 18px;
		transform: translate(26px,14px);
		background: url(../assets/spriteSheet/playbar.png);
		background-position: 52px 235px;
	}
/*加锁*/
	.padlock{
		background-position: 52px 235px !important;
	}
/*解锁*/
	.deblock{
		background-position: 72px 235px !important;
	}



</style>