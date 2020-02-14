<template>
  <div>
    <Card>
      <template slot="title">Filters</template>
      <template slot="text">
        <b-form @submit="onSubmit">
          <b-row>
            <b-col md="5">
              <label for="inline-form-input-name">Nome:</label>
              <b-form-input
                id="inline-form-input-name"
                v-model="filters.name"
                placeholder="Enter your name"
              ></b-form-input>
            </b-col>
            <b-col md="2">
              <label for="inline-form-input-name">Status:</label>
              <b-form-checkbox
                size="lg"
                v-model="filters.status"
                switch
              ></b-form-checkbox>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-button type="submit" class="mt-3">Search</b-button>
            </b-col>
          </b-row>
        </b-form>
      </template>
    </Card>
    <Card>
      <template slot="title">User View</template>
      <template slot="text">
        <b-button
          @click="create"
          size="sm"
          variant="outline-add"
          class="float-right"
          >+</b-button
        >
        <div>
          <Table
            @remove="remove"
            @changeStatus="changeStatus"
            :key="componentKey"
            :fields="fields"
            :items="users"
          ></Table>
        </div>
        <router-view></router-view>
      </template>
    </Card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import store from "./_store";
import Table from "../../components/ui/Table";
import Card from "../../components/ui/Card";

export default {
  name: "UserModule",
  computed: { ...mapGetters({ users: "$_users/users" }) },
  data: function() {
    return {
      filters: {
        name: "",
        initials: "",
        status: true
      },
      componentKey: 0,
      fields: [
        { key: "status", label: "Status" },
        { key: "name", label: "Name" },
        {
          key: "username",
          label: "Username"
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
    onSubmit(evt) {
      evt.preventDefault();
      let filledFilters = {};
      for (const key in this.filters) {
        if (this.filters.hasOwnProperty(key) && this.filters[key] !== "") {
          filledFilters[key] = this.filters[key];
        }
      }
      this.$router.push({ name: "user", query: filledFilters });
      this.$store.dispatch("$_users/list", filledFilters);
    },
    forceRerender() {
      this.componentKey += 1;
    },
    remove(id) {
      this.$store.dispatch("$_users/remove", id);
    },
    changeStatus(row) {
      this.$store.dispatch("$_users/changeStatus", row);
    },
    create() {
      this.$router.push({ path: `${this.$route.path}/create` });
    }
  },

  created() {
    const STORE_KEY = "$_users";
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
  },

  mounted() {
    this.$store.dispatch("$_users/list");
  },

  watch: {
    $route() {
      this.forceRerender();
    },
    filters: {
      deep: true,
      handler() {
        this.filters.initials = this.filters.initials.toUpperCase();
      }
    }
  }
};
</script>
