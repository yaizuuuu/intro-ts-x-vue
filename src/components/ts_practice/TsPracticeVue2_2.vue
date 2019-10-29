<template>
  <div class="todos">
    <div v-for="todo in todos" :key="todo.id">
      <TsPracticeVue21 :todo="todo"></TsPracticeVue21>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TsPracticeVue21, { Todo } from '@/components/ts_practice/TsPracticeVue2_1.vue';

export type Data = {
  todos: Todo[]
};

export default Vue.extend({
  data: (): Data => ({
    todos: [],
  }),

  components: {
    TsPracticeVue21,
  },
});
</script>

<style scoped>

</style>
