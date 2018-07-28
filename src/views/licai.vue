<template>
    <div>
        <v-header :name="tit"></v-header>
         <div class="banner">
    		   <img src="http://h5.zhangzhijian.com/app/images/ensure/banner.jpg"/>
    	</div>
    </div>
</template>

<script>
import Header from '../components/header'
export default {
    name:"Licai",
    data(){
        return{
            tit:'理财保证'
        }
  },
  components:{
      'v-header':Header

  },
  methods:{
 
  }
}
</script>
<style scoped="">
	*{
		margin: 0;
		padding: 0;
	}
	body {
    font: 12px/20px 'Microsoft Yahei',Verdana,Arial,\5b8b\4f53;
}
 img{
	  width: 100%;
	  height: 522px;
	  border: 0;
}
img {
    border: 0;
    text-align: left;
}
</style>
