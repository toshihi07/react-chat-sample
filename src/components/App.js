import React, { useState } from "react";
import Signin from "./Signin";
import Main from './main'
import config from '../config.json'

// export default () => {}。functiojnを省略している
export default () => {
  //app.jsで定義。
  const [name,setName] = useState('');
  const signInEnabled = config.signInEnabled
  console.log(signInEnabled)
  //javascriptの変数は{}で囲む
  console.log( {name} )
  //componentの切り替え
  if (name === "" && signInEnabled){
    return (
      <Signin setName={ setName }/>
  );
  } else {
    return (
      <Main name={ name }/>
    )
  }
};
