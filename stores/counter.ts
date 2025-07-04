// stores/counter.ts
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // state
  const count = ref(0);

  // getters
  const double = computed(() => count.value * 2);

  // actions
  function increment() {
    count.value++;
  }

  return {
    count,
    double,
    increment,
  };
});
