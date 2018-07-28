<template>
    <div>
        <v-header :name="tit"></v-header>
        
       <h2>活动</h2>
    </div>
</template>

<script>
import Header from '../components/header'
export default {
    name:"Huodong",
    data(){
        return{
            tit:'活动中心'
        }
  },
  components:{
      'v-header':Header

  },
  methods:{
 
  }
}
</script>
<style scoped>

</style>
