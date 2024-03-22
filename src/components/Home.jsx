import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="absolute inset-0 -z-10 h-full w-full bg-slate-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] opacity-85"
        style={{ backgroundImage: 'url(/img16.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <h1 className="text-6xl text-white font-bold mb-8 shadow-lg">Welcome to My Homepage</h1>
          <p className="text-2xl text-white mb-8 font-semibold shadow-lg">This is the place where amazing things happen.</p>
          
          {/* Buttons */}
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded mr-4 shadow-md transition duration-300 ease-in-out transform hover:scale-105">Get Started</button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">Shop Now</button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
