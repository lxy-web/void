import request from "../../../utils/http"
//获取全部数据列表
export const getLIst=async ()=>{
    return  request("/api/vode/hotlist",{method:"get"}).then((res)=>{    
        // console.log(res)
         return res.data.lists;
     }).catch(err=>{
         return err
     })
}
//选择投票
export const EnidSelect=async (params:any)=>{
    // console.log(params)
    return request("/api/vode/sendselect",{method:"post",data:params}).then(res=>{
        return res
    }).catch(Error=>{
        return Error;
    })
}