<template>
  <div id="addQuestionView">创建题目</div>
  <a-form :model="form">
    <a-form-item field="answer" label="答案">
      <MdEditor />
    </a-form-item>
    <a-form-item field="context" label="题目内容">
      <MdEditor />
    </a-form-item>
    <a-form-item field="title" label="标题">
      <a-input v-model="form.title" placeholder="请输入标题" />
    </a-form-item>
    <a-form-item field="tags" label="标签">
      <a-input-tag v-model="form.tags" placeholder="请选择标签" allow-clear />
    </a-form-item>

    <a-form-item label="判题配置" :content-flex="false" :merge-props="false">
      <a-space direction="vertical">
        <a-form-item
          field="judgeConfig.memoryLimit"
          label="memoryLimit"
          style="min-width: 480px"
        >
          <a-input-number
            v-model="form.judgeConfig.memoryLimit"
            placeholder="请输入内存消耗"
            mode="button"
            size="large"
          />
        </a-form-item>

        <a-form-item
          field="judgeConfig.stackLimit"
          label="stackLimit"
          style="min-width: 480px"
        >
          <a-input-number
            v-model="form.judgeConfig.stackLimit"
            placeholder="请输入堆栈消耗"
            mode="button"
            size="large"
          />
        </a-form-item>

        <a-form-item
          field="judgeConfig.timeLimit"
          label="timeLimit"
          style="min-width: 480px"
        >
          <a-input-number
            v-model="form.judgeConfig.timeLimit"
            placeholder="请输入时间消耗"
            mode="button"
            size="large"
          />
        </a-form-item>
      </a-space>
    </a-form-item>

    <a-form-item label="测试用例" :content-flex="false" :merge-props="false">
      <a-form-item
        v-for="(judgeCase, index) of form.judgeCase"
        :key="index"
        align="left"
      >
        <a-form-item
          :field="`form.judgeCase[${index}].input`"
          :label="`输入用例-${index}`"
          :key="index"
        >
          <a-input v-model="judgeCase.input" placeholder="请输入测试输入用例" />
        </a-form-item>

        <a-form-item
          :field="`form.judgeCase[${index}].out`"
          :label="`输出用例-${index}`"
          :key="index"
        >
          <a-input
            v-model="judgeCase.output"
            placeholder="请输入测试输出用例"
          />
        </a-form-item>

        <a-button
          status="danger"
          @click="handleDelete(index)"
          :style="{ marginLeft: '10px' }"
          >删除
        </a-button>
      </a-form-item>
      <div>
        <a-button status="success" type="outline" @click="handleAdd"
          >添加测试用例
        </a-button>
      </div>
      <a-form-item>
        <a-button type="primary">提交</a-button>
      </a-form-item>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import MdEditor from "@/components/MdEditor.vue";

const form = reactive({
  answer: "",
  content: "",
  judgeCase: [
    {
      input: "",
      output: "",
    },
  ],
  judgeConfig: {
    memoryLimit: 0,
    stackLimit: 0,
    timeLimit: 0,
  },
  tags: [],
  title: "",
});
/**
 * 新增测试用例
 */
const handleAdd = () => {
  form.judgeCase.push({
    input: "",
    output: "",
  });
};
/**
 * 删除测试用例
 */
const handleDelete = (index: number) => {
  form.judgeCase.splice(index, 1);
};
</script>

<style scoped>
#addQuestionView {
}
</style>
