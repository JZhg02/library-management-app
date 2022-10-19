<template>
  <div class="popup">
    <section class="login">
      <form>
        <h1>Log In</h1>
          <div class="field">
            <label for="username">Email</label>
            <input
              type="text"
              name="username"
              id="username"
              v-model="username"
            />
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
          <button @click="login" type="button">Submit</button>
      </form>
    </section>
<!--
    <div class="separator"></div>

    <section class="test">
      <table>
        <tr>
          <td>Is logged in?</td>
          <td>{{ isLoggedIn }}</td>
        </tr>
        <tr>
          <td>Token UUID</td>
          <td>{{ token }}</td>
        </tr>
      </table>
      <button @click="check">Update</button>
    </section>-->
  </div>
</template>

<script>
import { globalProperties } from "../main.js";
export default {
  name: "LoginPopup",
  data() {
    return {
      username: "test@gmail.com",
      password: "password",
      isLoggedIn: false,
      token: globalProperties.$token,
    };
  },

  methods: {
    login: function () {
      var component = this;
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: component.username,
          password: component.password,
        }),
      };
      fetch("/api/login", options)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // store token in global variable 'globalProperties'
          // and write it in localstorage
          component.isLoggedIn = true;
          globalProperties.$token = data.token;
          component.token = data.token;
          globalProperties.$id = data.id;
          localStorage.setItem("token", globalProperties.$token);
          console.log("token :" + globalProperties.$token);
          console.log("id :" + globalProperties.$id);

          this.$router.push({ name: 'library' })
          this.loading();
        })
        .catch((error) => {
          console.log(error);
          component.isLoggedIn = false;
          alert("Wrong email or password. Please try again with the right identifiers.")
        });
    },
    loading: function(){
      setTimeout(()=>{window.location.reload()}, 500)
    },
    check: function () {
      var component = this;
      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: component.token,
        }),
      };
      fetch("/api/login/check", options)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          component.isLoggedIn = data.isLoggedIn;
        });
    },
    getUsers: function () {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch("/api/users", options)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
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
    background-color: #E3CAA5;
    width: fit-content;
    margin: auto;
    text-align: left;
    border-radius: 15px;
    padding: 2em;

    .field{
      display: flex;
      flex-direction: column;
      margin: 0.3em;
      input{
        height: 20px;
        width: 20em;
        border-radius: 5px;
        @media screen and (max-width: 600px) {
          width: 13em;
        }
      }
    }

    button{
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
    button:hover{
      color: antiquewhite;
      background-color: #dcb275;
      border-color: antiquewhite;
    }
  }
}

.separator {
  width: 100px;
  margin: 30px auto;
  background-color: #aaa;
  border: 2px solid #aaa;
}

.test {
  width: 185px;
  margin: auto;
  text-align: left;
  color: black;

  table {
    margin-bottom: 20px;
    border-collapse: collapse;

    tr {
      td {
        padding: 5px;
        border: 1px solid black;
      }
    }
  }
}
</style>