import React, { useEffect, useState, useRef } from "react";
import * as actions from "../store/actions";
import {
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Avatar,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

export const GitHubRepos = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(15);
  const [data, setData] = useState([]);
  const [isBottom, setIsBottom] = useState(false);
  const dispatch = useDispatch();
  const listRef = useRef();

  const fetchRepos = (page, size) => {
    dispatch(
      actions.getAllGitHubPublicRepos({ q: "js", page: page, per_page: size })
    );
  };

  useEffect(() => {
    fetchRepos(page, size);
    function handleScroll() {
      const scrollTop =
        (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) ||
        document.body.scrollHeight;
      if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
        setIsBottom(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isBottom) {
      setPage(page + 1);
      fetchRepos(page, size);
      setIsBottom(false);
    }
  }, [isBottom]);

  const repos = useSelector((state) => state.getAllRepos.response);

  console.log(repos);

  return (
    <List>
      {repos &&
        repos.items.map((repo) => {
          return (
            <ListItem key={repo.id} button>
              <ListItemIcon>
                <Avatar>{repo.owner.avatar_url}</Avatar>
              </ListItemIcon>
              <ListItemText primary={`${repo.name}`}> </ListItemText>
            </ListItem>
          );
        })}
    </List>
  );
};
