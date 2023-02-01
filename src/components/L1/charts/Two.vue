<template>
  <div>
    <h2>vistor statistics</h2>
    <div id="charttwo" class="two" @click="onClick($event)"></div>
  </div>
</template>

<script lang='ts'>
import { link, url } from '@/request'
import { defineComponent, inject, onMounted, ref } from 'vue'

export default defineComponent ({
  name: 'Two',
  components: {},
  setup(props, ctx) {
    const echarts:any = inject("echarts")


    onMounted(async () => {
        const data: any = await link(url.charttwo, "GET")
        console.log(data)


        const chart = echarts.init(document.getElementById("charttwo"))
        chart.setOption({
          xAxis: {
            type: "category",
            data: data.day,
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: "black"
                }
            }
          },
          yAxis: {
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "black"
                }
            }
          },
          grid: {
            top: "3%",
            left: "2%",
            bottom: "3%",
            right: "6%",
            containLabel: true
          },
          tooltip: {

          },
          series: [
            {
              type: "line",
              name: "item1",
              data: data.num.item1,
              stack: "Total",
              smooth: true,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: "red"
                    },
                    {
                        offset: 0.5,
                        color: "blue"
                    },
                    {
                        offset: 1,
                        color: "black"
                    },
                ]),
              },
              lineStyle: {
                width: 0
              }
            },
            {
              type: "line",
              name: "item2",
              data: data.num.item2,
              stack: "Total",
              smooth: true,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: "rgb(0,221,255)"
                    },
                    {
                        offset: 0.5,
                        color: "rgb(168,21,25)"
                    },
                    {
                        offset: 1,
                        color: "rgb(127,21,5)"
                    },
                ]),
              },
              lineStyle: {
                width: 0
              }
            },
            {
              type: "line",
              name: "item3",
              data: data.num.item3,
              stack: "Total",
              smooth: true,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: "rgb(10,1,25)"
                    },
                    {
                        offset: 0.5,
                        color: "rgb(18,221,215)"
                    },
                    {
                        offset: 1,
                        color: "rgb(127,214,54)"
                    },
                ]),
              },
              lineStyle: {
                width: 0
              }
            },
            {
              type: "line",
              name: "item4",
              data: data.num.item4,
              smooth: true,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: "rgb(101,122,225)"
                    },
                    {
                        offset: 0.5,
                        color: "rgb(0,22,25)"
                    },
                    {
                        offset: 1,
                        color: "rgb(27,14,4)"
                    },
                ]),
              },
              lineStyle: {
                width: 0
              }
            },
          ]
        })
    })

    
    const onClick = (event:any) => {
        console.log("click",event)
    }
    return {
       onClick,
    }
  }
})
</script>
<style lang='scss' scoped>
  h2 {
    height: 0.6rem;
    color: white;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.25rem;
  }
  .two {
    height: 4.5rem;
  }
</style>