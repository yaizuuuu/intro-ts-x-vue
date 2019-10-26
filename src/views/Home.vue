<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>{{ greetText }}</p>
    <p>挨拶した回数: {{ count }}</p>
    <p v-if="isRegular">毎度ご利用いただきありがとうございます。</p>
    <MyButton :greet="greetText" @clicked="onMyButtonClicked"></MyButton>
    <ResetButton v-model="greetText"></ResetButton>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component, Watch } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import MyButton from '@/components/MyButton.vue';
import ResetButton from '@/components/ResetButton.vue';

@Component({
  components: {
    HelloWorld,
    MyButton,
    ResetButton,
  },
})
export default class Home extends Vue {
  public greetText: string = 'well... hello...';

  private count: number = 0;

  public get isRegular(): boolean {
    return this.count >= 5;
  }

  @Watch('count')
  public countChanged() {
    if (this.count === 5) {
      /* eslint no-alert: "off" */
      alert('お前はもう常連だ');
    }
  }

  public onMyButtonClicked(count: number) {
    this.greetText = 'こっ、こんにちは...';
    this.count = count;
  }
}
</script>
