import React, { PureComponent } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import styles from "./styles.less"
// import r
export default class Tarber extends PureComponent{
    render(){
    //    console.log(this.props);
         let props=Object.keys(this.props).length>0?this.props.titls:'默认头部';
        return (<div className={styles.tarber}>
                 <ArrowBackIcon/>
                 <div>
                 {props}
                 </div>
                 <div></div>
            </div>)
    }
}
