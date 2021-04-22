<template>
    <div class="load">
        <div class="customModal">
            <div class="customModalTitle"> просмотр удаленных записей</div>
                <div class="customModalBody">
                    <div class="filter1">
                <h4>Search:</h4>
        <input @input="changeFilter" type="text" v-model="search" class="input">
            </div>
        <div class="filter1">
        <h4>IsPlanet:</h4>
        <select @change="changeFilter" name="filter" v-model="filterplanet" class="select">
            <option value="all">all</option>
            <option value="isplanetfalse">false</option>
            <option value="isplanettrue">true</option>
        </select>
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
                                <Staritemdel
                                    v-for="(stari,index) in filterstars1"
                                    v-bind:stari="stari"
                                    :key="index"/>
                                        </tbody>
    </table>
                            <button @click="pagenumber=0;" class="b2" > begin </button>
                            <button :disabled="pagenumber===0" @click="prevpage" class="b1">back</button>
                            <button :disabled="pagenumber>=pagecount-1" @click="nextpage" class="b2">next</button>
                            <button @click="pagenumber=pagecount-1;" class="b1" >  end </button>
                </div>
                <div class="customModalFooter">
                    <button class="close" @click.prevent="$emit('close1')" >&times;</button>
                </div>
            </div>
        </div>
</template>
<script>
import { mapGetters} from 'vuex'
import Staritemdel from '@/components/staritemdel'
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
            size:5,
            filter:null,
        }
        },
        methods:{
            changeFilter(){
                this.SetFilter({search:this.search,isPlanets:this.filterplanet})
            } ,
            nextpage(){
                this.pagenumber++;
            },
            prevpage(){
                this.pagenumber--;
            },
            SetFilter(SkayBody){
                this.filter=SkayBody;
            },
        },
        components:{
            Staritemdel,
        },
        computed:{
            ...mapGetters(["delStars"]),
        pagecount(){
            let l= this.delStars.length;
            let s=this.size;
            return Math.ceil(l/s);
        },
        filterstars1(){
        var starsFilter1=this.delStars;
        const starts = this.pagenumber*this.size;
        const end= starts+this.size;
        if (!this.filter){
        return starsFilter1.slice(starts,end)}
        if (this.filter.search){
        starsFilter1=starsFilter1.filter(t => t.name.includes(this.filter.search));
        }
        if(this.filter.isPlanets!="all"){
        let isplanets=true;
        if (this.filter.isPlanets=="isplanetfalse"){
            isplanets=false;
        }
        starsFilter1=starsFilter1.filter(t => t.isPlanet ==isplanets);
        }
        
        return starsFilter1.slice(starts,end);
    }
    },
}
</script>
