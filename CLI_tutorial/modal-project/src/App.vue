<template>
  <!--vue components might have different templates which made us render a template inside app.vue or each component-->
  <div>
    <h1>{{ title }}</h1>
    <input type="text" ref="name" />
    <button @click="handleClick">click me</button>
    <modal />
    <!--to call a component imported on the script tag do <Name />-->
  </div>
</template>
<!--
Template Refs
query selector = template refs
example
<input type="text" ref="name">
<button @click="handleclick">click me</button>

To reference the input field on the event handler use this.$refs.refName
-->
<script>
import modal from "./components/modal.vue";
//export is the same with the app.js which contained data,methods, and computed
export default {
  name: "App",
  components: { modal },
  data() {
    return {
      title: "First App",
    };
  },
  methods: {
    handleClick() {
      this.$refs.name.classList.add("active"); //gets a hold of the element in the dom with the ref named "name" and adds a class to it using classList.add("") method
      this.$refs.name.focus(); // puts the focus inside the input field, in which they can type directly after clicking the button
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: purple;
}
</style>
