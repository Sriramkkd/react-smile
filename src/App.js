import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () =>{
  const [count, inccount] = useState(0);
  return (
    <div>
      <h1>Click Me {count}</h1>
      <button onClick={()=>{inccount(count+1)}}>Click Me</button>
    </div>
  );
}

export default App;
