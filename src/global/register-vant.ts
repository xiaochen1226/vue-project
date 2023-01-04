import { App } from 'vue'
import 'vant/lib/index.css'
import {
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Search,
  Swipe,
  SwipeItem,
  CellGroup,
  Field,
  Form,
  List,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  NavBar,
  Cell,
  Uploader,
  Card,
  Checkbox
} from 'vant'

const components = [
  Button,
  Tabbar,
  TabbarItem,
  Icon,
  Search,
  Swipe,
  SwipeItem,
  CellGroup,
  Field,
  Form,
  List,
  ActionBar,
  ActionBarIcon,
  ActionBarButton,
  NavBar,
  Cell,
  Uploader,
  Card,
  Checkbox
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
