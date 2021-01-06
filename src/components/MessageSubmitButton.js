import React from 'react'
import { pushMessage } from '../firebase'
import { Button,IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const MessageSubmitButton = ({name,text,setText,inputEl}) => {
return <IconButton 
  disabled={text === ""}
  onClick = {() => {
    pushMessage({name: "ハムさん",text})
    setText("");
    inputEl.current.focus();
  }
}>
<SendIcon />
</IconButton> 
}

export default MessageSubmitButton;