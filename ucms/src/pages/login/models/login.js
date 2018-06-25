
import { login } from '../services/login'
import store from 'storejs'
export default {
  namespace: 'login',
  state: {},
  effects: {
    * login ({
      payload,
    }, { put, call, select }) {
      const data = yield call(login, payload)
      store.set({'auth':'auth_store_set_in_login'+data})
    },
  },

}
