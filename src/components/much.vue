<template>
    <div>
        <header>{{str}}</header>
        <h1>更多</h1>
    </div>

</template>
<script>
export default {
  name: "Much",
   data(){
      return{
          str:'更多'
      }
  },
  mounted(){
      this.$emit('toparent',this.str)
  }
}
</script>
<style>

</style>
