import React, { useEffect } from 'react';
import './OtherUserInventory.css';
import { getUserInventory } from '../../../actions/InventoryAction';
import InvItem from '../InvItem/InvItem';
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
          <InvItem key={item._id} data={item} />
        ))
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};

export default OtherUserInventory;
