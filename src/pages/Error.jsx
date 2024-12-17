import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page Not Available</h2>
        <p className="text-gray-500 mt-2">This page is not available, work in progress...</p>
        <button
          onClick={handleGoBack}
          className="mt-6 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Error;
