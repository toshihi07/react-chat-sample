import React, { useState } from "react";
import Signin from "./Signin";
import Main from './main'

// export default () => {}。functiojnを省略している
export default () => {
  //app.jsで定義。
  const [name,setName] = useState('');
  //javascriptの変数は{}で囲む
  console.log( {name} )
  //componentの切り替え
  if (name === ""){
    return (
      <Signin setName={ setName }/>
  );
  } else {
    return (
      <Main name={ name }/>
    )
  }
};
