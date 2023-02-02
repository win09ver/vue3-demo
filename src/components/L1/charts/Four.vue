<template>
  <h2>car p statistics</h2>
  <div id="chartfour" class="four"></div>
</template>

<script lang='ts'>
import { link, url } from '@/request'
import { ECharts } from 'echarts/types/dist/echarts'
import { defineComponent, inject, onMounted } from 'vue'
export default defineComponent ({
  name: 'chart-four',
  setup() {
    const echarts:any = inject("echarts")

    onMounted(async () => {
        const data: any = await link(url.chartfour, "GET")
        console.log(data)
        const chart: ECharts = echarts.init(document.getElementById("chartfour"))
        chart.setOption({
          legend: {top: "bottom"},
          grid: {
              top: "3%",
              left: "2%",
              bottom: "3%",
              right: "6%",
              containLabel: true
          },
          xAxis: {
            type: "category",
            data: data.day,
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
          series: [
            {
                type: "bar",
                data: data.num.normal,
                stack: "total"
            },
            {
                type: "bar",
                data: data.num.middle,
                stack: "total"
            },
            {
                type: "bar",
                data: data.num.special,
                stack: "total"
            },
            {
                type: "bar",
                data: data.num.super,
                stack: "total"
            }
          ],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross"
            }
          },
        })
    })
    return {
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
.four {
  height: 4.5rem;
}
</style>