import { App } from 'vue'
import 'vant/lib/index.css'
import { Button, Tabbar, TabbarItem } from 'vant'

const components = [Button, Tabbar, TabbarItem]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
