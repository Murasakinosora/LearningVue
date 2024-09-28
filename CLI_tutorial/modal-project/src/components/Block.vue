<template>
  <div class="block" v-if="showBlock" @click="stopTimer">click me</div>
</template>

<script>
export default {
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  props: ["delay"],
  //mounted,updated is a life cycle hook, life cycle hooks refers to the cycle of creation of the entire component
  mounted() {
    setTimeout(() => {
      //function that fires after the delay
      this.showBlock = true;
      //starts the timer
      this.startTimer();
    }, this.delay);
  },
  updated() {
    console.log("updated");
  },
  unmounted() {
    console.log("unmounted");
  },
  methods: {
    startTimer() {
      //this timer runs every 10 seconds and adds 10 to the variable timer
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      //stops the setInterval function from firing
      clearInterval(this.timer);
      console.log(this.reactionTime);
      this.showBlock = !this.showBlock;
      //custom event with data, second argument is the dat
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: rgb(170, 67, 170);
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>