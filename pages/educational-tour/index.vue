<template>
    <nuxt/>
</template>

<script>

import axios from "axios";
import { mapState } from "vuex";

export default {
    async fetch({ store, params }) {
        const packages = await axios.get(`${process.env.apiV1}/packages/`)
        store.commit('packages/SET_DATA',packages.data)
    },
    layout: 'educational-tour/index'
}
</script>