import React, {useEffect, Fragment, useRef } from 'react';
import {initTE, Sidenav} from 'tw-elements';// Recursos extra para o módulo tailwind.

const MenuNavigationLeft = ({children,index="offcanvasExample",initHidden=true, title="Your Title"}) => {
    useEffect(()=>{
        initTE({ Sidenav});
    },[]);

    return (
        <Fragment>
            <nav
            id={index}
            className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
            data-te-sidenav-init
            data-te-sidenav-hidden={initHidden}
            data-te-sidenav-position="absolute">
                <ul class="relative m-0 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
                    <li class="relative p-2 w-full">
                        <div className='w-full flex h-5 items-center truncate rounded-[5px] px-2 py-4 text-[0.875rem] text-white'>
                            {title}
                        </div>                    
                    </li>
                    {children}
                </ul>
            </nav>
        </Fragment>
    );
};

const NavigationScreenChanger = ({children,onClickAction=()=>{},ariaCurrent=false,targetIndex=null})=>{
    const classNavigationBtn = `
    select-none text-white/60 flex h-5 mb-1 cursor-pointer
    items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem]
    text-gray-600 outline-none transition duration-300 ease-linear 
    hover:bg-white/10 hover:outline-none
    focus:bg-white/10 focus:outline-none`;

    const meuElementoRef = useRef(null);

    useEffect(() => {

        var meuElemento = meuElementoRef.current;
        
        if(meuElemento){
            if(ariaCurrent && meuElemento.classList.contains('text-white/60')){
                meuElemento.classList.remove('text-white/60');
                meuElemento.classList.add('text-white');
            }
            if(!ariaCurrent && meuElemento.classList.contains('text-white')){
                meuElemento.classList.remove('text-white');
                meuElemento.classList.add('text-white/60');
            }
        }
    }, [ariaCurrent]);

    const onBtnClick = (event) =>{
        onClickAction(event);
    }

    return(
        <Fragment>
            <li class="relative">
                {targetIndex === null ? (
                    <a 
                    ref={meuElementoRef}
                    className={classNavigationBtn}
                    type="button"
                    data-te-sidenav-link-ref
                    onClick={onBtnClick}
                    >
                        {children}
                    </a>
                ):(
                    <a 
                    ref={meuElementoRef}
                    className={classNavigationBtn}
                    aria-current={ariaCurrent}
                    type="button"
                    data-te-sidenav-link-ref
                    data-te-sidenav-toggle-ref
                    aria-haspopup="true"
                    data-te-target={`#${targetIndex}`}
                    aria-controls={`#${targetIndex}`}
                    onClick={onBtnClick}
                    >
                        {children}
                    </a>
                )}
            </li>
        </Fragment>
    )
}

const NavgationCollapseElement = ({children,title="Your Title",initHidden=true}) =>{
    return(
        <Fragment>
            <li class="relative">
                <a
                class={`
                text-white/80 flex h-5 mb-1 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem]
                text-gray-600 outline-none transition duration-300 ease-linear hover:bg-white/10 hover:outline-none 
                `}
                data-te-sidenav-link-ref                
                >
                    <span
                    class="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                        <i class="fa-solid fa-minus"></i>
                    </span>
                    <span>{title}</span>
                    <span
                    class="absolute right-0 ml-auto mr-[0.8rem] transition-transform duration-300 ease-linear motion-reduce:transition-none [&>svg]:text-white-600 dark:[&>svg]:text-white-300"
                    data-te-sidenav-rotate-icon-ref
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd" />
                        </svg>
                    </span>
                </a>
                {initHidden ? (
                    <ul
                    class="!visible relative m-0 hidden list-none p-0 pl-6 data-[te-collapse-show]:block "
                    data-te-sidenav-collapse-ref
                    // data-te-collapse-show
                    >
                        {children}
                    </ul>
                ):(
                    <ul
                    class="!visible relative m-0 hidden list-none p-0 pl-6 data-[te-collapse-show]:block "
                    data-te-sidenav-collapse-ref
                    data-te-collapse-show
                    >
                        {children}
                    </ul>
                )}
            </li>
        </Fragment>
    )
}

export {
    MenuNavigationLeft,
    NavigationScreenChanger ,
    NavgationCollapseElement,
};
