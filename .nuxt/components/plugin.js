import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AppStoreSvg: () => import('../..\\components\\appStoreSvg.vue' /* webpackChunkName: "components/app-store-svg" */).then(c => wrapFunctional(c.default || c)),
  CLogoSvg: () => import('../..\\components\\cLogoSvg.vue' /* webpackChunkName: "components/c-logo-svg" */).then(c => wrapFunctional(c.default || c)),
  FigmaSvg: () => import('../..\\components\\figmaSvg.vue' /* webpackChunkName: "components/figma-svg" */).then(c => wrapFunctional(c.default || c)),
  GitSvg: () => import('../..\\components\\gitSvg.vue' /* webpackChunkName: "components/git-svg" */).then(c => wrapFunctional(c.default || c)),
  IOSLogoSvg: () => import('../..\\components\\IOSLogoSvg.vue' /* webpackChunkName: "components/i-o-s-logo-svg" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  RocketsIcon: () => import('../..\\components\\rocketsIcon.vue' /* webpackChunkName: "components/rockets-icon" */).then(c => wrapFunctional(c.default || c)),
  SwitchMode: () => import('../..\\components\\SwitchMode.vue' /* webpackChunkName: "components/switch-mode" */).then(c => wrapFunctional(c.default || c)),
  UnityLogoSvg: () => import('../..\\components\\UnityLogoSvg.vue' /* webpackChunkName: "components/unity-logo-svg" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
