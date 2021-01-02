import React, { useState } from "react";
import Signin from "./Signin";

// export default () => {}
export default () => {
  //app.jsで定義。
  const [name,setName] = useState('');
  //javascriptの変数は{}で囲む
  console.log( {name} )
  return (
      <Signin setName={ setName }/>
  );
};
