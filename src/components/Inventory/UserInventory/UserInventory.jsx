import React, { useEffect } from 'react';
import './UserInventory.css'
import { getUserInventory } from '../../../actions/InventoryAction'
import InvItem from '../InvItem/InvItem'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const UserInventory = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { inventory } = useSelector((state) => state.inventoryReducer);
  useEffect(() => {
    dispatch(getUserInventory(user._id));
  }, []);
  return (
    <div className="UserInventory">
       {inventory ? inventory.map((item, id)=>{
            return <InvItem data={item} id={id}/>
        }) : null}
    </div>
  )
}

export default UserInventory