<template>
    <nuxt/>
</template>


<script>
import axios from "axios";
export default {
    layout: 'payment/my-history',
    async fetch({ query, app, store }) {
        var { id }  = app.$auth.$state.user
        try {
            var  { data } = await axios({
                method: 'GET',
                url: `${process.env.apiV1}/payment/history/${id}`
            })

            store.commit('payment/SET_HISTORY',data.data)
            console.log(data.data)
        } catch (error) {
            
        }
    }
}
</script>