<template >
    <div>
    <input type="text" :value="ville" @input="envoyer"/>
    
    </div>
</template>
<script setup>
import {ref} from 'vue'

const props = defineProps({ville: String})
const ville = ref(props.ville)
const emit = defineEmits(['update:ville'])
const envoyer = () => emit('update:ville', ville.value = event.target.value)
</script>
<style lang="">
    
</style>