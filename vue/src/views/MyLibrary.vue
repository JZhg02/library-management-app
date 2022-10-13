<template>
    <div class="library">
        <input class="search-bar" type="text">
        <BookList></BookList>
    </div>
</template>

<script>
import BookList from "@/components/BookList.vue";
export default {
    components: { BookList }
}
</script>

<style lang="scss">
    .library{
        margin-top: 15vh;

        @media screen and (max-width: 600px) {
        margin-top: 10vh;
        }
    }
    .search-bar{
        width: 30vw;
        height: 3vh;
        border-radius: 5px;
    }
</style>