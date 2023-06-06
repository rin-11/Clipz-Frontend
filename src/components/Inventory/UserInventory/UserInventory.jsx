import React from 'react'
import './UserInventory.css'
import { InventoryData } from '../../../seedData/inventoryData'
import InvItem from '../InvItem/InvItem'


const UserInventory = () => {
  return (
    <div className="UserInventory">
   {InventoryData.map((item, id)=>{
        return <InvItem data={item} id={id}/>
    })}
    </div>
  )
}

export default UserInventory