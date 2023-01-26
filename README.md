# vue3-demo

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
