<template>
  <div style="width: 80%">
    <Row>
      <h4 class="padding-bottom">关系抽取模型</h4>
      <Cascader :data="relationModel"></Cascader>
    </Row>
    <Row class="padding-top">
      <h4 class="padding-bottom">实体抽取模型</h4>
      <Cascader :data="entityModel"></Cascader>
    </Row>
    <Row class="padding-top">
      <h4 class="padding-bottom">事件抽取模型</h4>
      <Cascader :data="eventModel"></Cascader>
    </Row>
  </div>
</template>

<script>
export default {
  name: "newsdataset",
  data() {
    return {
      relationModel: [
        {
          value: 'zhejiang',
          label: '模型1',
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
          label: '模型2',
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
      entityModel: [
        {
          value: 'zhejiang',
          label: '模型1',
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
          label: '模型2',
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
          label: '模型1',
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
          label: '模型2',
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
  }
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
