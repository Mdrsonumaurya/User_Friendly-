import { AlertCircle, RefreshCcw } from "lucide-react";
import Home from "../Header/Home";

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        <div className="flex justify-center mb-6">
          <AlertCircle className="h-16 w-16 text-red-500" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          We're sorry, but it seems there was an error processing your request.
          Please try again or return to the homepage.
        </p>

        <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 space-x-2"
          >
            <RefreshCcw className="h-5 w-5" />
            <span>Try Again</span>
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200 space-x-2"
          >
            {/* <Home className="h-5 w-5" /> */}
            <span>Back to Home</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Error Code: 500 | If the problem persists, please contact support at{" "}
            <a
              href="mailto:support@example.com"
              className="text-red-600 hover:text-red-700"
            >
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
