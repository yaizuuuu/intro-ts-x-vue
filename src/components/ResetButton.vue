<template>
  <button @click="onClick">Reset</button>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, Emit,
} from 'vue-property-decorator';

@Component
export default class ResetButton extends Vue {
  public initialValue!: string;

  @Prop() public value!: string;

  /* eslint class-methods-use-this: "off" */
  @Emit()
  input(value: string) {}

  public onClick() {
    this.input(this.initialValue);
  }

  public created() {
    this.initialValue = this.value;
  }
}
</script>

<style scoped>

</style>
