import React from 'react'
import Sidebartop from './Sidebartop'
import Sidebarbotm from './Sidebarbotm'
import './Sidebar.css'


function Sidebar() {
  return (
    <div className="Sidebar">
       <Sidebartop/>
       <Sidebarbotm/>
    </div>
  )
}

export default Sidebar