<template>
    {{ pays }}
    <HelloWorld ville="Marseille" @sendData="afficherPays" ref="enfant" />
    <HelloWorld>John</HelloWorld>
    <HelloWorld v-for="ville in villes" :ville />
    <router-link :to="{name: 'adresse', query: { rue: 'avenue du prado', cp: '13005', ville: 'Marseille'}}">
        cliquer pour visiter Marseille
    </router-link>
    <button @click="goToPersonne">
        Détails de Sophie
    </button>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
    components: {
        HelloWorld,
    },
    data() {
        return {
            villes: ['Lille', 'Lyon', 'Annecy'],
            pays: null
        }
    },
    methods: {
        afficherPays(value) {
            this.pays = value
        },
        goToPersonne() {
            this.$router.push({name: 'personne-details', params: {id: 3}})
        }
    },
    mounted() {
        console.log(this.$refs.enfant.msg);
    },
}
</script>
<style scoped>
.logo {
    height: 6em;
    will-change: filter;
    transition: filter 300ms;
}
</style>