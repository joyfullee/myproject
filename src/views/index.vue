<template>
  <div id="app">
    <section>
      <router-view @toparent="getdata"></router-view>
    </section>
    
    <footer>
      <router-link to="/index" tag="span">
        <i class="iconfont icon-home"></i>
         
          首页
      </router-link>
      <router-link to="/index/produce" tag="span">
       <i class="iconfont icon-licai"></i>
      产品
      </router-link>
      <router-link to="/index/mine" tag="span">
       <i class="iconfont icon-user"></i>
      我的</router-link>
      <router-link to="/index/much" tag="span">
      <i class="iconfont icon-more"></i>
      更多</router-link>
      

    </footer>
   
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      str:'首页'
    }
  },
  methods:{
    getdata(msg){
      this.str=msg;
    }
  }
}
</script>

<style>
body{
  padding:0;
  margin:0;
}
p{
  width: 24px;
  height: 12px;
}
#app{
  height:100vh;
  display:flex;
  flex-direction:column;
}
/* header{
   background:#1c3d68!important;
     color:#8d9eb3!important;
} */
header,footer{
  height: 40px;
  background:#1c3d68;
  text-align: center;
  font-size: 12px;
  color:#8d9eb3;
}
header{
  line-height: 40px;
}
footer{
  display: flex;
 
} 
span{
  width: 25%;
}
section{
  flex: 1;
   overflow: auto;
}
.router-link-active{
  color: white;
}
.iconfont{
  display: block;
  /* margin-top:5px; */
  font-size: 20px;
} 
</style>
