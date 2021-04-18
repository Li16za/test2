<template>
  <div class="home" >
    <h1 >Planets</h1>
    <todolist
v-bind:todos="todos" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import todolist from '@/views/todolist'
export default {
  name: 'Home',
  components:{
    todolist
  },
  data(){
    return {
      todos:[]
  }},
  mounted(){
      axios.get('https://api.le-systeme-solaire.net/rest/bodies/')
      .then(response=>this.todos=response.data.bodies)
      .catch(error=>{console.error(error);});
  }
}
</script>
<style>
td{
  width: 250px;
  text-align:center;
  height:50px;
  background:black;
  border:2px solid rgb(235, 216, 216);
}
div{
  color:white;
  text-align:center;
}
</style>