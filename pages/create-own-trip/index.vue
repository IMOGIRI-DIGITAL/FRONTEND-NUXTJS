<template>
    <nuxt/>
</template>

<script>
import axios from "axios";

export default {
    async fetch({ store, params }) {
        const places = await axios.get(process.env.apiV1 + `/places/`)
        store.commit('places/SET_DATA',places.data)
    },
    layout: 'create-own-trip/index'
}
</script>