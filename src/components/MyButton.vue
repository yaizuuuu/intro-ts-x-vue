<template>
  <button @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, Emit,
} from 'vue-property-decorator';

@Component
export default class MyButton extends Vue {
  private count: number = 0;

  @Prop() public greet?: string;

  /* eslint class-methods-use-this: 'off' */
  @Emit()
  public clicked(count: number) {}

  public onClick() {
    /* eslint no-alert: 'off' */
    alert(this.greet);
    this.count += 1;
    this.clicked(this.count);
  }
}
</script>

<style scoped>

</style>
