<template>
  <div class="result">
    <h1>Reaction Time: {{ reaction }} ms</h1>
  </div>
</template>

<script>
export default {
  props: ["reaction"],
};
</script>

<style>
.result {
  color: aquamarine;
  text-align: center;
}
</style>