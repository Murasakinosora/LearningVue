<template>
  <div>
    <form>
      <h1>Form & inputs</h1>
      <label>Email</label>
      <input
        type="email"
        required
        v-model="email"
      /><!--two way data binding using vmodel // two way data binding means that changes in both input and variable on data will reflect on both-->
      <!--v model tracks the inputs and assigns it to the variable on data function in real-time-->

      <label>Password</label>
      <input
        type="password"
        required
        v-model="password"
      /><!--two way data binding using vmodel-->

      <label>Role:</label>
      <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>

      <!--two way data binding using vmodel on checkboxes-->
      <div class="terms">
        <input type="checkbox" required v-model="terms" />
        <label>Accept Terms and Conditions</label>
      </div>

      <!--other way to work with checkboxes and store checked names in one array in data-->
      <div>
        <div>
          <input type="checkbox" value="shaun" v-model="names" />
          <label>shaun</label>
        </div>

        <div>
          <input type="checkbox" value="yoshi" v-model="names" />
          <label>yoshi</label>
        </div>

        <div>
          <input type="checkbox" value="mario" v-model="names" />
          <label>mario</label>
        </div>
      </div>

      <!---Keyboard Events-->
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "", // tracks the value of the selected role on the select box
      terms: false,
      names: [],
    };
  },
};
</script>

<style>
/**box method -> content -> padding -> border -> margin */
form {
  max-width: 420px;
  background: #bc4ed8;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  margin: 40px auto; /** centers the form */
  border: 1px solid black;
  color: white;
}

form h1 {
  text-align: center;
  color: white;
}

form input,
form select,
form option {
  border-radius: 5px;
  display: block;
  width: 100%;
  padding: 10px 6px;
  box-sizing: border-box; /** the sizing takes the padding and border into consideration for its overall width*/
  border: none;
  background: #bc4ed8;
  border-bottom: 2px solid purple;
  color: white;
}

form label {
  display: inline-block; /** to be able to put margin on the label */
  margin: 25px 0 15px;
  font-size: 1em;
  text-transform: uppercase; /**just capitalizes the label */
  letter-spacing: 1px; /**puts space in between the letters to make the label more readable */
  font-weight: bold;
}

input[type="checkbox"] {
  display: inline-block;
  width: 20px;
  height: 15px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
</style>