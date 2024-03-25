<template>
  <div id="OdfMess" style="width: 100%;height: 100%;float: right"></div>

</template>

<script>
export default {
  name: "eventShow",
  created() {
  },
  mounted() {
    this.drawEcharts()
  },
  methods: {
    createEvent(eventInfo) {
      let id = 0
      let datas = []
      let linkmes = []
      eventInfo.forEach(function(item) {
        console.log(item)
        datas.push(
          {
            name: item['event_list'][0]['event_type'],
            id: id,
            symbolSize: 120,
            // draggable: true,//加上这句话后不可点击
            category: 0,
            itemStyle: {
              normal: {
                borderColor: '#04f2a7',
                borderWidth: 6,
                shadowBlur: 1,
                shadowColor: '#04f2a7',
                color: '#001c43',
              }
            },
          },
        )
        id += 1
      });
      eventInfo.forEach(function(item,index) {
        for (let i = 0; i < item['event_list'][0]['arguments'].length; i++) {
          datas.push(
            {
              name: item['event_list'][0]['arguments'][i]['role'] + ': ' + item['event_list'][0]['arguments'][i]['argument'],
              id: id,
              symbolSize: 100,
              category: 2,
              itemStyle: {
                normal: {
                  borderColor: '#82dffe',
                  borderWidth: 4,
                  shadowBlur: 1,
                  shadowColor: '#04f2a7',
                  color: '#001c43',
                }
              }
            }
          )
          linkmes.push(
            {
              source: index,
              target: id,
              value: 'DNA'
            }
          )
          id += 1
        }
      })
      this.datas = datas
      this.linkmes = linkmes
      console.log(this.datas)
      console.log(this.linkmes)
      let option = {
        backgroundColor: 'white',
        tooltip: {},
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
        animation:true,
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        color: ['#83e0ff', '#45f5ce', '#b158ff'],
        series: [{
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 5000,
            edgeLength: 50
          },
          roam: true,
          label: {
            normal: {
              fontSize: 18,
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
          categories: [{
            name: '0'
          }, {
            name: '1'
          }, {
            name: '2'
          }]
        }]
      }
      this.myChart.setOption(option);
    },
    drawEcharts() {
      console.log(this.datas)
      console.log(this.linkmes)
      this.myChart = this.$echarts.init(document.getElementById('OdfMess'));
      let option = {
        backgroundColor: 'white',
        tooltip: {},
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
          force: {
            repulsion: 5000,
            edgeLength: 50
          },
          roam: true,
          label: {
            normal: {
              fontSize: 18,
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
          categories: [{
            name: '0'
          }, {
            name: '1'
          }, {
            name: '2'
          }]
        }]

      }
      this.myChart.setOption(option);
      let that = this
      // myChart.on('click', function (params) {
      //   if (params.name != null) {
      //     //let mes=params.name.replace(/\d+/g,"")
      //     console.log(params);
      //     if (params.name == "话题分析") {
      //       //更新节点
      //       that.datas.push({
      //         name: '图书分析a',
      //         symbolSize: 80,
      //         category: 2,
      //         itemStyle: {
      //           normal: {
      //             borderColor: '#82dffe',
      //             borderWidth: 4,
      //             shadowBlur: 1,
      //             shadowColor: '#04f2a7',
      //             color: '#001c43'
      //           }
      //         }
      //       });
      //       //更新边的关系
      //       that.linkmes.push({
      //         source: '图书分析a',
      //         target: '话题分析'
      //       });
      //       //重新画图
      //       myChart.setOption({
      //         series: [{
      //           data: that.datas,
      //           links: that.linkmes
      //         }]
      //       });
      //
      //     }
      //   }
      // })


    }
  },
  data() {
    return {
      datas: [
        {
          name: '事件类型：司法行为-起诉',
          id: 1,
          symbolSize: 120,
          // draggable: true,//加上这句话后不可点击
          category: 0,
          itemStyle: {
            normal: {
              borderColor: '#04f2a7',
              borderWidth: 6,
              shadowBlur: 1,
              shadowColor: '#04f2a7',
              color: '#001c43',
            }
          },
        },
        {
          name: '事件类型：司法行为-起诉',
          id: 2,
          symbolSize: 120,
          // draggable: true,//加上这句话后不可点击
          category: 0,
          itemStyle: {
            normal: {
              borderColor: '#04f2a7',
              borderWidth: 6,
              shadowBlur: 1,
              shadowColor: '#04f2a7',
              color: '#001c43',
            }
          },
        }, {
          name: '时间：昨天',
          symbolSize: 100,
          itemStyle: {
            normal: {
              borderColor: '#04f2a7',
              borderWidth: 4,
              shadowBlur: 1,
              shadowColor: '#04f2a7',
              color: '#001c43',
            }
          },
          category: 1,
        },
        {
          name: '原告：隔壁家阿姨',
          symbolSize: 100,
          category: 2,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 1,
              shadowColor: '#04f2a7',
              color: '#001c43',
            }
          },

        },
        {
          name: '被告：村头王叔家的儿子',
          symbolSize: 100,
          category: 2,
          itemStyle: {
            normal: {
              borderColor: '#82dffe',
              borderWidth: 4,
              shadowBlur: 1,
              shadowColor: '#04f2a7',
              color: '#001c43',
            }
          },
        }
      ],
      linkmes: [{
        source: 1,
        target: '时间：昨天',
        value: 'DNA'
      }, {
        source: 1,
        target: '原告：隔壁家阿姨',
        value: 'DNA'
      },

        {
          source: 1,
          target: '被告：村头王叔家的儿子',
          value: 'DNA'
        }
      ] //连接的信息
    }
  },
}
</script>

<style scoped>

</style>
