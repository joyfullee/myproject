<template>
    <div>
       <!--<header>智能赢</header>-->
        <div class="header1">
            <span style="float:left" @click="back()" class="back">&lt;</span>
               <span style="margin-left:-50px">{{name}}</span>
        </div>
       <div class="fixed-footer-inner gary-background">
       	<div>
       		<div
       			 class="product-rate-view">
       			 <div class="product-rate">
       			 	<div>
       			 		<p class="product-rate-hint">预期年化收益率</p> 
       			 		<strong>{{rate}}</strong>
       			 		<span class="bonus">.</span>
       			 	</div> 
       			 </div>
       	</div>
       </div> 
       <div class="product-detail-garybg">
       	<div class="risk-level">
       		<div>R1基本无风险</div>
       	</div> 
       	<div class="product-amount-view">
       		<div class="hint-row">
       			<div>期限{{day}}天</div> 
       			<div>
       				<!-- <span class="amount-hint">购买金额(元)</span> -->
       			</div>
       			<div>起购{{price}}</div>
       		</div>
       	
       	</div> 
       	<div>
       		<div class="product-income-view">
       			
       		</div>
       	</div> 
       	<div>
            <div class="product-tag-view">
       		<span class="tag-icon tag-icon-interest">当日起息</span> 
       		<span class="tag-icon tag-icon-due">到期还本付息</span>
       		<div class="tag-desc">到期后2个工作日内，自动还款至账户余额</div>
       	</div>
       	</div>
       	<div>
       		<div class="product-menu-view row-section">
       			<div>
       				<div><div class="info-row">
       					<div class="title-label">产品介绍</div>
       				</div>
       				</div>
       			</div>
       			<div class="info-row">
       				<div class="title-label">投资记录</div>
       			</div> 
       			<div class="info-row">
       				<div class="title-label">常见问题</div>
       			</div>
       		</div>
       	</div>
       </div>
    </div>
     
     <footer>
        <!-- <button class="plus">+</button> -->
        <input type="text" value="500" style="border:1px solid #ddd;margin-right:50px" v-model="buymoney">
        <!-- <button class="jian">-</button> -->
         <button class="buy" @click="buy()">立即购买</button>
     </footer>
    

   </div>
</template>
<script>
import axios from 'axios'
import { MessageBox } from 'mint-ui';

export default {
    name:"Detail",
    data(){
        return{
            day:"",
            rate:'',
            price:'',
            name:"",
            buymoney:"500"
        }
    },    
    mounted(){
         var _this=this;
            axios({
                method:"post",
                headers:{
			 'Content-type': 'application/x-www-form-urlencoded'    //解决跨越
		      },
                url:"http://localhost:3000/detail",
                params:{
                    id:_this.$route.params.id,
                    buymoney:_this.buymoney,
                    rate:_this.rate,
                    day:_this.day,
                    name:_this.name,
                    price:_this.price
                }
            }).then(function(data){
	    	console.log(data.data)
                  _this.name=data.data[0].name
                 _this.day=data.data[0].day
                _this.rate=data.data[0].rate
                _this.price=data.data[0].price

            })
    },
    methods:{
        back(){
            history.go(-1)
        },
        buy(){
            var _this=this;
            //本页面金额变化
            axios({
                method:"post",
                 headers:{
			 'Content-type': 'application/x-www-form-urlencoded'   
              },
              url:"http://localhost:3000/buy",
              params:{
                buymoney:_this.buymoney,
                // 取当前详情页商品id
                id:_this.$route.params.id,
                 rate:_this.rate,
                day:_this.day,
                 name:_this.name,
                 price:_this.price

              }
            }).then(function(data){
                // console.log(data.data)
                if(data.data==1){
                    // alert("购买成功")
                    MessageBox('提示', '购买成功');
                }
            })

          
        }
    }

}
</script>
<style scoped="">
.back{
    margin-left: -35px;
}
.header1{
            height: 40px;
            color: #fff;
            font-size: 14px;
            text-align: center;
            line-height: 40px;
            background:#1c3d68;;
            width: 100vw;
        }
        
.plus,.jian{
    width: 32px;
    background: #f3f3f3;
        background-size: 12px auto;
        border: 0;
}
.buy{
    border: 0;
    width:100px;
    height: 100%;
    color: #fff;
    background-color: #ff4545;
    border-color: #ff4545;
    font-size: 16px;
}
input{
    -webkit-appearance: none;
    width: 50px;
    /* height: 100%;
    width: 100%; */
    border: none;
    color: #ff4b56;
    padding: 2px;
    font-size: 15px;
    box-sizing: border-box;
}
footer{
    position: fixed;
    bottom: 0;
}
.number-amount {
    width: 49%;
    height: 100%;
}
.number-input {
    box-sizing: border-box;
    position: relative;
    padding: 0 32px;
    border: 1px solid #eee;
}
.product-rate {
    color: #ff4545;
    text-align: center;
    font-size: 24px;
    line-height: 42px;
}
.info-row, .row-section .input-row {
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
.product-rate>div {
    margin-top: 6px;
    padding: 15px;
}
.product-rate-hint {
    font-size: 12px;
    color: #888;
    text-align: center;
}
.product-rate strong {
    font-size: 42px;
}
strong, b {
    font-weight: normal;
}
.product-rate {
    color: #ff4545;
    text-align: center;
    font-size: 24px;
    line-height: 42px;
}
.amount-picker-measure>div {
    position: relative;
    height: 120px;
}
.product-detail-garybg {
    background-color: #eff0f0;
}
.risk-level {
    background-color: #fff;
    position: relative;
}
.risk-level>div {
    color: #74d183;
    font-size: 12px;
    width: 25%;
    height: 20px;
    line-height: 20px;
    margin: 0 auto;
    border-radius: 3px;
    border: 1px solid #eee;
    text-align: center;
}
.product-amount-view {
    background-color: #fff;
    padding-top: 15px;
    padding-bottom: 15px;
    position: relative;
}
.hint-row {
    width: 100%;
    overflow: hidden;
}
.hint-row div {
    list-style-type: none;
    float: left;
    width: 33%;
    color: #999;
    font-size: 12px;
    text-align: center;
}
.product-amount-view input {
    -webkit-appearance: none;
    outline: none;
    border: none;
    display: block;
    width: 40%;
    height: 48px;
    background-color: transparent;
    color: #f66;
    text-align: center;
    font-size: 26px;
    margin: 0 auto;
    border-bottom: 1px dashed #e9e9e9;
}
.amount-picker {
    height: 60px;
    position: relative;
    border-bottom: 1px solid hsla(0,0%,91%,.5);
}
.hide-canvas-wrapper-scrollbar {
    top: -50px;
    height: 130px;
    position: relative;
    overflow-y: hidden;
}
.product-detail .product-income-view {
    padding: 15px;
    padding-top: 0;
    background-color: #fff;
}
.product-income-hint {
    font-size: 12px;
    color: #555;
    text-align: center;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
}
.product-income {
    margin-top: 10px;
    font-size: 20px;
    color: #ff4545;
    text-align: center;
}
.product-tag-view {
    background-color: #fff;
    padding: 12px 15px;
    margin-top: 12px;
    font-size: 12px;
    color: #aaa;
    margin-bottom: 20px;
}
</style>
