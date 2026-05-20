import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "@/lib/helmet";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof console !== "undefined") {
      console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page not found | Your Local Pergola Installer</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl tracking-wide uppercase mb-4">404</h1>
          <p className="mb-4 text-xl text-gray-600">Oops! Page not found</p>
          <a href="/" className="text-blue-500 underline hover:text-blue-700">
            Return to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
