<template>
  <h1>New Component</h1>
</template>

<script>
export default {
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  }
};
</script>

<style scoped>
</style>
