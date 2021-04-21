<template>
    <div>
        <select name="filter" v-model="filter">
                                        <option value="">Выберите значение</option>
                                        <option value="sorting">name: a-z</option>
                                        <option value="isplanetfalse">IsPlanet:false</option>
                                        <option value="isplanettrue">IsPlanet:true</option>
                                    </select>
        <button class="btn btn-primary"> filter</button>
        <input type="text" v-model="seach">
        <button class="btn btn-primary"> seach</button>
        <table>
            <thead> 
                <tr>      
                <th><h4> Имя объекта</h4></th>
                <th><h4> Является ли объект планетой</h4></th>
                <th><h4>Кем и когда открыта</h4></th>
                <div class="load">
                    <div class="form-group">
                        <button class="btn btn-primary" @click.prevent="showModalOne = !showModalOne">Insert</button>
                    </div>
                <div class="customModal" v-if="showModalOne">
                    <div class="customModalTitle"> INSERT</div>
                    <div class="customModalBody">
                        <table>
                            <td>
                                <form class="forms" action="">
                                    Небесное тело: <br>
                                    <input type="text" v-model="name">
                                    <br> Является ли объект планетой: <br>
                                    <select name="isPlanet" v-model="isPlanet">
                                        <option value="">Выберите значение</option>
                                        <option value="true">true</option>
                                        <option value="false">false</option>
                                    </select>
                                    <br> Дата открытия: <br>
                                    <input type="text" v-model="discoveryDate">
                                    <br>Кто открыл: <br>
                                    <input type="text" v-model="discoveredBy">
                                    <br>
                                </form>
                            </td>
                            <td>
                                <ul>
                                    <todoitem1
                                        v-for="(todoi,index) in paginateddata"
                                        v-bind:todoi="todoi"
                                        :key="index"/>
                                </ul>
                                <button @click="pagenumber=0;" class="b2" > begin </button>
                                <button :disabled="pagenumber===0" @click="prevpage" class="b1">back</button>
                                <button :disabled="pagenumber>=pagecount-1" @click="nextpage" class="b2">next</button>
                                <button @click="pagenumber=pagecount-1;" class="b1" >  end </button>
                            </td>
                        </table>
                    </div>
                    <div class="customModalFooter">
                        <button class="btn btn-primary" @click.prevent="addnew">Insert</button>
                        <button class="close" @click.prevent="showModalOne = !showModalOne" >&times;</button>
                    </div>
                </div>
                </div>
            </tr>
            </thead>
            <tbody>
            <todoitem
            v-for="(todo,index) in todos.slice(start,limits)"
            v-bind:todo="todo"
            v-on:rem-todo="removetodo"
            :key="index"/>
            </tbody>
        </table>
        <button @click="limits=10;start=0;" class="b2" > begin </button>
        <button v-for="(n,index) in pagecount-1" :key="index" @click="limits=10*n+10;start=10*n;" class="b1">{{n}}</button>
        <button @click="limits=todos.length;start=todos.length-10;" class="b2" >  end </button>
    </div>
</template>
<script>
import todoitem from '@/views/todoitem'
import todoitem1 from '@/views/todoitem.1'
export default {
    props:['todos'],
        data(){
        return {
            limits:10,
            start:0,
            text: '',
            showModalOne: false,
            name:'',
            isPlanet:'',
            discoveryDate:'',
            discoveredBy:'',
            pagenumber:0,
            size:10,
            seach:'',
            sorting:'',
            filter:'',
            isplanetrue:'',
            isplanetfalse:''
        }
    },
    components:{
        todoitem,
        todoitem1,
    },
    methods:{
            addnew(){
                this.todos.push({
                    'name':this.name,
                    'isPlanet':this.isPlanet,
                    'discoveryDate':this.discoveryDate,
                    'discoveredBy':this.discoveredBy,
                })
                this.closeModal()
            },
            nextpage(){
                this.pagenumber++;
            },
            prevpage(){
                this.pagenumber--;
            },
            removetodo(id) {
                this.$emit('rem-todo',id)
            } ,   
    },
    computed:{
        pagecount(){
            let l= this.todos.length;
            let s=this.size;
            return Math.ceil(l/s);
        },
        paginateddata(){
            const starts = this.pagenumber*this.size;
            const end= starts+this.size;
            return this.todos.slice(starts,end);
        }
    },

    }
</script>
<style>
.b2{
text-align:center;
color:white;
border:2px;
font-size:20px;
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(27,26,159,1) 33%, rgba(19,19,201,1) 50%, rgba(12,78,224,1) 71%, rgba(0,212,255,1) 100%);
}
.b1{
text-align:center;
color:white;
border:2px;
font-size:20px;
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
table,ul{
    margin:auto;
    text-align: center;
    color:white;
}
.btn {
outline: none !important;

}
.customModal .customModalFooter .close {
line-height: 32px;
color:white;
background: radial-gradient(circle,rgba(6,12,236,1) 0%,rgba(0,2,51) 100%);
width: 100px;
height: 50px;
border-radius:10px;
font-size:36px;
top:4px;
position: relative;
left: 75%;
transform: translate(-50%, 0); 

}
.btn.btn-primary:hover {
background-color: #4ECA78;
border-color: #4ECA78;
}

.btn.btn-primary:active, .btn.btn-primary:focus {
background-color: #4ECA78;
border-color: #4ECA78;
}
.btn.btn-primary .fa {
padding-right: 4px;

}
.customModal {
box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.4);
left: calc(50vw - 300px);
position: absolute;
z-index: 999;
width: 600px;
top: 20vh;
border-radius: 5px;
overflow: hidden;
}
.customModal .customModalTitle {
text-align: center;
padding: 8px 12px;
font-size: 1.5em;
background: rgb(14, 6, 26);
}

.customModal .customModalBody {
padding: 8px 12px;
text-align: left;
padding: 12px;
background:black;
}
.customModal .customModalFooter {
padding: 4px 12px;
text-align: left;
background: rgb(14, 6, 26);
}
.btn.btn-primary {
color:white;
background: radial-gradient(circle,rgba(6,12,236,1) 0%,rgba(0,2,51) 100%);
border-color: rgb(255, 255, 255);
outline: none;
width: 100px;
height: 50px;
border-radius:10px;
font-size:24px;
}

</style>