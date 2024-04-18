<template>
	<h1>Adresse</h1>
	<ul>
		<li>Rue : {{ adresse.rue }}</li>
		<li>Code Postal : {{ adresse.cp }}</li>
		<li>Ville : {{ adresse.ville }}</li>
	</ul>
</template>

<script setup>
import {useRoute} from 'vue-router';
import { computed } from 'vue'
//composable
const route = useRoute();

const adresse = computed(() => route.query);
</script>

<style></style>
