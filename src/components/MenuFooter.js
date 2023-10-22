import React,{useEffect} from 'react';
import { Offcanvas, Ripple, initTE } from "tw-elements";

const MenuFooter = ({ title,children, index="offcanvasBottom"}) => {
    useEffect(()=>{
        initTE({ Offcanvas, Ripple });
    })

    return (
        <div>

            <div className='fixed right-0 bottom-0 text-[1rem]'>
                <button
                    id={`${index}_button`}
                    className="mr-1.5 inline-block p-2 bg-gray-400 text-white rounded-tl-lg rounded-tr-lg opacity-75 hover:bg-gray-500 active:bg-gray-500 transition duration-300"
                    type="button"
                    data-te-offcanvas-toggle
                    data-te-target={`#${index}`}
                    aria-controls={`${index}`}
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                    <span className='mr-1 ml-1'>
                        <i className="fa-solid fa-angles-up"></i>
                    </span>
                </button>
            </div>


            <div
            className="invisible fixed bottom-0 left-0 right-0 z-[1045] flex h-1/3 max-h-full max-w-full translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
            tabindex="-1"
            id={`${index}`}
            aria-labelledby={`${index}_label`}
            data-te-offcanvas-init>
                <div className="flex items-center justify-between p-4">
                    <h5
                    className="mb-0 font-semibold leading-normal"
                    id={`${index}_label`}>
                        {title}
                    </h5>
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
                <div className="small flex-grow overflow-y-auto p-4">
                    {children && (children)}
                </div>
            </div>
        </div>
    );
};

export default MenuFooter;
