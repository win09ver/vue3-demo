<template>
  <div>
    <h2>population statistics</h2>
    <div id="chartone" class="one" @click="onClick($event)"></div>
  </div>
</template>

<script lang='ts'>
import { link, url } from '@/request'
import { ECharts } from 'echarts/types/dist/echarts'
import { defineComponent, inject, onMounted, ref } from 'vue'

export default defineComponent ({
  name: 'chart-one',
  components: {},
  setup() {
    const echarts:any = inject("echarts")
    const xdata = ref([])
    const ydata = ref([])

    onMounted(async () => {
        const data: any = await link(url.chartone, "GET")
        xdata.value = data.map((el:any) => el.title)
        ydata.value = data.map((el:any) => el.num)

        const chart: ECharts = echarts.init(document.getElementById("chartone"))
        chart.setOption({
            xAxis: {
                type: "value",
                axisLine: {
                    lineStyle: {
                        color: "black"
                    }
                }
            },
            yAxis: {
                type: "category",
                data: xdata.value,
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
            series: [
                {
                    type: "bar",
                    data: ydata.value,
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 20, 20, 0],
                            
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
                            ])
                        }
                    },
                    select: {
                        selectedMode: true,
                        lable: {
                            show: true,
                        }
                    }
                }
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
  .one {
    height: 4.5rem;
  }
</style>