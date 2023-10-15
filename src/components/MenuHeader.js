import React, { useState,Fragment } from 'react';

const MenuHeader = ({children}) => {
  const [menuStatusBase, setMenuStatusBase] = useState(false);
  const [toolMenuStatusBase, setToolMenuStatusBase] = useState(false);

  const toggleMenu = () => {
    setMenuStatusBase(!menuStatusBase);
  };

  const toggleToolMenu = () => {
    setToolMenuStatusBase(!toolMenuStatusBase);
  };

  return (
        <Fragment>
            <div className="flex justify-between items-center mb-2">
                <div className="font-medium text-[1.25rem]">
                    <span className="ml-4 mr-2">
                        <i className="fa-solid fa-chart-column"></i>
                    </span>
                    Analytical Tools
                </div>
                
                <div>
                    {children}

                    <button
                    className="bg-transparent p-3 rounded-full text-gray-600 text-[1.25rem] active:text-gray-300 focus:text-gray-600"
                    onClick={toggleMenu}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end transition-all duration-300 ease-in-out ${
                menuStatusBase ? 'visible' : 'invisible opacity-0'
                }`}
            >
                <span className='flex-grow' onClick={toggleMenu}/>
                <div className="w-[400px] bg-white p-4 shadow-md">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold">Configurações</h2>
                        <button
                        className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-700 transition-all duration-300 ease-in-out"
                        onClick={toggleMenu}
                        >
                        <i className="fas fa-times text-lg"></i>
                        </button>
                    </div>
                </div>
            </div>

            


            
        </Fragment>
  );
};

export default MenuHeader;
