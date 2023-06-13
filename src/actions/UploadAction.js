import * as UploadRequest from "../api/UploadRequest";


// action creator functions (Redux) = functions that returns an action object 
    // pass data param -- data for the image upload
    // pass dispatch function to allow actions

export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("image uploaded to public/inventory")
    await UploadRequest.uploadImage(data); //handle the image upload
  } catch (error) {
    console.log(error);
  }
};

export const uploadInventory = (data) => async (dispatch) => {
  dispatch({ type: "UPLOAD_START" });
  try {
    const newInventory =await UploadRequest.uploadInventory(data);
    dispatch({ type: "UPLOAD_SUCCESS", data: newInventory.data }); //  handle the upload of inventory data.
    console.log("inventory upload successful")
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};
