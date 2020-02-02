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
      <b-row>
        <b-col md="12">
          <label for="input-live">Departament:</label>
          <b-form-input
            v-model="departament.data.name"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>

        <b-col md="6">
          <label for="input-live">Initials:</label>
          <b-form-input
            v-model="departament.data.initials"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>

        <b-col>
          <label for="input-live">Status:</label>
          <b-form-checkbox
            v-model="departament.data.status"
            switch
          ></b-form-checkbox>
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
      departament: {
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
      var form = this.departament.data;
      this.$store.dispatch("$_departaments/store", form);
    },
    resetModal() {
      this.$router.push("/departaments");
      this.name = "";
      this.nameState = null;
    }
  }
};
</script>
