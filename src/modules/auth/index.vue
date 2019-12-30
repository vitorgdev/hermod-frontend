<template>
  <b-row class="justify-content-md-center h-100" align-v="center">
    <b-col cols="4" class="mx-auto">
      <b-card-group class="login" deck>
        <b-card header="login" header-tag="header">
          <b-card-text>
            <b-form>
              <b-form-group
                id="input-group-1"
                label-for="input-1"
                description="Enter your usename here."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.username"
                  type="email"
                  required
                  placeholder="username"
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-1"
                label-for="input-1"
                description="Enter your password here."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.password"
                  type="email"
                  required
                  placeholder="password"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="outline-default">Login</b-button>
            </b-form>
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-col>
    <!-- <b-col cols="5" class="mx-auto">
      <b-card-group deck>
        <b-card
          header="featured"
          header-tag="header"
          footer="Card Footer"
          footer-tag="footer"
        >
          <b-card-text>
            <b-form>
              <b-form-group
                id="input-group-1"
                label="Username:"
                label-for="input-1"
                description="Enter your usename here."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.username"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>
              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-col> -->
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";
import store from "./_store";
import Table from "../../components/ui/Table";
import Card from "../../components/ui/Card";

export default {
  name: "AuthModule",
  // computed: { ...mapGetters({ departaments: "$_departaments/departaments" }) },
  data: function() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  components: {
    Table,
    Card
  }
  // methods: {
  //   forceRerender() {
  //     this.componentKey += 1;
  //     this.$forceUpdate();
  //   },
  //   remove(id) {
  //     this.$store.dispatch("$_departaments/remove", id);
  //   },
  //   create() {
  //     this.$router.push({ path: `${this.$route.path}/create` });
  //   }
  // },
  // created() {
  //   const STORE_KEY = "$_departaments";
  //   if (!(STORE_KEY in this.$store._modules.root._children)) {
  //     this.$store.registerModule(STORE_KEY, store);
  //   }
  // },
  // mounted() {
  //   this.$store.dispatch("$_departaments/list");
  // },
  // watch: {
  //   $route(to, from) {
  //     this.forceRerender();
  //     this.$forceUpdate();
  //   }
  // }
};
</script>
