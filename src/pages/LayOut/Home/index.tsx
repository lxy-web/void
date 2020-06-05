import React from 'react'
import { connect } from 'dva'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
// import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import DoneIcon from '@material-ui/icons/Done';
import {EnidSelect} from "./service"
import {Time} from "../../../utils/setDateTime"
import styles from "./index.less";
const useStyles2 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > svg': {
        margin: theme.spacing(2),
      },
    },
  }),
);
// function HomeIcon(props: SvgIconProps) {
//   return (
//     <SvgIcon {...props}>
//       <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//     </SvgIcon>
//   );
// }

const useStyles1 = makeStyles({
  root: {
    width: '100%',
  },
});

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const index = (props:any) => {
  let {homes:{list}}=props;
  const classes = useStyles();
  const classes1 = useStyles1();
  const [open, setOpen] = React.useState(false);
  const [errors,setErrors]=React.useState(false)
  const [Logins,setLogins]=React.useState(false);
     // 点击选择列表组件
  let  handleclick=async (vid:any,i:any)=>{
    let tokenStr=sessionStorage.getItem("token")||null;
     if(!tokenStr)return setLogins(true);
      let {code,msg}=await EnidSelect({vid,selected:String(i)})
    //  console.log(res)
     if(code==1){
       setOpen(true);
      props.dispatch({ type: 'homes/doSomething'})
    
    
     }else{  
       setErrors(true)
     }
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setErrors(false);
    setLogins(false);
  };
  // 长列表
  let renderRow = (props: ListChildComponentProps) => {
    const { style, index } = props;
    return (
      <ListItem className={styles.List_item} button style={style} key={index}>
        {/* {答题头部} */}
        <ListItemText primary={list[index].title} />
        {/* {选择列表} */}
            <div className={styles.ListItem_warpper}>
                    {
                      // {列表展示}
                      list[index].select.map((v:any, i: number)=> {
                          return v.title?
                          <div key={i} style={{width:"100%"}}>
                            <Button style={{width:"100%"}} onClick={handleclick.bind(renderRow,list[index].id,i)} className={styles.Button_item}  variant="contained" disableElevation >
                                    {/* {选择按钮内容展示} */}
                                    <div dangerouslySetInnerHTML={{__html:v.title}}></div>                         
                                    {
                                      // {/* {选择点击显示icon} */}
                                      list[index].selected==i?<div style={{width:50}}>
                                            <DoneIcon />
                                      </div>:<div style={{width:50}}>
                                            
                                      </div>
                                    }         
                          </Button>
                            {
                                  //进度条展示
                                    list[index].selected!=null?
                                    <div className={classes1.root}> 
                                          <LinearProgress variant="determinate" value={v.size/list[index].size*100} />
                                    </div>:null
                            } 
                            </div>:'';
                        })
                  }
          </div>
         {/* {底部介绍数据} */}
        <ListItemText primary={list[index].size+'人参与'+' '+ ' '+Time(Date.parse(list[index].endtime),Date.parse(list[index].createtime))+'天后结束' } />
      </ListItem>
    );
  }
  return (<div className={styles.home_warp}>
            <div className={styles.nav_}>|
                  热门坪林
            </div>
        
            {/* {长列表} */}
          <FixedSizeList className={styles.MuiListItem_gutters_my} height={700} width={400} itemSize={350} itemCount={list.length} >
            {renderRow}
          </FixedSizeList>

           {/* {弹框提示} */}
        <div className={classes.root}>
          {/* {成功} */}
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
            投票成功!
              </Alert>

         </Snackbar>
         {/* {失败} */}
        <Snackbar open={errors} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                 已经提交,请勿重复起提交!
              </Alert>
              
         </Snackbar>
         {/* {} */}
         <Snackbar open={Logins} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                 您还没有登陆,先去登陆才可以选择!
              </Alert>
              
         </Snackbar>
        </div>
  </div>
  )
}
export default connect((props) => (props))(index)