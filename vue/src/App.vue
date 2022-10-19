<template>
  <div>
    <HomeHeader @disconnect="disconnect"></HomeHeader>
    <router-view />
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import { isTokenInLocalStorage, isLoggedIn } from "./funcs";
import { globalProperties } from "./main.js";

export default {
  name: "App",
  components: { HomeHeader },
  methods: {
    disconnect: async function () {
      let self = this;

      if (
        (await isLoggedIn(globalProperties)) &&
        (await isTokenInLocalStorage(globalProperties))
      ) {
        await fetch("/api/login/disconnect", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: globalProperties.$token }),
        }).then(() => {
          globalProperties.$token = "";
          localStorage.removeItem("token");
          self.$router.push("/login");
        });
      }
    },
  },
};
</script>


<style lang="scss">
body {
  background: url(https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg)
    center center fixed;
  -webkit-background-size: 100%;
  -moz-background-size: 100%;
  -ms-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  margin: 0;
}
</style>
