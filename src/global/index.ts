import { App } from 'vue'
import registerVant from './register-vant'

export function globalRegister(app: App): void {
  registerVant(app)
}
