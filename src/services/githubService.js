/* import axios from "axios";

// Fetch single user
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Optional: Advanced search for multiple users
export const searchUsers = async (query) => {
  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );
  return response.data.items;
};
*/

import axios from "axios";

// Basic user fetch
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced search with location & min repos
export const fetchUsersAdvanced = async (username, location, minRepos) => {
  let query = username;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );
  return response.data.items; // search API returns items array
};
