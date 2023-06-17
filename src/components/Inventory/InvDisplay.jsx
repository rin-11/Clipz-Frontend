import React, { useState } from 'react';
import './InvDisplay.css';

import AddInv from './AddInv/AddInv';
import UserInventory from './UserInventory/UserInventory';

const InvDisplay = () => {
  const [isPreviewing, setIsPreviewing] = useState(false);

  const handlePreview = () => {
    setIsPreviewing(true);
  };
  return (
    <div className="InvDisplay">
      <AddInv/>
      <UserInventory/>
    </div>
  );
};

export default InvDisplay;