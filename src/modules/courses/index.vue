<template> </template>

<script>
import { mapGetters } from "vuex";
import store from "./_store";

export default {
  name: "CoursesModule",
  computed: { ...mapGetters({ messages: "$_courses/courses" }) },

  created() {
    const STORE_KEY = "$_courses";
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
  },

  mounted() {
    this.$store.dispatch("$_courses/getCourses");
  }
};
</script>
