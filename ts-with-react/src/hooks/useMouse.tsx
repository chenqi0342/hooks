import React, { useState, useEffect } from "react";

const useMouse = () => {
    const [state, setstate] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const getMouse = (e: MouseEvent) => {
          setstate({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener("mousemove", getMouse);
    
        return () => {
          document.removeEventListener("mousemove", getMouse);
        }; 
    }, []);
    
    return state
}//自定义hook,必须use开头

export default useMouse