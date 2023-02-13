<template>
  <div class="content-main">
    <Input class="input" type="textarea" :rows="4" v-model="text" placeholder="请输入抽取原始文本"></Input>
    <Row>
      <Button type="primary" :loading="loading" shape="circle" icon="ios-search" @click="create">构建</Button>
    </Row>
  </div>
</template>
<script>

export default {
  name: "index",
  data() {
    return {
      text: '',
      loading: false
    }
  },
  methods: {
    create() {
      window.text = this.text
      this.$parent.$parent.$parent.create()
    }
  }
}
</script>

<style scoped>
.content-main {
  padding: 1rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
<style>
.input {
  flex-grow: 1;
  padding-bottom: 1rem;
}

.input textarea.ivu-input {
  height: 100% !important;
}
</style>
