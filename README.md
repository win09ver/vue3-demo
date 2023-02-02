# vue3-demo study with bilibili 「千锋前端vue项目实战，Vue+ElementUI物业后台管理系统」 & thanks a lot

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### memo
## install extention snippets
ctrl + shift + p ⇒　snippets ⇒　configure user snippets ⇒　vue.json
```json
"Print to console": {
		"prefix": "vue3",
		"body":[
			"<template>",
			"  <div></div>",
			"</template>",
			"",
			"<script lang='ts'>",
			"import { defineComponent, reactive, toRefs } from 'vue'",

			"export default defineComponent ({",
			"  name: '',",
			"  components: {},",
			"  emits: ['onClick'],",
			"  setup(props, ctx) {",
			"    console.log(ctx)",
			"    console.log(props)",
			"    const data = reactive({})",
			"    const refData = toRefs(data);",

			"    return {",
			"       ...refData,",
			"    }",
			"  }",
			"})",
			"</script>",

			"<style lang='scss' scoped>",
			"</style>",
		],
		"description": "Log output to console"
	}
```

## lint prettier setting
https://qiita.com/TigRig/items/36ed8e062d1c32c12b63

## json server
yarn global add json-server
json-server --watch data.json --port 8888

## set env
must add prefix VUE_APP_

## css reactive 関連
yarn add lib-flexible

# vscode extation　px ⇒　rem
css rem install
# QR code
yarn add qrcode.vue
https://www.npmjs.com/package/qrcode.vue
# echarts install
yarn add echarts
yarn add  @types/echarts
https://echarts.apache.org/zh/index.html
# eharts with vue
https://github.com/ecomfe/vue-echarts/blob/main/README.zh-Hans.md

## other
/router/index.ts
``` javascript
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // hashにしないとbuild通らない
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})
```