
<script>
import text from "@/views/content/display/components/text";
export default {
  name: "entity",
  props: {
    segment: {
      type: Object,
      required: true
    },
    first: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'u-text': text
  },
  render(createElement, context) {
    let style = {}
    if(this.first){
      let deep = this.calcDeep(this.segment, 0)
      style.marginBottom = `calc(${deep}rem + 0.45rem)`
    }
    return createElement(
      'div',
      {
        class: {
          entity: true,
          last: this.all(this.segment.segment, i => i.type === 'text'),
        },
        style: {
          ...style,
          color: this.segment.entity.color,
        },
        attrs: {
          text: this.segment.entity.type
        }
      },
      this.segment.segment.map(i => this.createElement(createElement, i))
    )
  },
  methods: {
    all(segments, call){
      let r = true
      segments.forEach(i => r = r && call(i))
      return r
    },
    createElement(h, segment){
      if(segment.type === 'text')
        return h(
          'u-text',
          {
            props: {
              segment
            }
          }
        )
      return h(
        'div',
        {
          class: {
            entity: true,
            last: this.all(segment.segment, i => i.type === 'text'),
          },
          style: {
            color: segment.entity.color,
            text: segment.entity.type
          },
          attrs: {
            text: segment.entity.type
          }
        },
        segment.segment.map(i => this.createElement(h, i))
      )
    },
    calcDeep(tree, deep){
      if(tree.type === 'entity'){
        return Math.max(...tree.segment.map(i => this.calcDeep(i, deep + 1)))
      }
      return deep
    }
  }
}
</script>

<style scoped>
.entity {
  margin-left: .25rem;
  margin-right: .25rem;
  min-width: 2rem;
  line-height: 1rem;
  padding: 0 0 .55rem 0;
  text-align: center;
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  justify-content: center;
}
.entity.last{
  padding: 0;
}
.entity::after {
  content: attr(text);
  font-size: .75rem;
  width: 100%;
  position: absolute;
  border-top-width: 2px;
  border-top-style: solid;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(-100% - 5px);
}
</style>
