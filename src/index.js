import VueCropFigureMask from './vue-crop-figure-mask'

const install = function(Vue) {
  Vue.component('VueCropFigureMask', VueCropFigureMask);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { VueCropFigureMask }

export default {
  version: '0.0.8',
  install,
  VueCropFigureMask,
  VueCropFigureMask: VueCropFigureMask
}
