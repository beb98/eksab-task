import * as actionTypes from "./actionTypes";
import { getService } from "../../services/getService";
import { baseURL } from "../../baseURL";

export const getAllGitHubPublicRepos = () => {
  return (dispatch) => {
    dispatch({ type: actionTypes.START_FETCHING_REPOS });

    return getService(baseURL)
      .then((resp) => {
        dispatch({
          type: actionTypes.FETCHING_REPOS_SUCCESS,
          payload: resp.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.FETCHING_REPOS_FAIL,
          error: err,
        });
      });
  };
};
