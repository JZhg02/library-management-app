<template>
    <div class="add-book-popup" v-if="!isHidden">
        <form class="add-form" @submit="postData" method="post">
            <div class="add-input">
                <label for="title">Title: </label>
                <input type="text" name="title">
            </div>
            <div class="add-input">
                <label for="author">Author: </label>
                <input type="text" name="author">
            </div>
            <div class="add-input">
                <label for="publishingHouse">Publishing house: </label>
                <input type="text" name="house">
            </div>
            <div class="add-input">
                <label for="publishingDate">Publishing Date: </label>
                <input type="text">
            </div>
            <div class="add-input">
                <label for="available">Number of books available: </label>
                <input type="number" name="available">
            </div>
            <div class="add-input">
                <label for="loaned">Number of books loaned: </label>
                <input type="number" name="loaned">
            </div>
            <div class="add-input">
                <label for="image">Book cover image URL: </label>
                <input type="text">
            </div>
        </form>
        <div class="add-cancel-buttons">
            <button id="add-cancel-btn" @click="cancelAdd">Cancel</button>
            <button id="add-btn" type="submit" @click="postData">Add</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AddBookPopup',
    props: {
        isHidden: Boolean
    },
    methods:{
        cancelAdd(){
            var addPopupMask = document.querySelector(".test-add")
            addPopupMask.classList.remove('add-page-mask')
            var addPopup = document.querySelectorAll("#add-popup")
            addPopup.forEach(element => {
                element.style.visibility = "hidden"
            })
        },
        postData(){
            console.log("Sending data")
            this.cancelAdd()
        }
    }
}
</script>

<style lang="scss">
    .add-book-popup{
        width: 40vw;
        height: fit-content;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 100;
        @media screen and (max-width: 600px) {
            width: 80vw;
        }
    }
    .add-form{
        display: flex;
        align-items: center;
        width: 40vw;
        background: yellow;
        flex-direction: column;
        padding: 1vw;
        border-radius: 10px;
        transition: width 2s, height 1s ease-in-out;

        @media screen and (max-width: 600px) {
            justify-content: center;
            width: 70vw;
        }

        .add-input{
            margin: 2px;
            width: 100%; 
            padding: .5em 1em .5em 1em;
            input{
                border-radius: 5px;
            }
        }
    }
    #add-cancel-btn{
        width: 100px;
        height: 30px;
        background-color: white;
        color: red;
        cursor: pointer;
        margin: 0 1vw 0 1vw;
        border-radius: 5px;
    }
    #add-cancel-btn:hover{
        background-color: red;
        color: white;
    }
    #add-btn{
        width: 100px;
        height: 30px;
        background-color: white;
        color: blue;
        cursor: pointer;
        margin: 0 1vw 0 1vw;
        border-radius: 5px;
    }
    #add-btn:hover{
        background-color: blue;
        color: white;
    }
    .add-cancel-buttons{
        width: 40vw;
        margin: 1vw 1vw 0 1vw;
        display: flex;
        justify-content: center;
    }
</style>