<template>
	<h1>Détails de la personne {{ id }}</h1>

	<Form @submit="majPersonne" :initial-values="personne" ref="myForm">
		<div>
			<label for="nom">Nom : </label>
			<Field id="nom" name="nom" />
		</div>
		<div>
			<label for="prenom">Prénom : </label>
			<Field id="prenom" name="prenom"  />
		</div>
		<div>
			<label for="age">Âge : </label>
			<Field id="age" name="age"  />
		</div>
		<div><button>enregistrer</button></div>
	</Form>

	<button @click="$router.push('/personne')">Revenir à la liste</button>
</template>
<script>
import { Field, Form } from "vee-validate";
import axios from "axios";
export default {
    components: {
		Field,
		Form,

	},
	data() {
		return {
			// personnes: [
			//     // { id: 1, nom: 'Wick', prenom: 'John', age: 45 },
			//     // { id: 2, nom: 'Dalton', prenom: 'Jack', age: 40 },
			//     // { id: 3, nom: 'Dupont', prenom: 'Sophie', age: 30 }
			// ],
			personne: {
                
            },
		};
	},
	props: ["id"],
	// computed: {
	//     personne() {
	//         return this.personnes.find(elt => elt.id == this.$route.params.id)
	//     }
	// },
	created() {
		axios
			.get(`${this.BASE_URL}/personnes/${this.id}`)
			.then((res) => this.$refs.myForm.setValues(res.data))
            .catch(err => console.log(err));
	},
    methods : {
        majPersonne(values) {
            axios
            .put(`${this.BASE_URL}/personnes/${this.id}`, values)
            .then(() => this.$router.push("/personne"))
            .catch(err => console.log(err));

        }
    }
};
</script>
<style></style>
