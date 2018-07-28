<template>
    <div>
    	<div class="banner">
    		  <img src="http://h5.zhangzhijian.com/app/images/yq_013.jpg"/>
    	</div>
    	<div class="content">
    		  	<button class="yaoqing">去邀请好友</button>
    		  	<h3><img src="http://h5.zhangzhijian.com/app/images/yq_04.jpg"/></h3>
    		  	<div class="item">
    		  		<ul class="list">
    		  			<li><i>1</i>邀请第一位好友5元，第二位6元，第三位7元，以此类推......邀请人数≥21按每人25元奖励，可累计；</li>
    		  			<li><i>2</i>新用户注册并首购成功，老用户获得佣金；
<br> 注：转让标不参与首购送佣金，如用户首笔购买为转让标则视为老用户，此次邀请无效
                        </li>
    		  			<li><i>3</i>新用户购买理财，老用户可得到相应的理财提成（6‰年化） 如好友投资半年盈100000元，则提成为100000*6‰*180/365=295元；
</li>
    		  			<li><i>4</i>老用户需购买过任意常规理财产品（新手体验标、转让标除外）后，邀请的好友才有效；</li>
    		  			<li><i>5</i>佣金奖励需通过购买理财产品，按比例进行提取后，2个工作日内发放至银行卡。</li>
    		  			<li style="margin-left:0;">
                            <h4>温馨提示</h4>
                            <div>1. 佣金提取比例如下表：</div>
                            <table class="bili">
                                <tr>
                                    <th width="25%">产品类型</th>
                                    <th width="25%">提佣比例</th>
                                    <th style="text-align:left;">提佣说明</th>
                                </tr>
                                <tr>
                                    <td>月盈
                                        <br>(30天)</td>
                                    <td>1:30</td>
                                    <td style="text-align:left;">例：提取10元佣金，需购买300元的月盈产品</td>
                                </tr>
                                <tr>
                                    <td>季盈
                                        <br>(90天)</td>
                                    <td>1:10</td>
                                    <td style="text-align:left;">例：提取10元佣金，需购买100元的季盈产品</td>
                                </tr>
                            </table>
                            <div>2. 其他产品无法提取佣金；</div>
                            <div>3. 请使用掌指APP或微信登录至“个人中心”邀请好友。</div>
                        </li>
                    </ul>
    		  	</div>
    		  	 <div class="item" style="margin-top:22px;">
                    <h3><img src="http://h5.zhangzhijian.com/app/images/yq_04.jpg" style="height:50px;"></h3>
                    <ul class="list" style="background:#a8d5ec; color:#2786bb;">
                        <li><i style="background:#2fabeb;">1</i>新用户注册送1888元红包和500掌币，首次购买再送1500掌币；</li>
                        <li><i style="background:#2fabeb;">2</i>新用户完成首购后，即可去邀请好友，赚取佣金；</li>
                        <li><i style="background:#2fabeb;">3</i>掌币可兑换话费、支付宝余额、京东E卡等超值好礼。</li>
                    </ul>
                </div>
            </div>
            
            
            

    </div>
    
  
     </div>
</template>

<script>
import Header from '../components/header'
export default {
    name:"Yaoqing",

  methods:{
 
  }
}
</script>
<style scoped="">
	*{
		margin: 0;
		padding: 0;
	}

 img{
	  width: 100%;
	  height: 250px;
	  border: 0;
}
.content{
 box-sizing: border-box;
	height: auto;
	padding: 10px;
}
.yaoqing{
	width: 372px;
	height: 46px;
	line-height: 46px;
	text-align: center;
	background: #e3444e;
	border-radius:5px ;
	color: white;
	font-size: 18px;
	border: 0;
	margin: 10px 0;
}
h3 img{
	margin-top: 10px;
	width: 222px;
	height: 50px;
	;
}
li{
	list-style: none;
}
.item .list li {
    position: relative;
    margin: 0 0 5px 22px;
}
 .item .list {
    background: #ffce81;
    -webkit-border-radius: 6px;
    padding: 16px;
    font-size: 14px;
    margin-top: 5px;
}
.item {
     margin-top: 30px;
  /*  margin-top: 30px;*/
    color: #bc641c;
    }
     .item .list li i {
    display: inline-block;
    height: 16px;
    line-height: 16px;
    width: 16px;
    background: #fe7c00;
    color: #fff;
    position: absolute;
    left: -22px;
    top: 3px;
    -webkit-border-radius: 8px;
    text-align: center;
    font-style: normal;
}
.item h4 {
    display: inline-block;
    font-size: 12px;
    color: #fff;
    font-weight: normal;
    padding: 0 5px;
    background: #fe7c00;
    -webkit-border-radius: 3px;
    margin: 10px 0 5px;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
</style>