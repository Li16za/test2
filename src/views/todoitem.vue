<template>
<tr>
    <td>{{todo.name}}</td>
    <td>{{todo.isPlanet}}</td>
    <td>{{todo.discoveryDate}} {{todo.discoveredBy}}
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
        <button class="btn btn-primary" @click.prevent="$emit('rem-todo',todo.id);showModalTree = !showModalTree;deleted=todo.id">DELETE</button>
<button class="close" @click.prevent="showModalTree = !showModalTree" >&times;</button>    
    </div>
</div>
</div>
    
</tr>
</template>
<script>
export default {
    props: {
        todo:{
            type:Object,
            required:true
        },
    },
    data(){
        return {
            showModalTwo: false,
            showModalTree: false,
            deleted:'',
            todosd:[]
    }
    
    }
}
</script>