<template>
  <Tabs :animated="false">
    <Tab-pane label="新闻数据集">
      <newsdataset></newsdataset>
    </Tab-pane>
    <Tab-pane label="生物数据集">
      <biodataset></biodataset>
    </Tab-pane>
  </Tabs>
</template>

<script>
import newsdataset from '@/views/content/config/components/newsdataset'
import biodataset from "@/views/content/config/components/biodataset";
import {getNerModelsList} from "@/api";

export default {
  name: "index",
  components: {
    newsdataset,
    biodataset
  },
  created() {
  },
  methods:{
  }
}

</script>

<style>
.ivu-tabs {
  overflow: visible;
}
</style>
