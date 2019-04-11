new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
        highlight: false,
        shrink: true
    },
    chartreuse: 'chartreuse',
    float: 'float',
    wider: 'wider',
    goldenText: 'golden-text',
    userClass: '',
    userBool: false,
    userStyles: '',
    width: 0
  },
  methods: {
    startEffect: function() {
        const vm = this;
        setInterval(() => {
            vm.effectClasses.highlight = !vm.effectClasses.highlight;
            vm.effectClasses.shrink = !vm.effectClasses.shrink;
        }, 500);
    },
    startProgress: function() {
        const vm = this;
        vm.width = 0;
        setInterval(() => {
            vm.width += 5;
        }, 100);
    }
  }
});
