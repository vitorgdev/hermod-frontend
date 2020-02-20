<template>
  <div id="app" :class="blank ? 'with-image' : ''">
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
import store from "./modules/auth/_store";
import NavBar from "@/components/template/Navbar";
import Footer from "@/components/template/Footer";
import jwt from "@/api/jwt";
import { mapGetters } from "vuex";
export default {
  computed: { ...mapGetters({ userLoggedIn: "$_auth/userLoggedIn" }) },
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
    $route(newVal) {
      if (newVal.meta.template === "blank") {
        this.blank = true;
      } else {
        this.blank = false;
      }
    }
  },
  async created() {
    const STORE_KEY = "$_auth";
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
    if (jwt.get()) {
      await this.$store.dispatch("$_auth/check", {token: jwt.get()});
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
