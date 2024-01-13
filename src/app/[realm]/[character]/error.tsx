"use client";
import Image from "next/image";

const Error = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col space-y-2">
      <Image
        src="https://cdn.7tv.app/emote/60b885525d373afbd6d85264/4x.webp"
        width={100}
        height={100}
        alt="monkaS"
      />
      <h1>Unable to find character!</h1>
    </div>
  );
};

export default Error;
