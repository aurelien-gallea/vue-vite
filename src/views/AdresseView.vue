<template>
    <h1>Adresse</h1>
    <ul>
        <li>Rue : {{ adresse.rue }}</li>
        <li>Code Postal :  {{ adresse.cp }}</li>
        <li>Ville : {{ adresse.ville }}</li>
    </ul>
</template>
<script>
export default {
    computed : {
        adresse() {
            return this.$route.query
        }
    }
}
</script>
<style>
    
</style>