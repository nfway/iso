import { defineClientAppEnhance } from '@vuepress/client'
import MyComponent from './components/MyComponent.vue'
import Poetry from './components/Poetry.vue'
import Cover from './components/Cover.vue'
import Menu from './components/Menu.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('MyComponent', MyComponent)
  app.component('Poetry', Poetry)
  app.component('Cover', Cover)
  app.component('Menu', Menu)
  // ...
})