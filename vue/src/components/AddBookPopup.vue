<template>
  <div class="add-book-popup">
    <form class="add-form" id="addForm">
      <div class="add-input">
        <label for="title">Title: </label>
        <input type="text" name="title" v-model="title" />
      </div>
      <div class="add-input">
        <label for="author">Author: </label>
        <input type="text" name="author" v-model="author" />
      </div>
      <div class="add-input">
        <label for="publishingHouse">Publishing house: </label>
        <input type="text" name="house" v-model="publishingHouse" />
      </div>
      <div class="add-input">
        <label for="publishingDate">Publishing Date: </label>
        <input type="text" v-model="publishingDate" />
      </div>
      <div class="add-input">
        <label for="available">Number of books available: </label>
        <input type="number" name="available" v-model="available" />
      </div>
      <div class="add-input">
        <label for="loaned">Number of books loaned: </label>
        <input type="number" name="loaned" v-model="loaned" />
      </div>
      <div class="add-input">
        <label for="image">Book cover image URL: </label>
        <input type="text" v-model="image" />
      </div>
      <div class="add-cancel-buttons">
        <button id="add-cancel-btn" @click="closePopup">Cancel</button>
        <button id="add-btn" type="submit" @click="postData" form="addForm">
          Add
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { globalProperties } from "./../main.js";

export default {
  name: "AddBookPopup",
  data() {
    return {
      title: "",
      author: "",
      publishingHouse: "",
      publishingDate: "",
      available: 0,
      loaned: 0,
      image: "",
    };
  },
  methods: {
    closePopup() {
      var addPopupMask = document.querySelector(".test-add");
      addPopupMask.classList.remove("add-page-mask");
      var addPopup = document.querySelectorAll("#add-popup");
      addPopup.forEach((element) => {
        element.style.visibility = "hidden";
      });
    },
    postData() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: globalProperties.$token,
          userId: globalProperties.$id,
          bookId: -1,
          title: this.title,
          author: this.author,
          publishingHouse: this.publishingHouse,
          publishingDate: this.publishingDate,
          available: this.available,
          loaned: this.loaned,
          image: this.image,
        }),
      };
      fetch("api/users/post/book", requestOptions);
      this.closePopup();
    },
  },
};
</script>

<style lang="scss">
.add-book-popup {
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
.add-form {
  display: flex;
  align-items: center;
  width: 40vw;
  background: yellow;
  flex-direction: column;
  padding: 1vw;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    justify-content: center;
    width: 70vw;
  }

  .add-input {
    margin: 2px;
    width: 100%;
    padding: 0.5em 1em 0.5em 1em;
    input {
      border-radius: 5px;
    }
  }
}
#add-cancel-btn {
  width: 100px;
  height: 30px;
  background-color: white;
  color: red;
  cursor: pointer;
  margin: 0 1vw 0 1vw;
  border-radius: 5px;
}
#add-cancel-btn:hover {
  background-color: red;
  color: white;
}
#add-btn {
  width: 100px;
  height: 30px;
  background-color: white;
  color: blue;
  cursor: pointer;
  margin: 0 1vw 0 1vw;
  border-radius: 5px;
}
#add-btn:hover {
  background-color: blue;
  color: white;
}
.add-cancel-buttons {
  width: 40vw;
  margin: 1vw 1vw 0 1vw;
  display: flex;
  justify-content: center;
}
</style>