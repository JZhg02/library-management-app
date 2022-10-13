<template>
    <div class="contact-us">
        <div class="contact-card">
            <b>Contact us by sending us an <a href="mailto:z_jacque@live.concordia.ca">email.</a></b>
            <br>
            <b>You can also check us out in the following links:<br>
                <a href="https://www.concordia.ca">Concordia University</a>
                <br>
                <a href="https://www.efrei.fr">Efrei</a>
            </b>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .contact-us{
        margin-top: 15vh;
        height: 50vh;
    
        @media screen and (max-width: 1200px) {
        margin-top: 15vh;
        }

        @media screen and (max-width: 600px) {
        margin-top: 10vh;
        }

        b{
            display: inline;
            color: black;
        }
        a{
            color: black;
            font-weight: bold;
        }
        
        .contact-card{
            background: #E3CAA5;
            border-radius: 15px;
            width: fit-content;
            padding: 4vw;
            margin: 2vw;
        }
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>