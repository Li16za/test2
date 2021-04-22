<template>
  <div class="home" >
    <h1 >Космические тела</h1>
    <loader v-if="stars.length == 0" />
    <starlist v-else
v-bind:stars="filterstars" 
@filters="SetFilter"
/>
  </div>
  
</template>

<script>

import { mapGetters,mapActions } from 'vuex'
import starlist from '@/components/starlist'
import loader from '@/components/Loader'
export default {
  name: 'Home',
  components:{
    starlist,
    loader
  },
  data(){
    return {
      filter:null,

  }},
  mounted(){
      this.getData();
  },
  methods:{
    ...mapActions(["getData"]),
    SetFilter(SkayBody){
    this.filter=SkayBody;
  },
  },
  computed: {
    ...mapGetters(["stars"]),
    filterstars(){
      var starsFilter=this.stars;
      if (!this.filter){
        return starsFilter}
      if (this.filter.search){
        starsFilter=starsFilter.filter(t => t.name.includes(this.filter.search));
      }
      if(this.filter.isPlanets!="all"){
        let isplanets=true;
        if (this.filter.isPlanets=="isplanetfalse"){
          isplanets=false;
        }
        starsFilter=starsFilter.filter(t => t.isPlanet ==isplanets);
      }
      return starsFilter;
    }
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