//controls the view app
//everything inside the div is controlled by the app variable
const app = Vue.createApp({
  //we can setup any data,functions that can react to events
  //template: "<h2>I am the template<h2>", // gets injected to the DOM and will be displayed inside the div app
  data() {
    // this is a function
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
  methods: {
    // handles events
    changeTitle() {
      this.title = "New title"; // accesses the title variable data from data function
      // this.title = title;
    },
    toggleBooks() {
      this.showBooks = !this.showBooks; // to toggle on and off put ! in form of the variable since it is a not symbol
    },
  },
}); // use of the view library to create the app

app.mount("#app"); // mounts the const app to an element with the ID name app
