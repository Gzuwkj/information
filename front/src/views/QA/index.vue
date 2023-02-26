<template>
  <div class="QA">
    <div class="Menu">
      <Menu mode="vertical" active-name="1" @on-select="searchSelect">
        <Menu-item name="1">
          新闻数据集
        </Menu-item>
        <Menu-item name="2">
          生物数据集
        </Menu-item>
      </Menu>
    </div>
    <div class="content">
      <div v-if="select==='1'" class="question">
        <div style="height: 90%">
          <div  class="customer">
            <img src="./profile.jpg" width="42" height="42" class="imgSet">
            <Card :bordred="false" style="width: 100%;display: flex">
              <p>无边框内容填充无边框内容填充无边框内容填充无边框内容。无边框内容填充无边框内容填充无边框内容填充无边框内容。无边框内容填充无边框内容填充无边框内容填充无边框内容。</p>
            </Card>
          </div>
          <div class="answer">
            <img src="@/assets/logo.png" width="42" height="42" class="imgSet">
            <Card :bordred="false" style="width: 100%;display: flex;background: #F7F7F8">
              <p>无边框内容填充无边框内容填充无边框内容填充无边框内容。无边框内容填充无边框内容填充无边框内容填充无边框内容。无边框内容填充无边框内容填充无边框内容填充无边框内容。</p>
            </Card>
          </div>
        </div>

        <div style="display: flex;margin-left: 10%">
          <Input v-model="question" type="textarea" placeholder="请输入问题" style="width: 80%;">
          </Input>
          <Button type="primary" style="width: 60px;height: 30px;margin-left: 15px">发送</Button>
        </div>
      </div>
      <div v-if="select==='2'">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "index",
  data() {
    return {
      question: '',
      select: '1',
    }
  },
  methods: {
    searchSelect(id) {
      this.select = id
    }
  }
}

</script>

<style scoped>
.QA {
  display: flex;
  height: 100%;
}

.Menu {
  background: white;
  height: auto;
  margin-right: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
.imgSet{
  margin: 5px;
}
.content {
  background: white;
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}

.question {
  width: 100%;
}
.customer{
  border:1px solid #DEDEDF;
  display: flex;
  padding: 20px 10% 20px 10%
}
.answer{
  border:1px solid #DEDEDF;
  display: flex;
  padding: 20px 10% 20px 10%;
  background: #F7F7F8;
}
</style>
