<template>
<tr>
    <td>{{star.name}}</td>
    <td>{{star.isPlanet}}</td>
    <td>{{star.discoveryDate}} {{star.discoveredBy}}
    </td>
        <div class="load">
        <div class="form-group">
            <button class="btn btn-primary" @click.prevent="showModalTwo = !showModalTwo">Update</button>
            <button class="btn btn-primary" @click.prevent="showModalTree = !showModalTree">Delete</button>
        </div>
        <div class="customModal" v-if="showModalTwo">
    <div class="customModalTitle">
        Update
    </div>
    <div class="customModalBody">
        <p>Содержание окна</p>
    </div>
    <div class="customModalFooter">
        <button class="btn btn-primary" @click.prevent="showModalTwo= !showModalTwo;/*edi*/">Update</button>
        <button class="close" @click.prevent="showModalTwo = !showModalTwo">&times;</button>
    
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
    }
    },
    methods:{
            ...mapMutations(['DeleteStars']),
            deleteStar(){
                this.DeleteStars(this.star.id);
                this.showModalTree = !this.showModalTree;
            }
    }
}
</script>