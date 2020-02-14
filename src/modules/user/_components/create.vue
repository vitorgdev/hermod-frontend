<template>
  <div>
    <b-modal
      v-model="modalShow"
      id="modal-prevent-closing"
      ref="modal"
      title="Edit of user"
      @hidden="resetModal"
      @ok="sendData"
    >
      <b-row>
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
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      modalShow: false,
      user: {
        data: {
          name: "",
          initials: "",
          status: false
        }
      }
    };
  },
  mounted() {
    this.modalShow = true;
  },
  methods: {
    sendData() {
      var form = this.user.data;
      this.$store.dispatch("$_users/store", form);
    },
    resetModal() {
      this.$router.push("/users");
      this.name = "";
      this.nameState = null;
    }
  }
};
</script>
