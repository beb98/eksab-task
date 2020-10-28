import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubLogin from "github-login";
import { setItemInLocalStorage } from "../helper/localStorage";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const Login = () => {
  const classes = useStyles();

  const onSuccess = (response) => {
    if (response && response.code) {
      window.location.href = "/home";
      setItemInLocalStorage("code", response.code);
    }
  };
  const onFailure = (response) => console.error(response);

  return (
    <GitHubLogin
      clientId="2648c2f6c78a6b50b7bc"
      onSuccess={onSuccess}
      onFailure={onFailure}
      redirectUri=""
    />
  );
};
