import axios from "axios";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailData = await axios.get(
    `https://api.rawg.io/api/games/${id}?key=30d0f6b2f86e4c94a57e1e5632055702`
  );
  const screenShotData = await axios.get(
    `https://api.rawg.io/api/games/${id}/screenshots?key=30d0f6b2f86e4c94a57e1e5632055702`
  );


  //console.log('detail',detailData.data)
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
