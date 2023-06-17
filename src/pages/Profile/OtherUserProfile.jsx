import React from 'react';
import OtherUserInfo from '../../components/UserDisplay/OtherUserInfo'
import FriendsDisplay from '../../components/FriendsDisplay/FriendsDisplay';
import OtherUserInventory from '../../components/Inventory/UserInventory/OtherUserInventory'
import UserBoards from '../../components/Boards/UserBoards'
const OtherUserProfile = () => {

  return (
    <div>
    <OtherUserInfo/>
    <OtherUserInventory/>
    </div>
  );
};

export default OtherUserProfile;
