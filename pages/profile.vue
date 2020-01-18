<template>
    <nuxt/>
</template>

<script>
export default {
    middleware: ['authenticated'],
    layout: 'profile'
}
</script>