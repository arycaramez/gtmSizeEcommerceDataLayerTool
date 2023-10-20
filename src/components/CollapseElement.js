import React, {Fragment, useEffect, useState} from "react";
import {Collapse,Ripple,initTE} from 'tw-elements';// Recursos extra para o módulo tailwind.

const ApprovalDisplayTreeViewCollapse = ({initCollapsed=false,id_element="id",title="title",children}) =>{
    const [collapseState , setCollapseState] = useState(initCollapsed || true);

    
    // Manter função abaixo
    const getCollapse = (value)=>{
        const defaultState = {
            open:"!visible",
            closed:"!visible hidden",
        }
        return !value ? defaultState.open:defaultState.closed;
    }

    const iconList = {
        openIcon:'fa-solid fa-chevron-left mr-2',
        closedIcon: 'fa-solid fa-chevron-right mr-2',
        // emptyIcon: 'far fa-square mr-1',
    }

    const getIcon = (value)=>{
        return value ? iconList.openIcon:iconList.closedIcon;
    }

    useEffect(() => {
        initTE({ Collapse, Ripple });
    });

    const interact = (event) =>{
        setCollapseState(!collapseState);
        changeIcon(event);
        return false;
    }
    
    // Função usada para alterar o icone da lista colapsada
    const changeIcon = (event) =>{
        // Acessa o elemento que acionou o clique
        const clickedElement = event.target;
        
        // usado para selecionar o elemento do icone
        const iconElement = clickedElement.closest('a').querySelector('i');
        // insere um icone com base no icone usado atualmente
        if (iconElement) {            
            iconElement.className = 
                !collapseState? 
                    iconList.openIcon : iconList.closedIcon;            
        }
    }

    return(
        <Fragment>
            <div>
                <div>
                    <a
                    data-te-collapse-init
                    href={`#${id_element}`}
                    aria-expanded={collapseState}
                    aria-controls={id_element} 
                    data-te-ripple-init             
                    data-te-ripple-color="light"
                    role="button"
                    onClick={interact}    
                    >
                        <i className={getIcon(collapseState)}></i>
                        <strong>{title}</strong>
                    </a>
                </div>
                
                <div 
                data-te-collapse-item 
                data-te-collapse-show={!initCollapsed}
                id={id_element}
                className={`multi-collapse ml-4 mt-1 mb-1 ${getCollapse(initCollapsed)}`}
                >
                    {children}
                </div>
                
            </div>
        </Fragment>
    );
}

export default ApprovalDisplayTreeViewCollapse;