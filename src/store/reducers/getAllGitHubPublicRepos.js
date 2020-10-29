import * as actionTypes from "../actions/actionTypes";

const initState = {
  response: null,
  error: null,
  isLoading: false,
};

export const getAllGitHubPublicRepos = (state = initState, action) => {
  console.log(state);
  switch (action.type) {
    case actionTypes.START_FETCHING_REPOS:
      return {
        ...state,
        isLoading: true,
        error: null,
        response: null,
      };
    case actionTypes.FETCHING_REPOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        response: { ...state.response, ...action.payload },
      };
    case actionTypes.FETCHING_REPOS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        response: null,
      };
    default:
      return { ...state };
  }
};
