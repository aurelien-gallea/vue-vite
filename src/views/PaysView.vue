<template>
    
        <h1> Pays : {{ villes }}</h1>

    <VilleComponent v-for="(ville, index) in villes" v-model:ville="villes[index]"/>
</template>
<script>
import VilleComponent from '../components/VilleComponent.vue';

export default {
    components: {
        VilleComponent
    },
    data() {
        return {
            villes: ['Marseille', 'Lyon', 'Paris']
        }
    },
}
</script>
<style lang="">
    
</style>