<template>
  <div @click="onClickElement"></div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    bounds: null as ClientRect | DOMRect | null,
  }),
  methods: {
    onClickElement(event: Event): void {
      if (!event.isTrusted) {
        return;
      }
      if (event.target instanceof HTMLElement) {
        this.bounds = event.target.getBoundingClientRect();
      }
    },
  },
});
</script>

<style scoped>

</style>
