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
      payload: values
    }, {
      call,
      put,
      select
    }) {
      let {
        password,
        username,
        mobile
      } = yield select(
        (d) => d.registerModel
      )
      debugger
      let result = yield call(
        create, {
          password,
          username,
          mobile
        }
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
