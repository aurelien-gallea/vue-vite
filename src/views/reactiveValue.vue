<template>
    <h1>Valeurs réactives</h1>
    <div>
        {{ valeur1 }} + {{ valeur2 }} = {{ resultat }}
    </div>
</template>
<script>
import { watchEffect } from 'vue';
import { computed } from 'vue';
export default {
    data() {
        return {
            valeur1: 2,
            valeur2: 5,
            // resultat: null
        }
    },
    created() {
        //1er possibilité watchEffect
        // watchEffect(() =>

        //     this.resultat = this.valeur1 + this.valeur2
        // )

        // 2ème possibilité : computed vuejs 3
        // this.resultat = computed(() => this.valeur1 + this.valeur2)
    },
    mounted() {
      setInterval (()=> this.valeur1 += 10
      , 3000)
    },
    // 3eme possibilité computed vuejs 2
    computed: {
        resultat() {
            return this.valeur1 + this.valeur2
        }
    }
}
</script>
<style lang="">
    
</style>