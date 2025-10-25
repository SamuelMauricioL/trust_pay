import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-noudemy-purple">NoUdemy</h1>
        </div>
        <button className="text-noudemy-purple hover:text-purple-700 font-semibold text-sm">
          cancelación
        </button>
      </div>
    </header>
  );
}

export default Header;
