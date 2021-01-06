import React from 'react'
import { pushMessage } from '../firebase'
import { Button,IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const MessageSubmitButton = ({name,text,setText}) => {
return <IconButton disabled={text === ""}
  onClick = {() => {
    pushMessage({name: "ハムさん",text})
    setText("");
  }
}>
<SendIcon />
</IconButton> 
}

export default MessageSubmitButton;