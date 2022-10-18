<template>
    <div class="theLogin">
        <LoginPopup></LoginPopup> 
    </div>
</template>

<script>
import LoginPopup from "../components/LoginPopup.vue";
export default {
    name:"logIn",
    components: { LoginPopup }
}
</script>

<style>
.theLogin{
    margin-top: 25vh;
    
    @media screen and (max-width: 1200px) {
      margin-top: 15vh;
    }

    @media screen and (max-width: 600px) {
      margin-top: 8vh;
    }
  }
</style>