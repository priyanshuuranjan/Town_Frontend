import React from "react";
import { Link } from "react-router-dom";
import Sofa from "../Assets/sofa1.jpg";
import CardGrid from "./Card";

const Home = () => {
  return (
    <div className="w-full">
      {/* Landing Section */}
      <div className="flex flex-col lg:flex-row w-full h-screen p-0">
        {/* Left Half - Image */}
        <div className="flex-1">
          <img
            src={Sofa}
            alt="Furniture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Half - Text Content */}
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-lg px-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">The Reserve</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are excited to share our curated collection of consignment items
              here on Town & Sea's Reserve. All of these exceptional pieces are
              immediately available at the listed price. Please contact us with
              any questions, offers, or shipping inquiries!
            </p>
            <Link to="/card">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-all">
                SHOP NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
