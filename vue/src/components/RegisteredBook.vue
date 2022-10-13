<template>
    <div class="book-card">
        <img :src=path alt="Book cover">
        <div id="info">
            <div id="book-text-info">
                <b class="yellow-title" >Title: <b class="white-info">{{title}}</b></b><br>
                <b class="yellow-title" >Author: <b class="white-info">{{author}}</b></b><br>
                <b class="yellow-title" >House: <b class="white-info">{{house}}</b></b><br>
                <b class="yellow-title" >Date: <b class="white-info">{{date}}</b></b><br>
                <b class="yellow-title" >Available: <b class="white-info">{{available}}</b></b><br>
                <b class="yellow-title" >Loaned: <b class="white-info">{{loaned}}</b></b>
            </div>
            <button class="book-edit-button" :name="nameId" @click="editBook()">Edit</button>
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
        date: String,
        available: Number,
        loaned: Number,
        imagePath: String,
        nameId: Number
    },
    data(){
        return{
            path: "http://localhost:3000/" + this.imagePath
        }
    },
    methods:{
        editBook(){
            var editPopupMask = document.querySelector(".test-edit")
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
    },
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

        .book-edit-button{
            display: none;
            width: 5vw;
            height: 5vh;
            background-color: white;
            cursor: pointer;
            @media screen and (max-width: 900px) {
                width: 8vw;
            }
            @media screen and (max-width: 500px) {
                width: 15vw;
            }
            border-radius: 5px;
        }
        .book-edit-button:hover{
            background: red;
            color: white;
        }
        
    }

    .book-card:hover{
        #info{
            visibility: visible;
            background: black;
            transition: background 0.3s ease-in;
            justify-content: center;
            align-items: center;
            
            .yellow-title{
                color: yellow;
            }
            .white-info{
                color: white;
            }
            #book-test-info{
                justify-content: center;
            }
            .book-edit-button{
                display: block;
            }
        }
    }
</style>