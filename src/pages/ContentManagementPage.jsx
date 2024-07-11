import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Lottie from "lottie-react";
import contentNotFoundAnimation from "../assets/lottie files/ContentNotFound.json";

const ContentManagementPage = () => {
  return (
    <div className="flex h-screen bg-gray-100" style={{ width: '1150px' }}>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-xl font-bold mb-6">
              Content management
            </h3>
            <div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-96 h-96 mb-4">
                  <Lottie animationData={contentNotFoundAnimation} loop={true} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  No Content available
                </h3>
                <button className="bg-indigo-700 text-white px-6 py-2 rounded-md mb-2">
                  Create post
                </button>
                <p className="text-gray-500 text-sm">
                  Create some post to explore content Management
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ContentManagementPage;