
import { extend } from 'umi-request';
let tokenStr=sessionStorage.getItem("token")||null;
let token=tokenStr&&JSON.parse(tokenStr);
// console.log(typeof tokenStr)
// let headers
const request = extend({
  'headers':{
    'Authorization':token
  }
});


export default request;

