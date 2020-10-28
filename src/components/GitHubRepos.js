import React, { useEffect } from "react";
import * as actions from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

export const GitHubRepos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAllGitHubPublicRepos());
  }, [dispatch]);

  const schools = useSelector((state) => state);

  console.log(schools);

  return <h1>hhh</h1>;
};
