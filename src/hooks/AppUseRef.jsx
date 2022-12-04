import React, { useRef } from 'react'

const AppUseRef = () => {
    const inputRef = useRef();
    const handleClick =(e)=>{
        console.log(inputRef.current);
    }
  return (
    <div>
        <div>my div</div>
        <input type="text" ref={inputRef}  />
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default AppUseRef