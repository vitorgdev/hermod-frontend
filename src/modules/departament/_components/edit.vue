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
      <b-row v-if="departament.data">
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
            :name="departament.data._id"
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
  computed: { ...mapGetters({ departament: "$_departaments/departament" }) },
  mounted() {
    this.$store.dispatch("$_departaments/get", this.$route.params.id);
    this.modalShow = true;
  },
  methods: {
    sendData() {
      var form = this.departament.data;
      delete form.createdAt;
      delete form.__v;
      console.log(form);
      this.$store.dispatch("$_departaments/edit", form);
    },
    resetModal() {
      this.$router.push("/departaments");
      this.name = "";
      this.nameState = null;
    }
  }
};
</script>
