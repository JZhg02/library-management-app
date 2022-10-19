<template>
  <section class="login">
    <form>
      <h1>Sign in</h1>
      <div class="field">
        <label for="fullName">Full Name</label>
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
    </form>
  </section>
</template>

<script>
import { globalProperties } from "./../main.js";

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
      if (this.email.includes("@")) {
        if (this.password.length >= 8) {
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

              this.$router.push({ name: "library" });
              this.loading();
            });
        } else {
          alert("Password must be 8 character long");
        }
      } else {
        alert("Email is not valid");
      }
    },
    loading: function () {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    },
  },
};
</script>

<style scoped lang="scss">
.login {
  margin-top: 25vh;
  margin: 0.3em;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e3caa5;
    width: fit-content;
    margin: auto;
    text-align: left;
    border-radius: 15px;
    padding: 2em;

    .field {
      display: flex;
      flex-direction: column;
      margin: 0.3em;
      input {
        height: 20px;
        width: 20em;
        border-radius: 5px;
        @media screen and (max-width: 600px) {
          width: 13em;
        }
      }
    }

    button {
      margin: 0.5em;
      width: 6vw;
      height: 4vh;
      border-radius: 5px;
      background-color: antiquewhite;

      @media screen and (max-width: 900px) {
        width: 12vw;
      }

      @media screen and (max-width: 600px) {
        width: 20vw;
      }
    }
    button:hover {
      color: antiquewhite;
      background-color: #dcb275;
      border-color: antiquewhite;
    }
  }
}
</style>