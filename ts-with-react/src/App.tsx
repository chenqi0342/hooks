import React, { useState } from 'react';
import Hello from './components/Hello';
import LikeButton from './components/LinkButton';
import useMouse from './hooks/useMouse'
import useShow from './hooks/useShow'
import './App.css';

interface Ishow {
  message: string,
  status: string
}
function App() {
  const state = useMouse()
  const [show, setShow] = useState(true)
   const [data, loading] = useShow('https://dog.ceo/api/breeds/image/random', [show])
  const dataRes = data as Ishow
  return (
    <div>
          <p>
      x: {state.x} y: {state.y}
      </p>
      <div onClick={()=>{setShow(!show)}}>1111</div>
      {loading ? <p>du qu zhong</p> : <img src={dataRes && dataRes.message}></img>}
      <LikeButton/>
    </div>
  );
}

export default App;
