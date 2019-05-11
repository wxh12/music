<template>
	<div >
	 	<div class="log" >
			<a @click="login0" href="javascript:void(0);" class="yonghu">登录</a><span class="caret"></span>
			<ul>
				<li><router-link to='/'><span class="iconfont icon-shouji">手机号登录</span></router-link></li>
			    <li><router-link to='/'><span class="iconfont icon-yingdaicon04">微信登录</span></router-link></li>
			    <li><router-link to='/'><span class="iconfont icon-qq">qq登录</span></router-link></li>
			    <li><router-link to='/'><span class="iconfont icon-weibo">新浪微博登录</span></router-link></li>
			    <li><router-link to='/'><span class="iconfont icon-yi">网易邮箱账号登录</span></router-link></li>
			</ul>
		</div>
		<!--登录-->
		<div v-show="show" class="xianshi"></div>
		<div v-show="show" class="denglu"  v-if="we">
			<div class="heitiao"><span>登录</span>
				<button @click="login" type="button" class="guan" >
					&times;
				</button>
			</div>
			<div class="zhuce">
				<div class="photo">
					<img src="http://ozcpgl12w.bkt.clouddn.com/platform.png" />
					<button type="button" class="btn" @click="login2">手机号登录</button>
					<button type="button" class="btn1" @click="login1">注册</button>
				</div>
				<div class="fangshi2">
					<div><i class="jingling weixin"></i><span class="dui">微信登录</span></div>
					<div><i class="jingling qq"></i><span class="dui">QQ登录</span></div>
					<div><i class="jingling weibo"></i ><span class="dui">微博登录</span></div>
					<div><i class=" jingling wangyi"></i><span class="dui">网易邮箱账号登录</span></div>					
				</div>
			</div>
		</div>
		<!--注册-->
		<div class="zhuce1" v-if="no" v-show="show">
			<div class="heitiao1"><span>手机号注册</span>
				<button @click="login" type="button" class="guan" >
					&times;
				</button>
			</div>
			<div class="shouji">
				<div class="zhongjian">
					<h5 style="margin-top: 0px;padding-top: 20px;">手机号:</h5>
					<div class="kuang1">
						<div style=" width: 36px;margin-top: 5px;float: left;border: 0px solid red;">
							+86<i class="caret" style="color: #000000;"></i>
						</div>
						<div class="yes">
							<input type="text" placeholder="请输入手机号" id="user"/>
						</div>
						<div style="margin-top: 8px;">
							<span id="err1" style="color: red; "></span>
						</div>			
					</div>
					<h5 style="width: 50px;margin-top: 28px;">密码:</h5>					
					<div class="kuang">				
						<input type="password" class="mima" placeholder="设置登录密码,不少于6位" id="pwd"/>
						<span id="err2" style="color: red;"></span>
					</div>			
					<button type="button" class="xiayibu" @click="post">注册</button>			
				</div>
				<a href="javascript:;"><span @click="login3" class="back"> 返回登录 </span></a>
			</div>
			<div class="dibu"></div>			
		</div>
		<!--手机号登录-->
		<div class="zhuce1" v-if="our" v-show="show">
			<div class="heitiao1"><span>手机号登录</span>
				<button @click="login" type="button" class="guan" >
					&times;
				</button>
			</div>
			<div class="shouji">
				<div class="zhongjian">
					<h5 style="margin-top: 0px;padding-top: 20px;">手机号:</h5>
					<div class="kuang1">
						<div style=" width: 36px;margin-top: 5px;float: left;border: 0px solid red;">
							+86<i class="caret" style="color: #000000;"></i>
						</div>
						<div class="yes">
							<input type="text" placeholder="请输入手机号" id="user1"/>
						</div>	
					</div>
					<h5>密码:</h5>	
					<div class="kuang">				
						<input type="password" class="mima" placeholder="请输入密码" id="pwd1"/>
					</div>			
					<button type="button" class="xiayibu" @click="denglu">登录</button>			
				</div>
				<a href="javascript:;"><span @click="login1" class="back1"> 没有账号?免费注册 </span></a>
			</div>
			<div class="dibu"></div>			
		</div>
	</div>			
</template>

