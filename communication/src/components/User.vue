<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeMyName">Change My Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :name="myName" :age="age" :resetName="resetName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :age="age" @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function() {
            return {
                myName: 'Maximillian',
                age: 27
            };
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeMyName: function() {
                this.myName = 'Terrence';
            },
            resetName: function() {
                this.myName = 'Maximillian';
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
