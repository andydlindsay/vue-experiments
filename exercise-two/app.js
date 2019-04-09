new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        buttonClick: function() {
            alert('button clicked');
        },
        keydownData: function() {
            this.value = event.target.value
        }
    }
});
