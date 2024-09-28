<template>
  <div class="backdrop" @click.self="closeModal">
    <!--event modifier syntax: @click.[choose event modifier] in this case @click.self only fires the event listener when the exact element is clicked-->
    <div
      class="modal"
      :class="{ sale: theme === 'sale', second: theme === 'second' }"
    >
      <!--class sale will be assigned if theme === 'sale'-->
      <!--conditional classes allows you to create various themes-->

      <!--Passed header value from modal element on App.vue-->
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      <!--renders the passed value on the modal element found inside app.vue-->
      <slot></slot>
      <div class="actions">
        <slot name="links"></slot>
        <!--renders the named slot with the name of "links"-->
      </div>
    </div>
  </div>
</template>


<script>
//creating prop for header that is passed on the modal found on App.vue
//props are reusable as one source of truth
export default {
  props: ["header", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit("close"); // custom event emits an event listener that can be listed to on the parent component which is App.vue by assigning @close on the modal element
    },
    modalClickTwo() {
      console.log("true");
      this.emit("two");
    },
  },
};
</script>


<style>
/** scoped makes the style only affect the elements on this component but having specific selector is still recommended*/
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
}

.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.modal p,
.modal h1 {
  color: rgb(142, 184, 163);
}

.modal.sale {
  background: crimson;
  color: white;
}

.modal.sale h1 {
  color: white;
}

.modal.sale button {
  color: white;
  background: crimson;
  border: 1px solid white;
}
.modal.second {
  background: lightgreen;
  color: purple;
}

.modal.second h1 {
  color: purple;
}

.modal.second button {
  color: purple;
  background: lightgreen;
  border: 1px solid white;
}
.modal.actions {
  text-align: center;
  margin: 30px 0 10px 0;
  position: relative;
}

.modal .actions a {
  color: white;
  padding: 7px;
  border: 1px solid white;
  border-radius: 4px;
  text-decoration: none;
  margin: 8px;
}
.modal.actions button {
  z-index: 1000;
  position: relative;
}

.modal button {
  border-radius: 10px;
  height: 40px;
  width: 210px;
}

.modal.second a {
  color: purple;
  background: lightgreen;
  border: 1px solid white;
}
</style>
