<style scoped>
.main-content {
  height: 100vh;
  overflow-x: hidden;
  overflow-y:auto; 
  box-sizing: border-box;
  background:#eff0f0
}
.offset-top {
  padding-top: 44px;
}
header {
  height: 44px;
  text-align: center;
  text-align: center;
  background: #1b3d67;
  color: #fff;
  line-height: 44px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
header .back {
  position: absolute;
  height: 100%;
  width: 44px;
  text-align: center;
  top: 0;
  left: 0;
  background-size: 16px 24px;
  background-image: url("~@/assets/back.png");
  background-repeat:no-repeat;
  background-position: center; 
}
.purchase .product-content {
    background: #fff;
    padding: 15px;
}
.purchase .name-left {
    float: left;
    width: 50%;
    text-align: left;
}
.purchase .name-right {
    float: right;
    width: 50%;
    text-align: right;
}
.purchase .product-name {
    font-size: 16px;
    color: #3b3b3b;
    overflow: hidden;
}
.purchase .product-content p {
    margin-top: 10px;
    font-size: 14px;
    color: #aaa;
}
.purchase .amount-section, .purchase .balance-section, .purchase .preference-section {
    margin-top: 12px;
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
.info-row .title-label {
    float: left;
    line-height: 22px;
    font-size: 14px;
    color: #888;
    min-width: 78px;
}
.info-row .value-label {
    float: right;
    line-height: 22px;
    margin-right: 14px;
    color: #888;
    font-size: .7rem;
}
.purchase .current-balance {
    overflow: hidden;
    padding: 8px 15px;
    background: #f6f9f8;
    color: #aaa;
    font-size: 12px;
}
.primary-text {
    color: #ff4545!important;
}
.purchase .current-balance .balance-label {
    float: left;
}
.purchase .current-balance .status-label {
    float: right;
    color: #000;
}
.submit-btn {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
.check-agreement input{
    vertical-align: top;
}
</style>

<template>
<div>
    <header><span class="back"></span>购买产品</header>
    <div class="main-content offset-top">
        <div class="purchase">
            <div class="product-content">
                <div class="product-name">
                <div class="name-left">智能盈</div>
                <div class="name-right">10,000.00</div>
                </div>
                <p>预期年化：6.0-7.0%</p>
                <p>理财期限：7-15天</p>
            </div>
            <div class="row-section preference-section">
                <div class="info-row">
                <span class="title-label">卡券红包</span>
                <span class="value-label" style="color: rgb(153, 153, 153);">无可用优惠</span>
                </div>
                <!---->
            </div>
            <div class="row-section balance-section">
                <div class="info-row no-action">
                <div class="title-label">余额支付</div>
                <div class="value-label primary-text">￥0.00</div>
                </div>
                <div class="current-balance">
                <p class="balance-label">连连支付余额
                    <span>0.00</span>元
                    <a href="#/recharge" class="">充值</a>
                </p>
                <p class="status-label">余额不足</p>
                </div>
            </div>
            <div class="row-section amount-section">
                <div class="info-row no-action">
                <div class="title-label">还需支付</div>
                <div class="value-label primary-text">￥10,000.00</div>
                </div>
                <!---->
            </div>
            <button class="submit-btn">确认付款</button>
            <div class="check-agreement">
                <input type="checkbox" id="agreementCheck" class="checkbox-custom">
                <label for="agreementCheck" class="checkbox-custom-label">
                <span class="icon"></span>
                <span>我已阅读并同意</span>
                <span class="term">《授权服务协议》
                </span>
                </label>
            </div>
        </div>
    </div>
    
</div>
    
</template>
