import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Select() {
  const [standard, setStandard] = useState();

  const changeStandard = () => {
    setStandard(
      <div>
        <span>오늘</span>
        <span>이번 주</span>
        <span>이번 달</span>
        <span>올해</span>
      </div>
    );
  }

  return (
    <div className='select-box'>
        <NavLink className="select-btn" to="/"><svg id='tranding-icon' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>트렌딩</NavLink>
        <NavLink className="select-btn" to="/recent"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>최신</NavLink>
        <button onClick={changeStandard} className='select-range'>오늘</button>
        <svg id='dropdown-icon' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>
        {standard}
    </div>
  )
}
