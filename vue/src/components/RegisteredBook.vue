<template>
  <div class="book-card" :id="book.id">
    <img :src="book.image" alt="Book cover" />
    <div id="info">
      <div id="book-text-info">
        <b class="yellow-title"
          >Title: <b class="white-info">{{ book.title }}</b></b
        ><br />
        <b class="yellow-title"
          >Author: <b class="white-info">{{ book.author }}</b></b
        ><br />
        <b class="yellow-title"
          >House: <b class="white-info">{{ book.house }}</b></b
        ><br />
        <b class="yellow-title"
          >Date: <b class="white-info">{{ book.date }}</b></b
        ><br />
        <b class="yellow-title"
          >Available: <b class="white-info">{{ book.available }}</b></b
        ><br />
        <b class="yellow-title"
          >Loaned: <b class="white-info">{{ book.loaned }}</b></b
        >
      </div>
      <div id="section-btn">
        <button class="book-edit-button" :name="book.id" @click="editBook()">
          Edit
        </button>
        <button
          class="book-delete-button"
          :name="book.id"
          @click="deleteBook()"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisteredBook",
  props: {
    book: Object,
  },
  methods: {
    editBook() {
      var editPopupMask = document.querySelector(".test-edit");
      editPopupMask.classList.add("edit-page-mask");
      var editPopup = document.querySelectorAll(".edit-popup");
      editPopup.forEach((element) => {
        if (
          this.book.id ==
          Array.prototype.indexOf.call(editPopup, element) + 1
        ) {
          element.style.visibility = "visible";
        }
      });
    },
    deleteBook() {
      var deletePopupMask = document.querySelector(".test-delete");
      deletePopupMask.classList.add("delete-page-mask");
      var deletePopup = document.querySelectorAll(".delete-popup");
      deletePopup.forEach((element) => {
        if (this.book.id == element.getAttribute("id")) {
          element.style.visibility = "visible";
        }
      });
    },
  },
};
</script>

<style lang="scss">
.book-card {
  position: relative;
  img {
    height: 250px;
    width: 170px;
    margin: 1vw;
    border-radius: 5px;
  }
}

#info {
  display: flex;
  flex-direction: column;
  visibility: hidden;
  color: white;
  width: 170px;
  height: 250px;
  text-align: start;
  margin: 1vw;
  position: absolute;
  top: 0;
  border-radius: 5px;
  overflow: hidden;

  .book-edit-button {
    display: none;
    width: 5vw;
    height: 5vh;
    background-color: white;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      width: 8vw;
    }
    @media screen and (max-width: 500px) {
      width: 15vw;
    }
    border-radius: 5px;
  }
  .book-delete-button {
    display: none;
    width: 5vw;
    height: 5vh;
    background-color: white;
    cursor: pointer;
    @media screen and (max-width: 900px) {
      width: 8vw;
    }
    @media screen and (max-width: 500px) {
      width: 15vw;
    }
    border-radius: 5px;
  }

  #section-btn {
    display: flex;
    flex-direction: row;

    .book-edit-button:hover {
      background: blue;
      color: white;
    }
    .book-delete-button:hover {
      background: red;
      color: white;
    }
  }
}

.book-card:hover {
  #info {
    visibility: visible;
    background: black;
    transition: background 0.3s ease-in;
    justify-content: center;
    align-items: center;

    .yellow-title {
      color: yellow;
    }
    .white-info {
      color: white;
    }
    #book-test-info {
      justify-content: center;
    }
    .book-edit-button {
      display: block;
    }
    .book-delete-button {
      display: block;
    }
  }
}
</style>