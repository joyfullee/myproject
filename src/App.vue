<template>
  <div id="app">
    <!-- <mt-header fixed title="首页"></mt-header> -->

    <section>
      <router-view @toparent="getdata"></router-view>
    </section>
    
    <footer>
      <router-link to="home" tag="span">首页</router-link>
      <router-link to="produce" tag="span">产品</router-link>
      <router-link to="mine" tag="span">我的</router-link>
      <router-link to="much" tag="span">更多</router-link>
      

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
  line-height: 40px;
  font-size: 12px;
  color:#8d9eb3;
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
</style>
