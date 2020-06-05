
import request from "../../utils/http"
// 热门投票列表 get请求
// /vode/hotlist 
// 不需要参数


// 登录接口  Post请求
// /user/login  
// 传递参数
// phone:手机号,password:密码
export const Login=async (params:any)=>{
    return request("/api/user/login ",
                    {method:"post",
                    data:params
                    }).then(res=>{
                        return res;
                    }).catch(err=>{
                        return err
                    })
}