<template>
  <Card>
    <template slot="title">
      Visualização de Curso
    </template>
    <template slot="text">
      <Table :fields="fields" :items="courses.docs"></Table>

      <router-view></router-view>
    </template>
  </Card>
</template>

<script>
import { mapGetters } from "vuex";
import store from "./_store";
import Table from "../../components/ui/Table";
import Card from "../../components/ui/Card";

export default {
  name: "CoursesModule",
  computed: { ...mapGetters({ courses: "$_courses/courses" }) },
  data: function() {
    return {
      fields: [
        { key: "stats", label: "Situação" },
        { key: "name", label: "Nome" },
        {
          key: "initials",
          label: "Sigla ",
          sortable: true,
          class: "text-center"
        },
        {
          key: "createdAt",
          label: "Data de Criação",
          sortable: true,
          sortDirection: "desc"
        },
        { key: "actions", label: "" }
      ]
    };
  },
  components: {
    Table,
    Card
  },

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
