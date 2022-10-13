<template>
  <div class="add-book-popup" v-if="!isHidden">
    <form
      class="add-form"
      action="http://localhost:3000/post/book"
      method="post"
    >
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
        <input type="number" name="available" v-model="numAvailable" />
      </div>
      <div class="add-input">
        <label for="loaned">Number of books loaned: </label>
        <input type="number" name="loaned" v-model="numLoaned" />
      </div>
      <div class="add-input">
        <label for="image">Book cover image URL: </label>
        <input type="text" v-model="image" />
      </div>
    </form>
    <div class="add-cancel-buttons">
      <button id="add-cancel-btn" @click="cancelAdd">Cancel</button>
      <button id="add-btn" type="submit" @click="postBook">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBookPopup",
  data() {
    return {
      title: "",
      author: "",
      publishingHouse: "",
      publishingDate: "",
      numAvailable: 0,
      numLoaned: 0,
      image: "",
    };
  },
  props: {
    isHidden: Boolean,
  },
  methods: {
    cancelAdd() {
      var addPopupMask = document.querySelector(".test-add");
      addPopupMask.classList.remove("add-page-mask");
      var addPopup = document.querySelectorAll("#add-popup");
      addPopup.forEach((element) => {
        element.style.visibility = "hidden";
      });
    },
    postData() {
      console.log("Sending data");
      this.cancelAdd();
    },
    //============ POST request to test============
    postBook() {
      let formData = {
        title: this.title,
        author: this.author,
        publishingHouse: this.publishingHouse,
        publishingDate: this.publishingDate,
        available: this.numAvailable,
        loaned: this.numLoaned,
        image: this.image,
      };
      console.log(formData)
      const requestOptions = {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },

        // type: ['application/json', 'text/plain'],
        body: "{ test: 1 }",
      };
      fetch("/api/post/book", requestOptions).then((response) => {
        console.log(response);
      });
      //===========================================
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
}
.add-form {
  display: flex;
  align-items: center;
  width: 40vw;
  background: yellow;
  flex-direction: column;
  padding: 1vw;
  border-radius: 10px;

  .add-input {
    margin: 2px;
    input {
      size: 10ch;
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
}
#add-btn {
  width: 100px;
  height: 30px;
  background-color: white;
  color: blue;
  cursor: pointer;
  margin: 0 1vw 0 1vw;
}
.add-cancel-buttons {
  width: 40vw;
  margin: 1vw 1vw 0 1vw;
  display: flex;
  justify-content: center;
}
</style>