import React from "react";

const Navbar = () => {
  return (
    <nav className="shadow-md p-2">
      <div className="max-w-4xl mx-auto flex items-center gap-4">
        {/* brand logo */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/016/017/438/original/movie-camera-icon-free-png.png"
          alt="brand logo"
          className="w-14"
        />
        <h2 className="text-red-800 tracking-wider "> Movie App </h2>
      </div>
    </nav>
  );
};

export default Navbar;
