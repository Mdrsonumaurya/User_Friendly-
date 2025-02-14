import React, { useEffect, useState } from "react";

const Github = ({ username }) => {
  const [pic, setPic] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const gitPic = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) throw new Error("User not found");
        const data = await response.json();
        setPic(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    gitPic();
  }, [username]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-6 border rounded-lg shadow-lg bg-white max-w-lg mx-auto">
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          {/* Profile Picture */}
          <div className="w-32 h-32">
            <img
              src={pic.avatar_url}
              alt={pic.name || "GitHub Profile"}
              className="w-full h-full rounded-full border border-gray-300 shadow-lg"
            />
          </div>

          {/* User Details */}
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold text-gray-800">
              {pic.name || "User Not Found"}
            </p>
            <p className="text-gray-600 text-lg">
              {pic.followers ?? 0} Followers
            </p>
            <p className="text-gray-500 text-sm">
              {pic.bio || "No bio available"}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Github;
