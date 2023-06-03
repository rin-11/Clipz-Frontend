import React from 'react'
import './InvDisplay.css'
import { InventoryData } from '../../seedData/inventoryData'
import InvItem from '../Inventory/InvItem/InvItem'

const InvDisplay = () => {
  return (
    <div className="InvDisplay">
      <h2>Closet Inventory</h2>
    <div className="Inventory">
    {InventoryData.map((item, id)=>{
        return <InvItem data={item} id={id}/>
    })}
    </div>
    <div className="uploadButton">
        <button class="new-item" role="button">Add Inventory</button>
    </div>
</div>
  )
}

export default InvDisplay