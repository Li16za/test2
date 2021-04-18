<template>
    <div>
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
        <button @click="limits=10;start=0;" class="b1" > 0 </button>
        <button @click="limits=20;start=10;" class="b2" > 1 </button>
        <button @click="limits=30;start=20;" class="b1" > 2 </button>
        <button @click="limits=40;start=30;" class="b2" > 3 </button>
        <button @click="limits=50;start=40;" class="b1" > 4 </button>
        <button @click="limits=60;start=50;" class="b2" > 5 </button>
        <button @click="limits=70;start=60;" class="b1" > 6 </button>
        <button @click="limits=80;start=70;" class="b2" > 7 </button>
        <button @click="limits=90;start=80;" class="b1" > 8 </button>
        <button @click="limits=100;start=90;" class="b2" > 9 </button>
        <button @click="limits=110;start=100;" class="b1" > 10 </button>
        <button @click="limits=120;start=110;" class="b2" > 11 </button>
        <button @click="limits=130;start=120;" class="b1" > 12 </button>
        <button @click="limits=140;start=130;" class="b2" > 13 </button>
        <button @click="limits=150;start=140;" class="b1" > 14 </button>
        <button @click="limits=160;start=150;" class="b2" > 15 </button>
        <button @click="limits=170;start=160;" class="b1" > 16 </button>
        <button @click="limits=180;start=170;" class="b2" > 17 </button>
        <button @click="limits=190;start=180;" class="b1" > 18 </button>
        <button @click="limits=200;start=190;" class="b2" > 19 </button>
        <button @click="limits=210;start=0;" class="b1" > 20 </button>
        <button @click="limits=220;start=210;" class="b2" > 21 </button>
        <button @click="limits=230;start=220;" class="b1" > 22 </button>
        <button @click="limits=240;start=230;" class="b2" > 23 </button>
        <button @click="limits=250;start=240;" class="b1" > 24 </button>
        <button @click="limits=260;start=250;" class="b2" > 25 </button>
        <button @click="limits=270;start=260;" class="b1" > 26 </button>
        <button @click="limits=280;start=270;" class="b2" > 27 </button>
        <button @click="limits=290;start=280;" class="b1" > 28 </button>
        <button @click="limits=290;start=280;" class="b2" >  end </button>
    </div>
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