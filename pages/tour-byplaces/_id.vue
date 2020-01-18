<template>
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
        var places = await axios.get(`${process.env.apiV1}/places/${params.id}`)
        
        console.log(places.data)
        try {
            
            
            store.commit('places/SET_DETAILS',places.data)
        } catch (error) {
            console.log('error => ', error)
        }
    },
    layout: 'tour-byplaces/_id',
}
</script>