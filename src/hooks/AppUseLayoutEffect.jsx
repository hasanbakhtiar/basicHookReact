import React, { useEffect, useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {
    const [message,setMessage] = useState('Hi');
    // useEffect(()=>{
    //     setMessage('UseEffect');
    // })
    useLayoutEffect(()=>{
        setMessage('useLayoutEffect')
    })
  return (
    <div>
        <p>{message}</p>
    </div>
  )
}

export default AppUseLayoutEffect