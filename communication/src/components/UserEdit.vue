<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    export default {
        props: ['age'],
        methods: {
            editAge: function() {
                this.age = 30;
                this.$emit('ageWasEdited', this.age);
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
