<template>
    <div>

        <!-- <header>{{str}}</header> -->
    <div class="main-content offset-bottom">
    	<div><div class="user-assets">
    		<div class="user-assets-me">
      <!-- 137****1453 -->
      {{this.$store.state.username}}
      <span class="user-assets-vip">
      	<img src="http://h5.zhangzhijian.com/static/imgs/user/icon_vip0@2x.png">
      </span> 
      <a href="#" class="">
      	<div class="user-assets-prompt"></div> 
      </a> 
      <a href="" class="">
      	<div class="user-assets-set"></div>
      </a>
    		</div>
    	</div> 
    	<div class="user-bluebg"></div> 
    	<div class="user-content">
    		<div class="user-assets-income">
    			<div>
    				<div class="user-assets-rate">
          昨日收益(元)
        </div> 
        <div class="user-assets-total">0.00</div>
    			</div> 
    			<div class="user-assets-earning"><div>
    				<div class="title">总资产（元）</div> 
    				<div class="value">{{allmoney}}</div>
    			</div> 
    			<div>
    				<div class="title">累计收益（元）</div> 
    				<div class="value">0.00</div>
    			</div>
    			</div>
    		</div> 
    		<div class="row-section user-balance">
    					<a href="" class="info-row">
    						<i class="iconfont icon-wallet"></i>	
    				 
    					<span class="title-label">账户余额
          <span>0.00</span>
    					</span>
    					</a>
    				</div> 
    				<div class="user-row-content">
    					<div class="user-botton">
    						<div class="user-botton-common user-botton-left">
    							<div @click="cz()">充值</div>
    						</div> 
    						<div class="user-botton-common user-botton-right">
    							<div @click="tx()">提现</div>
    						</div>
    					</div> 
    					<div class="user-assets-box">
    						<div class="user-assets-box-row">
    							<a href="#/investments" class="">
    								<div class="user-assets-box-common">
    									<div>
    										<p>
    											<i class="iconfont icon-income"></i>
    										</p> 
    										<p>
    											<span>定期理财</span>
    											<span>0.00</span>
    										</p>
    									</div>
    								</div>
    							</a> 
    							<a href="" class="">
    								<div class="user-assets-box-common">
    									<div>
    										<p>
    											<i class="iconfont icon-u-detail"></i>
    										</p> 
    										<p>
    											<span>月盈计划</span>
    											<span>0.00</span>
    										</p>
    									</div>
    								</div>
    							</a>
    						</div> 
    						<div class="user-assets-box-row">
    							<a href="#" class="">
    								<div class="user-assets-box-common">
    									<div>
    										<p>
    											<i class="iconfont icon-fictitious"></i>
    										</p> <p>
    											<span>智能盈</span>
    											<span>0.00</span>
    										</p>
    									</div>
    								</div>
    							</a> 
    							<a href="" class="">
    								<div class="user-assets-box-common">
    									<div>
    										<p>
    											<i class="iconfont icon-dengebx"></i>
    										</p> 
    										<p>
    											<span>等额本息</span>
    											<span>0.00</span>
    										</p>
    									</div>
    								</div>
    							</a>
    						</div>
    					</div>
    					<div class="row-section margin-top">
    						<div class="info-row"  @click="jilu()">
    							<i class="iconfont icon-record"></i> 
    							<span class="title-label">资金流水</span> 
    							<div class="indicator-text">
    								<span>记录</span></div>
    						</div>
    					
                            <div class="info-row">
    							<i class="iconfont icon-licaijin"></i> 
    							<span class="title-label">理财金</span> 
    							<div class="indicator-text">
    								<span>0.00</span></div>
                            </div>
    						<div class="info-row">
    							<i class="iconfont icon-reward"></i>
    							<span class="title-label">卡券红包</span> 
    							<div class="indicator-text">
    								<span>16张</span>
    							</div>
                            </div>
                            <div class="info-row">
    							<i class="iconfont icon-heart"></i> 
    							 <span class="title-label">邀请奖励</span>  
    							<div class="indicator-text">
    								<span>0.00</span>
                                </div>
                            </div>
    						  <button class="btn" @click="tap()">退出登录</button> 	
    					</div>
    				</div>
    	</div> 
    		 
    
    	<div class="redeem-old-snow" style="display: none;">
    		<div class="redeem-old-snow-box">
    			<div class="top-box"><div class="title">盈雪球升级</div> 
    			<div class="content">盈雪球产品升级为“月盈计划”，投资收益更灵活</div>
    			</div>
    			<div class="bottom-box">
    				<div class="hint">请选择继续投资的产品，阶段到期后自动迁移到“月盈计划”继续进行投资，收益、阶段将会延续原版盈雪球产品
    				</div> 
    				<div class="old-snow-list">
    					
    				</div> 
    				<div class="btn-box">
    					<div class="redeem-btn empty-btn">不续投</div>
    				</div>
    			</div>
    		</div>
    	</div>
    	</div>
    </div>  

   
       
    </div>

