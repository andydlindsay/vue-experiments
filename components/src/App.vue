<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="text-center centered col-md-10 col-md-offset-1">
        <button @click="changeSelected('app-quote')" class="btn btn-primary">Quote</button>
        <button @click="changeSelected('app-author')" class="btn btn-primary">Author</button>
        <button @click="changeSelected('app-new')" class="btn btn-primary">New</button>
      </div>
    </div>
    <div class="row">
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote";
import Author from "./components/Author";
import New from "./components/New";

export default {
  name: "app",
  data() {
    return {
      quotes: [
        {
          author: "Lenina Huxley",
          subtitle: "Protagonist",
          quote: "Enhance your calm, John Spartan."
        },
        {
          author: "John Spartan",
          quote: "Somebody put me back in the fridge."
        },
        {
          author: "Simon Phoenix",
          quote: "Greetings, whats your bogle?"
        }
      ],
      selectedComponent: "app-quote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  },
  methods: {
    changeSelected: function(component) {
      this.selectedComponent = component;
    }
  }
};
</script>

<style>
body {
  font-family: "Oswald", sans-serif;
}

.btn {
  margin: 5px;
}

.centered {
  margin: 20px auto;
}
</style>
