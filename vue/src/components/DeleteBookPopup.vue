<template>
  <div class="delete-book-popup">
    <div class="delete-window">
      Are you sure you want to delete this book ? <br />Changes are
      irreversible.
      <div class="delete-cancel-buttons">
        <button id="delete-cancel-btn" @click="closePopup">No</button>
        <button id="delete-btn" @click="postData">Yes</button>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { globalProperties } from "./../main.js";
export default {
  name: "DeleteBookPopup",
  props: {
    thisBookId: Number,
  },
  methods: {
    closePopup() {
      var deletePopupMask = document.querySelector(".test-delete");
      deletePopupMask.classList.remove("delete-page-mask");
      var deletePopup = document.querySelectorAll(".delete-popup");
      deletePopup.forEach((element) => {
        element.style.visibility = "hidden";
      });
    },
    // thisBookId is the id of the book for this delete popup
    async postData() {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: globalProperties.$id,
          id: this.thisBookId,
          token: globalProperties.$token,
        }),
      };
      fetch("api/users/post/delete", requestOptions);
      this.closePopup();
      this.$router.push("/");
      await new Promise((r) => setTimeout(r, 1));
      this.$router.push("/library");
    },
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