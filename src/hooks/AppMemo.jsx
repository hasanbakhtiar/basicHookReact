import React, { useState,useMemo } from 'react'
import userlist from '../data/users.json'

const AppMemo = () => {

  const [count, setCount] = useState(0);
  const [userId,setUserId] = useState(null)
  function getUserRows(){
    console.log('getUserRows worked');
    return userlist.map((user,index)=><div onClick={()=>{
      setUserId(user.id)
    }} style={{color: user.id === userId ? "red": "black"}} key={index}>{user.name}</div>)
  }
  

  const userRows = useMemo(()=>getUserRows(),[userId]);
  return (
    <div>
      {userRows}
      <button onClick={()=>{
        setCount(count+1)
      }}>add</button>
      {userId}
    </div>
  )
}

export default AppMemo