<template>
    <div class="delete-book-popup" >
        <div class="delete-window">
            Are you sure you want to delete this book ? <br>Changes are irreversible.
            <div class="delete-cancel-buttons">
                <button id="delete-cancel-btn" @click="closePopup">No</button>
                <button id="delete-btn" @click="closePopup(); postData()">Yes</button>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DeleteBookPopup",
    props: {
        thisBookId: Number
    },
    methods: {
        closePopup() {
            var deletePopupMask = document.querySelector(".test-delete");
            deletePopupMask.classList.remove("delete-page-mask");
            var deletePopup = document.querySelectorAll("#delete-popup");
            deletePopup.forEach((element) => {
                element.style.visibility = "hidden";
            });
        },
        // thisBookId is the id of the book for this delete popup
        postData() {
            console.log(this.thisBookId)
        },
      /*
      postData() {
        console.log(this.action);
        console.log(this.name);
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: this.bookId,
            title: this.bookTitle,
            author: this.bookAuthor,
            publishingHouse: this.bookPublishingHouse,
            publishingDate: this.bookPublishingDate,
            available: this.bookAvailable,
            loaned: this.bookLoaned,
            image: this.bookImage,
          }),
        };
        fetch(this.action, requestOptions)
          .then((response) => response.json())
          .then((data) => console.log(data));
        this.closePopup();
      },*/
    },
    beforeMount() {
      // console.log(this.action);
    },
  };
  </script>
  
  <style lang="scss">

    .delete-book-popup {
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
    .delete-window {
        display: flex;
        align-items: center;
        width: 40vw;
        background: white;
        flex-direction: column;
        padding: 1vw;
        border-radius: 10px;

        @media screen and (max-width: 600px) {
            justify-content: center;
            width: 70vw;
        }
    }
    #delete-cancel-btn {
        width: 100px;
        height: 30px;
        background-color: white;
        color: red;
        cursor: pointer;
        margin: 0 1vw 0 1vw;
        border-radius: 5px;
    }
    #delete-cancel-btn:hover {
        background-color: red;
        color: white;
    }
    #delete-btn {
        width: 100px;
        height: 30px;
        background-color: white;
        color: green;
        cursor: pointer;
        margin: 0 1vw 0 1vw;
        border-radius: 5px;
    }
    #delete-btn:hover {
        background-color: green;
        color: white;
    }
    .delete-cancel-buttons {
        width: 40vw;
        margin: 1vw 1vw 0 1vw;
        display: flex;
        justify-content: center;
    }
</style>