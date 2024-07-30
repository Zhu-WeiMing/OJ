<template>
  <div class="home">
    <MdEditor :value="value" :handle-change="onChange" />
    <CodEditor />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MdEditor from "@/components/MdEditor.vue";
import CodEditor from "@/components/CodEditor.vue";

const value = ref();
const onChange = (v: string) => {
  value.value = v;
};
</script>
