<template>
    <div>
        <header>{{str}}</header>
        <h1>产品</h1>
        
    </div>

</template>
<script>
export default {
  name: "Produce",
   data(){
      return{
          str:'产品'
      }
  },
  mounted(){
      this.$emit('toparent',this.str)
  }
}
</script>
<style>

</style>
