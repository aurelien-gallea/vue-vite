<template>
	<h1>Primeur: total = {{ total }} €</h1>
	<ProduitComponent v-for="(produit,index) in produits" :produit @addProduct="faireTotal($event,index)"/>
</template>
<script>
import ProduitComponent from "../components/ProduitComponent.vue";
export default {
	components: {
		ProduitComponent,
	},
	data() {
		return {
			produits: [ 
				{ nom: "banane", prix: 3, quantite: 10 },
				{ nom: "fraise", prix: 10, quantite: 20 },
				{ nom: "poivron", prix: 5, quantite: 10 },
			],
			total : 0
		};
	},
	methods: {
		faireTotal(qty, index) {
			this.total += qty * this.produits[index].prix
		}
	}
};
</script>
<style></style>
