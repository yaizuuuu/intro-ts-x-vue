<template>
  <div>
    <p>incrementCounter {{ incrementCounter }}</p>
    <p>decrementCounter {{ decrementCounter }}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="increment100">increment100</button>
    <button @click="decrement100">decrement100</button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Vue, Component } from 'vue-property-decorator';
import counterModule, { ICounterState } from '@/store/counter';

@Component({
  components: {},
})
export default class VueModuleDecorator extends Vue {
  /* eslint class-methods-use-this: 'off' */
  get incrementCounter() {
    return counterModule.incrementCounter;
  }

  get decrementCounter() {
    return counterModule.decrementCounter;
  }

  increment() {
    counterModule.setIncrementCounter(counterModule.incrementCounter + 1);
  }

  decrement() {
    counterModule.setDecrementCounter(counterModule.decrementCounter - 1);
  }

  increment100() {
    counterModule.increment100();
  }

  decrement100() {
    counterModule.decrement100();
  }
}
</script>
