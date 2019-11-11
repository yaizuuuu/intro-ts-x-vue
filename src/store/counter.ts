import {
  Mutation, Action, VuexModule, getModule, Module,
} from 'vuex-module-decorators';
import store from '@/store/index';

export interface ICounterState {
  incrementCounter: number
  decrementCounter: number
}

@Module({
  dynamic: true,
  store,
  name: 'counter',
  namespaced: true,
})
class Counter extends VuexModule implements ICounterState {
  incrementCounter = 0;

  decrementCounter = 1000;

  @Mutation
  public setIncrementCounter(num: number) {
    this.incrementCounter = num;
  }

  @Mutation
  public setDecrementCounter(num: number) {
    this.decrementCounter = num;
  }

  @Action({})
  public increment100() {
    this.setIncrementCounter(this.incrementCounter + 100);
  }

  @Action({})
  public decrement100() {
    this.setDecrementCounter(this.decrementCounter - 100);
  }

  @Action({ commit: 'setIncrementCounter' })
  /* eslint class-methods-use-this: 'off' */
  increment50() {
    return 50;
  }
}

const counterModule = getModule(Counter);

export default counterModule;
