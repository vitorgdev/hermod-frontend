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
        <b-col md="7">
          <label for="input-live">Curso:</label>
          <b-form-input
            v-model="course.name"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>

        <b-col md="2">
          <label for="input-live">Sigla:</label>
          <b-form-input
            v-model="course.initials"
            placeholder="Enter your name"
          ></b-form-input>
        </b-col>

        <b-col>
          <label for="input-live">Situação:</label>
          <b-form-checkbox v-model="course.stats" :name="course._id" switch>
          </b-form-checkbox>
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
  computed: { ...mapGetters({ course: "$_courses/course" }) },
  mounted() {
    this.$store.dispatch("$_courses/getCourse", this.$route.params.id);
    this.modalShow = true;
  },
  methods: {
    sendData() {
      var form = this.course;
      delete form.createdAt;
      delete form.__v;
      console.log(form);
      this.$store.dispatch("$_courses/editCourse", form);
    },
    resetModal() {
      this.$router.push({ path: "/cursos" });
      this.name = "";
      this.nameState = null;
    }
  }
};
</script>
