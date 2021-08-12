import { defineClientAppEnhance } from '@vuepress/client'
import MyComponent from './components/MyComponent.vue'
import Poetry from './components/Poetry.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('MyComponent', MyComponent)
  app.component('Poetry', Poetry)
  // ...
})