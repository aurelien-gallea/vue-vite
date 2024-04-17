<template >
   <p>indice {{id}} = {{number}}</p>
   <router-link :to="{name: 'tableau', params : {id: previousId}}">Précédent</router-link > | 
   <router-link :to="{name: 'tableau', params : {id: nextId}}">Suivant</router-link >
</template>
<script>
export default {
    data() {
        return {
            numbers : [2, 3 , 8, 1]
        }
    },
    props : ['id'],
    computed : {
        number() {
            return this.numbers[this.id]
        },
        previousId() {
            return Number(this.id) === 0? this.numbers.length -1 : Number(this.id) - 1;
        },
        nextId() {
            return Number(this.id) === this.numbers.length -1 ? 0 : Number(this.id) +1;
        }
    }
}
</script>
<style>
    
</style>