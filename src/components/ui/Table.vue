<template>
  <b-table ref="table" small hover :fields="fields" :items="items">
    <template v-slot:cell(actions)="row">
      <b-button
        size="sm"
        class="mr-1"
        @click="editRoute(row.item._id)"
        variant="outline-primary"
      >
        <i class="far fa-edit"></i>
      </b-button>
      <b-button size="sm" variant="outline-danger">
        <i class="far fa-trash-alt"></i>
      </b-button>
    </template>
    <template v-slot:cell(status)="row">
      <b-form-checkbox
        v-model="row.item.status"
        :name="row.item._id"
        switch
      ></b-form-checkbox>
    </template>
  </b-table>
</template>
<script>
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
    editRoute(id) {
      this.$router.push({ path: `${this.$route.path}/${id}/editar` });
    }
  },
  props: { items: { type: Array }, fields: { type: Array } }
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
