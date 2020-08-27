import React, { useState, useEffect } from "react";
import useMouse from '../hooks/useMouse'
// const LikeButton: React.FC = () => {
//   const [obj, setObj] = useState({ like: 0, on: true });
//   return (
//     <>
//       <button
//         onClick={() => {
//           setObj({ like: obj.like + 1, on: obj.on });
//         }}
//       >
//         {obj.like}👍
//       </button>
//       <button
//         onClick={() => {
//           setObj({ like: obj.like, on: !obj.on });
//         }}
//       >
//         {obj.on ? "ON" : "OFF"}
//       </button>
//     </>
//   );
// };

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const state = useMouse()
  useEffect(() => {
    console.log('执行次数')
    document.title = `点击了${like}次`
  },[like]) //与页面渲染无关的useEffect,操作dom，调用接口 不需要清除副作用
  //like与on都会触发，添加依赖
  return (
    <>
                <p>
      x: {state.x} y: {state.y}
    </p>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like}👍
      </button>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? "ON" : "OFF"}
      </button>
    </>
  );
};

export default LikeButton;
