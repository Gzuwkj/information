<template>
  <div style="width: 80%;height: 30rem">
    <Row class="padding-top">
      <h4 class="padding-bottom">实体抽取模型</h4>
      <Cascader v-model="searchEntityModel" :data="entityModel"
                id="entity"></Cascader>
    </Row>
    <Row>
      <h4 class="padding-bottom">关系抽取模型</h4>
      <Cascader v-model="searchRelationModel" :data="relationModel"></Cascader>
    </Row>
    <Row class="padding-top">
      <h4 class="padding-bottom">事件抽取模型</h4>
      <Cascader v-model="searchEventModel" :data="eventModel"
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
    Check() {
      if (this.searchEntityModel.length > 0 && this.searchRelationModel.length) {
        window.relationAPI = this.searchRelationModel[0]
        window.eventAPI = this.searchEventModel[0]
        window.entityAPI = this.searchEntityModel[0]
        return true
      }
      return false
    },
    getList() {
      this.loading = true;
      let params = {
        dataset: '1'
      }
      getNerModelsList(params).then(response => {
        let relationModel = []
        let entityModel = []
        let eventModel = []
        for (let i = 0; i < response.rel_model_list1.length; i++) {
          relationModel.push({
            value: response.rel_model_list1[i].id,
            label: response.rel_model_list1[i].name,
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
        this.entityModel = entityModel
        this.eventModel = eventModel
      })
    },
  },
  data() {

    return {
      searchRelationModel: [],
      searchEventModel: [],
      searchEntityModel: [],
      select: 'asd',
      relationModel: [{
        value: 'beijing',
        label: '北京',
        children: [
          {
            value: 'gugong',
            label: '故宫'
          },
          {
            value: 'tiantan',
            label: '天坛'
          },
          {
            value: 'wangfujing',
            label: '王府井'
          }
        ]
      }, {
        value: 'jiangsu',
        label: '江苏',
        children: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'fuzimiao',
                label: '夫子庙',
              }
            ]
          },
          {
            value: 'suzhou',
            label: '苏州',
            children: [
              {
                value: 'zhuozhengyuan',
                label: '拙政园',
              },
              {
                value: 'shizilin',
                label: '狮子林',
              }
            ]
          }
        ],
      }],
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
