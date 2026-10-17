import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-18 text-gray-50 bg-blue-900 flex justify-center">
      <div className="w-7xl flex items-center justify-between">
        {/* logo */}
        <div className="flex items-center gap-5">
          <img
            className="w-12"
            src="https://i.pinimg.com/736x/8b/1a/f8/8b1af871b2fbfae24e4cdcddb0b4af7f.jpg"
            alt=""
          />
          <h2 className="text-2xl font-bold">Shopping</h2>
        </div>

        <nav>
          <ul className="flex items-center gap-10">
            <Link to={"/"}>Home</Link>
            <Link to={"/products"}>Product</Link>
            <Link to={"/cart"}>Cart</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
