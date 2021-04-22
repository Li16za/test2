<template>
<tr>
    <td>{{star.name}}</td>
    <td>{{star.isPlanet}}</td>
    <td>{{star.discoveryDate}} {{star.discoveredBy}}
    </td>
        <div class="load">
        <div class="form-group">
            <button class="btn btn-primary" @click="showModalTwo = !showModalTwo">Update</button>
            <button class="btn btn-primary" @click="showModalTree = !showModalTree">Delete</button>
            <button class="btn btn-primary" @click="$router.push({ path: `/Info/${star.id}` })"> подробнее </button>
        </div>
        <div class="customModal" v-if="showModalTwo">
    <div class="customModalTitle">
        Update
    </div>
    <div class="customModalBody">
            Небесное тело: <br>
            <input type="text" v-model="name" class="input" >
            <br> Является ли объект планетой: <br>
            <select name="isPlanet" v-model="isPlanet" class="input" >
                <option value="true">true</option>
                <option value="false">false</option>
            </select>
            <br> Дата открытия: <br>
            <input type="text" v-model="discoveryDate" class="input">
            <br>Кто открыл: <br>
            <input type="text" v-model="discoveredBy" class="input" >
            <br>
    </div>
    <div class="customModalFooter">
        <button class="btn btn-primary" @click="editStar">Update</button>
        <button class="close" @click="showModalTwo = !showModalTwo">&times;</button>
    
    </div>
</div>
        <div class="customModal" v-if="showModalTree">
    <div class="customModalTitle">
DELETE

</div>
    <div class="customModalBody">
        <p>Вы уверены, что хотите удалить?</p>
    </div>
    <div class="customModalFooter">
        <button class="btn btn-primary" @click.prevent="deleteStar">DELETE</button>
<button class="close" @click.prevent="showModalTree = !showModalTree" >&times;</button>    
    </div>
</div>
</div>
    
</tr>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props: {
        star:{
            type:Object,
            required:true
        },
    },
    data(){
        return {
            showModalTwo: false,
            showModalTree: false,
            name:this.star.name,
            isPlanet:this.star.isPlanet,
            discoveryDate:this.star.discoveryDate,
            discoveredBy:this.star.discoveredBy,
            id:this.star.id,
        }
    },
    methods:{
            ...mapMutations(['DeleteStars','UpdateStars']),
            deleteStar(){
                this.DeleteStars(this.star.id);
                this.showModalTree = !this.showModalTree;
            },
            editStar(){
                var star={
                    'id':this.id,
                    'name':this.name,
                    'isPlanet':this.isPlanet,
                    'discoveryDate':this.discoveryDate,
                    'discoveredBy':this.discoveredBy,
                };
                this.UpdateStars(star);
                this.showModalTwo = !this.showModalTwo;
            }
    }
}
</script>