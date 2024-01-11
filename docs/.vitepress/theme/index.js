// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style.css'
import Color from '../components/Color.vue'
import ColorList from '../components/ColorList.vue'
export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    // 注册自定义全局组件
    app.component('Color', Color)
    app.component('ColorList', ColorList)
  }
}
