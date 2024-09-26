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
      x: 0,
      y: 0,
      books: [
        //for list output
        {
          title: "book 1",
          author: "author 1",
          img: "assets/1.jfif",
          isFav: true,
        },
        {
          title: "book 2",
          author: "author 2",
          img: "assets/2.jfif",
          isFav: false,
        },
        {
          title: "book 3",
          author: "author 3",
          img: "assets/3.jfif",
          isFav: true,
        },
      ],
      url: "https://www.facebook.com",
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
    }, //episode 3
    handleEvent(e) {
      console.log(e);
    },
    handleMouse(e) {
      this.x = e.offsetX; // event property
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav; // you need to pass the value to change it, no need for index to access the array
    },
  },

  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav); //filter function checks the conditions and when returned true puts the item on the array // makes us able to access the values in index
    },
  },
}); // use of the view library to create the app

app.mount("#app"); // mounts the const app to an element with the ID name app
