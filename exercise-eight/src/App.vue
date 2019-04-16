<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button @click="changeComponent('blue')" class="btn btn-primary">Load Blue Template</button>
        <button @click="changeComponent('green')" class="btn btn-success">Load Green Template</button>
        <button @click="changeComponent('red')" class="btn btn-danger">Load Red Template</button>
        <hr>
        <component :is="componentName">
          <h1>This is the {{ currentComponent }} component!</h1>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data() {
    return {
      currentComponent: "blue"
    };
  },
  methods: {
    changeComponent(component) {
      this.currentComponent = component;
    }
  },
  computed: {
    componentName() {
      return `app-${this.currentComponent}`;
    }
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  }
};
</script>

<style>
</style>
