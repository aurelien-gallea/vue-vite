<template>
	<div>
		{{ produit.nom }} / prix : {{ produit.prix }} € / quantité :
		{{ produit.quantite }} 
		<input type="number" @input="changeValue">
		<button :disabled @click="add"> Ajouter </button>
	</div>
</template>
<script>
export default {
	props: {
		produit: {
			nom: "",
			prix: 0,
			quantite: 0,
		},
	},
	data() {
		return {
			qty: '',
			disabled: false,

		}
	},
	methods: {
		changeValue(event) {
			this.qty = event.target.value;
		},
		add() {
			this.disabled = true;
			this.$emit('addProduct', this.qty);
		}
	},
	emits: ['addProduct'], 
};
</script>
<style></style>
