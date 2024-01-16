<template>
  <div class="content-main">
    <Input class="input" type="textarea" :rows="4" v-model="text" placeholder="请输入抽取原始文本"></Input>
    <Input class="input2" placeholder="请给出头实体" v-model="head"></Input>
    <Input class="input2" placeholder="请给出尾实体" v-model="tail"></Input>
    <Row>
      <Button v-if="this.waiting===false" type="primary" :loading="loading" shape="circle" icon="ios-search"
              @click="create">构建
      </Button>
      <Button v-else disabled="disabled" type="primary" :loading="loading" shape="circle" icon="ios-search"
              @click="create">构建
      </Button>
    </Row>
  </div>
</template>
<script>

export default {
  name: "index",
  data() {
    return {
      waiting: false,
      text: '',
      head: undefined,
      tail: undefined,
      loading: false
    }
  },
  methods: {
    create() {
      window.text = this.text
      window.head = this.head
      window.tail = this.tail
      this.$parent.$parent.$parent.create()
    },
    setWaiting() {
      this.waiting = !this.waiting
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

.input2 {
  padding-bottom: 1rem;
}

.input textarea.ivu-input {
  height: 100% !important;
}
</style>
