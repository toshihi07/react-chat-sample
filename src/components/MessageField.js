import React,{ useEffect,useState } from 'react'
import { TextField } from "@material-ui/core";

import {pushMessage} from '../firebase.js'

const MessageField  = ({name,setText,text,inputEl}) =>{
  const [isComposed,setIsComposed] = useState(false);
  
return <TextField
  fullWidth={true}
  onChange={(e)=> setText(e.target.value)}
  onKeyDown= {(e) => {
    if (isComposed) return;
    const pushText = e.target.value;
    if(pushText === "") {
      return
    }
    if(e.key === "Enter") {
      //無理やり名前を入れてしまうのをはハードコーディングという
      pushMessage({name,text})
      console.log('push message to firebase')
      setText("")
      e.preventDefault();
    }
}
}
onCompositionStart={
  () => setIsComposed(true)
}
onCompositionEnd = {
  () =>setIsComposed(false)
}
//この一行で初期化出来る
value={text}
inputRef={inputEl}
  />
}

export default MessageField;