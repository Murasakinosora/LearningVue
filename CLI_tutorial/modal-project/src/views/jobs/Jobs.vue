<template>
  <div>
    <div v-for="job in jobs" :key="job.id">
      <!--Adding params on the attributed binded to allows us to direct to the right link/rout eg /job/[id]-->
      <!---->
      <router-link
        :to="{
          name: 'JobDetails',
          params: { id: job.id, description: job.description },
        }"
        class="job"
      >
        <h1>{{ job.title }}</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          title: "Developer",
          id: 1,
          description: "lorem1",
        },
        {
          title: "Designer",
          id: 2,
          description: "lorem2",
        },
        {
          title: "Senior Developer",
          id: 3,
          description: "lorem3",
        },
      ],
    };
  },
};
</script>

<style>
.job {
  text-decoration: none;
}
.job h1 {
  max-width: 600px;
  padding: 20px;
  background: white;
  margin: 20px auto;
  text-align: center;
  border-radius: 10px;
}
.job h1:hover {
  background: rgb(170, 70, 170);
  color: white;
}
</style>