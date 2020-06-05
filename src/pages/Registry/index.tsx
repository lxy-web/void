// import React, { useState } from 'react'
// // import { connect } from 'dva'
// // import {} from ""
// import { Button, TextField } from '@material-ui/core';
// // import "./index.css"
// import styles from "./index.less"

// const index = () => {
//   let [username, setUser] = useState("");
//   let [password, setPwd] = useState("");
//   let [phone, setTel] = useState("")
//   let handleRegistry = async () => {
//     let { code, msg } = await registry({
//       phone,
//       password,
//       username
//     })

//   }
//   return (
//     <div className={styles.Registry_warp}>
//       <nav></nav>

//       <div className={styles.form}>
//         <div className={styles.form_item}>
//           <TextField id="outlined-basic" label="username" variant="outlined" value={username} onChange={(e) => setUser(e.target.value)} />

//         </div>
//         <div className={styles.form_item}>
//           <TextField id="outlined-basic" label="password" variant="outlined" value={password} onChange={(e) => setPwd(e.target.value)} />

//         </div>
//         <div className={styles.form_item}>
//           <TextField id="outlined-basic" label="phone" variant="outlined" value={phone} onChange={(e) => setTel(e.target.value)} />

//         </div>
//       </div>

//       <div >





//         <Button variant="contained" color="primary" onClick={handleRegistry}>  注册</Button>
//       </div>

//     </div>
//   )
// }
// export default (index)
import React, { useState } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import {Link,Grid,TextField,CssBaseline,Box,Snackbar,Typography,Container,Button,Avatar,makeStyles,Theme} from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
// import { makeStyles, Theme } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import { registry } from "./service"


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles1 = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function SignUp() {
  const classes = useStyles();
  let [username, setUser] = useState("");
  let [password, setPwd] = useState("");
  let [phone, setTel] = useState("");
  let [open, setOpen] = useState(false);
  let [ErrorMock,setErrorMock]=useState(false);
  let [warningMock,setwarningMock]=useState(false)
  let handleRegistry = async () => {
    //条件赛选
    if (username.trim() != '' && password.trim() != '' && phone.trim() != '') {
      let { code, msg } = await registry({
        phone,
        password,
        username
      })
      // console.log(code)
      if(code==1){
        //注册成功回调
          setOpen(true)
      }else{
        //失败回调
          setErrorMock(true)
      }
    }else{
      //条件有不满足
         setwarningMock(true)
    }
  };
  const classes1 = useStyles1();
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorMock(false);
    setOpen(false);
    setwarningMock(false)
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <div className={classes.form} >
          <Grid container spacing={2}>
            {/* {账号输入区域} */}
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={username} onChange={(e) => setUser(e.target.value)}
              />
            </Grid>
            {/* {手机号输入区域} */}
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="phone"
                name="phone"
                autoComplete="lname"
                value={phone} onChange={(e) => setTel(e.target.value)}
              />
            </Grid>
        {/* {密码输入区域} */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password} onChange={(e) => setPwd(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              /> */}
            </Grid>
          </Grid>
          {/* {提交按钮} */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleRegistry}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={5}>
        {/* {弹框提示} */}
        <div className={classes1.root}>
          {/* {成功} */}
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
            注册成功！
              </Alert>
         </Snackbar>
         {/* {失败} */}
         <Snackbar open={ErrorMock} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                  注册失败，或许是参数有问题！
              </Alert>
         </Snackbar>
         {/* {警告} */}
         <Snackbar open={warningMock} autoHideDuration={2000} onClose={handleClose}>
             <Alert severity="warning">请填写正确!</Alert>
         </Snackbar>
        </div>
      </Box>
    </Container>
  );
}

export default SignUp;
