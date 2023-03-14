<template>

  <Row class="row bg-white" style="height: 30rem" :gutter="16">
    <Tabs :animated="false" style="height: 100%;display: flex;flex-direction: column" value="name1"
          cust-content-class="tabs-container">
      <Tab-pane label="实体抽取情况" name="name1">
        <paragraph v-if="waiting===false" v-for="(p, idx) in entityInfo" :paragraph="p" :key="idx"/>
        <div v-else class="demo-spin-container">
          <Spin size="large" fix></Spin>
        </div>
      </Tab-pane>
      <Tab-pane label="关系抽取情况" name="name2">
        <paragraph v-if="waiting===false" v-for="(p, idx) in relationInfo" :paragraph="p" :key="idx"/>
        <div v-else class="demo-spin-container">
          <Spin size="large" fix></Spin>
        </div>
      </Tab-pane>
      <Tab-pane label="事件抽取情况" name="name3">
        <paragraph v-if="waiting===false" v-for="(p, idx) in relationInfo" :paragraph="p" :key="idx"/>
        <div v-else class="demo-spin-container">
          <Spin size="large" fix></Spin>
        </div>
      </Tab-pane>
    </Tabs>
  </Row>
</template>

<script>
import paragraph from "@/views/content/display/components/paragraph";
import {getSentence} from "@/api";

