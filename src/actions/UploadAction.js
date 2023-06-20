//import all exports from UploadRequests
import * as UploadRequest from "../api/UploadRequest";


// action creator functions (Redux) = functions that returns an action object 
    // pass data param -- data for the image upload
    // pass dispatch function to allow actions

// async action creator functions:
    // 1. uploadImage
    // 2. uploadInventory
    // 3. *** TO DO *** upload UserProfile


export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("image uploaded to public/inventory")
    //handle the image upload request
    await UploadRequest.uploadImage(data); 
  } catch (error) {
    console.log(error);
  }
};

export const uploadInventory = (data) => async (dispatch) => {
  // start of the upload process (hadnled by Redux reducer)
  dispatch({ type: "UPLOAD_START" });
  try {
    const newInventory =await UploadRequest.
    uploadInventory(data); //  handle the upload of inventory data-- passes the data param to the newInventory variable
    dispatch({ type: "UPLOAD_SUCCESS", data: newInventory.data }); // dispatch action object
    console.log("inventory upload successful")
  } catch (error) {
    console.log(error);
    dispatch({ type: "UPLOAD_FAIL" });
  }
};