const UnfollowCard = ({ nonFollowers }) => {
  return (
    <div className=" overflow-y-auto w-3/4 h-3/4 bg-white rounded-lg flex flex-wrap justify-center p-8">
      {nonFollowers.map((f, index) => (
        <div className=" flex flex-col items-center mx-8" key={index}>
          <img
            crossOrigin="Anonymous"
            className="w-16 h-16 rounded-full"
            src={
              f.profile_pic_url.indexOf("/instagram.") !== -1
                ? "/default_avatar.jpg"
                : f.profile_pic_url
            }
          ></img>
          <p className="mt-2 font-normal">{f.username}</p>
          <div className="font-normal bg-blue-500  text-white px-4 py-1 rounded-md cursor-pointer">
            Unfollow
          </div>
        </div>
      ))}
    </div>
  );
};

export default UnfollowCard;
