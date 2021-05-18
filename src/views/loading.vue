<template>
        <Loading :rate="rate"></Loading>
</template>
<script>
import Loading from "../components/loading.vue"
export default {
    components : {Loading},
    props : {
        rate : Number
    },
    setup() {
        
    },
}
</script>