<template>
	<h1>Pays : {{ villes }}</h1>

	<VilleComponent v-for="(ville, index) in villes" v-model:ville="villes[index]" />
</template>
<script setup>
import VilleComponent from "../components/VilleComponent.vue";
import { reactive } from "vue";

const villes = reactive(["Marseille", "Lyon", "Paris"]);

</script>
<style></style>
