<template>
  <div class="popup">
    <section class="login">
      <form>
        <div class="innerFrame">
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
        </div>
      </form>
    </section>

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
    </section>
  </div>
</template>

<script>
import {  globalProperties } from "../main.js";
export default {
  name: "LoginPupup",
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
          // store token in global variable 'globalStorage'
          // and write it in localstorage
          component.isLoggedIn = true;
          globalProperties.$token = data.token;
          component.token = data.token;
          globalProperties.$id = data.id;
          localStorage.setItem("token", globalProperties.$token);
          console.log("token :");
          console.log(globalProperties.$token);
          console.log("id :");
          console.log(globalProperties.$id);
        })
        .catch((error) => {
          console.log(error);
          component.isLoggedIn = false;
        });
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
  form {
    width: 50%;
    margin: auto;
    text-align: left;

    .innerFrame {
      width: 185px;
      margin: auto;

      label {
        display: block;
      }

      input {
        margin-bottom: 20px;
      }
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