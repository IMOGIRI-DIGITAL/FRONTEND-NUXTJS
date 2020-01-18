<template>
    <section>
        hai
    </section>
</template>

<script>
import axios from "axios";
export default {
    async fetch({ store, params, query }) {
        console.log(params, query)
    }
}
</script>