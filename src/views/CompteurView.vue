<template>
  <h1>Compteur : {{ compteur.etat }}</h1>
  <div>
    <button @click="decrementer">-</button>
    {{ compteur.valeur }}
    <button @click="incrementer">+</button>
  </div>
</template>

<script setup>
import {onMounted, onUpdated, reactive, computed, watch} from "vue";

const counter = {valeur: 0, etat: 'nul'}
const compteur = reactive(counter)

const incrementer = () => {
  compteur.valeur++
}
const decrementer = () => {
  compteur.valeur--
}

// onUpdated(() => {
//   console.log('update')
//   if (compteur.valeur == 0) {
//     compteur.etat = 'nul';
//   } else   if (compteur.valeur > 0) {
//     compteur.etat = 'positif';
//   } else {
//     compteur.etat = 'négatif';
//   }
// })
compteur.etat = computed(() => {
  if (compteur.valeur === 0) {
    return 'nul';
  } else if (compteur.valeur > 0) {
    return 'positif';
  } else {
    return 'négatif';
  }
})
// watch(() => compteur.valeur, (newValue, oldValue) => {
//   if (newValue == 0) {
//     compteur.etat = 'nul';
//   } else if (newValue> 0) {
//     compteur.etat = 'positif';
//   } else {
//     compteur.etat = 'négatif';
//   }
// })

</script>


<style scoped>

</style>