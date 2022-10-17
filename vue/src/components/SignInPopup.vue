<template>
  <section class="login">
    <form>
      <div class="innerFrame">
        <div class="field">
          <label for="fullName">Name</label>
          <input type="text" name="fullName" id="fullName" v-model="fullName" />
        </div>
        <div class="field">
          <label for="username">Email</label>
          <input type="text" name="username" id="username" v-model="email" />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
          />
        </div>
        <button @click="signIn" type="button">Submit</button>
      </div>
    </form>
  </section>
</template>

<script>
import globalProperties from "../main.js";

export default {
  name: "SignInPopup",
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
    };
  },

  methods: {
    signIn: function () {
      console.log("Sign in...");
      var component = this;
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: component.fullName,
          email: component.email,
          password: component.password,
        }),
      };

      fetch("/api/signin", options)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          globalProperties.$token = data.token;
          globalProperties.$id = data.id;
          localStorage.setItem("token", globalProperties.$token);
          console.log("token :" + globalProperties.$token);
          console.log("id :" + globalProperties.$id);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  form {
    width: 50%;
    margin: auto;
    text-align: left;

    .innerFrame {
      width: 185px;
      margin: auto;

      label {
        display: block;
        color: black;
      }

      input {
        margin-bottom: 10px;
      }
    }
  }
}
</style>