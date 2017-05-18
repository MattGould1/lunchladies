// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'

import Navigation from '@/components/Navigation/Navigation'
import Loader from '@/components/Loader/Loader'

Vue.use(Vuex)
Vue.use(VueResource)
Vue.use(VueMaterial)

Vue.config.productionTip = false

export const LoadingState = new Vue()

export const App = new Vue({
  router,
  components: {
    Navigation,
    Loader
  },
  data () {
    return {
      isLoading: false
    }
  },
  created () {
    LoadingState.$on('toggle', (isLoading) => {
      this.isLoading = isLoading
    })
  }
}).$mount('#app')