<script>
  import $ from 'jquery' 
  export default{
		name:'header',
		data(){
			return{
				we:true,
				no:false,
				our:false,
				s:[]
			}
		},
		computed:{
			show(){
				return this.$store.state.login
			}
		},
		mounted(){
		 	$(function(){
    			$('.log ul li').css('display','none')
    			$('.log').hover(function(){
	    			$('.log ul li').css('display','block')
	    			$(this).css({'vertical-align':'top','position':'absolute','z-index':'12'})
	    		},function(){
	    			$('.log ul li').css('display','none')
	    	 	})
   	 		})
   	 		var This = this;   	 				 	
		 	this.$http.get('http://localhost:3000/msql').then(function(res){
		 		This.s = res.data
		 	})
	},
		methods:{
			login0:function(){
				this.$store.state.login = true
				this.we = true,
				this.no =false,
				this.our =false
			},
			login:function(){				
				this.no =false,
				this.our =false
				this.$store.state.login = false
		    },
		    login3:function(){//登录
				this.we = true,
				this.no =false,
				this.our =false
		   },
			login1:function(){//注册
				this.we = false,
				this.no =true,
				this.our =false
		   },
		   login2:function(){//手机号登录
				this.we = false,
				this.no =false,
				this.our =true
			},
		   /*判断注册的是否正确*/
		    post:function(){
		   	    var This=this
			   	var user = $('#user').val()
			   	console.log(user)
			 	var pwd = $('#pwd').val()
			 	 function checkPhoneIsExist(){
			      	console.log(user);
					for(var i=0; i<This.s.length;i++){
						if(user===This.s[i].user){
							return true;break;
						}
					}
				  }
			 	  var flag = false;  
			      var err = "";  
			      var reg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;         
			      if(user == ''){  
			        err = "手机号码不能为空！";  
			      }else if(user.length !=11){  
			        err = "请输入长度为11的手机号码！";  
			        $("#user").select(); //如果是错的全部选中重新输
			      }else if(!reg.test(user)){  
			        err = "请输入有效的手机号码！"; 
			        $("#user").select(); 
			      }else if(checkPhoneIsExist()){  
			        err = "该手机号码已经被绑定！"; 
			        $("#user").select(); 
			      }else{  
			          flag = true;  
			      }  
			      if(!flag){  			          
			        $("#err1").html("");  
			        $("#err1").html(err); 
			      }else{  			        
			       $("#err1").html("");  
			       $("#err1").html("该手机号码可用");  
			      }
			      var flag1 = false;  
			      var err1 = "";  
			      var reg1 = /^\w{6,18}$/;         
			      if(pwd == ''){  
			        err1 = "密码不能为空！";  
			      }else if(!reg1.test(pwd)){  
			        err1 = "请输入有效字符！";  
			      }else{  
			          flag1 = true;  
			      }  
			      if(!flag1){  			         
			        $("#err2").html("");  
			        $("#err2").html(err1);   
			      }else{  
			       $("#err2").html("");  
			       $("#err2").html("该密码可用");  
			      } 			      			      
			     if(flag==true&&flag1==true){
			      	this.$http.post('http://localhost:3000/we',{user:user,pwd:pwd}).then(function(res){		 			
		 			})
			      	this.we = true,this.no =false,This.our =false
			      }
			      else{
			      	alert("注册失败！请重试")
			      }
			},
		/*判断登录与注册是否一致*/
			denglu:function(){
				 var user1 = $("#user1").val(); //获取用户名
                 var pwd1 = $("#pwd1").val() //获取密码
                 var flag = false;
                 for (var i = 0; i < this.s.length; i++) {
                  //判断用户名密码是否正确
                  if (this.s[i].user === user1 && this.s[i].passward === pwd1) {
                    flag = true;
                    alert("登录成功！");
                    this.we = false,this.no =false,this.our =false,this.$store.state.login = false
                    //var index=false  
                    $('.yonghu').html(user1+'已登录')
                    break;
                	}
           		}
           		if (!flag) {
                	alert("输入的账号或密码不正确！");
               		user1='',pwd1=''              		
            	}
			}
		},
	}
