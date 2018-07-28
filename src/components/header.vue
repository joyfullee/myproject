<template>
    <div>
        <div class="top">
        	<span class="jiantou" @click="tap()">&lt;</span>
            <span>{{name}}</span> 
        
        </div>
    </div>
</template>
<script>
export default {
    name:'Header',
    props:['name'],
     data(){
    return{
      tit:'toubu'
    }
  },
methods:{
	tap(){
		this.$router.push("/index")
	}
}

}
</script>
<style>
.top{
  height: 40px;
  background:#1c3d68;
  text-align: center;
  font-size: 12px;
  color:#8d9eb3;
  position: relative;
}
.jiantou{
	font-size: 20px;
 position: absolute;
 left: 0;
	
}
.top{
  line-height: 40px;
}
</style>

