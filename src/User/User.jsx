import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();

  return (
    <div className="w-full h-24 bg-amber-200 text-black text-3xl flex items-center justify-center rounded-lg shadow-lg">
      {id ? `User: ${id}` : "User ID Not Found"}
    </div>
  );
};

export default User;
