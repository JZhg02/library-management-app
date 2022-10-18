<template>
  <div class="edit-book-popup">
    <form class="edit-form" id="editForm">
      <div class="edit-input">
        <label for="title">Title: </label>
        <input type="text" name="title" v-model="modifiedTitle" />
      </div>
      <div class="edit-input">
        <label for="author">Author: </label>
        <input type="text" name="author" v-model="modifiedAuthor" />
      </div>
      <div class="edit-input">
        <label for="publishingHouse">Publishing house: </label>
        <input type="text" name="house" v-model="modifiedPublishingHouse" />
      </div>
      <div class="edit-input">
        <label for="publishingDate">Publishing Date: </label>
        <input type="text" v-model="modifiedPublishingDate" />
      </div>
      <div class="edit-input">
        <label for="available">Number of books available: </label>
        <input type="number" name="available" v-model="modifiedAvailable" />
      </div>
      <div class="edit-input">
        <label for="loaned">Number of books loaned: </label>
        <input type="number" name="loaned" v-model="modifiedLoaned" />
      </div>
      <div class="edit-input">
        <label for="image">Book cover image URL: </label>
        <input type="text" v-model="modifiedImage" />
      </div>
      <div class="edit-cancel-buttons">
        <button id="edit-cancel-btn" @click="closePopup">Cancel</button>
        <button id="edit-btn" type="submit" @click="postData" form="editForm">
          Modify
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { globalProperties } from "./../main.js";

export default {
  name: "EditBookPopup",
  props: {
    book: Object,
  },
  data() {
    return {
      modifiedId: this.book.id,
      modifiedTitle: this.book.title,
      modifiedAuthor: this.book.author,
      modifiedPublishingHouse: this.book.publishingHouse,
      modifiedPublishingDate: this.book.publishingDate,
      modifiedAvailable: this.book.available,
      modifiedLoaned: this.book.loaned,
      modifiedImage: this.book.image,
    };
  },
  methods: {
    closePopup() {
      var editPopupMask = document.querySelector(".test-edit");
      editPopupMask.classList.remove("edit-page-mask");
      var editPopup = document.querySelectorAll(".edit-popup");
      editPopup.forEach((element) => {
        element.style.visibility = "hidden";
      });
    },
    postData() {
      // console.log(this.action);
      // console.log(this.name);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: globalProperties.$token,
          userId: globalProperties.$id,
          bookId: this.modifiedId,
          title: this.modifiedTitle,
          author: this.modifiedAuthor,
          publishingHouse: this.modifiedPublishingHouse,
          publishingDate: this.modifiedPublishingDate,
          available: this.modifiedAvailable,
          loaned: this.modifiedLoaned,
          image: this.modifiedImage,
        }),
      };
      fetch("/api/users/post/edit", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
      this.closePopup();
    },
  },
  beforeMount() {
    // console.log(this.action);
  },
};
</script>

<style lang="scss">
.edit-book-popup {
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
.edit-form {
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

  .edit-input {
    margin: 2px;
    width: 100%;
    padding: 0.5em 1em 0.5em 1em;
    input {
      border-radius: 5px;
    }
  }
}
#edit-cancel-btn {
  width: 100px;
  height: 30px;
  background-color: white;
  color: red;
  cursor: pointer;
  margin: 0 1vw 0 1vw;
  border-radius: 5px;
}
#edit-cancel-btn:hover {
  background-color: red;
  color: white;
}
#edit-btn {
  width: 100px;
  height: 30px;
  background-color: white;
  color: blue;
  cursor: pointer;
  margin: 0 1vw 0 1vw;
  border-radius: 5px;
}
#edit-btn:hover {
  background-color: blue;
  color: white;
}
.edit-cancel-buttons {
  width: 40vw;
  margin: 1vw 1vw 0 1vw;
  display: flex;
  justify-content: center;
}
</style>