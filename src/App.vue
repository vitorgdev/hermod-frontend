<template>
  <div id="app">
    <NavBar v-if="!blank" />
    <div class="container" :style="blank ? 'height: 100%;' : ''">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <Footer v-if="!blank" />
  </div>
</template>
<script>
import NavBar from "@/components/template/Navbar";
import Footer from "@/components/template/Footer";
export default {
  data() {
    return {
      blank: true
    };
  },
  components: {
    Footer,
    NavBar
  },
  watch: {
    $route(newVal, oldVal) {
      if (newVal.meta.template === "blank") {
        this.blank = true;
      } else {
        this.blank = false;
      }
    }
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
#app {
  height: 100%;
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
