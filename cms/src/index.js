import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';
// 1. Initialize
const app = dva({
  onError(err, dispatch) {
    console.error(err);
  }
});

// 2. Plugins
// app.use({});
app.use(createLoading());
// 3. Model (统一到router 处修改)
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
