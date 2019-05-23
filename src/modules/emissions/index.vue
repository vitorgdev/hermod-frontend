<template>
  <div>
    <div class="row">
      <div class="col-md-4 mb-5">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            id="validationTooltipUsername"
            placeholder="Buscar Curso"
            @input="searchCourse"
          />
          <div class="input-group-append">
            <span class="input-group-text"><i class="fas fa-search"></i></span>
          </div>
        </div>
      </div>
    </div>
    <CardCoursesList
      @geted-course="generateNumber"
      :courses="searchedCourses.length == 0 ? courses.docs : searchedCourses"
    ></CardCoursesList>
  </div>
</template>
<script>
import CardCoursesList from "./_components/CardCoursesList";
import { mapGetters } from "vuex";
import coursesStore from "../courses/_store";
import numbersStore from "../numbers/_store";

export default {
  components: { CardCoursesList },

  data: function() {
    return {
      searchedCourses: []
    };
  },
  computed: { ...mapGetters({ courses: "$_courses/courses" }) },
  created() {
    const COURSES_STORE_KEY = "$_courses";
    const NUMBERS_STORE_KEY = "$_numbers";
    if (!(COURSES_STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(COURSES_STORE_KEY, coursesStore);
    }
    if (!(NUMBERS_STORE_KEY in this.$store._modules.root._children)) {
      this.$store.registerModule(NUMBERS_STORE_KEY, numbersStore);
    }
  },
  mounted() {
    this.$store.dispatch("$_courses/getCourses");
  },
  methods: {
    async searchCourse(e) {
      this.searchedCourses = this.courses.docs.filter(en => {
        return en.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      console.log(this.searchedCourses);
      console.log(e);
    },
    async generateNumber(e) {
      this.$swal({
        title: "Você tem certeza?",
        text: "Está gerando uma senha do curso " + e.name + "!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim!",
        cancelButtonText: "Não!"
      }).then(async result => {
        if (result.value) {
          await this.$store.dispatch("$_numbers/generateNumber", {
            name: e.name,
            initials: e.initials
          });
          this.$swal("Senha gerada!", "", "success");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.input-group-text {
  padding: 0.375rem 1.5rem;
  border-radius: 0px 28px 28px 0px;
  background-color: white;
  border: 1.2px solid #3b86ff;
  border-left-color: transparent;
}
.input-group-append {
  margin-left: -3px;
}
input {
  &:focus {
    border-right-color: transparent !important;
    border-color: #3b86ff;
    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0);
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0);
  }
  border-radius: 28px 0px 0px 28px;
  border: 1.2px solid #3b86ff;
  border-right-color: transparent;
  padding: 15px;
  &::placeholder {
    color: rgba(112, 112, 112, 0.68);
  }
}
</style>
