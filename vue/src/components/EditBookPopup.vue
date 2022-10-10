<template>
    <div class="edit-book-popup" v-if="!isHidden">
        <form class="edit-form" action="">
            <div class="edit-input">
                <label for="title">Title: </label>
                <input type="text" size="30" :value="title">
            </div>
            <div class="edit-input">
                <label for="author">Author: </label>
                <input type="text" size="30" :value="author">
            </div>
            <div class="edit-input">
                <label for="house">Publishing house: </label>
                <input type="text" size="30" :value="house">
            </div>
            <div class="edit-input">
                <label for="Year">Year of release: </label>
                <input type="number" :value="year">
            </div>
            <div class="edit-input">
                <label for="available">Number of books available: </label>
                <input type="number" :value="available">
            </div>
            <div class="edit-input">
                <label for="loaned">Number of books loaned: </label>
                <input type="number" :value="loaned">
            </div>
            <div class="edit-input">
                <label for="cover">Book cover image URL: </label>
                <input type="text" size="30" :value="cover">
            </div>
        </form>
        <div class="edit-cancel-buttons">
            <button id="edit-cancel-btn" @click="cancelEdit">Cancel</button>
            <button id="edit-btn" type="submit">Modify</button>
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
        house: String,
        year: Number,
        available: Number,
        loaned: Number,
        cover: String
    },
    methods:{
        cancelEdit(){
            var editPopupMask = document.querySelector(".test")
            editPopupMask.classList.remove('edit-page-mask')
            var editPopup = document.querySelectorAll("#edit-popup")
            console.log(editPopup)
            editPopup.forEach(element => {
                element.style.visibility = "hidden"
            })
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