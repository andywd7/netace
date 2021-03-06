/**
 * This is Netace’s JS helper file for docs.
 * You can add more things if/when needed.
 */
import Vue from 'vue'
// import router from '@/router'
import WebFontLoader from '../src/utils/webFontLoader' // eslint-disable-line no-unused-vars
import statusLabels from './utils/statusLabels'
import activeNav from './utils/activeNav'
import filterSearch from './utils/filterSearch'
import BootstrapVue from 'bootstrap-vue'
import 'codemirror/mode/jsx/jsx'

import '../src/styles/styles.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false
Vue.mixin(statusLabels)

Vue.component('RouterLink', {
  props: {
    tag: {
      default: 'a',
      type: String
    }
  },
  render (createElement) {
    return createElement(this.tag, {}, this.$slots.default)
  }
})

document.addEventListener('DOMContentLoaded', () => {
  filterSearch.methods.init()
  activeNav.methods.init()
})

window.addEventListener('hashchange', () => {
  filterSearch.methods.init()
  activeNav.methods.init()
})
