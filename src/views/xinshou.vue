<template>
    <div>
        <v-header :name="tit"></v-header>
        
       <h2>活动</h2>
    </div>
</template>

<script>
import Header from '../components/header'
export default {
    name:"Xinshou",
    data(){
        return{
            tit:'新手必看'
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
