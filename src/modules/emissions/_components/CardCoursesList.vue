<template>
  <div class="row">
    <div class="col-md-4" v-for="(course, index) in courses" :key="index">
      <Card :identifier="course._id">
        <template slot="title">
          {{ course.name }}
        </template>
        <template slot="text">
          <button
            type="button"
            @click="getCourse(course)"
            class="btn btn-primary btn-sm col-md-12"
          >
            Normal
          </button>
          <button type="button" class="btn btn-secondary btn-sm col-md-12">
            Prioridade
          </button>
        </template>
      </Card>
    </div>
  </div>
</template>
<script>
import Card from "@/components/ui/Card.vue";
export default {
  components: { Card },
  props: { courses: { type: Array } },
  methods: {
    getCourse(course) {
      console.log("getcourse", course);

      this.$emit("geted-course", course);
    }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-move {
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
button {
  font-size: 0.8rem;
  &.btn-primary {
    background-color: #3b86ff;
    border: 1px solid #3b86ff;
    margin-bottom: 20px;
    border-radius: 28px;
  }
  &.btn-secondary {
    border: 1px solid #58bfff;
    background-color: #58bfff;
    border-radius: 28px;
  }
}
</style>
