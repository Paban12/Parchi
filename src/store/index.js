import { createStore } from 'vuex'

import state from './notification/state'
import * as getters from './notification/getters'
import * as mutations from './notification/mutations'
import * as actions from './notification/actions'

import { Auth } from './modules/auth'
import { Alert } from "./modules/error-success";
import { Page } from './modules/page'
import { Notify } from './modules/notify'

export default createStore({
  state,
  getters,
  mutations,
  actions,

  modules: {
    Auth,
    Alert,
    Page,
    Notify,
  }
})
