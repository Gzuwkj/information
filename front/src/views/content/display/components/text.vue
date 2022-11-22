
<script>
export default {
  name: "text",
  props: {
    segment: {
      type: Object,
      required: true
    }
  },
  render(createElement, context) {
    return createElement(
      'span',
      {
        class: {
          'text': true
        }
      },
      [
        this.segment.text
      ]
    )
  }
}
</script>

<style scoped>
.text{
  flex-shrink: 0;
  flex-grow: 0;
}
</style>
