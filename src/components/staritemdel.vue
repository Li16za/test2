<template>

    <tr>
    <td>{{stari.name}}</td>
    <td>{{stari.isPlanet}}</td>
    <td>{{stari.discoveryDate}} {{stari.discoveredBy}}
    </td>
    </tr>
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