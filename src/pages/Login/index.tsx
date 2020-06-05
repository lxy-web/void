import React, { useState } from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import {history} from "umi"
import { Login } from "./service";
import { Link, Grid, TextField, CssBaseline, Box, Snackbar, Typography, Container, Button, Avatar, makeStyles, Theme } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

let index = () => {
  const classes = useStyles();
  let [phone, setphone] = useState("");
  let [password, setpassword] = useState("");
  let [open, setOpen] = useState(false);
  let [ErrorMock, setErrorMock] = useState(false);
  let [warningMock, setwarningMock] = useState(false)
  let handleLogin = async () => {
    if (phone.trim() != '' && password.trim() != '') {
      let res = await Login({
        phone,
        password
      });
      console.log(res)
      if (res.code == 1) {
        setOpen(true);
        //存储token
        window.sessionStorage.setItem("token",JSON.stringify(res.data.token));
        setTimeout(()=>{
          history.push("/")
        },2000)
        
      } else {
        setErrorMock(true)
      }
    } else {
      //条件有不满足
      setwarningMock(true)
    }
  }
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <div className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="phone"
            name="phone"
            autoComplete="phone"
            value={phone} onChange={(e) => setphone(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password} onChange={(e) => setpassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/Registry" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={8}>

        {/* {弹框提示} */}
        <div className={classes1.root}>
          {/* {成功} */}
          <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
            登录成功!
              </Alert>
          </Snackbar>
          {/* {失败} */}
          <Snackbar open={ErrorMock} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              登录失败，账号或者密码有问题!
              </Alert>
          </Snackbar>
          {/* {警告} */}
          <Snackbar open={warningMock} autoHideDuration={2000} onClose={handleClose}>
            <Alert severity="warning">请填写正确!</Alert>
          </Snackbar>
        </div>

        <Copyright />
      </Box>
    </Container>
  );
}
export default index