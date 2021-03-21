<template>
  <Header/>
  <router-view />
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>

<script>
// @ is an alias to /src
import Header from "./components/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
