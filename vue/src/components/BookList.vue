<template>
    <div class="myList">
        <button id="book-button" @click="addBook()"><h1>+</h1></button>
        <RegisteredBook v-for="book in bookList" :nameId=book.id :key=book.id :imagePath=book.image :title=book.title :author=book.author :house=book.publishingHouse 
        :date=book.publishingDate :available=book.available :loaned=book.loaned></RegisteredBook>
        <div class="page-mask" :class="{ active: addIsMasked }">
            <AddBookPopup :isHidden=addIsHidden></AddBookPopup>
            <div class="add-cancel-buttons" :class="{ active: addIsMasked }">
                <button id="add-cancel-btn" @click="cancelAdd">Cancel</button>
                <button id="add-btn" type="submit">Add</button>
            </div>
        </div>
        <div class="test" :name=bookList.id>
            <EditBookPopup id="edit-popup" v-for="book in bookList" :name=book.id :key=book.id :image=book.image :title=book.title :author=book.author :publishingHouse=book.publishingHouse 
            :publishingDate=book.publishingDate :available=book.available :loaned=book.loaned></EditBookPopup>
        </div>
    </div>
</template>

<script>
import RegisteredBook from '@/components/RegisteredBook.vue';
import AddBookPopup from '@/components/AddBookPopup.vue';
import EditBookPopup from '@/components/EditBookPopup.vue';
export default {
    name: 'BookList',
    components: { RegisteredBook, AddBookPopup, EditBookPopup },
    data(){
        return{
            bookList: String, addIsHidden: true, addIsMasked: false
        }
    },
    methods:{
        addBook(){
            this.addIsHidden = false
            this.addIsMasked = true
        },
        cancelAdd(){
            this.addIsHidden = true
            this.addIsMasked = false
        }
    },
    beforeMount() {
        fetch("http://localhost:3000/books", {
            method: 'Get',
        }).then((response) => {
            return response.json()
        }).then((data) => {
            this.bookList = data
        })

    }
}
</script>

<style lang="scss">
    .myList{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    #book-button{
        align-self: center;
        border-radius: 4px;
        background: transparent;
        height: 250px;
        width: 170px;
        margin:1vw;
        text-align: center;
        align-items: center;
        cursor: pointer;
        h1{
            margin:0;
            padding:0;
        }
    }
    #add-cancel-btn{
        width: 100px;
        height: 30px;
        background-color: white;
        color: red;
        cursor: pointer;
        margin: 0 1vw 0 1vw;
    }
    #add-btn{
        width: 100px;
        height: 30px;
        background-color: white;
        color: blue;
        cursor: pointer;
        margin: 0 1vw 0 1vw;
    }
    .add-cancel-buttons{
        visibility: hidden;
    }
    .add-cancel-buttons.active{
        visibility: visible;
        width: max-content;
        margin: 1vw 1vw 0 1vw;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 70vh;
        left: 0;
        right: 0;
    }
    .page-mask.active {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .edit-page-mask {
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    #edit-popup{
        visibility: hidden;
    }
</style>
