<template>
    <section>
            <Navigation/>
        <client-only>
            <PlaceDetails :places="places.data"/>
        </client-only>

    </section>
</template>

<script>
import Navigation from "~/components/Navigation.vue";
import PlaceDetails from "~/components/PlaceDetails.vue";
import { mapState, mapMutations } from "vuex";

export default {
    components: {
        Navigation, PlaceDetails
    },
    computed: {
        ...mapState(['places'])
    },
}
</script>