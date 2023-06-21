import React, { useEffect } from 'react';
import './OtherUserInventory.css';
import { getUserInventory } from '../../../actions/InventoryAction';
import OtherUserInvItem from '../InvItem/OtherUserInvItem';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const OtherUserInventory = () => {
  // params hook allows access to ID in the URL
  const { id } = useParams();

  // hook to retrieve the dispatch function from the Redux store
  const dispatch = useDispatch();

  // useSelector hook to access the inventory data from the state managed by Redux
  const { inventory } = useSelector((state) => state.inventoryReducer);

  useEffect(() => { // // dispatch the getUserInventory action when the component mounts
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
