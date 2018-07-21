<template>
    <div>
        
        <mt-swipe :auto="4000" style="height:200px;">
            <mt-swipe-item><img class="pic" src="http://zhangzhijian.b0.upaiyun.com/upload/alauda/static/activity/180618/h5_banner.jpg"></mt-swipe-item>
            <mt-swipe-item><img  class="pic" src="http://zhangzhijian.b0.upaiyun.com/upload/alauda/static/activity/180702/h5_banner.png"></mt-swipe-item>
            <mt-swipe-item><img class="pic" src="http://zhangzhijian.b0.upaiyun.com/upload/alauda/static/activity/180711/h5_banner.jpg"></mt-swipe-item>
            <mt-swipe-item><img class="pic" src="http://zhangzhijian.b0.upaiyun.com/upload/images/activity/myqhy-1.jpg"></mt-swipe-item>
             <mt-swipe-item><img class="pic" src="http://zhangzhijian.b0.upaiyun.com/upload/images/activity/app_duobao.jpg"></mt-swipe-item>
        </mt-swipe>
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
      
    

    </div>

</template>
<script>
export default {
  name: "Home",
  data(){
      return{
          str:'首页'
      }
  },
  mounted(){
      this.$emit('toparent',this.str)
  }
}
</script>
<style scoped="">
.tupian{
    width: 40px;
    height: 40px;
    display: block;
    margin-left: 20px;
} 
.special{
    display: block;
}
.pic{
    height: 200px;
    width:100%;
}
nav{
  height: 70px;
  background:white;
  border: 1px solid #dddddd;
  text-align: center;
  /* line-height: 40px; */
  font-size: 12px;
  color:#8d9eb3;
  /* line-height: 70px; */
   display: flex;
 align-items: center;
  
}

</style>
