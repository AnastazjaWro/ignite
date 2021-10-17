import axios from "axios";
import { gameDetailsUrl,gameScreenshotUrl } from "../api";

export const loadDetails = (id) => async(dispatch) => {

  dispatch({
    type: "LOADING_DETAILS",
  });
  const detailData = await axios.get(gameDetailsUrl(id));
  const screenShotData = await axios.get(gameScreenshotUrl(id));
  dispatch({
    type: 'GET_DETAILS',
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};