<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="server in servers"
                :key="server.number"
            >
                <app-server-info :server="server"></app-server-info>
            </li>
        </ul>
    </div>
</template>

<script>
    import ServerInfo from './ServerInfo.vue';
    export default {
        data: function() {
            return {
                servers: [
                    { number: 1, status: 'Normal' },
                    { number: 2, status: 'Critical' },
                    { number: 3, status: 'Unknown' },
                    { number: 4, status: 'Normal' }
                ]
            };
        },
        components: {
            'app-server-info': ServerInfo
        }
    }
</script>

<style>

</style>
