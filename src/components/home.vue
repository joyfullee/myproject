<template>
    <div>
        
        <mt-swipe :auto="4000" style="height:200px;">
            <mt-swipe-item><img src="http://zhangzhijian.b0.upaiyun.com/upload/alauda/static/activity/180618/h5_banner.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="http://zhangzhijian.b0.upaiyun.com/upload/alauda/static/activity/180702/h5_banner.png"></mt-swipe-item>
            <mt-swipe-item><img src="http://zhangzhijian.b0.upaiyun.com/upload/alauda/static/activity/180711/h5_banner.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="http://zhangzhijian.b0.upaiyun.com/upload/images/activity/myqhy-1.jpg"></mt-swipe-item>
             <mt-swipe-item><img src="http://zhangzhijian.b0.upaiyun.com/upload/images/activity/app_duobao.jpg"></mt-swipe-item>
        </mt-swipe>
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
img{
    height: 200px;
    width:100%;
}
</style>
