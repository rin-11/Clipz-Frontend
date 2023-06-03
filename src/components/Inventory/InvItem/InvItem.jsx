import React from 'react'
import './InvItem.css'

// Define a destructured prop 'data', which is passed as an object to the component
const InvItem = ({data}) => {
    
  return (
    <div className="InvItem">
        <img src={data.image} alt="InvItem" />
        <div className="details">
            <span><b>{data.name}</b></span>
            <span> {data.category}</span>
        </div>
    </div>
    
  )
}

export default InvItem