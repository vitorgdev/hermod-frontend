<template>
  <b-table ref="table" small hover :fields="fields" :items="items">
    <template v-slot:cell(actions)="row">
      <b-button size="sm" class="mr-1" @click="edit(row.item._id)" variant="outline-primary">
        <i class="far fa-edit"></i>
      </b-button>
      <b-button size="sm" class="mr-1" variant="outline-danger" @click="remove(row.item._id)">
        <i class="far fa-trash-alt"></i>
      </b-button>
      <b-button size="sm" variant="outline-secondary" @click="view(row.item._id)">
        <i class="far fa-eye"></i>
      </b-button>
    </template>
    <template v-slot:cell(status)="row">
      <b-form-checkbox
        v-model="row.item.status"
        :name="row.item._id"
        switch
        @change="changeStatus(row)"
      ></b-form-checkbox>
    </template>
    <template v-slot:cell()="row">
      <i v-if="row.field.fieldType === 'date'">{{ formatDate(row.value, 'DD/MM/YYYY') }}</i>
      <i v-else>{{ row.value }}</i>
    </template>
  </b-table>
</template>
<script>
import moment from "moment";
import swal from "sweetalert2";
export default {
  data() {
    return {
      selected: []
    };
  },
  updated() {
    if (this.items !== undefined) {
      this.items.forEach(element => {
        element.stats == true ? this.selected.push(element._id) : "";
      });
    }
  },
  methods: {
    changeStatus(row) {
      this.$emit("changeStatus", row);
    },

    formatDate(value, newFormat) {
      return moment(value).format(newFormat);
    },

    edit(id) {
      this.$router.push({ path: `${this.$route.path}/${id}/edit` });
    },

    view(id) {
      this.$router.push({ path: `${this.$route.path}/${id}/view` });
    },

    remove(id) {
      swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        })
        .then(result => {
          if (result.value) {
            this.$emit("remove", id);
          }
        });
    }
  },
  props: {
    items: { type: Array },
    fields: { type: Array }
  }
};
</script>
<style lang="scss">
table {
  border-collapse: collapse;
  // border-radius: 1em;
  overflow: hidden;
}
th {
  font-size: 1.1rem;
}
th,
td {
  vertical-align: middle !important;
  color: #707070;
  font-weight: 100;
  border-top: 0px solid #dee2e6 !important;
  background: white;
  border-bottom: 1px solid #ffc75f6e !important;
}
</style>
