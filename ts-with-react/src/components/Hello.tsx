import React from 'react';

interface IHelloProps {
    messsage?: string
}
//React.FunctionComponent就是React.FC
const Hello: React.FC<IHelloProps> = (props) => {
    // props.messsage
    // props.children
    return <h2>{props.messsage}</h2>
}

Hello.defaultProps = {
    messsage: '121212'
}
//加上FunctionComponent后 props增加2个属性 Hello拥有defaultProps,可以使interface为非必选
export default Hello