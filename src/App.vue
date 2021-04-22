<template>
  <div id="app" class="app" >
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
}
</script>
<style lang="scss">
.app{
  width:100%; 
  height:100%;
  top:0;
  left:0;
  overflow:auto;
  position:absolute;
  color:rgb(255, 255, 255);
  background-image: url('assets/fon.png');
}
</style>
