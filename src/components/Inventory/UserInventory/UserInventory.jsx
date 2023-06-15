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

  inventory = inventory || [];  // Ensure inventory is always an array

  useEffect(() => {
    dispatch(getUserInventory(user._id));
  }, []);

  return (
    <div className="UserInventory">
       {inventory.map((item, id) => <InvItem data={item} id={id}/>)}
    </div>
  )
}

export default UserInventory
