<template>
  <Card>
    <template slot="title">Departament View</template>
    <template slot="text">
      <b-button @click="create" size="sm" variant="outline-add" class="float-right">+</b-button>
      <div>
        <Table
          @remove="remove"
          @changeStatus="changeStatus"
          :key="componentKey"
          :fields="fields"
          :items="departaments"
        ></Table>
      </div>
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
  name: "DepartamentModule",
  computed: { ...mapGetters({ departaments: "$_departaments/departaments" }) },
  data: function() {
    return {
      componentKey: 0,
      fields: [
        { key: "status", label: "Status" },
        { key: "name", label: "Name" },
        {
          key: "initials",
          label: "Initials",
          sortable: true,
          class: "text-center"
        },
        {
          key: "createdAt",
          label: "Created At",
          sortable: true,
          sortDirection: "desc",
          fieldType: "date"
        },
        { key: "actions", label: "" }
      ]
    };
  },
  components: {
    Table,
    Card
  },

  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    remove(id) {
      this.$store.dispatch("$_departaments/remove", id);
    },
    changeStatus(row) {
      this.$store.dispatch("$_departaments/changeStatus", row);
    },
    create() {
      this.$router.push({ path: `${this.$route.path}/create` });
    }
  },

  created() {
    const STORE_KEY = "$_departaments";
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
  },

  mounted() {
    this.$store.dispatch("$_departaments/list");
  },

  watch: {
    $route() {
      this.forceRerender();
    }
  }
};
</script>
