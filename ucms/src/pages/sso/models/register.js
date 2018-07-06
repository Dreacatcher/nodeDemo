import {
  create
} from '../services/register';

export default {
  namespace: 'registerModel',
  state: {
    confirmDirty: false,
    autoCompleteResult: [],
    password: '',
    username: '',
    mobile: ''
  },
  reducers: {
    updateStates(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
  },
  effects: {
    * create({
      payload
    }, {
      call,
      put,
      select
    }) {
      console.log(payload.values)
      debugger
      let result = yield call(
        create, payload.values
      )
      console.log(result)
      debugger
    },
  },
  subscriptions: {
    setup({
      dispatch,
      history
    }) {
      return history.listen(({
        pathname,
        query
      }) => {
        // if (pathname === '/sso') {
        //   dispatch({ type: 'fetch', payload: query });
        // }
      });
    },
  },
};
