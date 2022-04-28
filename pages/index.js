import LoginCard from "../components/LoginCard";
import UnfollowCard from "../components/UnfollowCard";
import { useState } from "react";
export default function Home() {
  const [result, setResult] = useState(null);
  const onLoad = (res) => {
    setResult(res.nonFollowers);
  };
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-br from-orange to-purple">
      {result ? (
        <UnfollowCard nonFollowers={result} />
      ) : (
        <LoginCard onResponse={onLoad} />
      )}
    </div>
  );
}
