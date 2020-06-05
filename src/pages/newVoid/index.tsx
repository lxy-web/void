import React from 'react'
import { connect } from 'dva'
import styles from "./styles.less"
import Tarber from "../../components/Tarber/index"
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '47ch',
            },
        },
    }),
);
const index = ({ route: { titls } }: any) => {
    const classes = useStyles();
    console.log(titls)
    return (<div className={styles.moduleView}>
        <Tarber {...{ titls }} />
        <div className={styles.moduleInputList}>
            <form className={classes.root} noValidate autoComplete="off">
          
              
                <TextField id="outlined-basic" label="标题" variant="outlined" />
                <TextField id="outlined-basic" label="描述" variant="outlined" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </form>
        </div>
    </div>

    )
}
export default (index)
// connect(({ namespace }) => ({ ...namespace }))