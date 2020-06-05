export const Time=(endtime:any,createtime:any)=>{
    
    let  nTime = endtime - createtime
    let day = Math.floor(nTime/(24*3600*1000)); //天数差
  
    return day;
}