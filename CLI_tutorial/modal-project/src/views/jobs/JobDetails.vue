<!--Route parameters format -> /jobs/[id] -> route parameter /jobs/:id-->
<template>
  <div>
    <h1>{{ title }}</h1>
    <!--$route contains all the details of the current route including the id-->
    <p>The job id is {{ id }}</p>
    <p>Job description: {{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["id", "description", "title"],
  // As props on the router component is true for JobDetails component, we can just receive the id as props
  //   data() {
  //     return {
  //       //we need to put this in front when declaring inside the data function
  //       id: this.$route.params.id,
  //     };
  //   },
};
</script>

<style>
</style>