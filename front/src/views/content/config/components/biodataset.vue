<template>
  <div style="width: 80%">
    <Row>
      <h4 class="padding-bottom">关系抽取模型</h4>
      <Cascader :data="relationModel"
                @on-change="(value, selectedData) => handleChange(value,selectedData)"></Cascader>
    </Row>
    <Row class="padding-top">
      <h4 class="padding-bottom">实体抽取模型</h4>
      <Cascader :data="entityModel" @on-change="(value, selectedData) => handleChange(value,selectedData)"
                id="entity"></Cascader>
    </Row>
    <Row class="padding-top">
      <h4 class="padding-bottom">事件抽取模型</h4>
      <Cascader :data="eventModel" @on-change="(value, selectedData) => handleChange(value, selectedData)"
                id="event"></Cascader>
    </Row>
  </div>
</template>

<script>
import {getNerModelsList} from "@/api";


export default {
  name: "newsdataset",
  created() {
    this.getList();
  },
  mounted() {

  },
  methods: {
    handleChange(value, selectedData) {
      console.log(selectedData[0].value)
      if(selectedData[0].class==='relation')
        window.relationAPI = selectedData[0].value
      else if(selectedData[0].class==='event')
        window.eventAPI = selectedData[0].value
      else
        window.entityAPI = selectedData[0].value
    },
    getList() {
      this.loading = true;
      let params = {
        dataset: '0'
      }
      getNerModelsList(params).then(response => {
        let relationModel = []
        let entityModel = []
        let eventModel = []
        console.log(response)
        for (let i = 0; i < response.rel_model_list1.length; i++) {
          relationModel.push({
            value: response.rel_model_list1[i].id,
            label: response.rel_model_list1[i].name,
            class: 'relation'
          })
        }
        for (let i = 0; i < response.ner_model_list1.length; i++) {
          entityModel.push({
            value: response.ner_model_list1[i].id, label: response.ner_model_list1[i].name,
            class: 'entity'
          })
        }
        for (let i = 0; i < response.eve_model_list1.length; i++) {
          eventModel.push({
            value: response.eve_model_list1[i].id, label: response.eve_model_list1[i].name,
            class: 'event'
          })
        }
        this.relationModel = relationModel
        this.eventModel = eventModel
        this.entityModel = entityModel
      })
    },
  },
  data() {

    return {
      select: 'asd',
      relationModel: [],
      entityModel: [
        {
          value: 'zhejiang',
          label: '模型3',
          // children: [{
          //   value: 'hangzhou',
          //   label: '杭州',
          //   children: [{
          //     value: 'xihu',
          //     label: '西湖'
          //   }]
          // }]
        },
        {
          value: 'jiangsu',
          label: '模型4',
          // children: [{
          //   value: 'nanjing',
          //   label: '南京',
          //   children: [{
          //     value: 'zhonghuamen',
          //     label: '中华门'
          //   }]
          // }]
        }
      ],
      eventModel: [
        {
          value: 'zhejiang',
          label: '模型5',
          // children: [{
          //   value: 'hangzhou',
          //   label: '杭州',
          //   children: [{
          //     value: 'xihu',
          //     label: '西湖'
          //   }]
          // }]
        },
        {
          value: 'jiangsu',
          label: '模型6',
          // children: [{
          //   value: 'nanjing',
          //   label: '南京',
          //   children: [{
          //     value: 'zhonghuamen',
          //     label: '中华门'
          //   }]
          // }]
        }
      ]
    }
  },

}
</script>

<style scoped>
.padding-bottom {
  padding-bottom: .5rem
}

.padding-top {
  padding-top: 1rem
}
</style>
