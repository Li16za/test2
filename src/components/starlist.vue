<template>
    <div>
        <div class="Title">
            <div class="filter">
                <h4>Search:</h4>
        <input @input="changeFilter" type="text" v-model="search" class="input">
            </div>
        <div class="filter">
        <h4>IsPlanet:</h4>
        <select @change="changeFilter" name="filter" v-model="filterplanet" class="select">
            <option value="all">all</option>
            <option value="isplanetfalse">false</option>
            <option value="isplanettrue">true</option>
        </select>
        </div>
                    <button class="btn btn-primary" @click.prevent="showModalOne = !showModalOne">Insert</button>
                <modal v-if="showModalOne"
                v-bind:stars="stars"
                v-on:close="close"
                />
                    <button class="btn btn-primary" @click.prevent="showModalFour = !showModalFour">просмотр удаленных записей</button>
                <modal1 v-if="showModalFour"
                v-on:close1="close1"
                />
            </div>
        <table>
            <thead> 
                <tr>      
                <th><h4> Имя объекта</h4></th>
                <th><h4> Является ли объект планетой</h4></th>
                <th><h4>Кем и когда открыта</h4></th>
                
            </tr>
            </thead>

            <tbody>
            <staritem
            v-for="star in stars.slice(start,limits)"
            v-bind:star="star"
            :key="star.id+star.name"/>
            </tbody>
        </table>
        <button @click="limits=10;start=0;" class="b2" > begin </button>
        <button v-for="(n,index) in pagecount-1" :key="index" @click="limits=10*n+10;start=10*n;" class="b1">{{n}}</button>
        <button @click="limits=stars.length;start=stars.length-10;" class="b2" >  end </button>
    </div>
</template>
<script>
import staritem from '@/components/staritem'
import modal from '@/components/modal'
import modal1 from '@/components/modal1'
export default {
    props:['stars'],
        data(){
        return {
            limits:10,
            start:0,
            text: '',
            showModalOne: false,
            showModalFour: false,
            search:'',
            sorting:'',
            filterplanet:'all',
            pagenumber:0,
            size:10,
            
        }
    },
    components:{
        staritem,
        modal,
        modal1
    },
    methods:{ 
            changeFilter(){
                this.$emit('filters',{search:this.search,isPlanets:this.filterplanet})
            } ,
            close()
            {
            this.showModalOne=!this.showModalOne;
            },
            close1()
            {
            this.showModalFour=!this.showModalFour;
            }
    },
    computed:{
        pagecount(){
            let l= this.stars.length;
            let s=this.size;
            return Math.ceil(l/s);
        }
    },

    }
</script>

<style lang="scss">
.Title{
    display: flex;
    align-items: center;
    justify-content: center;
}
.filter{
    display: flex;
    align-items: center;
    margin-right: 100px; }
    .filter1{
    display: flex;
    align-items: center;
    justify-content: center;}
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
background: linear-gradient(90deg, rgb(0, 213, 255) 0%, rgba(12,78,224,1) 33%, rgba(19,19,201,1) 50%, rgba(27,26,159,1) 71%, rgba(2, 0, 36,1) 100%);
}
th{
    color :rgb(253, 253, 253);
    width:150px;
    margin-bottom: 20px;
    border:2px solid rgb(235, 216, 216);
    font-weight: bold;
    padding: 5px;
    background: rgb(6, 12, 236) ;
    background: radial-gradient(circle,rgba(6,12,236,1) 0%,rgba(0,2,51,1) 100%)
}
table,ul{
    margin:auto;
    text-align: center;
    color:white;
}
.select{
        width: 150px;
   	    font-size: 12px;
    	background:snow;
        color: MidnightBlue;
        padding: 3px 7px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        border: 3px solid RoyalBlue;
        height:37px;
        font-family: "times new roman";
        font-style: italic;
        text-align:center;
}
.input{
    	width: 150px;
   	    font-size: 12px;
    	background:snow;
        color: MidnightBlue;
        padding: 3px 7px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
        border: 3px solid RoyalBlue;
        height:25px;
        font-family: "times new roman";
        font-style: italic;
        text-align:center;
		}
</style>