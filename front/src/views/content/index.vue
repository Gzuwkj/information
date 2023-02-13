<template>
  <div class="container" >
    <Row class="row bg-white" style="z-index: 10;height: 23rem" :gutter="24">
      <Col class="row" span="10">
        <config></config>
      </Col>
      <Col class="row" span="14">
        <t-input></t-input>
      </Col>
    </Row>
    <display ref="importValue"></display>
    <Row class="row bg-white " style="height: 40rem" :gutter="16">
      <Tabs style="height: 100%" class="d-flex" value="name1" cust-content-class="height-100">
        <Tab-pane label="嵌套实体联系图" name="name1">
          <EntityNestingDiagram />
        </Tab-pane>
      </Tabs>
    </Row>
  </div>
</template>

<script>
import config from '@/views/content/config'
import input from '@/views/content/input'
import display from '@/views/content/display'
import EntityNestingDiagram from "@/views/content/display/components/EntityNestingDiagram";
export default {
  name: "index",
  components: {
    config,
    't-input': input,
    display,
    EntityNestingDiagram
  },
  methods:{
    create(){
      this.$refs.importValue.test()
    }

  }
}

</script>

<style  scoped>
.container{
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
}
.row{
  height: 100%;
  margin-bottom: 1rem;
}
.bg-white{
  background-color: #fff;
  padding: 1.25rem .5rem 0 .5rem;
  border-radius: .5rem;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}
.spliter{
  position: relative;
}
.spliter::after{
  position: absolute;
  content: "";
  height: 60%;
  padding: 0;
  top:50%;
  transform: translateY(-50%);
  right: -5px;
  border-left: 1px solid rgba(0, 0, 0, .25);
}
</style>

<style>
.d-flex{
  display: flex;
  flex-direction: column;
}
.height-100{
  height: 0;
  flex-grow: 1;
  flex-shrink: 1;
}
.height-100 .ivu-tabs-tabpane{
  height: 100%;
}
</style>
