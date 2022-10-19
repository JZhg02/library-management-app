<template>
  <div class="library">
    <input class="search-bar" type="text" v-model="search" />
    <div class="myList">
      <button id="book-button" @click="addBook()"><h1>+</h1></button>
      <RegisteredBook
        v-for="book in filteredBooks"
        :key="book.id"
        :book="book"
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
          class="edit-popup"
          v-for="book in bookList"
          :book="book"
          :key="book.id"
        ></EditBookPopup>
      </div>
      <div class="test-delete" :name="bookList.id">
        <DeleteBookPopup
          v-for="book in bookList"
          :key="book.id"
          class="delete-popup"
          :thisBookId="book.id"
          :id="book.id"
        ></DeleteBookPopup>
      </div>
    </div>
  </div>
</template>

<script>
import RegisteredBook from "@/components/RegisteredBook.vue";
import AddBookPopup from "@/components/AddBookPopup.vue";
import EditBookPopup from "@/components/EditBookPopup.vue";
import DeleteBookPopup from "@/components/DeleteBookPopup.vue";
import { globalProperties } from "@/main";

export default {
  name: "BookList",
  components: { RegisteredBook, AddBookPopup, EditBookPopup, DeleteBookPopup },
  data() {
    return {
      search: "",
      bookList: [],
    };
  },
  methods: {
    addBook() {
      var addPopupMask = document.querySelector(".test-add");
      addPopupMask.classList.add("add-page-mask");
      var addPopup = document.querySelector("#add-popup");
      addPopup.style.visibility = "visible";
    },
  },
  beforeMount() {
    var component = this;
    fetch("/api/users/books/" + globalProperties.$id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: globalProperties.$token }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        component.bookList = data;
      });
  },
  computed: {
    filteredBooks() {
      return this.bookList.filter(
        (book) =>
          book.title.toLowerCase().includes(this.search) ||
          book.author.toLowerCase().includes(this.search) ||
          book.publishingHouse.toLowerCase().includes(this.search)
      );
    },
  },
};
</script>

<style lang="scss">
.library {
  margin-top: 15vh;

  @media screen and (max-width: 600px) {
    margin-top: 10vh;
  }
}
.search-bar {
  width: 30vw;
  height: 3vh;
  border-radius: 5px;
  @media screen and (max-width: 900px) {
    width: 55vw;
  }
  @media screen and (max-width: 600px) {
    width: 70vw;
  }
}
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
.edit-popup {
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
.delete-popup {
  visibility: hidden;
}

#book-button:hover {
  background: rgba(255, 255, 255, 0.5);
  transition: background 0.3s ease-out;
}
</style>
