<template>
  <div>
    <div v-for="job in jobs" :key="job.id">
      <!--Adding params on the attributed binded to allows us to direct to the right link/rout eg /job/[id]-->
      <!---->
      <router-link
        :to="{
          name: 'JobDetails',
          params: {
            id: job.id,
            description: job.description,
            title: job.title,
          },
        }"
        class="job"
      >
        <h1>{{ job.title }}</h1>
      </router-link>
    </div>

    <!--fetching data from json-->
    <p>Fetching from JSON</p>

    <div v-for="js in json" :key="js.id">
      <!--Adding params on the attributed binded to allows us to direct to the right link/rout eg /job/[id]-->
      <!---->
      <router-link
        :to="{
          name: 'JobDetails',
          params: { id: js.id, description: js.description, title: js.title },
        }"
        class="job"
      >
        <h1>{{ js.title }}</h1>
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
      json: [],
    };
  },
  //mounted life-cycle hook
  mounted() {
    //fetches the data when the component is mounted on the dom
    //uses fetch api
    fetch("http://localhost:3000/jobs") // / [resource name/ object name]
      .then((response) => {
        response
          .json()
          .then((data) => (this.json = data))
          .catch((err) => console.log(err.message));
      });
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