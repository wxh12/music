<template>
	<div class="foot">
		<div class="foot1">
		    <ul>
		        <li>关于网易</li>
		        <li>|</li>
		        <li>客户服务</li>
		        <li>|</li>
		        <li>服务条款</li>
		        <li>|</li>
		        <li>网站导航</li>
		        <li>|</li>
		        <li>意见反馈</li>
		    </ul>
		    <p>网易公司版权所有&copy;1997-2017 杭州乐读科技有限公司运营:浙网文[2015]0415-135号</p>
		</div>
		<div class="tu">
			<ul>
				<li>
					<div>
						<img src="http://ozc1304hh.bkt.clouddn.com/%E7%8B%AC%E7%AB%8B%E9%9F%B3%E4%B9%90%E4%BA%BA.PNG" />
					</div>
				</li>
				<li>
					<div>
						<img src="http://ozc1304hh.bkt.clouddn.com/%E9%9F%B3%E4%B9%90%E4%B8%93%E6%A0%8F.PNG " />
					</div>
				</li>
				<li>
					<div>
						<img src="http://ozc1304hh.bkt.clouddn.com/%E8%87%AA%E5%AA%92%E4%BD%93.PNG " />
					</div>
				</li>
				<li>
					<div>
						<img src="http://ozc1304hh.bkt.clouddn.com/%E8%B5%9E%E8%B5%8F.PNG "/>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'
	export default{
		name:'footer',
		data(){
			return{
				a:[]
			}
		},
		 methods:{
		 
	    },
	   mounted(){
	    
	 }		
}	
</script>

<style>
	body{
		background-color: #F2F2F2;
	}
	.foot{
		height: 141px;
	    width: 100%; 
		border-top: 1px solid #D3D3D3;
		color: #999999;
		
	}
	.foot1{
		margin-left: 180px;
		margin-top: 35px;
		float: left;
	}
	.foot1 ul{
		display: flex;
		justify-content: space-around;
		width: 490px;		
	}
	.foot1 ul li{
		list-style: none;
	}
	.tu ul{
		display: flex;
		justify-content: space-around;
		width: 240px;
	}
	.tu ul li{
		list-style: none;
		width: 60px;height: 70px;
		margin-left: 20px;
	}
	.tu ul li div{
		width: 60px;height: 70px;		
	}
	.tu ul li div img{
		width: 60px;height: 70px;
	}
	.tu{
		margin-top: 20px;
		height: 111px;
		width: 240px;
		margin-left: 870px;
	}
	div{
		border: 0px solid red;
	}
</style>