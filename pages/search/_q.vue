<template>
<section>
    <nuxt/>
</section>
</template>

<script>

import axios from 'axios'
import { mapState } from "vuex";

export default {
    async fetch({ store, params }) {
        try {
        const packages = await axios.get(process.env.apiV1 + `/packages/search/${params.q}`)
            store.commit('packages/SET_DATA',packages.data)
            
        } catch (error) {
            
            store.commit('packages/SET_DATA',[])
        }
    },
    layout: 'search/_q'
}
</script>