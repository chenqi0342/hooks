import React, { useState, useEffect } from "react";

const Mouse: React.FC = () => {
  const [state, setstate] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const getMouse = (e: MouseEvent) => {
      setstate({ x: e.clientX, y: e.clientY });
      console.log("inner");
    };
    document.addEventListener("click", getMouse);

    return () => {
      document.removeEventListener("click", getMouse);
    }; //清楚副作用
  }, []); //diumount willunmount的时候执行，传一个空数组
  return (
    <p>
      x: {state.x} y: {state.y}
    </p>
  );
};

export default Mouse;
