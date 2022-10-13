<template>
    <div class="individual-card">
        <div class="pdp">
            <img :src=picture alt="Team member profile picture">
            <b>{{fullName}}</b>
        </div>
        <p>{{selfPresentation}}</p>
    </div>
</template>

<script>
export default {
    name: 'IndividualCard',
    props: {
        fullName: String,
        picture: String,
        selfPresentation: String
    }
}
</script>

<style lang="scss">
    .individual-card{
        background: #E3CAA5;
        border-radius: 15px;
        color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
        padding: 2vw;
        margin: 2vw;
        img{
            width: 23vw;
            height: 30vh;
            border-radius: 15px;
        }
        box-shadow: 0px 0px 25px 0px rgb(0, 0, 0);
        b{
            margin-top: 1vh;
        }
        .pdp{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        transition: 0.3s ease-out;
        @media screen and (max-width: 900px) {
            flex-direction: row;
            img{
                width: 40vw;
            }
        }
        @media screen and (max-width: 500px) {
            flex-direction: column;
            img{
                width: 70vw;
            }
        }
    }
    .individual-card:hover{
        background: #AD8B73;
        color: white;
        transform: translate(0px, -0.5vw);
    }
</style>