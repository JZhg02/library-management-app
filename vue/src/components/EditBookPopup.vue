<template>
    <div class="edit-book-popup" v-if="!isHidden">
        <form class="edit-form" @submit="postData" method="post" id="editForm">
            <div class="edit-input">
                <label for="title">Title: </label>
                <input type="text" name="title" :value="title">
            </div>
            <div class="edit-input">
                <label for="author">Author: </label>
                <input type="text" name="author" :value="author">
            </div>
            <div class="edit-input">
                <label for="publishingHouse">Publishing house: </label>
                <input type="text" name="house" :value="publishingHouse">
            </div>
            <div class="edit-input">
                <label for="publishingDate">Publishing Date: </label>
                <input type="text" :value="publishingDate">
            </div>
            <div class="edit-input">
                <label for="available">Number of books available: </label>
                <input type="number" name="available" :value="available">
            </div>
            <div class="edit-input">
                <label for="loaned">Number of books loaned: </label>
                <input type="number" name="loaned" :value="loaned">
            </div>
            <div class="edit-input">
                <label for="image">Book cover image URL: </label>
                <input type="text" :value="image">
            </div>
            <div class="edit-cancel-buttons">
                <button id="edit-cancel-btn" @click="cancelEdit">Cancel</button>
                <button id="edit-btn" type="submit" @click="postData" form="editForm">Modify</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'EditBookPopup',
    props: {
        isHidden: Boolean,
        title: String,
        author: String,
        publishingHouse: String,
        publishingDate: String,
        available: Number,
        loaned: Number,
        image: String
    },
    methods:{
        cancelEdit(){
            var editPopupMask = document.querySelector(".test-edit")
            editPopupMask.classList.remove('edit-page-mask')
            var editPopup = document.querySelectorAll("#edit-popup")
            editPopup.forEach(element => {
                element.style.visibility = "hidden"
            })
        },
        postData(){
            console.log("Sending data")
            this.cancelEdit()
        }
    }
}
</script>

<style lang="scss">
    .edit-book-popup{
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
    .edit-form{
        display: flex;
        align-items: center;
        width: 40vw;
        background: lightblue;
        flex-direction: column;
        padding: 1vw;
        border-radius: 10px;

        @media screen and (max-width: 600px) {
            justify-content: center;
            width: 70vw;
        }

        .edit-input{
            margin: 2px;
            width: 100%; 
            padding: .5em 1em .5em 1em;
            input{
                border-radius: 5px;
            }
        }
    }
    #edit-cancel-btn{
        width: 100px;
        height: 30px;
        background-color: white;
        color: red;
        cursor: pointer;
        margin: 0 1vw 0 1vw;
        border-radius: 5px;
    }
    #edit-cancel-btn:hover{
        background-color: red;
        color: white;
    }
    #edit-btn{
        width: 100px;
        height: 30px;
        background-color: white;
        color: blue;
        cursor: pointer;
        margin: 0 1vw 0 1vw;
        border-radius: 5px;
    }
    #edit-btn:hover{
        background-color: blue;
        color: white;
    }
    .edit-cancel-buttons{
        width: 40vw;
        margin: 1vw 1vw 0 1vw;
        display: flex;
        justify-content: center;
    }
</style>