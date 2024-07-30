<template>
  <div id="code-editor" ref="codeEditorRef" style="min-height: 400px" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as monaco from "monaco-editor";

const codeEditorRef = ref();
const codeEditor = ref();
const value = ref("hello word");

onMounted(() => {
  if (!codeEditorRef.value) {
    return;
  }
  codeEditor.value = monaco.editor.create(codeEditorRef.value, {
    value: value.value,
    language: "java",
    automaticLayout: true,
    colorDecorators: true,
    minimap: {
      enabled: true,
    },
    readOnly: false,
    theme: "vs-dark",
  });
  //編輯 监听内容变化
  codeEditor.value.onDidChangeModelContent(() => {
    console.log("目前内容为：", codeEditor.value.getValue());
  });
});
</script>

<style scoped></style>
