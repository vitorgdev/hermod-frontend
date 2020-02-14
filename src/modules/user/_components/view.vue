<template>
  <div>
    <b-modal
      v-model="modalShow"
      id="modal-prevent-closing"
      ref="modal"
      title="Edição de Curso"
      @hidden="resetModal"
    >
      <b-row v-if="user.statusCode == 200">
        <b-col md="12">
          <label for="input-live">Name:</label>
          <b-form-input
            disabled
            v-model="user.data.name"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>

        <b-col md="6">
          <label for="input-live">Username:</label>
          <b-form-input
            disabled
            v-model="user.data.username"
            placeholder="Enter your Username"
          ></b-form-input>
        </b-col>

        <b-col>
          <label for="input-live">Status:</label>
          <b-form-checkbox
            disabled
            v-model="user.data.status"
            switch
          ></b-form-checkbox>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      modalShow: false
    };
  },
  computed: { ...mapGetters({ user: "$_users/user" }) },
  mounted() {
    this.$store.dispatch("$_users/get", this.$route.params.id);
    this.modalShow = true;
  },
  methods: {
    resetModal() {
      this.$router.push("/users");
    }
  }
};
</script>
