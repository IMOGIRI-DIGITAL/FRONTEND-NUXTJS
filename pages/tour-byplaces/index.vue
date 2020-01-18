<template>
    <nuxt/>
</template>

<script>

import axios from 'axios'
import { mapState, mapMutations } from "vuex";

export default {
    async fetch({ store, params }) {
        const places = await axios.get(`${process.env.apiV1}/places`)
        
        store.commit('places/SET_DATA',places.data)
    },
    layout: 'tour-byplaces/index'
}
</script>