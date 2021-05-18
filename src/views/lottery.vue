<template>
    <iframe :src="src" frameborder="0"></iframe>
</template>

<script>
export default {
    setup() {
        
    },
    data(){return{
        src : require('../static/2.html')
    }}
}
</script>