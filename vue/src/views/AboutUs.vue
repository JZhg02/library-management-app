<template>
  <div class="about">
    <h1>The team: </h1>
    <div class="team">
      <IndividualCard :picture=pictureOne :fullName=nameOne :selfPresentation=presOne></IndividualCard>
      <IndividualCard :picture=pictureTwo :fullName=nameTwo :selfPresentation=presTwo></IndividualCard>
      <IndividualCard :picture=pictureThree :fullName=nameThree :selfPresentation=presThree></IndividualCard>
    </div>
  </div>
</template>

<script>
import IndividualCard from '@/components/IndividualCard.vue';

export default {
    components: { IndividualCard },
    data(){
      return{
        pictureOne: "https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267__340.jpg", nameOne: "Mehdi WASKAR", presOne: "Intelligent beings ship of the imagination gathered by gravity as a patch of light cosmos cosmic fugue. Made in the interiors of collapsing stars descended from astronomers vanquish the impossible take root and flourish emerged into consciousness finite but unbounded. Dream of the mind's eye tingling of the spine the only home we've ever known stirred by starlight Drake Equation citizens of distant epochs.",
        pictureTwo: "https://pikwizard.com/photos/2edbaa033227beeb2cdff8dfe3c7c4c7-l.jpg", nameTwo: "Corentin PRADIE", presTwo: "Lion! Don’t ever play yourself. Wraith talk. You should never complain, complaining is a weak emotion, you got life, we breathing, we blessed. You see that bamboo behind me though, you see that bamboo? Ain’t nothin’ like bamboo. Bless up. Egg whites, turkey sausage, wheat toast, water. Of course they don’t want us to eat our breakfast, so we are going to enjoy our breakfast. They don’t want us to win. It’s important to use cocoa butter. It’s the key to more success, why not live smooth? Why live rough? ",
        pictureThree: "https://www.freedigitalphotos.net/images/category-images/67.jpg", nameThree: "Jacques ZHANG", presThree: "Terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean but check cat door for ambush 10 times before coming in chew master's slippers shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Pretend you want to go out but then don't purr for no reason. "
      }
    }
}
</script>

<style lang="scss">
  .about{
    margin-top: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media screen and (max-width: 1200px) {
      margin-top: 15vh;
    }

    @media screen and (max-width: 600px) {
      margin-top: 10vh;
    }

    h1{
      margin: 0;
      background: #E3CAA5;
      border-radius: 15px;
      width:fit-content;
      padding: 0.5vw;
    }

    .team{
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 0;
      @media screen and (max-width: 900px) {
        flex-direction: column;
      }
    }
  }
</style>