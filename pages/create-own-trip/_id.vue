<template>
    <nuxt/>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
    async fetch({ store, params }) {
        const places = await axios.get(process.env.apiV1 + `/places/`+params.id)
        console.log(places.data)
        store.commit('places/SET_DATA',places.data)
    },
    computed: {
        ...mapState(['places'])
    },
    layout: 'create-own-trip/_id',
}
</script>