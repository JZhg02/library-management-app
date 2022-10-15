<template>
  <div class="myList">
    <button id="book-button" @click="addBook()"><h1>+</h1></button>
    <RegisteredBook
      v-for="book in bookList"
      :nameId="book.id"
      :key="book.id"
      :imagePath="book.image"
      :title="book.title"
      :author="book.author"
      :house="book.publishingHouse"
      :date="book.publishingDate"
      :available="book.available"
      :loaned="book.loaned"
    ></RegisteredBook>
    <!--
        <div class="page-mask" :name=bookList.id>
            <AddBookPopup :isHidden=addIsHidden></AddBookPopup>
            <div class="add-cancel-buttons" :class="{ active: addIsMasked }">
                <button id="add-cancel-btn" @click="cancelAdd">Cancel</button>
                <button id="add-btn" type="submit">Add</button>
            </div>
        </div>-->
    <div class="test-add" :name="bookList.id">
      <AddBookPopup id="add-popup" :name="bookList.id"></AddBookPopup>
    </div>
    <div class="test-edit" :name="bookList.id">
      <EditBookPopup
        id="edit-popup"
        v-for="book in bookList"
        :nameId="book.id"
        :key="book.id"
        :image="book.image"
        :title="book.title"
        :author="book.author"
        :publishingHouse="book.publishingHouse"
        :publishingDate="book.publishingDate"
        :available="book.available"
        :loaned="book.loaned"
      ></EditBookPopup>
    </div>
    <div class="test-delete" :name="bookList.id">
      <DeleteBookPopup v-for="book in bookList" :key="book.id" id="delete-popup" :thisBookId="book.id"></DeleteBookPopup>
    </div>
  </div>
</template>

<script>
import RegisteredBook from "@/components/RegisteredBook.vue";
import AddBookPopup from "@/components/AddBookPopup.vue";
import EditBookPopup from "@/components/EditBookPopup.vue";

import DeleteBookPopup from "@/components/DeleteBookPopup.vue"
<<<<<<< Updated upstream
=======
import { globalStorage } from "@/main";
>>>>>>> Stashed changes
export default {
  name: "BookList",
  components: { RegisteredBook, AddBookPopup, EditBookPopup, DeleteBookPopup },
  data() {
    return {
      bookList: String,
    };
  },
  methods: {
    addBook() {
      var addPopupMask = document.querySelector(".test-add");
      addPopupMask.classList.add("add-page-mask");
      var addPopup = document.querySelector("#add-popup");
      addPopup.style.visibility = "visible";
    }
  },
  beforeMount() {
    var component = this;
    fetch("/api/users/books/" + globalStorage.$id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: globalStorage.$token }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        component.bookList = data;
      });
  },
};
</script>

<style lang="scss">
.myList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#book-button {
  align-self: center;
  border-radius: 4px;
  background: transparent;
  height: 250px;
  width: 170px;
  margin: 1vw;
  text-align: center;
  align-items: center;
  cursor: pointer;
  h1 {
    margin: 0;
    padding: 0;
  }
}
.add-page-mask {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
#add-popup {
  visibility: hidden;
}
.edit-page-mask {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
#edit-popup {
  visibility: hidden;
}
.delete-page-mask {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
#delete-popup {
  visibility: hidden;
}

#book-button:hover {
  background: rgba(255, 255, 255, 0.5);
  transition: background 0.3s ease-out;
}
</style>
