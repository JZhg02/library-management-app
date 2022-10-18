<template>
  <div class="theSignIn">
    <SignInPopup></SignInPopup>
  </div>
</template>

<script>
import SignInPopup from "@/components/SignInPopup.vue";
export default {
  name: "SignIn",
  components: { SignInPopup },
};

</script>

<style>
.theSignIn{
    margin-top: 25vh;
    
    @media screen and (max-width: 1200px) {
      margin-top: 15vh;
    }

    @media screen and (max-width: 600px) {
      margin-top: 8vh;
    }
  
}
</style>