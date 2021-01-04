import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import MessageList from './messageList'
import MessageListInputField from './messageListInputField'

const Main = ( {name} ) =>{
  const useStyle = makeStyles({
    root: {
      difplay: "grid",
      height: "100vh",
      gridTemplateRows: "1fr auto"
    }
  })
  const classes = useStyle();
return <div className={classes.root}>
  <MessageList  />
  <MessageListInputField name={name}/>
  </div>
}

export default Main;