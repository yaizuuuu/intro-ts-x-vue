<template>
  <button @click="onClick">Reset</button>
</template>

<script lang="ts">
import {
  Vue, Component, Prop, Emit,
} from 'vue-property-decorator';

@Component
export default class ResetButton extends Vue {
  // 指定の方にcastする役割を持つ
  // ここではstring型のみ許可されているが, 初期値を入れないケースの場合このままではコンパイルエラーになる
  // プロパティ名の後にエクスクラメーションマークを入れることにより, 強制的に指定の型にcastする
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
