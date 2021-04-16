import { wrapFunctional } from './utils'

export { default as Logo } from '../..\\components\\Logo.vue'
export { default as SwitchMode } from '../..\\components\\SwitchMode.vue'

export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazySwitchMode = import('../..\\components\\SwitchMode.vue' /* webpackChunkName: "components/switch-mode" */).then(c => wrapFunctional(c.default || c))
