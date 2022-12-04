import React, { useRef, forwardRef, useImperativeHandle, useState } from 'react'


const MyInput =forwardRef((porps,ref)=>{
    const [fontSize,setFontSize] = useState(14);
    useImperativeHandle(ref,()=>({
        sH:sayHello,
        incFont : ()=>{setFontSize(fontSize+2)},
        decFont : ()=>{setFontSize(fontSize-2)}
    }))
// console.log(ref);
    const sayHello = ()=>{
        alert('Hello');
    }
    
    return <input type="text" style={{fontSize}} />
})



const AppImp = () => {
    const inputRef = useRef();
    const handleClick = ()=>{
        // inputRef.current.focus();
        inputRef.current.sH();
    }
    
  return (
    <div>
        <MyInput type="text" ref={inputRef} />
        <button onClick={handleClick}>click</button>
        <button onClick={()=>{inputRef.current.incFont()}}>+</button>
        <button onClick={()=>{inputRef.current.decFont()}}>-</button>
    </div>
  )
}

export default AppImp