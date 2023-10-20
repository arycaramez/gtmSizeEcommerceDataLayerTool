import React, {Fragment, useEffect } from 'react';
import {initTE,PerfectScrollbar} from 'tw-elements'; // Importe o tw-elements aqui

const ScrollableContainer = ({children}) => {
  useEffect(() => {
    initTE({PerfectScrollbar});
  }, []);

  return (
    <Fragment>
        <div
        data-te-class-ps="overflow-hidden"
        data-te-perfect-scrollbar-init
        data-te-suppress-scroll-x="true"
        className="relative w-[100%] h-[530] p-1 ps overflow-hidden"
        >
            {children}
        </div>
    </Fragment>
  );
};

export default ScrollableContainer;