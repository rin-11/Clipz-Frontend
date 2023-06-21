import React, { useEffect } from 'react';
import './UserInventory.css';
import { getUserInventory } from '../../../actions/InventoryAction';
import InvItem from '../InvItem/InvItem';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

const UserInventory = () => {
  // params hook allows access to ID in the URL
  const params = useParams();

  // hook to retrieve the dispatch function from the Redux store
  const dispatch = useDispatch();

  // useSelector hooks to access the inventory data from the state managed by Redux
  const { user } = useSelector((state) => state.authReducer.authData);
  const { inventory } = useSelector((state) => state.inventoryReducer);

  useEffect(() => { // dispatch the getUserInventory action when the component mounts
    dispatch(getUserInventory(user._id));
  }, []);

  return (
    <div className="UserInventory">
      {inventory ? (
        inventory.map((item) => {
          return <InvItem key={item._id} data={item} />;
        })
      ) : (
        <div>No items found</div>
      )}
    </div>
  );
};

export default UserInventory;
