import React, {Fragment, useEffect, useState, useRef} from "react";
import {Collapse,Ripple,initTE} from 'tw-elements';// Recursos extra para o módulo tailwind.

const ApprovalDisplayTreeViewCollapse = ({initCollapsed=false,id_element="id",title="title",children}) =>{
    const [collapseState , setCollapseState] = useState(initCollapsed || true);

    const collapseArea = useRef(null);
    
    const iconList = {
        openIcon:'fa-solid fa-chevron-left mr-2',
        closedIcon: 'fa-solid fa-chevron-right mr-2',
        // emptyIcon: 'far fa-square mr-1',
    }

    useEffect(() => {
        initTE({ Collapse, Ripple });

        if(collapseArea){
            if(initCollapsed){// minimizado
                if(!collapseArea.current.classList.contains("hidden")){
                    collapseArea.current.classList.add("hidden");
                }
            }else{// maximizado
                collapseArea.current.setAttribute("data-te-collapse-show",true)
                if(collapseArea.current.classList.contains("hidden")){
                    collapseArea.current.classList.remove("hidden");
                }
            }
        }
    },[]);

    useEffect(() => {
        setCollapseState(initCollapsed);
    },[initCollapsed]);

    const interact = (event) =>{
        setCollapseState(!collapseState);
        return false;
    }
    
    return(
        <Fragment>
            <div>
                <div>
                    <a
                    data-te-collapse-init={collapseState}
                    href={`#${id_element}`}
                    aria-expanded={!collapseState}
                    aria-controls={id_element} 
                    data-te-ripple-init             
                    data-te-ripple-color="light"
                    role="button"
                    onClick={interact}   
                    >
                        {collapseState?(
                            <i className={iconList.closedIcon} ></i>
                        ):(
                            <i className={iconList.openIcon} ></i>
                        )}
                        <strong>{title}</strong>
                    </a>
                </div>
                
                <div 
                data-te-collapse-item 
                // data-te-collapse-show
                id={id_element}
                className="multi-collapse ml-4 mt-1 mb-1 !visible hidden"
                ref={collapseArea}
                >
                    {children}
                </div>
                
            </div>
        </Fragment>
    );
}

export default ApprovalDisplayTreeViewCollapse;