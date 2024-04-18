<template>
  {{ pays }}
  <HelloWorld ville="Marseille" @sendData="afficherPays" ref="enfant"/>
  <HelloWorld>John</HelloWorld>
  <HelloWorld v-for="ville in villes" :ville/>
  <router-link :to="{ name: 'adresse', query: { rue: 'paradis', ville: 'Marseille', cp: '13006' } }">
    Cliquer pour visiter Marseille
  </router-link>
  <button @click="goToPersonne">
    Détails de Sophie
  </button>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import {reactive, ref, onMounted} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();

const villes = reactive(['Lille', 'Lyon', 'Annecy'])
const pays = ref(null)
const enfant = ref(null)

const afficherPays = (value) => pays.value = value
const goToPersonne = () => router.push({name: 'personne-details', params: {id: 3}})

onMounted(() => {
  console.log(enfant.value.msg);
})

</script>
<style scoped>
.logo {
  height: 6em;
  will-change: filter;
  transition: filter 300ms;
}
</style>