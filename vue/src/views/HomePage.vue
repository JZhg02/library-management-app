<template>
  <div class="home">
    <section id="welcome-message">
      <h1 id="app-name">Libreasy</h1>
      <h1 id="catch-phrase">To make your librarian life all so easy.</h1>
      <img id="home-illustration" src="https://images.freeimages.com/images/previews/5f8/book-1528240.jpg" alt="Book Illustration">
      <div id="button-section">
        <div class="account-buttons">
          <label for="sign-up"><p>Join us now !</p></label>
          <router-link to="/register"><button class="login-button">Sign Up</button></router-link>
        </div>
        <div class="account-buttons">
          <label for="login"><p>Already have an account ?</p></label>
          <router-link to="/login"><button class="login-button">Log In</button></router-link>
        </div>
      </div>
    </section>
    <div id="right-side">
      <section id="brief-description">
        <h1>Features</h1>
        <div id="some-text">
          <div class="feature">
            <p>Simple</p>
            <img :src=simple alt="Simple Icon">
          </div>
          <div class="feature">
            <p>Time-saving</p>
            <img :src=timeSaving alt="Time-saving Icon">
          </div>
          <div class="feature">
            <p>Cross-platform</p>
            <img :src=crossPlatform alt="Cross-platform Icon">
          </div>
        </div>
      </section>
      <section id="some-links">
        <p>Learn more about us <router-link to="/about">here</router-link>.</p>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  components: {
  },
  data(){
    return{
      simple: require('@/assets/simple.png'),
      timeSaving: require('@/assets/time-saving.png'),
      crossPlatform: require('@/assets/cross-platform.png')
    }
  }
}
</script>

<style lang="scss">
  .home{
    margin-top: 10vh;
    display: flex;
    flex-direction: row;
    
    @media screen and (max-width: 1200px) {
      margin-top: 12vh;
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 600px) {
      margin-top: 8vh;
      flex-direction: column;
      align-items: center;
    }
  }

  #welcome-message{
    padding: 3%;
    width: 40vw;
    height: fit-content;
    border-radius: 15px;
    background: rgba(35, 34, 34, 0.95);
    display: flex;
    flex-direction: column;
    text-align: start;
    margin: 3vw;

    @media screen and (max-width:1200px) {
      width: 70vw
    }
    
    #app-name {
      color: white;
      font-size: 6vw;
      margin: 0;
      text-shadow: 3px 3px black;
      @media screen and (max-width:1200px) {
        font-size: 7vw;
        margin-bottom: 1vh;
      }
    }
    
    #catch-phrase{
      color: white;
      font-size: 2vw;
      margin: 0;
      text-shadow: 2px 2px black;
      @media screen and (max-width:1200px) {
        font-size: 3.2vw;
      }
    }

    label{
      color: white;
      margin-bottom: 3%;
    }

    #home-illustration{
      margin-top: 5%;
    }

    #button-section{
      margin-top: 5%;
      display: flex;
      justify-content: space-around;
      
      .account-buttons{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;

        p {
          margin: 0;
          padding: 0;
          font-size: 1.5vw;
          @media screen and (max-width:1200px) {
            font-size: 3vw;
          }
        }

        .login-button{
          width: 10vw;
          height: 3vw;
          padding: 2vw auto 2vw auto;
          border-radius: 30px;
          cursor: pointer;
          @media screen and (max-width: 1200px) {
            width: 20vw;
            height: 4vh;
          }
        }

        .login-button:hover{
          color: yellow;
          background: black;
        }
      }
    }
  }

  #right-side{
    margin:none;
    padding:none;
  }

  #some-links{
    padding: 5%;
    width: 40vw;
    height: fit-content;
    border-radius: 15px;
    background: rgba(86, 48, 16, 0.95);
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-left: 1vw;
    margin-top: 3.5vh;
    color: white;

    @media screen and (max-width: 1200px) {
      width: 70vw;
      padding: 3%;
      margin: 3vw;
    }

    p{
      display: inline-block;
      a{
        color: white;
      }
    }
  }

  #brief-description{
    padding: 5%;
    width: 40vw;
    height: fit-content;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.75);
    display: flex;
    flex-direction: column;
    text-align: start;
    margin: 3vw 2vw 1vw 1vw;

    @media screen and (max-width: 1200px) {
      width: 70vw;
      padding: 3%;
      margin: 3vw;
      margin-right: 8vw;
    }

    h1{
      font-size: 3vw;
      margin: 0 0 3vh 0;
      @media screen and (max-width: 1200px) {
        font-size: 5vw;
        margin: 1vh 1vh 1vh 1vh;
      }
    }

    #some-text{
      width:38vw;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      text-align: center;
      font-weight: bold;

      @media screen and (max-width: 1200px) {
        width: 68vw;
      }

      .feature{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 12vw;
        @media screen and (max-width: 1200px) {
          width: 22vw;
        }
        img{
          width:10vw;
          padding-bottom: 2vh;
        }
      }
      
    }

    img{
      width:38vw;
    }
  }
  
</style>