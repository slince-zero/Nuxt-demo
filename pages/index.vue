<template>
  <div>
    <h3>Main page</h3>
    {{ $sayHello('world') }}

    <div>
      couter:{{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
  </div>
  <!-- <pre>{{ data }}</pre> -->
  <!-- <pre>{{ product }}</pre> -->
  <div>{{ status == 'pending' ? 'pending' : data }}</div>
</template>
<script setup>
import { useCounterStore } from "~/store/store";

const { $sayHello } = useNuxtApp()
const counter = useCounter()
const store = useCounterStore()
console.log(store);

const { data, status } = await useLazyFetch('/api/product')
console.log(data.value, '22');



// const { data } = await useFetch('/api/hello')


definePageMeta({
  middleware: 'auth'
})
</script>
<style scoped></style>