<template>
	<div id="login">
		<div class="logo">
			<img src="http://h5.zhangzhijian.com/static/imgs/login/icon_login_logo@2x.png" class="logo_pic"/>
			<img src="http://h5.zhangzhijian.com/static/imgs/login/icon_present_close@2x.png" class="log_back" @click="back()">
		</div>
		<div style="padding: 10px;">
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="pass"
		></mt-field>
		</div>
		<div style="margin: 20px 0;">
			<mt-button style="width: 100%;" type="primary" class="btn" @click="tap()">登录</mt-button>
		</div>
		<div>
			<mt-button style="width: 100%;" plain @click="tap1()">注册</mt-button>
		</div>
		
	</div>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';
	export default{
		name:'Login',
		data(){
			return{
				username:'',
				pass:''
			}
		},
		methods:{
			tap(){
				var _this = this;
				    axios('http://localhost:3000/login',{
					method:'post', 
					headers:{
						 'Content-type': 'application/x-www-form-urlencoded'
					},
					params:{
						phoneNum:this.username,
						pass:this.pass
					}
                 }).then(function(data){
                   console.log(data.data)
                  if(data.data==1){
						alert("登录成功")
						_this.$store.commit('cun',_this.username)
						location.href="#/index/mine"
                    }else{
                        alert('shibai')
                     }
             })
			},
			tap1(){
				location.href="#/register"
			},
			back(){
				location.href="/index"
			}
		
		}

	}
</script>

<style scoped="">

	.logo{
    background: url(http://h5.zhangzhijian.com/static/img/image_user_bg.93bcde8.png) no-repeat 50%;
    background-size: 100% 200px;
    padding: 40px 0;
   box-sizing: border-box;
    text-align: center;
    position: relative;
    height: 200px;
    width: 100%;
}
.logo_pic{
	width: 118px;
	height: 100px;
}
.log_back{
	position: absolute;
    display: block;
    top: 12px;
    right: 12px;
	width: 18px;
	height: 18px;
	
}

</style>