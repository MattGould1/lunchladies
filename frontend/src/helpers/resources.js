import Vue from 'vue'
import VueResource from 'vue-resource'
import { router } from 'src/main'

const API_BASE = 'http://127.0.0.1:8088/'

import { LoadingState } from 'src/main'

Vue.use(VueResource)

Vue.http.options = {
  root: API_BASE
};

var token = ''
if (localStorage.getItem('id_token') === null) {
  token = 'false'
} else {
  token = localStorage.getItem('id_token')
}

Vue.http.headers.common['x-access-token'] = token

Vue.http.interceptors.push((request, next) => {
  LoadingState.$emit('toggle', true);

  next((response) => {
    setTimeout(function() {
      LoadingState.$emit('toggle', false)
    }, 500)
    // Handle global API 404 =>
    if (response.status === 404) {
      router.push('/404')
    }
  })
})

// export const signupResource = Vue.resource(API_BASE + 'signup');
