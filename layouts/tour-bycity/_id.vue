<template>
    <section>
        <Navigation/>
        <EducationalTour :packages="packages"/>
    </section>
</template>

<script>
import Navigation from "~/components/Navigation";
import EducationalTour from "~/components/educational-tour-details";

import { mapState } from "vuex";

export default {
    components: {
        EducationalTour, Navigation
    },
    computed: {
        ...mapState({
            packages: state => state.packages.details
        })
    }
}
</script>