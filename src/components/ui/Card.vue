<template>
  <div class="card mb-5">
    <div class="card-title">
      <div class="col-md-12">
        <slot name="title"></slot>
        <i
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
        <p class="card-text">
          <slot name="text"></slot>
        </p>
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
<style lang="scss" scoped>
.card {
  transition: all 1s linear;
  border: 0px solid transparent;
  box-shadow: 0px 3px 6px rgba(136, 136, 136, 0.16);
  .card-title {
    font-size: 0.9rem;
    box-shadow: 0px 3px 4px rgba(136, 136, 136, 0.16);
    color: #707070;
    background-color: #ffc85f;
    padding: 9px 0px 9px 22px;
  }
  i {
    margin-top: 7px;
    cursor: pointer;
  }
}
</style>
