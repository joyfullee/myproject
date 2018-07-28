<template>

	<div id="register">		
		<div class="register-content">
			<div class="row-section">
				<div class="input-row">
					<input type="tel" nme="phone" placeholder="请输入手机号码" class="tel">
				</div> 
				<div class="input-row input-code-row">
					<input type="number" class="yzm1" placeholder="请输入验证码"> 
						<button type="button"  class="btn phone-btn code-btn" @click="tap()">获取验证码</button>
				</div> 
				<div class="input-row">
					<input type="password" placeholder="请输入密码" class="password">
				</div>
			</div>


			<div class="submit-btn" @click="tap1()">提交注册</div> 
			<div class="check-agreement">
				<input type="checkbox" id="agreementCheck" class="checkbox-custom"> 
					<label for="agreementCheck" class="checkbox-custom-label">
						<span class="icon"></span> 
						<span>我已阅读并同意</span> 
						<span class="term">《网络服务协议》</span>
					</label>
			</div>
		</div>
		
		
	</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
	export default{
        name:'Register',
        methods:{
            tap(){
             $.ajax({
                type: "post",
                url: "http://localhost:3000/register",
                 data: {phoneNum:$(".tel").val(),id:1},
                success: function (data) {
                console.log(data)
               
                }
          });
            },
            tap1(){
                // axios('"http://localhost:3000/register',{
                //     methods:'post',
                //      data: {phoneNum:$(".tel").val(),pass:$(".password").val(),yzm:$(".yzm1").val(),id:2},
                // }).then(function(data){
                //     console.log(data)
                //     if(data=1){
                //         alert("注册成功")
                //     }else{
                //         alert("注册失败")
                //     }
                // })
                    $.ajax({
            type: "post",
            url: "http://localhost:3000/register",
            data: {phoneNum:$(".tel").val(),pass:$(".password").val(),yzm:$(".yzm1").val(),id:2},
            success: function (data) {
              console.log(data)
               if(data==2){
                alert("注册成功")
                location.href="#/login"
               }else{
                 alert("用户名已存在")
               }
            }
          });
            }           
        }
        
	}
</script>

<style scoped="">
	.tip-text {
    margin: 8px 15px;
    font-size: 12px;
    color: #aaa;
}
.row-section .input-row {
    border-bottom: 1px solid #eee;
}

.input-row {
    position: relative;
    background: #fff;
}
* {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.code-btn:disabled {
    background-color: transparent;
    border-color: #e3e3e3;
    color: #bbb;
}
.code-btn {
    font-size: 14px;
    min-width: 96px;
  
}
.phone-btn {
    border-color: #528bd2;
    background-color: transparent;
}
.bordered-btn, .phone-btn {
    color: #528bd2;
    font-size: 16px;
    border: 0;
}
.input-row input {
    width: 100%;
    border: none;
    height: 2.5rem;
    outline: none;
    font-size: 16px;
    color: #555;
    padding-left: .65rem;
    padding-right: .65rem;
    box-sizing: border-box;
}
.input-row.input-code-row {
    padding-right: 113px;
}

.row-section .info-row, .row-section .input-row {
    border-bottom: 1px solid #eee;
}
.input-row {
    position: relative;
    background: #fff;
}
.input-row input {
    width: 100%;
    border: none;
    height: 2.5rem;
    outline: none;
    font-size: 16px;
    color: #555;
    padding-left: .65rem;
    padding-right: .65rem;
    box-sizing: border-box;
}
.input-row.input-code-row .code-btn {
    width: 98px;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
}

.code-btn:disabled {
    background-color: transparent;
    border-color: #e3e3e3;
    color: #bbb;
}
.code-btn {
    font-size: 14px;
    min-width: 96px;
}
.input-row input {
    width: 100%;
    border: none;
    height: 2.5rem;
    outline: none;
    font-size: 16px;
    color: #555;
    padding-left: .65rem;
    padding-right: .65rem;
    box-sizing: border-box;
}
	.submit-btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 90%;
    margin: 20px auto 0;
    color: #fff;
    font-size: 16px;
    border-color: #528bd2;
    background-color: #528bd2;
    padding: 10px 12px;
}
.check-agreement {
    text-align: center;
    margin-top: 4px;
    font-size: 12px;
}
.check-agreement .checkbox-custom {
    display: none;
}

input {
    outline: none;
}
input, img {
    vertical-align: middle;
}
	
	
	
</style>