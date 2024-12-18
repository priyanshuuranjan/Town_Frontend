import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Sofa from "../Assets/sofa1.jpg";
import Chairs from "../Assets/Chairs.jpg";
import Desk1 from "../Assets/Desk1.jpg";

const Home = () => {
  const testimonials = [Sofa, Chairs, Desk1];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row w-full h-screen">
        <div className="flex-1 relative overflow-hidden">
          <img
            src={testimonials[currentIndex]}
            alt={`Testimonial ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-all z-10"
          >
            &#9664;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 transition-all z-10"
          >
            &#9654;
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-lg px-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              The Reserve
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are excited to share our curated collection of consignment
              items here on Town & Sea's Reserve. All of these exceptional
              pieces are immediately available at the listed price. Please
              contact us with any questions, offers, or shipping inquiries!
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
