<template>
    <li>
        <span v-bind:class="{done:stari.completed}">
            <strong>{{stari.name}}</strong>
        </span>
    </li>
</template>
<script>
export default {
    props: {
        stari:{
            type:Object,
            required:true
        }
    }
}
</script>