<template>
    <div class="edit-book-popup" v-if="!isHidden">
        <form class="edit-form" @submit="postData" method="post">
            <div class="edit-input">
                <label for="title">Title: </label>
                <input type="text" name="title" size="30" :value="title">
            </div>
            <div class="edit-input">
                <label for="author">Author: </label>
                <input type="text" name="author" size="30" :value="author">
            </div>
            <div class="edit-input">
                <label for="publishingHouse">Publishing house: </label>
                <input type="text" name="house" size="30" :value="publishingHouse">
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
                <input type="text" size="30" :value="image">
            </div>
        </form>
        <div class="edit-cancel-buttons">
            <button id="edit-cancel-btn" @click="cancelEdit">Cancel</button>
            <button id="edit-btn" type="submit" @click="postData">Modify</button>
        </div>
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
    }
    .edit-form{
        display: flex;
        align-items: center;
        width: 40vw;
        background: lightblue;
        flex-direction: column;
        padding: 1vw;
        border-radius: 10px;

        .edit-input{
            margin: 2px;
            input {
                size:10ch;
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
    }
    #edit-btn{
        width: 100px;
        height: 30px;
        background-color: white;
        color: blue;
        cursor: pointer;
        margin: 0 1vw 0 1vw;
    }
    .edit-cancel-buttons{
        width: 40vw;
        margin: 1vw 1vw 0 1vw;
        display: flex;
        justify-content: center;
    }
</style>