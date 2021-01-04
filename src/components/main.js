import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MessageList from './MessageList'
import MessageListInputField from './MessageListInputField'

  //関数の作成
  const useStyles = makeStyles({
    root: {
      display: "grid",
      height: "100vh",
      gridTemplateRows: "1fr auto",
    }
  })

const Main = ( {name} ) =>{

  //useStylesを実行して、styleを取得
  const classes = useStyles();
return <div className={classes.root}>
  <MessageList />
  <MessageListInputField name={name}/>
  </div>
}

export default Main;