<template>
</template>

<script lang="ts">
import Vue from 'vue';

export type Rect = {
  width: number
  height: number
}

export type Position = {
  top: number
  left: number
}

export default Vue.extend({
  data: () => ({
    defaultDateLabel: '1980-01-01',
    dataLabel: null as string | null,

    bounds: null as ClientRect | DOMRect | null,
  }),
  computed: {
    greet(): string {
      return 'Hello World';
    },
    dataFromDateLabel(): Date {
      let label = this.defaultDateLabel;

      if (this.dataLabel !== null) {
        label = this.dataLabel;
      }

      return new Date(label);
    },

    boundsInfo(): string {
      if (this.bounds === null) {
        return '';
      }

      return JSON.stringify(this.bounds);
    },
    rect(): Rect {
      if (this.bounds === null) {
        return {
          width: 0,
          height: 0,
        };
      }

      return {
        width: this.bounds.width,
        height: this.bounds.height,
      };
    },
    position(): Position {
      if (this.bounds === null) {
        return {
          top: 0,
          left: 0,
        };
      }

      return {
        top: this.bounds.top,
        left: this.bounds.left,
      };
    },
  },
  methods: {
    onClickElement({ target }: { target: HTMLElement }): void {
      this.bounds = target.getBoundingClientRect();
    },
  },
});
</script>

<style scoped>

</style>
