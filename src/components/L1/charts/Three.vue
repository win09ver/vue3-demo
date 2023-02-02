<template>
  <h2>repair statistics</h2>
  <div id="chartthree" class="three" @click="onClick($event)"></div>
</template>

<script lang='ts'>
import { link, url } from '@/request'
import { ECharts } from 'echarts'
import { defineComponent, inject, onMounted } from 'vue'
export default defineComponent ({
  name: 'chart-three',
  setup() {
    const echarts:any = inject("echarts")

    onMounted(async () => {
        const data: any = await link(url.chartthree, "GET")
        console.log(data)
        const chart: ECharts = echarts.init(document.getElementById("chartthree"))
        chart.setOption({
          legend: {top: "bottom"},
          tooltip: {

          },
          series: [
            {
              type: "pie",
              data,
              radius: [10, 100],
              center: ["50%", "45%"],
              roseType: true,
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

    const onClick = (event: Event) => {
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
.three {
  height: 4.5rem;
}
</style>