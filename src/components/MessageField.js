import React,{ useEffect,useState } from 'react'
import { TextField } from "@material-ui/core";

const MessageField  = ({name,setText,text}) =>{
  console.log({ text })
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
  />
}

export default MessageField;