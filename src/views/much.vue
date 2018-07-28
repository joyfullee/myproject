<template>
    <div>
        <header>{{str}}</header>
        
        <!--内容区域-->
           <div class="main-content offset-top offset-bottom">
           	<div>
           		<div class="more-items">
           			<div class="more-row">
           				<div class="more-item">
           					<i class="iconfont icon-calendar" style="color: rgb(250, 93, 115);"></i> 
           					<p>每日签到</p>
           				</div> 
           				<div class="more-item">
           					<i class="iconfont icon-flower" style="color: rgb(36, 208, 202);"></i> 
           					<p>掌币夺宝</p>
           				</div> 
           				<div class="more-item">
           					<i class="iconfont icon-cup" style="color: rgb(251, 166, 33);"></i> 
           					<p>中奖记录</p>
           				</div>
           			</div> 
           			<div class="more-row">
           				<div class="more-item">
           					<i class="iconfont icon-mm-notice" style="color: rgb(57, 214, 122);"></i> 
           					<p>平台公告</p>
           				</div> 
           				<div class="more-item">
           					<i class="iconfont icon-quequan" style="color: rgb(254, 108, 93);"></i> 
           					<p>兑付确权</p></div> 
           					<div class="more-item">
           						<i class="iconfont icon-card" style="color: rgb(36, 181, 242);"></i> 
           						<p>银行卡管理</p>
           					</div>
           			</div>
           		</div> 
           		<div class="row-section margin-top">
           			<div class="info-row ">
           				<i class="iconfont icon-share"></i> 
           				<span class="title-label">分享好友</span>
           			</div>
           		</div> 
           		<div class="row-section margin-top">
           			<div class="info-row">
           				<i class="iconfont icon-question"></i> 
           				<span class="title-label">帮助中心</span>
           			</div> 
           			<div class="info-row no-action">
           				<i class="iconfont icon-smile"></i> 
           				<span class="title-label">客服服务</span> 
           				
           			</div> 
           				 <div class="info-row ">
           				 	<i class="iconfont icon-feadback"></i> 
           				 	<span class="title-label">意见反馈</span>
           				 </div>
           		</div> 
           		<div class="row-section margin-top">
           			<div class="info-row">
           				<i class="iconfont icon-peoples"></i> 
           				<span class="title-label">关于掌指</span>
           			</div> 
           			<div class="info-row no-action">
           				<i class="iconfont icon-wechat"></i> 
           				<span class="title-label">微信订阅号</span> 
           				<div class="value-label right"></div>
           			</div> 
           			<div class="info-row no-action">
           				<i class="iconfont icon-sina"></i> 
           				<span class="title-label">新浪微博</span> 
           				<div class="value-label right"></div>
           			</div> 
           			<div class="info-row">
           				<i class="iconfont icon-handbag"></i>
           				<span class="title-label">商务合作</span>
           			</div>
           		</div> <!---->
           	</div>
           </div>
           					
    </div>

</template>
<script>
export default {
  name: "Much",
   data(){
      return{
          str:'更多'
      }
  },
  mounted(){
      this.$emit('toparent',this.str)
  }
}
</script>
<style scoped="">
	*{
		margin:0 ;
		padding: 0;
	}
.main-content.offset-bottom {
    bottom: 49px;
}
.main-content.offset-top {
    top: 44px;
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
.more-items {
    text-align: center;
    background-color: #fff;
}
.more-items .more-row {
    width: 100%;
    display: -ms-flexbox;
    display: flex;
}
.more-items .more-item {
    box-sizing: border-box;
    width: 33.333333%;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
}
.more-items .more-item:nth-child(3n) {
    border-right: none;
}
.more-items .more-item {
    box-sizing: border-box;
    width: 33.333333%;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
}
.iconfont {
    display: inline-block;
    margin-top: .5rem;
    font-size: 1.5rem;
    vertical-align: middle;
}
.more-item p {
	width: 128px;
	height: 19px;
    margin-top: 8px;
    font-size: 14px;
    margin-bottom: .4rem;
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
.info-row .iconfont {
    font-size: 22px;
    color: #8d9eb3;
    margin-right: 4px;
    line-height: 1;
    position: relative;
    top: 3px;
}
.title-label {
    float: none;
}
.row-section.margin-top {
    margin-top: 12px;
}
.detail-text {
    float: right;
    margin-right: 14px;
    margin-top: -4px;
    margin-bottom: -4px;
    color: #000;
    font-size: .6rem;
    text-align: right;
}
.detail-text p {
    font-size: 14px;
}
.major-text {
    color: #528bd2!important;
}
.detail-text>.sub-label {
    font-size: 10px;
    color: #aaa;
}
</style>
