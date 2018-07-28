<template>
    <div>
      
        <div class="actionbar">
  
                <mt-navbar v-model="selected" class="nav">
                        <mt-tab-item id="1">热卖产品</mt-tab-item>
                        <mt-tab-item id="2">转让专区</mt-tab-item>
                      
                </mt-navbar>
            <mt-tab-container v-model="selected">
               <mt-tab-container-item id="1" class="one">
                   
                <img class="banner_img" src="http://zhangzhijian.b0.upaiyun.com/upload/images/banner/zhangbiduobao.png"/>
                <ul>
                    <li v-for="item in arr" class="list">
						<router-link :to="'/detail/'+item.id" tag="span">
                        	<div class="tit">{{item.name}}</div>
                        	<div class="content">
                        		<div>
                        			<strong>{{item.rate}}</strong>
                        			<p>预期年化</p>
                        
                        		</div>
                        		<div>
                        			<div class="str">{{item.day}}天</div>
                        			<p>期限</p>
                        		</div>
                        		<div>
                        			<div class="str">{{item.price}}元</div>
                        			<p>起购（元）</p>
                        		</div>
                        		
                        	</div>
                        	
                        </router-link>
                        	
                    </li>
                </ul>             
            </mt-tab-container-item>
			
                <mt-tab-container-item id="2"  class="one">
                 	<ul class="list1">
                        <li v-for="item in arr1" class="list">
                        	<div class="tit">{{item.name}}</div>
                        	<div class="content">
                        		<div>
                        			<strong>{{item.rate}}</strong>
                        			<p>预期年化</p>
                        
                        		</div>
                        		<div>
                        			<div class="str">{{item.day}}天</div>
                        			<p>剩余期限</p>
                        		</div>
                        		<div>
                        			<div class="str">{{item.price}}元</div>
                        			<p>装让价格</p>
                        		</div>
                        		
                        	</div>
                        	
                        	
                        	
                        </li>
                    </ul>

					<div class="jilu">-没有记录了-</div>             
                </mt-tab-container-item>
               
           </mt-tab-container>
        </div>
        
      
      
        
    </div>

</template>
<script>
import axios from 'axios'
export default {
  name: "Produce",
  data(){
  	return{
  		selected: "1",
  		arr:[],
  		arr1:[]
  	}
  },
  mounted() {
    this.$emit("toparent", this.str);
	var _this=this;
	axios('http://localhost:3000/produce',{
		method:'post',
		headers:{
			 'Content-type': 'application/x-www-form-urlencoded'

		}
		// params:{callback:''}
	}).then(function(data){
		console.log(data.data)
		_this.arr = data.data

	})
	axios('http://localhost:3000/produce1',{
		method:'post',
		headers:{
			 'Content-type': 'application/x-www-form-urlencoded'

		}
		// params:{callback:''}
	}).then(function(data){
		// console.log(data.data)
		_this.arr1 = data.data

	})

  }
}

</script>
<style scoped="">
.jilu{
	width: 100%;
	text-align: center;
	color:#555;
	padding: 10px;
    font-size: 12px;
}
	.nav{
		background:#1b3d67;
	}
	ul{
		margin: 0;
	}
.list{
	box-sizing: border-box;
	height: 118px;
	padding: 10px;
	list-style: none;
	margin-left: -30px;
	margin-bottom: 10px;
	background: white;

}
.content{
	display: flex;
	justify-content: space-between;
	align-items: center;
	
}
.str{
	font-size: 14px;
    color: #555;
    font-weight:100px!important;
}

.content strong{
	display: block;
	font-size: 18px;
	  color: #ff4545;
    margin-right: 10px;
    line-height: 20px;
    margin-top: 20px;
}
.content p{
	font-size: 12px; 
    color: #aaa;
    margin-top: 6px;
    width: 80px;
  
}
.tit{
	font-size: 16px;
	color: #000000;
	line-height: 20px;
}

.products-tab {
  border-radius: 50px;
  padding: 0 0.5rem;
  font-size: 0.6rem;
  color: #cadefc;
  height: 100%;
  line-height: 1.3rem;
}
.banner_img{
    width: 100%;  
    transform: translateY(-50%);
    height: 60px;
}
.one{
    position: relative;
    padding-top:30px;
    background:#eff1f0;
}

</style>