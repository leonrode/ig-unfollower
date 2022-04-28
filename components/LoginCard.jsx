const LoginCard = () => {
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
      ></input>
      <input
        placeholder="Password"
        className="mb-4 font-light px-4 py-2 w-full bg-[#ffffff] outline-none border-none rounded-md"
        type="password"
      ></input>
      <div className="mb-8 bg-gradient-to-br from-orange to-purple font-bold text-white px-8 py-2 rounded-md cursor-pointer">
        Login
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
