<template>
  <div v-if="isLoggedIn" class="library">
    <input class="search-bar" type="text" />
    <BookList></BookList>
  </div>

  <div class="notLoggedIn" v-else>Not logged in</div>
</template>

<script>
import BookList from "@/components/BookList.vue";
import { globalProperties } from "../main.js";
export default {
  name: "MyLibrary",
  components: { BookList },
  data() {
    return {
      isLoggedIn: false,
      token: globalProperties.$token,
    };
  },
  beforeMount() {
    this.check();
  },
  methods: {
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
  },
};
</script>

<style lang="scss">
.library {
  margin-top: 15vh;

  @media screen and (max-width: 600px) {
    margin-top: 10vh;
  }
}
.search-bar {
  width: 30vw;
  height: 3vh;
  border-radius: 5px;
}
.notLoggedIn {
  margin-top: 300px;
  background-color: red;
  height: 100%;
}
</style>