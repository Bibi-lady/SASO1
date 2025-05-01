
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2 space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-tut-purple">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="text-gray-500 hover:text-tut-purple">
              Terms of Use
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-tut-purple">
              Contact Us
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1 flex flex-col sm:flex-row items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                © {currentYear} Tshwane University of Technology. All rights reserved.
              </p>
            </div>
            <div className="mt-2 sm:mt-0 sm:ml-4">
              <p className="text-xs text-gray-400">
                SASO System v1.0.0
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