</script>
<style scoped="scoped">
	.log{
		height: 70px;
		line-height: 70px;
		width: 180px;
		margin-left: 1150px;
		font-size: 12px;			
	}
	.log ul li span{
		font-size: 12px;		
	}
	.log:hover ul{
		list-style: none;
		width: 180px;
		height: 128px;
	}
	.log:hover ul li {		
		width: 180px;
		height: 40px;line-height: 40px;
		background-color: #2B2B2B;
	}
	.log ul li:hover{
		background-color: black;opacity: 0.6;
		width: 180px;color: white;opacity: 1;
		height: 40px;line-height: 40px;
	}
	.log ul li:hover span{color: white;opacity: 1;}
	.log:hover ul li a,span{			
		text-decoration: none;
		color: white;
		opacity: 0.6;
		text-align: left;
	}
	.log>a{
		color: white;
		opacity: 0.8;
		text-decoration: none;
	}
	.log>a:hover{
		color: white;
		opacity: 0.9;
		text-decoration: none;
	}
	.xianshi{
		background-color: white;
		opacity: 0.2;
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 100;
	}
	.denglu{
		width: 530px;
		position: fixed;
		margin: 0 auto;
		margin-top: 100px;
		z-index: 200;
		margin-left: 370px;			
	}
	.heitiao{
		width: 530px;height: 38px;
		background-color: #000000;
		color: white;border-top-left-radius: 8px;
		border-top-right-radius: 8px;		
	}
	.heitiao  span{
		padding-left: 20px;width: 50px;
		height: 38px;line-height: 38px;
		float: left;
	}
	.zhuce{
		width: 530px;height: 286px;
		background-color: white;border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}
	.shouji{
		background-color: white;
		width: 530px;height: 237px;		
	}
	.zhongjian{
		width: 220px;height: 218px;margin: 0 auto;
	}
	.photo{
		width: 300px;
		height: 205px;
		float: left;
		padding-left: 40px;padding-right: 35px;
		margin-top: 20px;
		border-right: 1px solid #CCCCCC;
	}
	.photo img{
		width: 224px;
		height: 120px;
	}
	.fangshi2{
		width: 187px;height: 222px;
		border: 0px solid red;
		margin-left: 320px;padding-top: 20px;
	}
	.fangshi2 div{
		height: 38px;margin-top: 10px;line-height: 38px;
	}
	.dui{
		color: black;display: inline-block;
		height: 38px;width: 115px;
	}
	.btn{
		width: 224px;height: 31px;
		border-radius: 10px;
		background-color: #3282CE;
		outline: none;
		margin-top: 20px;
	}
	.btn1{
		width: 224px;height: 31px;
		border-radius: 10px;
		background-color: white;
		outline: 0px;margin-top: 20px;
	}
	.jingling{
		display: inline-block;
		height: 38px;width: 38px;
		border: 0px solid red;vertical-align: middle;
		margin-right: 20px;margin-top: 10px;
		background:url(http://ozcpgl12w.bkt.clouddn.com/logo.png) no-repeat 0 0px;
	}
	.weixin{		
		background-position: -150px -670px;
	}
	.qq{		
		background-position: -190px -670px;
	}
	.weibo{		
		background-position: -231px -670px;
	}
	.wangyi{
		background-position: -271px -670px;
	}
	.guan{
		border: 0px ;
		float: right;
		background-color: black;height: 38px;width: 38px;
		outline: 0px;
	}	
	.zhuce1{
		width: 530px;
		position: fixed;
		margin: 0 auto;
		margin-top: 100px;
		z-index: 1000;opacity: 1;
		margin-left: 370px;			
	}
	.heitiao1{
		width: 530px;height: 38px;
		background-color: #000000;
		color: white;border-top-left-radius: 8px;
		border-top-right-radius: 8px;		
	}
	.heitiao1  span{
		padding-left: 20px;width: 100px;
		display: block;height: 38px;line-height: 38px;
		float: left;font-weight: bold;
	}
	.xiayibu{
		width: 220px;height: 31px;
		background-color: #3988D3;
		color: white;margin-top: 20px;
		border-radius: 8px;border: 0px;
	}
	.dibu{
		background-color: #F7F7F7;
		height: 49px;
		width: 530px;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
	}
	.back{
		color: black;
	}
	.back1{
		color: black;
		float: right;
	}
	.kuang1,.kuang{
		width: 220px;height: 32px;
		border: 1px solid #CDCDCD;
	}
	.kuang input{
		width: 206px;
		height: 19px;line-height: 19px;
		margin-left: 6px;
		margin-top: 10px;outline: 0;
		border: 0;
	}
	.kuang1 input{
		width: 180px;
		height: 19px;line-height: 19px;		
		outline: 0;
		border: 0;		
	}
	.yes{
		width: 200px;
		height: 21px;line-height: 21px;
		margin-left: 32px;
		margin-top: 5px;
	}
</style>