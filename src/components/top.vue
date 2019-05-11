<template>
	<div id="backtop">
		<a href="#">
			<button>
				<div id="backtop-t">
					<span class="glyphicon glyphicon-menu-up"></span>
				</div>
				<div id="backtop-f">TOP</div>
			</button>
		</a>
	</div>
</template>

<script>
	export default{
		name:'backtop',
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	#backtop{
		width: 45px;
		height: 40px;
		text-align: center;
		position: fixed;
		margin-left: 1170px;
		bottom: 180px;
	}
	#backtop button{
		width: 45px;
		height: 40px;
	}
	#backtop-t{
		color: #989898;
		font-size: 1px;
	}
	#backtop-f{
		color: #656665;
		font-size: 5px;
	}
</style>