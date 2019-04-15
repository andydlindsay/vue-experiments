<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header>
                    <h1>Server Status</h1>
                </header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <ul class="list-group">
                    <li
                        class="list-group-item"
                        v-for="index in 5"
                        :key="index"
                        >
                        <ServerListItem :serverNumber="index"></ServerListItem>
                    </li>
                </ul>
            </div>
            <ServerDetails></ServerDetails>
        </div>
        <hr>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from './Footer.vue';
    import ServerDetails from './ServerDetails.vue';
    import ServerListItem from './ServerListItem.vue';
    export default {
        components: {
            Footer,
            ServerDetails,
            ServerListItem
        }
    }
</script>

<style>

</style>
