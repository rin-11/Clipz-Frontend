const inventoryReducer = (
  state = { inventory: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case 'UPLOAD_START':
      return { ...state, error: false, uploading: true };
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        inventory: [action.data, ...state.inventory],
        uploading: false,
        error: false,
      };
    case 'FIND_INVENTORY':
      return { ...state, loading: true, error: false };
    case 'INVENTORY_FOUND':
      return { ...state, inventory: action.data, loading: false, error: false };
    case 'INVENTORY_COULD_NOT_BE_FOUND':
      return { ...state, loading: false, error: true };
    case 'UPDATE_INVENTORY':
      return {
        ...state,
        inventory: state.inventory.map((item) =>
          item._id === action.id ? { ...item, ...action.updatedData } : item
        ),
      };
      case "DELETE_INVENTORY_ITEM":
      return {
        ...state,
        inventory: state.inventory.filter(item => item._id !== action.id)
      };
    default:
      return state;
  }
};

export default inventoryReducer;
