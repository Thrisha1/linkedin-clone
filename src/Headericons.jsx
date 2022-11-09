import React from 'react'


function Headericons({Icon , title}) {
  return (
    <div className="headeroption text-white d-flex flex-column align-items-center ms-5">
        {Icon && <Icon className="headericon" />}
        <p>{title}</p>
    </div>
  )
}

export default Headericons