<template>
    <div>
        <v-header @toparent="getdata"></v-header>
        
       <h2>活动</h2>
    </div>
</template>

<script>
import Header from '../components/header'
export default {
    name:"Huodong",
    data(){
        return{
            tit:'活动指南'
        }
  },
  components:{
      'v-header':Header

  },
  methods:{
      getdata(i){
          this.tit=i;
      }
  }
}
</script>
<style scoped>

</style>
