import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import PersonIcon from '@material-ui/icons/Person';

import styles from "./index.less"

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});


const index = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    //路由跳转
    if(newValue=='recents'){
       props.history.push("/layout/home")
    }else if(newValue='favorites'){
      props.history.push("/layout/my")
    }
    setValue(newValue);
  };
  // console.log(props=
  return (<>
    <div className={styles.view}>
      {props.children}
    </div>

    <div className={styles.footer}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="首页" value="recents"  icon={<HomeTwoToneIcon />} />
        <BottomNavigationAction label="我的" value="favorites"  icon={<PersonIcon />} />
      </BottomNavigation>
    </div>

  </>)
}
export default (index)