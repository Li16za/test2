<template>
    <div>
        <table>
            <tr>        
                <td>telo</td>
                <td> Is planet?</td>
                <td>date and Avtor</td>
            </tr>
            <todoitem
            v-for="todo of todos"
            v-bind:todo="todo"
            :key="todo"/>
        </table>
    </div>
</template>
<script>
import todoitem from '@/views/todoitem'
export default {
    props:['todos'],
    components:{
        todoitem
    },
    methods:{

    }
}

</script>
