<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>My name is {{ name }}</p>
        <p>My age is {{ age }}</p>
        <p>Many Details</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    import { eventBus } from '../main';
    export default {
        props: {
            'name': {
                type: String,
                required: true
            },
            'resetName': Function,
            'age': Number
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.age = age;
            });
        }
    };
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
