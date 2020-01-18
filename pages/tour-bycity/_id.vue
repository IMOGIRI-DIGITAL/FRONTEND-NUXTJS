<template>
<!-- <section> -->
    <!-- {{ $store }} -->
<!-- </section> -->
    <nuxt/>
</template>

<script>
import { mapState } from "vuex";
import axios from 'axios'

export default { 
    data() {
        return {
            places: 'asdsad'
        }
    },
    async fetch({ store, params, app }) {
        
        var packages = await axios.get(`${process.env.apiV1}/packages/${params.id}`)
        // this.packages = packages.data
        console.log(packages.data)
        try {
            
            store.commit('packages/SET_DETAIL',packages.data)
        } catch (error) {
            console.log('error => ', error)
        }
    },
    layout: 'tour-bycity/_id',
}
</script>