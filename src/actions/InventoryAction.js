import * as InventoryRequest from "../api/InventoryRequest";

export const findInventory = () => ({ type: "FIND_INVENTORY" });
export const inventoryFound = (data) => ({ type: "INVENTORY_FOUND", data });
export const inventoryCouldNotBeFound = () => ({ type: "INVENTORY_COULD_NOT_BE_FOUND" });

export const getUserInventory = (id) => async (dispatch) => {
  dispatch(findInventory());
  try {
    const { data } = await InventoryRequest.getUserInventory(id);
    dispatch(inventoryFound(data));
  } catch (error) {
    console.log(error);
    dispatch(inventoryCouldNotBeFound());
  }
};
