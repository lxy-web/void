// import {Reducer,Effect,Subscription} from "umi"
// interface  index{
//     namespace: string;
//   state:any,
//   reducers:{setData:Reducer},
//   effects:{
//       doSomething:Effect
//   },
//   subscriptions:{
//       setup:Subscription
//   }


// }
// let Registry:index={
//   namespace: 'users',
//   state: {
//     list: [],
//     total: 0,
//     page: 1,
//     pageSize: 5,
//   },
//   reducers: {
//     // 操作state
//     setData(state, { payload: { list } }) {
//       return { ...state, list } // 第一个参数返回内容， 第二个为修改state中的哪个参数
//     },
//   },
//   effects: {
//     // *doSomething(dispatch传递的参数, { call, put })  call:回调方法，put 调 reducers中的方法, select: 获取 *doSomething()外部的参数 [*doSomething()无法直接获取外部状态]
//     *doSomething({ payload: { page } }, { call, put, select }) {
    
   
//     }
//   },
//   subscriptions: {
//     // 订阅(自执行)
//     setup({ dispatch, history }) {
//       // 判断当前的路径
//       return history.listen(({ pathname }) => {
//         if (pathname == '/users') {
//           dispatch({ type: 'doSomething' }) // 调用effects中的方法
//         }
//       })
//     }
//   }
// }
// export default Registry