export default {
  components: {
    paragraph,
  },

  data() {
    return {
      waiting: false,
      entityInfo: [],
      relationInfo: [],
      entityType2Color: {
        'ORG': '#9b59b6',
        'PER': '#3498db',
        'FAC': '#e67e22',
        'VEH': '#16a085',
        'LOC': '#c0392b',
        'WEA': '#8c7ae6',
        'GPE': '#e1b12c',
      },
      relationType2Color: {
        'ART': '#9b59b6',
        'GEN-AFF': '#3498db',
        'PER-SOC': '#e67e22',
        'PHYS': '#16a085',
        'PART-WHOLE': '#c0392b',
        'ORG-AFF': '#8c7ae6',
      }
    }
  },

  created() {
    window.waiting=false
    let text = `{"sentence": ["新", "华", "社", "兰", "州"], "ner": [{"index": [0, 3], "type": "ORG"}]}`
    const jsons = [
      JSON.parse(text),
      JSON.parse(`{"sentence": ["新", "华", "社", "兰", "州", "１", "２", "月", "２", "７", "日", "电", "记", "者", "来", "信", "：", "兰", "州", "室", "内", "泳", "馆", "为", "何", "闭", "门", "谢", "客", "新", "华", "社", "记", "者", "胡", "梅", "娟", "原", "本", "想", "靠", "冬", "季", "挣", "钱", "的", "兰", "州", "室", "内", "游", "泳", "馆"], "ner": [{"index": [0, 3], "type": "ORG"}, {"index": [3, 5], "type": "GPE"}, {"index": [12, 14], "type": "PER"}, {"index": [17, 23], "type": "ORG"}, {"index": [17, 19], "type": "GPE"}, {"index": [21, 23], "type": "ORG"}, {"index": [29, 32], "type": "ORG"}, {"index": [29, 34], "type": "PER"}, {"index": [32, 34], "type": "PER"}, {"index": [34, 37], "type": "PER"}, {"index": [37, 53], "type": "ORG"}, {"index": [46, 48], "type": "GPE"}, {"index": [50, 53], "type": "ORG"}]}`),
      JSON.parse(`{"sentence": ["新", "华", "社", "哈", "瓦", "那", "１", "１", "月", "３", "日", "电", "（", "记", "者", "郑", "建", "东", "）", "由", "法", "国", "足", "球", "甲", "级", "联", "赛", "委", "员", "会", "主", "席", "热", "拉", "尔", "·", "布", "吉", "安", "率", "领", "的", "足", "球", "代", "表", "团", "２", "日", "结", "束", "了", "对", "古", "巴", "为", "期", "６", "天", "的", "访", "问"], "ner": [{"index": [0, 3], "type": "ORG"}, {"index": [3, 6], "type": "GPE"}, {"index": [13, 15], "type": "PER"}, {"index": [15, 18], "type": "PER"}, {"index": [19, 48], "type": "PER"}, {"index": [20, 33], "type": "PER"}, {"index": [20, 31], "type": "ORG"}, {"index": [20, 22], "type": "GPE"}, {"index": [28, 31], "type": "ORG"}, {"index": [31, 33], "type": "PER"}, {"index": [33, 40], "type": "PER"}, {"index": [45, 48], "type": "PER"}, {"index": [54, 56], "type": "GPE"}]}`),
      JSON.parse(`{"sentence": ["台", "北", "县", "警", "方", "上", "午", "抓", "到", "了", "一", "名", "嫌", "犯", "他", "假", "借", "要", "借", "厕", "所", "侵", "入", "被", "害", "人", "的", "家", "中", "抢", "走", "提", "包", "而", "且", "还", "强", "奸", "被", "害", "人"], "ner": [{"index": [0, 5], "type": "ORG"}, {"index": [0, 3], "type": "GPE"}, {"index": [3, 5], "type": "ORG"}, {"index": [10, 14], "type": "PER"}, {"index": [12, 14], "type": "PER"}, {"index": [14, 15], "type": "PER"}, {"index": [19, 21], "type": "FAC"}, {"index": [23, 28], "type": "FAC"}, {"index": [23, 26], "type": "PER"}, {"index": [27, 28], "type": "FAC"}, {"index": [38, 41], "type": "PER"}]}`),
      JSON.parse(`{"sentence": ["装", "部", "会", "将", "进", "行", "大", "合", "并", "并", "且", "改", "名", "分", "别", "是", "：", "大", "藏", "省", "改", "名", "为", "财", "务", "省", ";", "文", "部", "省", "和", "科", "技", "厅", "合", "并", "为", "文", "部", "科", "学", "省", ";", "厚", "生", "省", "和", "劳", "动", "省", "合", "并", "为", "厚", "生", "劳", "动", "省", ";", "通", "产", "省", "改", "名", "为", "经", "济", "产", "业", "省", ";", "建", "设", "省", "、", "运", "输", "省", "、", "国", "土", "经", "营", "和", "北", "海", "道", "开", "发", "厅", "合", "并", "为", "国", "土", "交", "通", "省", ";", "自", "治", "省", "、", "邮", "政", "省", "和", "总", "务", "厅", "合", "并", "成", "总", "务", "省", ";", "军", "舰", "重", "建", "委", "员", "会", "改", "称", "金", "融", "特", "任", "大", "臣"], "ner": [{"index": [0, 3], "type": "ORG"}, {"index": [17, 20], "type": "ORG"}, {"index": [23, 26], "type": "ORG"}, {"index": [27, 30], "type": "ORG"}, {"index": [31, 34], "type": "ORG"}, {"index": [37, 42], "type": "ORG"}, {"index": [43, 46], "type": "ORG"}, {"index": [47, 50], "type": "ORG"}, {"index": [53, 58], "type": "ORG"}, {"index": [59, 62], "type": "ORG"}, {"index": [65, 70], "type": "ORG"}, {"index": [71, 74], "type": "ORG"}, {"index": [75, 78], "type": "ORG"}, {"index": [79, 83], "type": "ORG"}, {"index": [84, 90], "type": "ORG"}, {"index": [93, 98], "type": "ORG"}, {"index": [99, 102], "type": "ORG"}, {"index": [103, 106], "type": "ORG"}, {"index": [107, 110], "type": "ORG"}, {"index": [113, 116], "type": "ORG"}, {"index": [117, 124], "type": "PER"}, {"index": [126, 132], "type": "PER"}, {"index": [128, 132], "type": "PER"}]}`),
      JSON.parse(`{"sentence": ["藤", "森", "任", "命", "原", "内", "政", "部", "长", "查", "孔", "接", "替", "陆", "军", "上", "将", "比", "利", "亚", "努", "埃", "瓦", "为", "参", "谋", "长", "联", "席", "会", "议", "主", "席", "和", "陆", "军", "司", "令", ";", "海", "军", "少", "将", "拉", "莫", "斯", "接", "替", "伊", "瓦", "塞", "纳", "少", "将", "出", "任", "海", "军", "司", "令", ";", "空", "军", "上", "将", "巴", "拉", "雷", "索", "接", "替", "贝", "略", "上", "将", "的", "空", "军", "司", "令", "之", "职", ";", "警", "察", "总", "长", "迪", "安", "德", "拉", "斯", "补", "任", "内", "政", "部", "长"], "ner": [{"index": [0, 2], "type": "PER"}, {"index": [4, 9], "type": "PER"}, {"index": [7, 9], "type": "PER"}, {"index": [9, 11], "type": "PER"}, {"index": [13, 17], "type": "PER"}, {"index": [13, 15], "type": "ORG"}, {"index": [15, 17], "type": "PER"}, {"index": [17, 23], "type": "PER"}, {"index": [24, 33], "type": "PER"}, {"index": [24, 27], "type": "PER"}, {"index": [31, 33], "type": "PER"}, {"index": [34, 38], "type": "PER"}, {"index": [34, 36], "type": "ORG"}, {"index": [36, 38], "type": "PER"}, {"index": [39, 43], "type": "PER"}, {"index": [39, 41], "type": "ORG"}, {"index": [41, 43], "type": "PER"}, {"index": [43, 46], "type": "PER"}, {"index": [48, 54], "type": "PER"}, {"index": [48, 52], "type": "PER"}, {"index": [52, 54], "type": "PER"}, {"index": [56, 60], "type": "PER"}, {"index": [56, 58], "type": "ORG"}, {"index": [58, 60], "type": "PER"}, {"index": [61, 65], "type": "PER"}, {"index": [61, 63], "type": "ORG"}, {"index": [63, 65], "type": "PER"}, {"index": [65, 69], "type": "PER"}, {"index": [71, 75], "type": "PER"}, {"index": [71, 73], "type": "PER"}, {"index": [73, 75], "type": "PER"}, {"index": [76, 80], "type": "PER"}, {"index": [76, 78], "type": "ORG"}, {"index": [78, 80], "type": "PER"}, {"index": [83, 87], "type": "PER"}, {"index": [85, 87], "type": "PER"}, {"index": [87, 92], "type": "PER"}, {"index": [94, 98], "type": "PER"}, {"index": [96, 98], "type": "PER"}]}`),
    ]
    const relationJson = [
      JSON.parse(`{"tokens": ["No,", "because", "I", "am", "in", "an", "area", "which", "I", "don't", "know", "where", "the", "enemy", "could", "be", "and", "I", "might", "get", "to", "the", "airplane,", "by", "the", "time", "I", "get", "out", "of", "the", "airplane", "I'm", "thinking", "the", "same", "way"], "e1": { "s": 2, "e": 3, "text": "I", "type": "PER"}, "e2": {"s": 21, "e": 23, "text": "the airplane", "type": "VEH"}, "relation": "ART"}`),
      JSON.parse(`{"tokens": ["CNN's", "Wolf", "Blitzer", "reports", "according", "to", "an", "eyewitness,", "a", "bomb", "has", "hit", "central", "Baghdad", "only", "a", "few", "hundred", "meters", "from", "the", "Palestine", "Hotel"], "e1": {"text": "an eyewitness", "s": 40, "e": 42, "type": "PER"}, "e2": {"text": "central Baghdad", "s": 70, "e": 72, "type": "LOC"}, "relation": "PHYS"}`),
      JSON.parse(`{"tokens": ["Corpsmen", "quickly", "take", "patients", "by", "ambulance", "away", "from", "the", "blowing", "sand", "to", "a", "triage", "tent"], "e1": {"text": "Corpsmen", "s": 0, "e": 1, "type": "PER"}, "e2": {"text": "a triage tent", "s": 74, "e": 77, "type": "FAC"}, "relation": "PHYS"}`),
    ]
    this.entityInfo = jsons.map(i => this.processE(i))
    this.relationInfo = relationJson.map(i => this.processR(i))
  },
  computed: {},
  methods: {
    test() {
      let params = {
        api_id: [window.entityAPI, window.relationAPI, window.eventAPI],
        text: window.text
      }
      this.waiting=true
      this.$parent.setWaiting()
      getSentence(params).then(response => {
        this.waiting=false
        this.$parent.setWaiting()
        console.log(response)
        let entityJson = {sentence: response.ner_sentence, ner: response.ner[0]}
        console.log(entityJson)
        let jsons = [entityJson,]
        this.entityInfo = jsons.map(i => this.processE(i))
        console.log(this.entityInfo)
        let relationJson = {
          tokens: response.relation_sentence,
          e1: response.e1[0],
          e2: response.e2,
          relation: response.relation
        }
        jsons = [relationJson,]
        this.relationInfo = jsons.map(i => this.processR(i))


      })
      // let text = `{"sentence": ["新", "华", "社", "兰", "州"], "ner": [{"index": [0, 3], "type": "ORG"}]}`
      // text=JSON.parse(text)
      // console.log('人工',text)
      // let jsons = [JSON.parse(text)]
      // this.entityInfo = text.map(i => this.processE(i))
    },

    tokens2sentence(tokens) {
      return tokens.join(' ')
    },
    processE(data) {
      const {sentence, ner} = data
      const sortedNer = ner.sort((a, b) => {
        if (a.index[0] !== b.index[0])
          return a.index - b.index[0]
        return b.index[1] - a.index[1]
      })
      const ret = {
        text: sentence.join(''),
        segment: []
      }
      let start = 0, idx = {idx: 0}
      let current = null
      while (idx.idx < sortedNer.length) {
        current = sortedNer[idx.idx]
        if (start !== current.index[0])
          ret.segment.push({
            text: this.tokens2sentence(sentence.slice(start, current.index[0])),
            type: 'text'
          })
        ret.segment.push(this.process(sentence, sortedNer, idx, current.index[0], current.index[1]))
        start = current.index[1]
      }
      if (start !== sentence.length)
        ret.segment.push({
          text: this.tokens2sentence(sentence.slice(start, sentence.length)),
          type: 'text'
        })
      return ret
    },
    process(sentence, ner, idx, start, end) {
      const now = ner[idx.idx]
      const entity = {
        type: 'entity',
        entity: {
          type: now.type,
          color: this.entityType2Color[now.type],
        },
        segment: []
      }
      idx.idx += 1
      while (idx.idx < ner.length) {
        let current = ner[idx.idx]
        if (!(start <= current.index[0] && current.index[1] <= end))
          break
        if (start !== current.index[0])
          entity.segment.push({
            text: this.tokens2sentence(sentence.slice(start, current.index[0])),
            type: 'text'
          })
        entity.segment.push(this.process(sentence, ner, idx, current.index[0], current.index[1]))
        start = current.index[1]
      }
      if (start !== end) {
        entity.segment.push({
          text: this.tokens2sentence(sentence.slice(start, end)),
          type: 'text'
        })
      }
      return entity
    },
    processR(data) {
      let rdata = {
        sentence: data.tokens,
        relation: data.relation,
        ner: [
          {
            index: [data.e1.s, data.e1.e],
            type: data.e1.type,
          },
          {
            index: [data.e2.s, data.e2.e],
            type: data.e2.type,
          },
        ]
      }
      let infodata = this.processE(rdata)
      infodata.segment.push({
        type: 'entity',
        entity: {
          type: '',
          color: this.relationType2Color[rdata.relation],
        },
        segment: [
          {
            text: rdata.relation,
            type: 'text'
          }
        ]
      })
      return infodata
    }
  }
}
</script>

<style scoped>
.row {
  margin-bottom: 1rem;
}

.bg-white {
  background-color: #fff;
  padding: 1.25rem .5rem 0 .5rem;
  border-radius: .5rem;
  border: 1px solid rgba(0, 0, 0, .1);
}

h4 {
  margin-bottom: .5rem;
}

</style>
<style>
.tabs-container {
  height: 0;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
  padding-bottom: .5rem;
}

.tabs-container .ivu-tabs-tabpane {
  height: 100%;
  overflow-y: auto;
}

.demo-spin-container {
  display: inline-block;
  width: 100%;
  height: 300px;
  overflow-y: auto;
  position: relative;
}
</style>
