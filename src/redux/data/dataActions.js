// log
import store from "../store";

const fetchDataRequest = () => {
  return {
    type: "CHECK_DATA_REQUEST",
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: "CHECK_DATA_SUCCESS",
    payload: payload,
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: "CHECK_DATA_FAILED",
    payload: payload,
  };
};

const createItemRequest = (payload) =>{
  return {
    type: "CREATE_ITEM_REQUEST",
  }
}

const createItemSuccess = (payload) =>{
  return {
    type: "CREATE_ITEM_SUCCESS",
  }
}

const createItemFail = (payload) =>{
  return {
    type: "CREATE_ITEM_FAIL",
  }
}

export const createItem = () => {
  return async (dispatch) =>{
    dispatch(createItemRequest())
  }
}

export const createItemS = () =>{
  return async (dispatch) =>{
    dispatch(createItemSuccess())
  }
}

export const createItemF = () =>{
  return async (dispatch) => {
    dispatch(createItemFail())
  }
}
export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const auctionAddress = []
      const auctionId = []
      let length = await store
        .getState()
        .blockchain.smartContract.methods.liveAuctionCount()
        .call();
      for (let index = 0 ; index<length ; index++) {
        let add = await getAddress(index);
        let id = await getId(index);
        // console.log("id", id);
        auctionAddress.push(add);
        auctionId.push(id)
      }

      dispatch(
        fetchDataSuccess({
          auctionAddress:auctionAddress,
          auctionId:auctionId
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed("Could not load data from contract."));
    }
  };
};

const getAddress = id => {
  return getAddresscall(id);
}

const getAddresscall = id => {
  return new Promise(resolve =>{
   return resolve(store
        .getState()
        .blockchain.smartContract.methods.liveAuctionAddress(id)
        .call())
  })
}

const getId = id =>{
  return getIdcall(id);
}

const getIdcall = id => {
  return new Promise(resolve =>{
    return resolve(store
      .getState()
      .blockchain.smartContract.methods.liveAuctionId(id)
      .call())
  })
}