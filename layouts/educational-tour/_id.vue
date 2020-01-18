<template>
    <section>
        <Navigation/>
        
        <Educational :packages="packages.details"/>
        
    </section>
</template>

<script>
import Educational from "~/components/educational-tour-details";
import Navigation from "~/components/Navigation";
import { mapState, mapMutations } from "vuex";
export default {
    components: {
        Educational, Navigation
    },
    computed: {
        ...mapState(['packages'])
    },
    
}
</script>