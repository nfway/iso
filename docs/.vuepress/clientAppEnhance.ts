import { defineClientAppEnhance } from '@vuepress/client'
import MyComponent from './components/MyComponent.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('MyComponent', MyComponent)
  // ...
})