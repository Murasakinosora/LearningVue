<template>
  <!--vue components might have different templates which made us render a template inside app.vue or each component-->
  <div>
    <h1>Homepage</h1>
    <h1>{{ title }}</h1>
    <input type="text" ref="name" />
    <button @click="handleClick">click me</button>
    <!--to teleport replace div with teleport-->
    <teleport to=".modals" v-if="showModal">
      <Modal :header="header" :text="text" :theme="theme" @close="modalClick">
        <!--changed modal format to use slots-->
        <h1>Giveaway</h1>
        <p>using slots</p>
        <!--creating a named slot-->
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>
          <p></p>
          <button v-if="showbutton" @click="modalClickTwo">
            Show Modal Two
          </button>
        </template>
      </Modal>
      <!--receiving the emitted event listener on @close-->
    </teleport>
    <!-------------------------------------------------------------------------->
    <teleport to=".modals" v-if="showModalTwo">
      <Modal header="Modal Two" text="display" theme="second">
        <!--changed modal format to use slots-->
        <h1>Modal Two</h1>
        <p>using slots</p>
        <!--creating a named slot-->
        <template v-slot:links>
          <a href="#">sign up now</a>
          <a href="#">more info</a>
          <p></p>
          <button v-if="showModalTwo" @click="modalClickTwo">
            Show Modal One
          </button>
        </template>
      </Modal>
    </teleport>

    <button @click="modalClick">Show Modal</button>
    <!---header is a prop-->
    <!---you can attribute bind a prop to cycle through passed value, attribute binding also allow to pass value from the return function below-->
    <!--to call a component imported on the script tag do <Name />-->

    <!--- Reaction Timer Part--------------------------------------->
    <div>
      <h1>Ninja Reaction Timer</h1>
      <!--attribute binded disabled, disables the button when isPlaying is true-->
      <button @click="start" :disabled="isPlaying">Play</button>
      <Block v-if="isPlaying" :delay="delay" @end="catchEnd" />
      <Results :reaction="score" v-if="showResults" />
    </div>

    <!--Form & inputs-->
    <Forms />
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
import Modal from "../components/modal.vue";
import Block from "../components/Block.vue";
import Results from "../components/Results.vue";
import Forms from "../components/Form.vue";
//export is the same with the app.js which contained data,methods, and computed
export default {
  name: "App",
  components: { Modal, Block, Results, Forms },
  data() {
    return {
      title: "First App",
      header: "Sign up for a giveaway",
      text: "hello",
      theme: "sale",
      showModal: false,
      showModalTwo: false,
      showbutton: true,
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    handleClick() {
      this.$refs.name.classList.add("active"); //gets a hold of the element in the dom with the ref named "name" and adds a class to it using classList.add("") method
      this.$refs.name.focus(); // puts the focus inside the input field, in which they can type directly after clicking the button
    },
    modalClick() {
      this.showModal = !this.showModal;
    },
    modalClickTwo() {
      this.showModal = !this.showModal;
      this.showModalTwo = !this.showModalTwo;
      this.showbutton = !this.showbutton;
    },
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = !this.isPlaying;
      this.showResults = false;
    },
    catchEnd(reactionTime) {
      //the passed value along the emit method on the component is automatically set as the parameter of the called function
      this.score = reactionTime;
      this.isPlaying = !this.isPlaying;
      this.showResults = !this.showResults;
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
}
.test {
  font-size: 2rem;
  margin: 0 auto;
  width: 300px;
}
.nav a {
  font-weight: bold;
  color: #c698df;
  padding: 10px;
}

.test a.router-link-exact-active {
  color: #9671bb;
  background: #e3aadd;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
}
body {
  margin: 0;
  background: #f4e7fb;
}
</style>
  