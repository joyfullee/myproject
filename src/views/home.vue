<template>
    <div>
        
        <mt-swipe :auto="4000" style="height:200px;">
            <mt-swipe-item><img class="pic" src="http://zhangzhijian.b0.upaiyun.com/upload/alauda/static/activity/180618/h5_banner.jpg"></mt-swipe-item>
            <mt-swipe-item><img  class="pic" src="http://zhangzhijian.b0.upaiyun.com/upload/alauda/static/activity/180702/h5_banner.png"></mt-swipe-item>
            <mt-swipe-item><img class="pic" src="http://zhangzhijian.b0.upaiyun.com/upload/alauda/static/activity/180711/h5_banner.jpg"></mt-swipe-item>
            <mt-swipe-item><img class="pic" src="http://zhangzhijian.b0.upaiyun.com/upload/images/activity/myqhy-1.jpg"></mt-swipe-item>
             <mt-swipe-item><img class="pic" src="http://zhangzhijian.b0.upaiyun.com/upload/images/activity/app_duobao.jpg"></mt-swipe-item>
        </mt-swipe>
 <div id="warp">
 	

     <nav>
         <router-link to="/xinshou" tag="span">
              <img class='tupian' src="http://h5.zhangzhijian.com/static/imgs/homeMenu/column_new@2x.png" alt="">
             新手必看
         </router-link>
         <router-link to="/huodong" tag="span">
          <img class='tupian' src="http://h5.zhangzhijian.com/static/imgs/homeMenu/column_active@2x.png" alt="">
         活动中心
         </router-link>
         <router-link to="/yaoqing" tag="span">
          <img class='tupian' src="http://h5.zhangzhijian.com/static/imgs/homeMenu/column_invite@2x.png" alt="">
         邀请有奖
         </router-link>
         <router-link to="/licai" tag="span">
          <img class='tupian' src="http://h5.zhangzhijian.com/static/imgs/homeMenu/column_safe@2x.png" alt="">
         理财保证
         </router-link>
     </nav>
     <!--数据部分-->
    			<div class="home-product">
    				<div class="home-product-content">
    					<div class="minAmount">
    						<div class="product-value-text">500</div>
    						<div class="product-hint-text">起购金额</div>
    					</div> 
    					<div class="product-circle">
    						<div class="inner">
    							<div class="name">半年盈BY180703</div>
    							<div class="interest">10.5
    								<small>%</small>
    							</div> 
    							<div class="title">预期年化收益率</div>
    						</div>
    					</div> 
    					<div class="term">
    						<div class="product-value-text">177
    							<small>天</small>
    						</div> 
    						<div class="product-hint-text">期限</div>
    					</div>
    				</div>
    					<div class="buy-btn">立即购买</div>
    			</div>
    			
    			
    			</div>
    			 <div class="insurnance-text">
             	<img src="http://h5.zhangzhijian.com/static/imgs/icon_insurance.svg"> 
             		<span>账户资金由第三方支付平台托管</span>
            </div>
            
    </div>
 
 
 
   <!-- </div> -->

</template>
<script>
	export default {
	name: "Home",
	data() {
		return {
			str: '首页'
		}
	},
	mounted() {
		this.$emit('toparent', this.str)
	}
}
</script>
<style scoped="">
.tupian {
	width: 40px;
	height: 40px;
	display: block;
	margin-left: 20px;
}

.special {
	display: block;
}

.pic {
	height: 200px;
	width: 100%;
}

#warp {
	background: #eff1f0;;
}

nav {
	height: 70px;
	background: white;
	border: 1px solid #dddddd;
	text-align: center;
	/* line-height: 40px; */
	font-size: 12px;
	color: #8d9eb3;
	/* line-height: 70px; */
	display: flex;
	align-items: center;
	margin-bottom: 30px;
}

.home-product {
	text-align: center;
	width: 100%;
	margin-top: 15px;
	background: #eff1f0;;
}

.home-product-content {
	background: #fff;
	display: flex;
	-ms-flex-pack: justify;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	height: 6rem;
	border-bottom: 1px solid #eee;
	box-sizing: border-box;
}

.minAmount {
	text-align: center;
	width: 30%;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.product-value-text {
	font-size: 20px;
	color: #555;
}

.product-hint-text {
	margin-top: 4px;
	font-size: 12px;
	color: #aaa;
}

.product-circle {
	background: #fff;
	border-radius: 50%;
	border: .5rem solid #fff;
	width: 6rem;
	height: 6rem;
	text-align: center;
	margin-top: -1.25rem;
}

.inner {
	border-radius: 50%;
	border: .1rem solid #c1dbf5;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.inner .name {
	font-size: .75rem;
	color: #000;
}

.interest {
	font-size: 1.5rem;
	color: #ff4545;
}

.inner .title {
	font-size: .6rem;
	color: #aaa;
}

.term {
	text-align: center;
	width: 30%;
	justify-content: center;
	flex-direction: column;
	text-align: center;
}

.term {
	text-align: center;
	width: 30%;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.product-value-text {
	font-size: 1rem;
	color: #555;
}

.buy-btn {
	background: #fff;
	padding: .5rem 0;
	font-size: 15px;
	color: #1b3d67;
	text-align: center;
	width: 100%;
	height: 20px;
	line-height: 20px;
}

.insurnance-text {
	background: #DDDDDD;
	text-align: center;
	line-height: 40px;
	margin-top: 12px;
}

.insurnance-text span {
	font-size: 12px;
	color: #888;
}</style>
