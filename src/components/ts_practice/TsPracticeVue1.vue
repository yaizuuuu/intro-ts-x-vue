<template>

</template>

<script lang="ts">
import Vue from 'vue';

export type Todo = {
  id: string
  task: string
  done: boolean
};

export type Data = {
  firstName: string
  lastName: string
  todos: Todo[]
};

export default Vue.extend({
  name: 'TsPracticeVue1',
  data: (): Data => ({
    firstName: 'Taro',
    lastName: 'Yamada',
    todos: [],
  }),
  props: {
    msg: String,
  },
  computed: {
    message(): string {
      return this.msg;
    },
  },
});
</script>

<style scoped>

</style>
