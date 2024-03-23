import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-slate-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] opacity-85"
        style={{
          backgroundImage: "url(/img16.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-950 from-black">
              Welcome To WebRT
            </span>{" "}
          </h1>
          <p className="text-2xl text-purple-900 bg-white mb-8 font-semibold shadow-lg">
            This is the place where amazing things happen.
          </p>

          {/* Buttons */}
          <div>
            <button className="bg-black hover:bg-orange-500 text-white font-bold py-3 px-6 rounded mr-4 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <Link to="/documentation">Documentation</Link>
            </button>
            <button className="bg-black text-blink hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <Link to="/shop">Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
