import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
})

const MessageList = () =>{
  //useStyllesを実行してスタイルを取得。
  const classes = useStyles();

return <div className={classes.root} >messageList</div>
}

export default MessageList;