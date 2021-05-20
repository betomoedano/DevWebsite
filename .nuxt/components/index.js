import { wrapFunctional } from './utils'

export { default as AppStoreSvg } from '../..\\components\\appStoreSvg.vue'
export { default as CLogoSvg } from '../..\\components\\cLogoSvg.vue'
export { default as FigmaSvg } from '../..\\components\\figmaSvg.vue'
export { default as GitSvg } from '../..\\components\\gitSvg.vue'
export { default as IOSLogoSvg } from '../..\\components\\IOSLogoSvg.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as RocketsIcon } from '../..\\components\\rocketsIcon.vue'
export { default as SwitchMode } from '../..\\components\\SwitchMode.vue'
export { default as UnityLogoSvg } from '../..\\components\\UnityLogoSvg.vue'

export const LazyAppStoreSvg = import('../..\\components\\appStoreSvg.vue' /* webpackChunkName: "components/app-store-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyCLogoSvg = import('../..\\components\\cLogoSvg.vue' /* webpackChunkName: "components/c-logo-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyFigmaSvg = import('../..\\components\\figmaSvg.vue' /* webpackChunkName: "components/figma-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyGitSvg = import('../..\\components\\gitSvg.vue' /* webpackChunkName: "components/git-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyIOSLogoSvg = import('../..\\components\\IOSLogoSvg.vue' /* webpackChunkName: "components/i-o-s-logo-svg" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyRocketsIcon = import('../..\\components\\rocketsIcon.vue' /* webpackChunkName: "components/rockets-icon" */).then(c => wrapFunctional(c.default || c))
export const LazySwitchMode = import('../..\\components\\SwitchMode.vue' /* webpackChunkName: "components/switch-mode" */).then(c => wrapFunctional(c.default || c))
export const LazyUnityLogoSvg = import('../..\\components\\UnityLogoSvg.vue' /* webpackChunkName: "components/unity-logo-svg" */).then(c => wrapFunctional(c.default || c))
