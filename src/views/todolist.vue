<template>
<transition name="fade">
    <div class="load">
        
        <table>
            <thead> 
                <tr>      
                <th><h3> небесное тело</h3></th>
                <th><h4> Планета?</h4></th>
                <th><h5>дата открытия и кто открыл</h5></th>
            </tr>
            </thead>
            <tbody>
            <todoitem
            v-for="todo in todos.slice(start,limits)"
            v-bind:todo="todo"
            :key="todo"/>
            </tbody>
        </table>
        <button @click="limits=10;start=0;" class="b2" > begin </button>
        <button v-for="n in 29" :key="n" @click="limits=10*n+10;start=10*n;" class="b1">{{n}}</button>
        <button @click="limits=290;start=280;" class="b2" >  end </button>
        
    </div>
    </transition>
</template>
<script>
import todoitem from '@/views/todoitem'
export default {
    props:['todos'],
        data(){
        return {
            limits:10,
            start:0}
    },
    components:{
        todoitem
    }
}
</script>
<style scoped>
.b2{
text-align:center;
color:white;
border:2px;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(27,26,159,1) 33%, rgba(19,19,201,1) 50%, rgba(12,78,224,1) 71%, rgba(0,212,255,1) 100%);
}
.b1{
text-align:center;
color:white;
border:2px;
background: linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(12,78,224,1) 33%, rgba(19,19,201,1) 50%, rgba(27,26,159,1) 71%, rgba(2, 0, 36,1) 100%);
}
th{
    color :rgb(253, 253, 253);
    width:150px;
    margin-bottom: 20px;
    border:2px solid rgb(235, 216, 216);
    font-weight: bold;
    padding: 5px;
    background: rgb(6, 12, 236) ;
    background: radial-gradient(circle,rgba(6,12,236,1) 0%,rgba(0,2,51) 100%)
}
table{
  margin:auto;
  text-align: center;
  color:white;
}
</style>