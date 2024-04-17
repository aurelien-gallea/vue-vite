<template>
    <h1>Calcul</h1>
    <div v-if="!erreur">
        {{ value1 }} {{ operator[op]  }} {{ value2 }} = {{ resultat }}
    </div>
    <div v-else>
        {{ erreur }} 
    </div>
</template>
<script>
export default {
    props: ['op'],
    data() {
        return {
            operator: {
                'plus': '+',
                'moins': '-',
                'div': '/',
                'fois': '*'
            },
            erreur: null
        }
    },
    computed: {
        value1() {
            return this.$route.query.value1
        },
        value2() {
            return this.$route.query.value2
        },
        resultat() {
            if (this.operator[this.op]) {
                return eval(this.value1 + this.operator[this.op] + this.value2)
            } else {
                this.erreur = 'Opérateur inconnu'
            }

        }
    }
}
</script>
<style></style>