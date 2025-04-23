import React from 'react';
import Quiz from './Quiz';


const Navbar = () => {
 
  return (
    <>
      <nav className="py-4 px-6 flex items-center justify-between mb-5 dark:bg-gray-900">
        <div className="flex item-center">
          <a href="/">
            <div className="text-lg font-bold text-white">Note Maker and Quiz App</div>
          </a>
        </div>
        <div className="text-white">
          <a href="/" className="text-gray-300 hover:text-white mr-4">Home</a>
          <a href="/quiz" className="text-gray-300 hover:text-white mr-4">Quiz</a>
          
        </div>
        {/* <div>
          
              <a href="/sign-in" className="text-gray-300 hover:text-white mr-4">Logout</a>
        </div> */}
      </nav>
    </>
  );
};

export default Navbar;
