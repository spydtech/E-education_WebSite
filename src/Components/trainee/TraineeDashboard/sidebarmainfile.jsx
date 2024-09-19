import React, { useState } from 'react';
import TraineeSidebar from './TraineeDashboard';
function SidebarMain() {
  const [theme, setTheme] = useState('theme1');

  return (
    <div className={`min-h-screen ${theme}`}>
      <TraineeSidebar setTheme={setTheme} />
      <main className="p-8">
        {/* Main content goes here */}
      </main>
    </div>
  );
}

export default SidebarMain;
