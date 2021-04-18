<template>
<tr>
    <td>{{todo.name}}</td>
    <td>{{todo.isPlanet}}</td>
    <td>{{todo.discoveryDate}} {{todo.discoveredBy}}
    </td>
</tr>
</template>
<script>
export default {
    props: {
        todo:{
            type:Object,
            required:true
        }
    }
}
</script>