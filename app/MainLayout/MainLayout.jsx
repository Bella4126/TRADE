// 'use client';

// import React, { useState } from 'react';
// import NavBar from './NavBar';
// import SideBar from './SideBar';

// const MainLayout = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };
  

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-800">
//       {/* Navbar */}
//       <div className="fixed top-0 left-0 right-0 z-20">
//         <NavBar toggleSidebar={toggleSidebar} />
//       </div>

//       {/* Sidebar and Content */}
//       <div className="flex flex-grow pt-16">
//         {/* Sidebar */}
//         <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

//         {/* Main Content */}
//         <div 
//           className={`flex-grow transition-all duration-300 ${
//             sidebarOpen ? 'ml-64' : 'ml-16'
//           }`}
//         >
//           <main className="p-4">{children}</main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;


'use client';

import React, { useState } from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar should be collapsed by default

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  

  return (
    <div className="flex min-h-screen bg-gray-800">
      {/* Sidebar - Narrow width like in screenshot */}
      <div className="w-16 flex-shrink-0 bg-gray-900">
        <SideBar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Right side content - Navbar + Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar - Spans the remaining width after sidebar */}
        <div className="h-16 flex-shrink-0 bg-gray-800">
          <NavBar toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Content - Below navbar, takes remaining space */}
        <div className="flex-1 overflow-auto bg-gray-800">
          <main className="p-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;