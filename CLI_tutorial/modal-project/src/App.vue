<template>
  <!--vue components might have different templates which made us render a template inside app.vue or each component-->
  <div>
    <div class="nav">
      <div class="test">
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
        <router-link :to="{ name: 'Blog' }">Blogs</router-link>
        <!--data binded the name value for ease of editing in the future-->
      </div>
    </div>

    <button @click="red">Redirect</button>
    <button @click="gob">Go back</button>
    <button @click="forw">Forward</button>

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
  methods: {
    red() {
      //pushing a new route to redirect using the same format on router-link
      this.$router.push({ name: "Home" });
    },
    //$router is used when we want to move from page to page, $route is used to access details of the current route
    gob() {
      this.$router.go(-1); // negative number means go back -1 page on history
    },
    forw() {
      this.$router.go(+1);
    },
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
  display: flex;
  justify-content: center;
}
.test {
  display: flex;
  justify-content: center;
  margin: 10px auto;
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
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 10px;
}
</style>
