import React, {Fragment, useEffect, useState} from "react";
import {Collapse,Ripple,initTE} from 'tw-elements';// Recursos extra para o módulo tailwind.


// import ApprovalDisplayTreeView from "./ApprovalDisplayTreeView";


const ApprovalDisplayCollapse = ({data=[], collapseId="collapse_id_0",children=null}) =>{    
    const [ dataTemp, setDataTemp ] = useState(data || []);
    const [collapseIdTemp,setCollapseIdTemp] = useState(collapseId || []);
    const [childrenTemp,setChildrenTemp] = useState(children || []);

    useEffect(()=>{
        initTE({Collapse,Ripple});
    })

    useEffect(()=>{
        if(data) setDataTemp(data || []);
    },[data]);

    useEffect(()=>{
        setCollapseIdTemp(collapseId || []);
    },[collapseId]);

    useEffect(()=>{
        setChildrenTemp(children || []);
    },[children]);

    return(
        <Fragment>
            <div className="py-0.5">
                <span className="inline-flex w-[100%]"
                >
                    <a
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        className ="
                        w-full mr-1 
                        inline-block rounded
                        bg-primary px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal
                        text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out 
                        hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                        focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                        focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                        dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                        dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                        dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                        data-te-collapse-init
                        href={"#"+collapseIdTemp}
                        role="button"
                        aria-expanded="false"
                        aria-controls={collapseIdTemp}>
                        {dataTemp && (
                            dataTemp.event
                        )}
                    </a>
                    <button 
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="float-right text-[1rem] w-auto inline-block rounded bg-primary px-2 pb-2 pt-2.5 text-xs 
                    font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 
                    ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:outline-none focus:ring-0 active:bg-primary-700 
                    active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                    dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] 
                    dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                        <i class="fa-regular fa-copy pl-1 pr-1"></i>
                    </button>
                </span>
                <div 
                className ="!visible hidden" 
                id={collapseIdTemp} 
                data-te-collapse-item 
                // data-te-collapse-show 
                >
                    <div className ="
                    block rounded-lg 
                    bg-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] 
                    gray:bg-neutral-700 gray:text-neutral-50">
                        {childrenTemp}
                    </div>
                </div>
            </div>            
        </Fragment>
    );
}

export default ApprovalDisplayCollapse;