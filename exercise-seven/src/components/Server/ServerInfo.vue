<template>
    <p>
        Server #{{ server.number }} is {{ server.status }}
    </p>
</template>

<script>
    export default {
        props: ['server']
    }
</script>

<style>

</style>
