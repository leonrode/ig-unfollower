import axios from "axios";

const fetchNonFollowers = async (username, password) => {
  const res = await axios.post("/api/fetch", { username, password });

  return res.data;
};

const unfollowUser = async (user_pk) => {
  const res = await axios.post("/api/unfollow", { user_pk });

  return res.data;
};

export { fetchNonFollowers, unfollowUser };
