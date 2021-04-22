<template>
  <div class="view">
    <h1>Information planet</h1>
    <loader v-if="starView == null" />
    <div v-else>
    <button @click="$router.go(-1)" class="btn btn-primary">back</button>
    <table>
      <tr v-for="(info,index) in starView" :key="index">
        <template v-if="!cheackObject(info)">
        <td>{{index}}</td>
        <td>{{info}}</td>
        </template>
        <template v-else>
        <td>{{index}}</td>
        <td>
          <p v-for="(infos,indexs) in info" :key="indexs">
            {{indexs}} : {{infos}}
          </p>
        </td>
        </template>
      </tr>
    </table>
  </div>
  </div>
</template>
<script>
import { mapGetters,mapActions } from 'vuex'
import loader from '@/components/Loader'

export default {
  name: 'Info',
  components: {loader},
  data() {
    return{
      
    }
  },
  mounted(){
      this.setData(this.$route.params.id);

  },
  methods:{
    ...mapActions(["setData"]),
    cheackObject(info){
      return info !== null && typeof info === 'object';
    }
  },
  computed: {
      ...mapGetters(["starView"]),
      
        }
      }
</script>