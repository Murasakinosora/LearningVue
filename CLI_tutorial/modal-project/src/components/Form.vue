<template>
  <div>
    <!-- @submit.prevent does not refresh the page-->
    <form @submit.prevent="handleSubmit">
      <h1>Form & inputs</h1>
      <label>Email</label>
      <input
        type="email"
        required
        v-model="email"
      /><!--two way data binding using vmodel // two way data binding means that changes in both input and variable on data will reflect on both-->
      <!--v model tracks the inputs and assigns it to the variable on data function in real-time-->

      <label>Password</label>
      <input type="password" required v-model="password" />
      <div v-if="passwordErr">{{ passwordErr }}</div>
      <!--two way data binding using vmodel-->

      <label>Role:</label>
      <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>

      <!---Keyboard Events-->
      <label>Add Skills [Press Space After Each Skill]</label>
      <!--keyboard event that fires the function when the pressed key has been let go-->
      <input type="text" v-model="tempskill" @keyup.space="addSkill" />
      <!--needs a unique key to cycle through the array, attribute binded the skill since its unique-->
      <div v-for="skill in skills" :key="skill" class="pill">
        <p @click="dels(skill)">{{ skill }}</p>
      </div>

      <!--two way data binding using vmodel on checkboxes-->
      <div class="terms">
        <input type="checkbox" required v-model="terms" />
        <label>Accept Terms and Conditions</label>
      </div>
      <!--other way to work with checkboxes and store checked names in one array in data
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
    -->
      <div class="submit">
        <button>Create an Account</button>
      </div>
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
      tempskill: "",
      skills: [],
      passwordErr: "",
    };
  },
  methods: {
    addSkill(e) {
      if (this.tempskill) {
        //validates if the entry is a duplicate or not
        if (this.skills.includes(this.tempskill)) {
          this.tempskill = "";
        } else {
          this.skills.push(this.tempskill);
          this.tempskill = "";
        }
      }
    },
    dels(skill) {
      //uses filter function to update skills property
      this.skills = this.skills.filter((item) => {
        //returns true if not equal to the clicked item thus remains on the array
        return skill !== item;
      });
    },
    handleSubmit() {
      //validation of password
      this.passwordErr =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 characters long"; // ternary operator // if the expression is true the left part after the ? will be assigned
      if (!this.passwordErr) {
        console.log(this.email);
      }
    },
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

.pill {
  display: inline-block;
  border-radius: 20px;
  background: #470857;
  color: white;
  padding: 6px 12px;
  border: 1px solid black;
  margin: 20px 10px 0 0;
  cursor: pointer;
  letter-spacing: 1px;
}
.pill p {
  margin: 0 0;
}
.submit {
  margin: 40px auto;
  text-align: center; /** centers the button// content of the div */
}
.submit button {
  width: 75%;
  background: #90559e;
  color: white;
  border-radius: 20px;
  padding: 10px 0;
  border: none;
}
</style>