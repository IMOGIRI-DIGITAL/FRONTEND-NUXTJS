<template>
    <nuxt/>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import axios from "axios";

export default {
    async fetch({ store, params }) {
        const packages = await axios.get(`${process.env.apiV1}/packages/${params.id}`)
        store.commit('packages/SET_DETAIL',packages.data)
    },
    computed: {
        ...mapState(['packages'])
    },
    layout: 'educational-tour/_id'
}
</script>