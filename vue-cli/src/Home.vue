<template>
    <div>
        <h2>{{ title }}</h2>
        <h4>{{ greeting }}</h4>
        <hr>
        <button @click="changeStatus">Change Page</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                title: 'Home'
            };
        },
        methods: {
            changeStatus() {
                this.title = this.title === 'About' ? 'Home' : 'About';
            }
        },
        computed: {
            greeting() {
                return `Welcome to the ${this.title} page!`;
            }
        }
    }
</script>

<style scoped>

</style>
