import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  }
})


const MessageListInputField = () =>{
  const classes = useStyles();
return <div className={classes.root}>messageListInputField</div>
}

export default MessageListInputField;