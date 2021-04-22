<template>
    <div class="load">
        <div class="customModal">
            <div class="customModalTitle"> INSERT</div>
                <div class="customModalBody">
                    <table>
                        <td>
                            Небесное тело: <br>
                            <input type="text" v-model="name" class="input">
                            <br> Является ли объект планетой: <br>
                            <select name="isPlanet" v-model="isPlanet" class="input">
                                <option value="">Выберите значение</option>
                                <option value="true">true</option>
                                <option value="false">false</option>
                            </select>
                            <br> Дата открытия: <br>
                            <input type="text" v-model="discoveryDate" class="input">
                            <br>Кто открыл: <br>
                            <input type="text" v-model="discoveredBy" class="input">
                            <br>
                        </td>
                        <td>
                            <input @input="changeFilter" type="text" v-model="search" class="input">
                            <select @change="changeFilter" name="filter" v-model="filterplanet" class="input">
                                <option value="all">all</option>
                                <option value="isplanetfalse">false</option>
                                <option value="isplanettrue">true</option>
                            </select>
                            <ul>
                                <staritem1
                                    v-for="(stari,index) in filterstars"
                                    v-bind:stari="stari"
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
                    <button class="close" @click.prevent="$emit('close')" >&times;</button>
                </div>
            </div>
        </div>
</template>
<script>
import { mapGetters,mapMutations} from 'vuex'
import staritem1 from '@/components/staritem.1'
export default {
    data(){
        return {
            name:'',
            isPlanet:'',
            search:'',
            sorting:'',
            filterplanet:'all',
            discoveryDate:'',
            discoveredBy:'',
            pagenumber:0,
            size:10,
            filter:null,
        }
        },
        methods:{
            ...mapMutations(['AddStars']),
            changeFilter(){
                this.SetFilter({search:this.search,isPlanets:this.filterplanet})
            } ,
            nextpage(){
                this.pagenumber++;
            },
            prevpage(){
                this.pagenumber--;
            },
            addnew(){
                var star={
                    'id':this.name,
                    'name':this.name,
                    'isPlanet':this.isPlanet,
                    'discoveryDate':this.discoveryDate,
                    'discoveredBy':this.discoveredBy,
                };
                this.AddStars(star);
                this.$emit('close');
            },
            SetFilter(SkayBody){
                this.filter=SkayBody;
            },
        },
        components:{
            staritem1,
        },
        computed:{
            ...mapGetters(["stars"]),
        pagecount(){
            let l= this.stars.length;
            let s=this.size;
            return Math.ceil(l/s);
        },
        filterstars(){
        var starsFilter=this.stars;
        const starts = this.pagenumber*this.size;
        const end= starts+this.size;
        if (!this.filter){
        return starsFilter.slice(starts,end)}
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
        
        return starsFilter.slice(starts,end);
    }
    },
}
</script>
<style lang="scss" >
.btn {
outline: none !important;

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
background: radial-gradient(circle,rgba(6,12,236,1) 0%,rgba(0,2,51,1) 100%);
width: 100px;
height: 50px;
border-radius:10px;
font-size:12px;
}
.customModal .customModalFooter .close {
line-height: 32px;
color:white;
background: radial-gradient(circle,rgba(6,12,236,1) 0%,rgba(0,2,51,1) 100%);
width: 100px;
height: 50px;
border-radius:10px;
font-size:36px;
top:4px;
position: relative;
left: 75%;
transform: translate(-50%, 0); 

}
</style>