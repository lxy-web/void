import request from "umi-request";
//注册接口
export const registry=async (params:any)=>{
  return request("/api/user/registry",{method:"post",data:params}).then(res=>{
      
      console.log(res)
      console.log(params)
      return res;
  }).catch(err=>{
    return err;
  })
}