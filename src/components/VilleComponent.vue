<template >
    <div>
    <input type="text" :value="ville" @input="$emit('update:ville', $event.target.value)"/>
    
    </div>
</template>
<script>
export default {
    props: ['ville'],
    emits: ['update:ville']
}
</script>
<style lang="">
    
</style>