<template>
  <div>
    <b-modal
      v-model="modalShow"
      id="modal-prevent-closing"
      ref="modal"
      title="Edição de Curso"
      @hidden="resetModal"
      @ok="sendData"
    >
      <b-row v-if="user.statusCode == 200">
        <b-col md="12">
          <label for="input-live">Name:</label>
          <b-form-input
            v-model="user.data.name"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>

        <b-col md="6">
          <label for="input-live">Username:</label>
          <b-form-input
            v-model="user.data.username"
            placeholder="Enter your Username"
          ></b-form-input>
        </b-col>

        <b-col md="6">
          <label for="input-live">Password:</label>
          <b-form-input
            v-model="user.data.password"
            placeholder="Enter your Pass"
          ></b-form-input>
        </b-col>

        <b-col>
          <label for="input-live">Status:</label>
          <b-form-checkbox v-model="user.data.status" switch></b-form-checkbox>
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
    async sendData(bvModalEvt) {
      bvModalEvt.preventDefault();
      var form = this.user.data;
      delete form.createdAt;
      delete form.__v;
      await this.$store.dispatch("$_users/edit", form);
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    resetModal() {
      this.$router.push("/users");
      this.name = "";
      this.nameState = null;
    }
  }
};
</script>
