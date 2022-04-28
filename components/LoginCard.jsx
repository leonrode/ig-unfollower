import { useState } from "react";

import { fetchNonFollowers } from "../_api/api";

const LoginCard = ({ onResponse }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const handleClick = async () => {
    setLoggingIn(true);
    const result = await fetchNonFollowers(username, password);
    setLoggingIn(false);
    onResponse(result);
  };

  return (
    <div className="w-1/4 h-3/4 bg-white rounded-lg flex flex-col items-center justify-center p-8">
      <h1 className="font-bold text-4xl text-black">Instagram Unfollower</h1>
      <div className="my-8 w-1/5 h-[1px] border-[1px] border-black"></div>
      <h3 className="text-gray font-light">
        Log in using your Instagram credentials
      </h3>
      <input
        placeholder="Username"
        className="my-4 font-light px-4 py-2 w-full bg-[#ffffff] outline-none border-none rounded-md"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        placeholder="Password"
        className="mb-4 font-light px-4 py-2 w-full bg-[#ffffff] outline-none border-none rounded-md"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <div
        onClick={handleClick}
        className="mb-8 bg-gradient-to-br from-orange to-purple font-bold text-white px-8 py-2 rounded-md cursor-pointer"
      >
        {loggingIn ? (
          <div className="w-4 h-4 rounded-full border-2 border-white border-l-black animate-spin"></div>
        ) : (
          "Login"
        )}
      </div>
      <p className="text-gray font-light text-center">
        This project is not affiliated with Instagram.
      </p>
      <p className="text-gray font-light text-center">
        <br />
        Your passwords are never stored. <br />
        View the{" "}
        <a
          href="https://github.com/leonrode/ig-unfollower"
          className="cursor-pointer text-blue-500"
        >
          source
        </a>
        .
      </p>
    </div>
  );
};

export default LoginCard;
