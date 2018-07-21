<template>
    <div>
        <div class="top">{{tit}}</div>
    </div>
</template>
<script>
export default {
    name:'Header',
     data(){
    return{
      tit:'hah'
    }
  },
  mounted() {
     this.$emit('toparent',this.tit)
  },

}
</script>
<style>
.top{
  height: 40px;
  background:#1c3d68;
  text-align: center;
  font-size: 12px;
  color:#8d9eb3;
}
.top{
  line-height: 40px;
}
</style>

