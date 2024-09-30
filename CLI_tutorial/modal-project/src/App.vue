<template>
  <!--vue components might have different templates which made us render a template inside app.vue or each component-->
  <div>
    <div class="nav">
      <div class="test">
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
        <!--data binded the name value for ease of editing in the future-->
      </div>
    </div>
    <router-view />
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
export default {
  data() {
    return {};
  },
};
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
h1 {
  color: purple;
}

.nav {
  padding: 30px;
}
.test {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  width: 10vw;
}
.nav a {
  font-weight: bold;
  color: purple;
}

.test a.router-link-exact-active {
  color: rgb(132, 35, 211);
}
body {
  margin: 0;
}
</style>
