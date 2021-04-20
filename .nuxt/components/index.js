import { wrapFunctional } from './utils'

export { default as AppStoreSvg } from '../..\\components\\appStoreSvg.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as SwitchMode } from '../..\\components\\SwitchMode.vue'
export { default as UnityLogoSvg } from '../..\\components\\UnityLogoSvg.vue'

export const LazyAppStoreSvg = import('../..\\components\\appStoreSvg.vue' /* webpackChunkName: "components/app-store-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazySwitchMode = import('../..\\components\\SwitchMode.vue' /* webpackChunkName: "components/switch-mode" */).then(c => wrapFunctional(c.default || c))
export const LazyUnityLogoSvg = import('../..\\components\\UnityLogoSvg.vue' /* webpackChunkName: "components/unity-logo-svg" */).then(c => wrapFunctional(c.default || c))
