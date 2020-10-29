import * as actionTypes from "./actionTypes";
import { getService } from "../../services/getService";
import { baseURL } from "../../baseURL";
import { ErrorAlert } from "../../helper/alerts";

export const getAllGitHubPublicRepos = (query) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.START_FETCHING_REPOS });

    return getService(baseURL, undefined, { ...query })
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
        ErrorAlert("Something went wrong" + err);
      });
  };
};
