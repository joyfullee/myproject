<template>
	<div id="chongzhi">

	<div id="header">
				<span @click='back()' style="float:left;margin-left:-30px">&lt;</span>
			    <span style="margin-left:-30px">{{tit}}</span>
	</div>
	
	<div class="line">
		<label for="jine" class="jine">充值金额：</label>
		<input type="text" v-model='money' id="jine" placeholder="请输入充值金额" />
	</div>
	
	<button  @click="chongzhi()" style="height:30px;
    font-size: 12x;
    margin: 30px;
    border-radius: 20px;
    width: 80%;
    background:#26a2ff;
    border: 0;
    color: white;">确定充值</button>
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'Chongzhi',
		data(){
			return{
				tit:'充值',
				money:""
			}
		},
		methods:{
			back(){
				history.go(-1)   //返回上一层
			},
			chongzhi(){
				
				var _this=this;			
			axios('http://localhost:3000/chongzhi',{
				headers:{
			 'Content-type': 'application/x-www-form-urlencoded'

		  		  },
				method:"post",
				params:{money:_this.money}
				
			}).then(function(data){
				console.log(data.data)
				if(data.data==1){
					alert('充值成功')
					location.href = '#/index/mine'
				}
				
			})

			}
		}
	
	}
</script>

<style scoped="">
.jine{
	font-size: 15px;
}
	.iconfont{
		float: left;
		margin-top: 5px;
		margin-left: 5px;
	}
	#header{
		height: 50px;
		width: 100%;
		line-height: 50px;
		text-align: center;
		font-size:16px;
		color: #fff;
		font-family: "微软雅黑";
		
		background: #1c3d68;
	}
	
	.line{
		margin-top: 100px;
		height: 60px;
		width:100%;
		padding: 5px;
		box-sizing: border-box;
	}
	input{
		height: 30px;
		font-size: 12px;
		margin-left: 5px;
		margin-top: 5px;

	}
	label{
		margin-left: 5px;
		font-size: 20px;
	}
</style>

