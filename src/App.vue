<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <transition name="fade" mode="out-in"
        ><router-view> </router-view
      ></transition>
    </div>
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/template/Navbar";
import Footer from "@/components/template/Footer";
export default {
  components: {
    Footer,
    NavBar
  }
};
</script>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
body {
  font-family: "Nunito", sans-serif !important;
}

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
</style>
