import React from 'react'

function Feedtopicons({Icon, title}) {
  return (
    <div className="headeroption d-flex align-items-center">
        {Icon && <Icon className="headericon " />}
        <p className="ms-2" >{title}</p>
    </div>
  )
}

export default Feedtopicons