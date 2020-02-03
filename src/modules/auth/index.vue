<template>
  <b-row class="justify-content-md-center h-100" align-v="center">
    <b-col cols="4" class="mx-auto">
      <b-card-group class="login" deck>
        <b-card header="Auth" header-tag="header">
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
                  type="password"
                  required
                  placeholder="password"
                ></b-form-input>
              </b-form-group>
              <b-button @click="submit" variant="outline-default">Login</b-button>
            </b-form>
          </b-card-text>
        </b-card>
      </b-card-group>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";
import store from "./_store";
export default {
  name: "AuthModule",
  computed: { ...mapGetters({ userLoggedIn: "$_auth/userLoggedIn" }) },
  data: function() {
    return {
      valid: true,
      form: {
        username: "",
        password: ""
      }
    };
  },

  created() {
    const STORE_KEY = "$_auth";
    if (!(STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(STORE_KEY, store);
    }
  },

  methods: {
    async submit() {
      await this.$store.dispatch("$_auth/auth", this.form);
      this.$router.push({ name: "departament" });
    }
  }
};
</script>
