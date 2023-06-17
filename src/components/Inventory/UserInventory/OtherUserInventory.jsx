import React, { useEffect } from 'react';
import './OtherUserInventory.css';
import { getUserInventory } from '../../../actions/InventoryAction';
import OtherUserInvItem from '../InvItem/OtherUserInvItem';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const OtherUserInventory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { inventory } = useSelector((state) => state.inventoryReducer);

  useEffect(() => {
    dispatch(getUserInventory(id));
  }, [dispatch, id]);

  return (
    <div className="OtherUserInventory">
      {inventory.length > 0 ? (
        inventory.map((item) => (
          <OtherUserInvItem key={item._id} data={item} />
        ))
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};

export default OtherUserInventory;
