<template>
    <li>
        <span v-bind:class="{done:todoi.completed}">
            <strong>{{todoi.name}}</strong>
        </span>
    </li>
</template>
<script>
export default {
    props: {
        todoi:{
            type:Object,
            required:true
        }
    }
}
</script>