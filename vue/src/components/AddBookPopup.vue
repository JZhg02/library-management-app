<template>
    <div class="add-book-popup" v-if="!isHidden">
        <form class="add-form" action="">
            <div class="add-input">
                <label for="title">Title: </label>
                <input type="text" size="30">
            </div>
            <div class="add-input">
                <label for="author">Author: </label>
                <input type="text" size="30">
            </div>
            <div class="add-input">
                <label for="house">Publishing house: </label>
                <input type="text" size="30">
            </div>
            <div class="add-input">
                <label for="Year">Year of release: </label>
                <input type="number">
            </div>
            <div class="add-input">
                <label for="available">Number of books available: </label>
                <input type="number">
            </div>
            <div class="add-input">
                <label for="loaned">Number of books loaned: </label>
                <input type="number">
            </div>
            <div class="add-input">
                <label for="cover">Book cover image URL: </label>
                <input type="text" size="30">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'AddBookPopup',
    props: {
        isHidden: Boolean
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
    }
    .add-form{
        display: flex;
        align-items: center;
        width: 40vw;
        background: yellow;
        flex-direction: column;
        padding: 1vw;
        border-radius: 10px;

        .add-input{
            margin: 2px;
            input {
                size:10ch;
            }
        }
    }
</style>