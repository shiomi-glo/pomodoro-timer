import React, {useEffect, useState} from 'react';

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [isActive, changeActive] = useState(false)
  const tick = () => {
    if(isActive){
      setSecond(second - 1);
      if(second == 0){
        timeOver();
      }
    }
  }
  const timeOver = () => {
    changeActive(false);
    alert('finish')
  }
  useEffect(() => {
    setTimeout(() => tick(), 1000)
  },[second, isActive])

  return(
    <>
      <div>残り時間：{second}</div>
      <button onClick={()=> changeActive(true)}>start</button>
      <button onClick={()=> changeActive(false)}>stop</button>
      <div>
        時間設定: <input type="text" id="huga"/>秒
        <button onClick={() => setSecond(document.getElementById('huga').value)}>タイマー設定</button>
      </div>
    </>
  )
}

export default Timer;