</template>
<script>
import axios from 'axios';
export default {
    name: "Mine",
    data() {
        return {
            str: "我的",
            allmoney:''
        }
    },
    methods:{
        tap(){
            location.href='#/login'
        },
        cz(){
            location.href="#/chongzhi"
        },
        tx(){
            this.$router.push("/tixian")
        },
        jilu(){
            location.href="#/jilu"
        }
    },
    mounted() {
        this.$emit("toparent", this.str);
        var _this=this;			
			axios('http://localhost:3000/chongzhia',{
				headers:{
			 'Content-type': 'application/x-www-form-urlencoded'

		  		  },
				method:"post",
				params:{}
				
			}).then(function(data){
				//console.log(data.data)
				_this.allmoney = data.data[0].allmoney
				
			})

    }
};
</script>
<style scoped="">
.main-content.offset-bottom {
    bottom: 49px;
}
.btn{
    width: 60%;
    height: 36px;
    color: #fff;
    font-size: 14px;
    border-radius: 30px;
    background: #6fa2e2;
    margin-top: 20px;
    border: 0;
    margin-left: 60px;
    
}
.main-content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #eff0f0;
    overflow-x: hidden;
    overflow-y: auto;   
}
div {
    display: block;
}
.user-assets {
    width: 100%;
    height: 50px;
    background-color: transparent;
    text-align: center;
}
.user-assets-me {
    color: #fff;
    text-align: center;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    font-size: 18px;
    z-index: 100;
    position: absolute;
    top: 0;
}
.user-assets-vip {
    width: 2.25rem;
    height: 2rem;
    display: inline-block;
    position: absolute;
    top: -.1rem;
    z-index: 1000;
    vertical-align: middle;
}
.user-assets-vip img {
    width: 100%;
    height: auto;
}
input, img {
    vertical-align: middle;
}
img, fieldset {
    border: none;
}
a {
    text-decoration: none;
}
.user-assets-prompt {
    background: url(/static/imgs/user/icon_u_messges.png) no-repeat 50%;
    background-size: 1rem;
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    left: .5rem;
    top: .7rem;
    z-index: 100;
}
.user-assets-set {
    background: url(/static/imgs/user/user_setting.png) no-repeat 50%;
    background-size: 1.6rem;
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    right: .75rem;
    top: .7rem;
    z-index: 100;
}
.user-bluebg, .user-content {
    position: absolute;
    left: 0;
    width: 100%;
}
.user-bluebg {
    z-index: 0;
    top: 0;
    height: 280px;
    background-image: linear-gradient(110deg,#1d4371,#2663af);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
}
.user-content {
    top: 50px;
    bottom: 0;
    right: 0;
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 12px;
}
.user-bluebg, .user-content {
    position: absolute;
    left: 0;
    width: 100%;
}
.user-assets-income {
    width: 100%;
    background-image: url(/static/imgs/user/user_background@2x.png);
    background-repeat: no-repeat;
    background-position: 0 bottom;
    background-size: 100% 100%;
    text-align: center;
    padding-bottom: 20px;
}
.user-assets-rate {
    width: 100%;
    padding-top: 20px;
    color: #fff;
    font-size: 14px;
    opacity: .5;
}
.user-assets-total {
    padding-top: 5px;
    color: #fff;
    font-size: 1.5rem;
}
.user-assets-earning {
    margin-top: 25px;
    display: -ms-flexbox;
    display: flex;
   
    justify-content: center;
   
    align-items: center;
}
.user-assets-earning>div {
    width: 50%;
    text-align: center;
    color: #fff;
}
.user-assets-earning>div .title {
    font-size: 12px;
    opacity: .5;
}
.user-assets-earning>div .value {
    margin-top: 5px;
    font-size: 16px;
}
.info-row {
    padding: 12px 10px 12px 15px;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    width: 100%;
    display: block;
    box-sizing: border-box;
}

.user-row-content {
    background-color: #eff0f0;
}
.user-botton, .user-botton .user-botton-common {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
}
.user-botton {
    overflow: hidden;
    background-color: #fff;
    padding: 16px 15px;
}

.user-assets-box {
    margin-top: 12px;
    padding: 0 5px;
    background: #fff;
}
.user-botton .user-botton-left {
    background: #ff7267;
}
.user-botton .user-botton-common {
    width: 40%;
    height: 36px;
    color: #fff;
    font-size: 14px;
    border-radius: 30px;
}
.user-botton, .user-botton .user-botton-common { 
    display: flex;
    justify-content: center;
    align-items: center;
}
a {
    text-decoration: none;
}
.user-botton .user-botton-right {
    margin-left: 6.6%;
    background: #6fa2e2;
}
.user-row-content {
    background-color: #eff0f0;
}
.user-assets-box {
    margin-top: 12px;
    padding: 0 5px;
    background: #fff;
}
.user-assets-box .user-assets-box-row {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.user-assets-box .user-assets-box-row {
  
    display: flex;
  
    justify-content: flex-start;
   
    align-items: center;
    border-bottom: 1px solid #eee;
}
.user-assets-box .user-assets-box-row>a:first-child {
    border-right: 1px solid #eee;
}
.user-assets-box a {
    width: 50%;
    display: block;
}
.user-assets-box-common {
    padding: 10px 0;
    font-size: 14px;
}
.user-assets-box-common>div>p:first-child {
    padding-top: 2px;
    width: 30%;
    text-align: right;
}
.user-assets-box-common>div .iconfont {
    font-size: 18px;
    color: #8d9eb3;
    width: 45px;
    height: 35px;
    }
    .user-assets-box-common>div>p:last-child {
    width: 70%;
    margin-left: 6px;
    line-height: 18px;
    text-align: left;
}
.user-assets-box-common>div>p:last-child>span:first-child {
    color: #555;
}

.user-assets-box-common>div>p:last-child>span:last-child {
    color: #888;
    font-size: 13px;
}
.user-assets-box .user-assets-box-common>div>p:last-child>span {
    display: block;
    width: 70px;
    height: 50px;
    margin-left: 50px;
    margin-top: -30px;
}
* {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.user-assets-box .user-assets-box-common>div>p:last-child {
    width: 70%;
    margin-left: 6px;
    line-height: 18px;
    text-align: left;
}
.row-section.margin-top {
    margin-top: 12px;
}
.row-section .info-row, .row-section .input-row {
    border-bottom: 1px solid #eee;
}
.info-row {
    padding: 12px 10px 12px 15px;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    width: 100%;
    display: block;
    box-sizing: border-box;
}
.info-row .iconfont+.title-label {
    float: none;
}
.info-row .title-label {
    float: left;
    line-height: 22px;
    font-size: .7rem;
    color: #000;
    min-width: 78px;
}
.indicator-text {
    line-height: 22px;
    color: #888;
    font-size: .7rem;
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translateY(-50%);
}
.info-row {
    padding: 12px 10px 12px 15px;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    width: 100%;
    display: block;
    box-sizing: border-box;
}
/*.info-row .iconfont {
 	float: left;
}*/
.user-assets-box .user-assets-box-common>div .iconfont {
    font-size: 18px;
    color: #8d9eb3;
    float: left;
}
em, i {
    font-style: normal;
    float: left;
}
span {
    width: 25%;
}
common>div>p:first-child {
    padding-top: 2px;
    width: 30%;
    text-align: right;
}
common {
    padding: 10px 0;
    font-size: 14px;
}

</style>
