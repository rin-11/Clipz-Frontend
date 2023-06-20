//import all exports from InventoryRequests
import * as InventoryRequest from "../api/InventoryRequest";

// action creator functions:
    // 1. findInventory (type: "FIND_INVENTORY")
    // 2. inventoryFound (type: "INVENTORY_FOUND", data)
    // 3. inventoryCouldNotBeFound (type: "INVENTORY_COULD_NOT_BE_FOUND")

export const findInventory = () => ({ type: "FIND_INVENTORY" });
export const inventoryFound = (data) => ({ type: "INVENTORY_FOUND", data });
export const inventoryCouldNotBeFound = () => ({ type: "INVENTORY_COULD_NOT_BE_FOUND" });

export const getUserInventory = (id) => async (dispatch) => {
  // pass in the userID 
  dispatch(findInventory());
  try {
    // pass in the userID & destructure userData if found
    const { data } = await InventoryRequest.getUserInventory(id);
    dispatch(inventoryFound(data));
  } catch (error) {
    console.log(error);
    dispatch(inventoryCouldNotBeFound());
  }
};

export const deleteInventoryItem = (id) => async (dispatch) => {
  // pass in the userID
  try {
    await InventoryRequest.deleteInventoryItem(id);
    dispatch({ type: "DELETE_INVENTORY_ITEM", id });
  } catch (error) {
    console.log(error);
  }
};
