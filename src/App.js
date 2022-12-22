import './index.scss';
import React from "react";

function App() {
const [count, setCount ] = React.useState(0)

    const onclickPlus = () =>{
        setCount(count +1)
    }

    const onclickMinus = () =>{
        setCount(count -1)
    }

  return (
    <div className="App">

    </div>
  );
}

export default App;
