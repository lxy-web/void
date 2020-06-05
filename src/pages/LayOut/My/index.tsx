import React from 'react'
import styles from "./styles.less"
// import { connect } from 'dva'
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 375,
     
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

const index = (props: any) => {
  // const classes = useStyles();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  let handleGo=()=>{
    props.history.push("/newVoid")
  }

  console.log(props)
  return (<div className={styles.moduleView}>
    <nav className={styles.moduleLogo}>
      <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1303319457,2851314615&fm=26&gp=0.jpg" />
    </nav>
    <div className={styles.ColorBlock}></div>
    <div className={styles.moduleBtnList}>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
     
      className={classes.root}
    >
      <ListItem button className={styles.ListItem}>
        <ListItemIcon>
          <AssignmentIndIcon />
        </ListItemIcon>
          <div>我的参加的投票</div>
      </ListItem>
      <ListItem button className={styles.ListItem} >
        <ListItemIcon>
          <AddToQueueIcon />
        </ListItemIcon>
          <div >我的创建的投票</div>
      </ListItem>
      <ListItem button className={styles.ListItem}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
          <div onClick={handleGo}>创建投票</div>
      </ListItem>
    </List>
    </div>
    {/* {props.children} */}
  </div>)
}
export default (index)