new Vue({
    el: '#exercise',
    data: {
        value: 0,
        text: ''
    },
    computed: {
        result: function() {
            return this.value === 37 ? 'done' : 'not there yet';
        }
    },
    watch: {
        value: function() {
            const vm = this;
            setTimeout(() => {
                vm.value = 0;
            }, 5000);
        }
    }
});
