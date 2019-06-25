<template>
  <div class="card mb-5">
    <div class="card-title">
      <div class="col-md-12">
        <slot name="title"></slot>
        <i
          :data-cy="`buttonCollapeMinus`"
          data-toggle="collapse"
          :href="'#cardCollapse' + identifier"
          role="button"
          aria-expanded="false"
          :aria-controls="'cardCollapse' + identifier"
          class="float-right"
          @click="collapsed = !collapsed"
          :class="!collapsed ? 'fas fa-minus' : 'fas fa-plus'"
        ></i>
      </div>
    </div>
    <div class="collapse show" :id="'cardCollapse' + identifier">
      <div class="card-body">
        <slot name="text"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["identifier"],

  data: function() {
    return {
      collapsed: false
    };
  }
};
</script>
<style lang="scss" scoped></style>
