<template>
    <div>

        <header>{{str}}</header>
        <h1>我的</h1>
    </div>

</template>
<script>
export default {
  name: "Mine",
   data(){
      return{
          str:'我的'
      }
  },
  mounted(){
      this.$emit('toparent',this.str)
  }
}
</script>
<style>

</style>
