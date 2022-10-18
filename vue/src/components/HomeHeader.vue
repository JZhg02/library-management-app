<template>
    <div>
    <div class="header" v-if="isLoggedIn">

        <label class="hamburger" for="checkbox_toggle"><img :src="logo" alt="Libreasy Logo"></label>
        <input type="checkbox" id="checkbox_toggle" >
        <div class="menu">
            <div class="left">
                <router-link to="/"><img :src="logo" alt="Libreasy Logo"></router-link>
            </div>
            <div class="middle">
                <router-link class="middle-button" to="/"> <p>Home</p> </router-link>
                <router-link class="middle-button" to="/library"><p>My Library</p></router-link>
                <router-link class="middle-button" to="/about"><p>About Us</p></router-link>
                <router-link class="middle-button" to="/contact"><p>Contact Us</p></router-link>
            </div>
            <div class="right">
                <button class="disconnect-btn" @click="$emit('disconnect'); disconnectPage()"><p>Disconnect</p></button>
            </div>
        </div>
    </div>
    <div class="header" v-else>
        <label class="hamburger" for="checkbox_toggle"><img :src="logo" alt="Libreasy Logo"></label>
        <input type="checkbox" id="checkbox_toggle" >
        <div class="menu">
            <div class="left">
                <router-link to="/"><img :src="logo" alt="Libreasy Logo"></router-link>
            </div>
            <div class="middle">
                <router-link class="middle-button" to="/"> <p>Home</p> </router-link>
                <router-link class="middle-button" to="/about"><p>About Us</p></router-link>
                <router-link class="middle-button" to="/contact"><p>Contact Us</p></router-link>
            </div>
            <div class="right">
                <router-link class="middle-button" to="/login"><p>Log In</p></router-link>
                <router-link class="middle-button" to="/signin"><p>Sign In</p></router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { globalProperties } from '../main'  


export default {
    name: 'HomeHeader',
    data(){
        return{
            logo: require('@/assets/logo.png'), isLoggedIn: false, token: globalProperties.$token,
        }
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
        disconnectPage: function(){
            this.$router.push("/");
            this.loading();
        },
        loading: function(){
            setTimeout(()=>{window.location.reload()}, 500)
        },
    },
    updated() {
        this.check();
    },
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

    .header{
        padding:0;
        margin:0;

        .menu {
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
            z-index: 99;

            .middle-button {
                font-weight: bold;
                color: #112a42;
                text-decoration: none;
                width: fit-content;
                height: fit-content;
                p{
                    margin: 0;
                    padding: 1vh 1vw 1vh 1vw;
                }
                &.router-link-exact-active {
                    color: white;
                    border-radius: 5px;
                    background-color: rgba(86, 48, 16, 0.5);
                }
            }

            img {
                height: 25px;
            }

            .left{
                margin-left: 3vw;
            }

            .middle{
                display: flex;
                flex-direction: row;
            }

            .right{
                display: flex;
                width: fit-content;
                height: fit-content;
                margin-right: 1vw;
            }

            .middle-button:hover{
                color: white;
                border-radius: 5px;
                background-color: rgba(86, 48, 16, 0.5);
            }

            .disconnect-btn{
                color: red;
                background-color: transparent;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                margin-right: 1vw;
                p{
                    margin: 0;
                    padding: 1vh 1vw 1vh 1vw;
                    font-size: medium;
                    font-weight: bold;
                }
            }
            .disconnect-btn:hover{
                color: white;
                background-color: rgba(250, 29, 0, 0.781);
            }
        }

        .after-log-menu{
            padding: 20px 0 20px 0;
            box-shadow: 0px 0px 25px 0px rgb(0, 0, 0);
            background: transparent;
            position: fixed;
            width: 100%;
            backdrop-filter: blur(5px);
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 99;
            .disconnect-btn{
                color: white;
                background-color: rgba(86, 48, 16);
                border-radius: 5px;
                height: 5vh;
                width: 10vw;
                cursor: pointer;
            }
            .disconnect-btn:hover{
                color: rgba(86, 48, 16);
                background-color: white;
            }
        }

        .hamburger {
            display: none;
            text-align: center;
            img{
                height: 25px;
            }
        }

        input[type=checkbox] {
            display: none;
            img{
                height: 25px;
            }
        }

        @media screen and (max-width: 600px) {
            position: fixed;
            top:0;
            background: #876445;
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;

            .hamburger {
                display: block;
            }

            .menu {
                display: none;
                flex-direction: column;
                .middle{
                    flex-direction: column;
                    align-items: center;
                }
            }
            input[type=checkbox]:checked~.menu {
                display: flex;
                top:60px;
                padding: 0;
                background: #876445;
                box-shadow: none;
                .left {
                    display: none;
                }
            }
        }

        .menu:hover{
            transition: padding 0.5s, background 0.5s, color 0.5s;
            padding: 35px 0 35px 0;
            background: #876445;
        }

        .menu:not(:hover){
            transition: padding 0.5s, background 0.5s, color 0.5s;
            padding: 30px 0 30px 0;
            background: transparent;
        }

        .after-log-menu:hover{
            transition: padding 0.5s, background 0.5s, color 0.5s;
            padding: 35px 0 35px 0;
            background: #876445;
        }

        .after-log-menu:not(:hover){
            transition: padding 0.5s, background 0.5s, color 0.5s;
            padding: 30px 0 30px 0;
            background: transparent;
        }
    }
</style>
