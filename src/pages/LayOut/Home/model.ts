import { Reducer, Effect, Subscription } from "umi"
import { getLIst } from "./service";
// console.log(getLIst)
interface IndexModelState {
  namespace: string;
  state: any,
  reducers: {
    setData: Reducer,
    setname: Reducer
  },
  effects: {
    doSomething: Effect
  }

  subscriptions: {
    setup: Subscription
  }
}
const index: IndexModelState = {
  namespace: 'homes',
  state: {
    list: [],
    // name:"六刷东"

  },
  reducers: {
    // 操作state
    setData(state, { payload: { list } }) {
      // console.log(list)
      return { ...state, list } // 第一个参数返回内容， 第二个为修改state中的哪个参数
    }

  },
  effects: {
    // *doSomething(dispatch传递的参数, { call, put })  call:回调方法，put 调 reducers中的方法, select: 获取 *doSomething()外部的参数 [*doSomething()无法直接获取外部状态]
    *doSomething({ payload }, { put, call }) {
      //                              users为需要获取的 namespace 中的状态
      // const pageSize = yield select(state => state.users.pageSize)
      // const res = yield call(callBack, { page, pageSize })
      // yield put({ type: 'setData', payload: { ...res } })
      console.log(1)
      let list = yield call(getLIst);
      // console.log(list)
      // console.log(payload)
      yield put({ type: "setData", payload: { list } })
    }
  },
  subscriptions: {
    // 订阅(自执行)
    setup({ dispatch, history }) {
      // 判断当前的路径
      return history.listen(({ pathname }) => {
        if (pathname == '/layout/home') {
          dispatch({ type: 'doSomething' }) // 调用effects中的方法
        }
      })
    }
  }
}
export default index
