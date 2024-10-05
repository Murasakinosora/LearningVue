<!--will use composition API-->

<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }}</p>
    <button @click="handleClick">click</button>
  </div>
</template>

<script>
// imports ref when using composition API
import { ref } from "vue";

export default {
  name: "Home",
  //runs before everything
  setup() {
    // creating constant variable for ref
    // const p = ref(null);

    //constant variable declaration means the ref is constant but the value can change
    const name = ref("mario");
    const age = ref(30);

    const handleClick = () => {
      //adds class to paragraph tag
      // p.value.classList.add("test");
      //changes the text of the p tag with ref="p" only when the button is clicked
      // p.value.textContent = "Hello";
      //
      //updates the value of the declared variables
      name.value = "luigi";
    };
    //makes the created variable accessible on the template
    return { name, age, handleClick };
  },
};
</script>

<style>
</style>