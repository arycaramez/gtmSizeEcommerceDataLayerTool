import React, { Fragment } from 'react';

const MenuNavigation = ({children,index="offcanvasExample",activeFloatingButton=true,title="Your Title"}) => {

  return (
    <Fragment>        
        {activeFloatingButton && (
            <div className='fixed left-0 bottom-0 text-[1.5rem]'>
                <button
                className="mr-1.5 inline-block p-2 bg-gray-400 text-white rounded-tr-lg rounded-br-lg opacity-75 hover:bg-gray-500 active:bg-gray-500 transition duration-300"
                type="button"
                data-te-offcanvas-toggle
                data-te-target={`#${index}`}
                aria-controls={index}
                data-te-ripple-init
                data-te-ripple-color="light"
                >
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
        )}

        <div
        className="invisible fixed bottom-0 left-0 top-0 z-[1045] flex w-96 max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
        tabindex="-1"
        id={index}
        aria-labelledby={`${index}_label`}
        data-te-offcanvas-init>
            <div className="flex items-center justify-between p-4">
                <h3
                className="mb-0 font-semibold leading-normal"
                id={`${index}_label`}>
                    {title}
                </h3>        
                <button
                type="button"
                className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                data-te-offcanvas-dismiss>
                    <span
                        className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </span>
                </button>        
            </div>
            <div className='items-center w-full justify-between p-4'>
                {children}
            </div>
        </div>
    </Fragment>
  );
};

export default MenuNavigation;
