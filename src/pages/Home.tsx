
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";

const Home: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative bg-white overflow-hidden">
        {/* Hero section */}
        <div className="bg-gradient-to-b from-tut-purple/10 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Welcome to the</span>
              <span className="block text-tut-purple">SASO System</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              A centralized platform for students, tutors, lecturers, and administrators at Tshwane University of Technology.
            </p>
            <div className="mt-10 sm:flex sm:justify-center">
              <div className="rounded-md shadow">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/login">Log in</Link>
                </Button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Streamline Your Academic Journey
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                The SASO System brings together all essential university tools in one place.
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="pt-6 fade-in">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-tut-purple rounded-md shadow-lg">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="2"
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                            <line x1="16" x2="16" y1="2" y2="6"/>
                            <line x1="8" x2="8" y1="2" y2="6"/>
                            <line x1="3" x2="21" y1="10" y2="10"/>
                            <path d="M8 14h.01"/>
                            <path d="M12 14h.01"/>
                            <path d="M16 14h.01"/>
                            <path d="M8 18h.01"/>
                            <path d="M12 18h.01"/>
                            <path d="M16 18h.01"/>
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Schedule Management</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Access your class schedules, tutorial sessions, and important academic dates all in one place.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-tut-blue rounded-md shadow-lg">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="2"
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Communication</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Easily communicate with lecturers, tutors, and fellow students through our integrated messaging system.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 fade-in" style={{ animationDelay: "0.4s" }}>
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-tut-purple rounded-md shadow-lg">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="white" 
                            strokeWidth="2"
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          >
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                          </svg>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Academic Resources</h3>
                      <p className="mt-5 text-base text-gray-500">
                        Access course materials, academic reports, and performance analytics to improve your learning outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News and announcements section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">News & Announcements</h2>
              <p className="mt-4 text-gray-500">Stay informed with the latest updates from TUT</p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden slide-in">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-xs font-medium text-tut-blue bg-blue-100 rounded px-2 py-1">NEWS</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">May 1, 2025</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">SASO System Launch</h3>
                    <p className="mt-2 text-sm text-gray-500">The new SASO platform has officially launched, providing students and staff with improved access to university resources.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden slide-in" style={{ animationDelay: "0.2s" }}>
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-xs font-medium text-tut-purple bg-purple-100 rounded px-2 py-1">EVENT</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">May 15, 2025</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">Academic Excellence Awards</h3>
                    <p className="mt-2 text-sm text-gray-500">Join us for the annual Academic Excellence Awards ceremony, celebrating student achievements.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden slide-in" style={{ animationDelay: "0.4s" }}>
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-xs font-medium text-green-600 bg-green-100 rounded px-2 py-1">UPDATE</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">June 1, 2025</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">System Maintenance Notice</h3>
                    <p className="mt-2 text-sm text-gray-500">Scheduled maintenance will occur on June 5th from 22:00-02:00. Plan accordingly.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" asChild>
                <Link to="/announcements">View All Announcements</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
