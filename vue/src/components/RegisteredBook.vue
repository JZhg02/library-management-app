<template>
    <div class="book-card">
        <img :src=cover alt="Book cover">
        <div id="info">
            <b>Title: {{title}}</b>
            <b>Author: {{author}}</b>
            <b>House: {{house}}</b>
            <b>Year: {{year}}</b>
            <b>Available: {{available}}</b>
            <b>Loaned: {{loaned}}</b>
            <button class="edit-button" :name="nameId" @click="editBook()">Edit</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisteredBook',
    props: {
        title: String,
        author: String,
        house: String,
        year: Number,
        available: Number,
        loaned: Number,
        cover: String,
        nameId: Number
    },
    data(){
        return{
        }
    },
    methods:{
        editBook(){
            var editPopupMask = document.querySelector(".test")
            editPopupMask.classList.add('edit-page-mask')
            var editPopup = document.querySelectorAll("#edit-popup")
            console.log(editPopup)
            editPopup.forEach(element => {
                console.log(element.getAttribute("name"))
                console.log(Array.prototype.indexOf.call(editPopup, element)+1)
                if(this.nameId == Array.prototype.indexOf.call(editPopup, element)+1){
                    element.style.visibility = "visible"
                }
            })
        }
        /*let cartBtn = document.querySelectorAll("#cart-btn");
        cartBtn.forEach(element => {
            element.addEventListener("dblclick", function () {
                let orderBtn = document.querySelector("#order-btn");
                orderBtn.style.background = "darkred";
            });
        });*/
    }
}
</script>

<style lang="scss">
    .book-card{
        position: relative;
        img{
            height: 250px;
            width: 170px;
            margin:1vw;
            border-radius: 5px;
        }
    }

    #info{
        display: flex;
        flex-direction: column;
        visibility: hidden;
        color: white;
        width: 170px;
        height: 250px;
        text-align: start;
        margin: 1vw;
        position: absolute;
        top:0;
        border-radius: 5px;
        overflow: hidden;

        .edit-button{
            width: 5vw;
            height: 5vh;
            background-color: white;
            cursor: pointer;
        }
        
    }

    .book-card:hover{
        #info{
            visibility: visible;
            background: black;
        }
    }
</style>