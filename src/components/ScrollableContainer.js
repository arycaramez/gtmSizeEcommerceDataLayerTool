import React, {Fragment, useEffect } from 'react';
import {initTE,PerfectScrollbar} from 'tw-elements'; // Importe o tw-elements aqui

const ScrollableContainer = ({children}) => {
  useEffect(() => {
    // Inicialize o tw-elements
    initTE({PerfectScrollbar});

    // Se você precisar de inicializações específicas, pode adicioná-las aqui
  }, []);

  return (
    <Fragment>
        <div
        // data-te-class-ps="
        // opacity:0; 
        // overflow:hidden;
        // display:none !important;
        // "
        data-te-class-ps="overflow-hidden"
        data-te-perfect-scrollbar-init
        data-te-suppress-scroll-x="true"
        class="relative w-[100%] h-[520] p-1 ps overflow-hidden rounded-lg">
            {children}
        </div>
    </Fragment>
  );
};

export default ScrollableContainer;