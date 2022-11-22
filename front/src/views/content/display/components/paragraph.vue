<script>
import entity from "@/views/content/display/components/entity";
import text from "@/views/content/display/components/text";
export default {
  name: "paragraph",
  props: {
    paragraph: {
      type: Object,
      required: true
    }
  },
  components: {
    entity,
    'u-text': text
  },
  render(createElement, context) {
    return createElement(
      'p',
      {
        class: {
          paragraph: true
        }
      },
      this.paragraph.segment.map(
        segment => {
          if(segment.type === 'text')
            return createElement(
              'u-text',
              {
                props: {
                  segment
                }
              }
            )
          return createElement(
            entity,
            {
              props: {
                segment,
                first: true
              }
            },
            []
          )
        }
      )
    )
  },
}
</script>

<style scoped>
.paragraph {
  display: flex;
  padding: .25rem .25rem 1rem .75rem;
  background: #ecf0f1;
  border-radius: 7px;
  margin-bottom: .25rem;
  flex-wrap: wrap;
  align-items: baseline;
}

</style>
