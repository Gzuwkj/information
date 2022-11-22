<template>
  <div id="OdfMes" style="width: 100% ;height:100%"></div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具 js，第三方插件 js，json 文件，图片文件等等）
// 例如：import  《组件名称》  from '《组件路径》 ';


export default {
  // import 引入的组件需要注入到对象中才能使用
  components: {},
  props: {},
  data () {
    // 这里存放数据
    return {
      datas : [
        {
          name: '增值税',
          symbolSize: 60,
          draggable: true,//加上这句话后不可点击
          category: 0, des: 'texttexttexttexttexttexttexttexttexttexttexttexttext',
          itemStyle: {
            normal: {
              borderColor: '#04f2a7',
              borderWidth: 6,
              shadowBlur: 20,
              shadowColor: '#04f2a7',
              color: '#d2881c',
            }
          }
        },
        {
          name: '增值税事件',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#da9a21',
            }
          },

        },
        {
          name: '增值税事件1',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#da9a21',
            }
          },

        },
        {
          name: '增值税事件2',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#da9a21',
            }
          },

        },
        {
          name: '增值税事件3',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#da9a21',
            }
          },

        },
        {
          name: '增值税事件4',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#da9a21',
            }
          },

        },
        {
          name: '增值税事件5',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#da9a21',
            }
          },

        },
        {
          name: '增值税事件6',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#04f2a7',
              color: '#da9a21',
            }
          },

        },
        {
          name: '消费税',
          symbolSize: 60,
          draggable: true,//加上这句话后不可点击
          category: 0, des: 'texttexttexttexttexttexttexttexttexttexttexttexttext',
          itemStyle: {
            normal: {
              borderColor: '#d41ae1',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#b406ab',
              color: '#04434f',
            }
          }
        },
        {
          name: '消费税事件',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#d41ae1',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#b406ab',
              color: '#04434f',
            }
          },

        },
        {
          name: '消费税事件1',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#d41ae1',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#b406ab',
              color: '#04434f',
            }
          },

        },
        {
          name: '消费税事件2',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#d41ae1',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#b406ab',
              color: '#04434f',
            }
          },

        },
        {
          name: '消费税事件3',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#d41ae1',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#b406ab',
              color: '#04434f',
            }
          },

        },
        {
          name: '消费税事件4',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#d41ae1',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#b406ab',
              color: '#04434f',
            }
          },

        },
        {
          name: '消费税事件5',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#d41ae1',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#b406ab',
              color: '#04434f',
            }
          },

        },
        {
          name: '消费税事件6',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#d41ae1',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#b406ab',
              color: '#04434f',
            }
          },

        },
        {
          name: '关税',
          symbolSize: 60,
          draggable: true,//加上这句话后不可点击
          category: 0, des: 'texttexttexttexttexttexttexttexttexttexttexttexttext',
          itemStyle: {
            normal: {
              borderColor: '#e3da35',
              borderWidth: 6,
              shadowBlur: 20,
              shadowColor: '#e3da35',
              color: '#224bd3',
            }
          }
        },
        {
          name: '关税事件',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#e3da35',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#e3da35',
              color: '#224bd3',
            }
          },

        },
        {
          name: '关税事件1',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#e3da35',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#e3da35',
              color: '#224bd3',
            }
          },

        },
        {
          name: '关税事件2',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#e3da35',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#e3da35',
              color: '#224bd3',
            }
          },

        },
        {
          name: '关税事件3',
          symbolSize: 40,
          draggable: true,
          category: 1,
          itemStyle: {
            normal: {
              borderColor: '#e3da35',
              borderWidth: 4,
              shadowBlur: 10,
              shadowColor: '#e3da35',
              color: '#224bd3',
            }
          },

        },




      ],
      linkmes :[{
        source: '增值税',
        target: '增值税事件'
      },{
        source: '增值税',
        target: '增值税事件1'
      },
        {
          source: '增值税',
          target: '增值税事件2'
        },
        {
          source: '增值税',
          target: '增值税事件3'
        },
        {
          source: '增值税',
          target: '增值税事件4'
        },
        {
          source: '增值税',
          target: '增值税事件5'
        },
        {
          source: '增值税',
          target: '增值税事件6'
        },
        {
          source: '消费税',
          target: '消费税事件'
        },
        {
          source: '消费税',
          target: '消费税事件1'
        },
        {
          source: '消费税',
          target: '消费税事件2'
        },
        {
          source: '消费税',
          target: '消费税事件3'
        },
        {
          source: '消费税',
          target: '消费税事件4'
        },
        {
          source: '消费税',
          target: '消费税事件5'
        },
        {
          source: '消费税',
          target: '消费税事件6'
        },
        {
          source: '关税',
          target: '关税事件'
        },
        {
          source: '关税',
          target: '关税事件1'
        },
        {
          source: '关税',
          target: '关税事件2'
        },
        {
          source: '关税',
          target: '关税事件3'
        },

      ]
    }
  },
  // 计算属性 类似于 data 概念
  computed: {},
  // 监控 data 中的数据变化
  watch: {},
  // 方法集合
  methods: {
    drawChart() {
      var myChart = this.$echarts.init(document.getElementById('OdfMes'));
      let option;
      let categories=[]
      categories[0] = {
        name: '税务类别'
      }, categories[1] = {
        name: '税务例子'
      },
        option = {
          tooltip: {
            formatter: function (x) {
              return x.data.des;
            }
          },
          legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
              return a.name;
            })
          }],
          toolbox: {
            // 显示工具箱
            show: true,
            feature: {
              mark: {
                show: true
              },
              // 还原
              restore: {
                show: false
              },
              // 保存为图片
              saveAsImage: {
                show: false
              }
            }
          },
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          color: ['#83e0ff', '#45f5ce', '#b158ff'],
          series: [{
            type: 'graph',
            layout: 'force',
            emphasis: {
              itemStyle: {
                borderColor: 'black',
                borderWidth: 1,
                borderType: 'solid',
                symbolSize: 40,
              }},
            force: {
              repulsion: 300,
              edgeLength: 10
            },
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: this.datas,
            links: this.linkmes,
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 5,
                curveness: 0
              }
            },
            categories: categories,
          }]
        }
      myChart.setOption(option);
    }

  },
  mounted() {
    this.drawChart()
  },
  // 生命周期 - 创建完成（可以访问当前this 实例）
  setup () {
  },
  // 生命周期 - 挂载完成（可以访问 DOM 元素）
  onMounted () {
  },
  onBeforeMount () {
  }, // 生命周期 - 挂载之前
  onBeforeUpdate () {
  }, // 生命周期 - 更新之前
  onUpdated () {
  }, // 生命周期 - 更新之后
  onBeforeUnmount () {
  }, // 生命周期 - 销毁之前
  onUnmounted () {
  }, // 生命周期 - 销毁完成
  onErrorCaptured () {
  } // 如果页面有 keep-alive 缓存功能,这个函数会触发
}
</script>

<style scoped>
</style>

