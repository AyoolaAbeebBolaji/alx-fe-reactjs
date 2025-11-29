/* import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);
    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white shadow rounded">
      <form onSubmit={handleSearch} className="flex mb-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 p-2 border rounded-l focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600">
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {user && (
        <div className="flex items-center space-x-4 mt-4 p-4 border rounded shadow-sm">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-bold">{user.name || user.login}</h2>
            <p className="text-gray-600">{user.bio || "No bio available"}</p>
            <a
              href={user.html_url}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Visit Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
*/

import { useState } from "react";
import { fetchUserData, fetchUsersAdvanced } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      if (location || minRepos) {
        const data = await fetchUsersAdvanced(username, location, minRepos);
        setUsers(data);
      } else {
        const user = await fetchUserData(username);
        setUsers([user]); // put single user in array for uniform display
      }
    } catch {
      setError("Looks like we can't find the user(s)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 bg-white shadow rounded">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
        />
        <input
          type="number"
          placeholder="Minimum repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500 mt-4">Loading...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mt-4 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center space-x-4 p-4 border rounded shadow-sm"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{user.name || user.login}</h2>
              <p className="text-gray-600">{user.bio || "No bio available"}</p>
              {user.location && (
                <p className="text-gray-500">Location: {user.location}</p>
              )}
              <p className="text-gray-500">
                Repos: {user.public_repos || "N/A"}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                Visit Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
