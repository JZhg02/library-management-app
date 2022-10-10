<template>
    <nav class="header">
        <div class="left">
            <router-link to="/"><img :src="logo" alt="Libreasy Logo"></router-link>
        </div>
        <div class="middle">
            <router-link to="/">Home</router-link> | 
            <router-link to="/services">Services</router-link> | 
            <router-link to="/about">About Us</router-link> | 
            <router-link to="/contact">Contact Us</router-link>
        </div>
        <div class="right">
            <router-link to="/login">Log In</router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'HomeHeader',
    data(){
        return{
            logo: require('@/assets/logo.png')
        }
    }
}
</script>

<style lang="scss">
    #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }

    .header {
    padding: 30px 0 30px 0;
    box-shadow: 0px 0px 25px 0px rgb(0, 0, 0);
    background: transparent;
    position: fixed;
    width: 100%;
    backdrop-filter: blur(5px);
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
        a {
            font-weight: bold;
            color: #112a42;

            &.router-link-exact-active {
                color: rgba(86, 48, 16);
            }
        }
        img {
            height: 25px;
        }
        .left{
            margin-left: 3vw;
        }
        .right{
            margin-right: 3vw;
        }
    }

    nav:hover{
    transition: padding 0.5s, background 0.5s, color 0.5s;
    padding: 35px 0 35px 0;
    background: #876445;
    }
    nav:not(:hover){
    transition: padding 0.5s, background 0.5s, color 0.5s;
    padding: 30px 0 30px 0;
    background: transparent;
    }

</style>