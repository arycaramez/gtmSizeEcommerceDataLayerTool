import React, {Fragment, useEffect, useState} from "react";
import {Collapse,Ripple,initTE} from 'tw-elements';// Recursos extra para o módulo tailwind.

const ApprovalDisplayTreeViewCollapse = (props) =>{
    const [collapseState , setCollapseState] = useState(false);

    const iconList = {
        openIcon:'fa-solid fa-chevron-left mr-2',
        closedIcon: 'fa-solid fa-chevron-right mr-2'
    }

    useEffect(()=>{
        initTE({Collapse,Ripple});
    });

    const interact = (event) =>{
        setCollapseState(!collapseState);
        changeIcon(event);
    }

    const changeIcon = (event) =>{
        
        // Acesse o elemento <a> que acionou o clique
        const clickedElement = event.target;
        
        // Lógica para alterar o ícone
        // console.log('Clique no elemento <a>!', clickedElement);

        // Exemplo: Alterar a classe do ícone
        const iconElement = clickedElement.closest('a').querySelector('i');
        // console.log('i: ', iconElement);
        if (iconElement) {
            
            iconElement.className = iconElement.className ===  iconList.closedIcon? iconList.openIcon : iconList.closedIcon;
            
        }
    }

    return(
        <Fragment>
            <ul>
                <li >
                    <a
                    data-te-collapse-init
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href={`#${props.id_element}`}
                    role="button"
                    aria-expanded="true"
                    aria-controls={props.id_element}
                    onClick={interact}    
                    Toggle width collapse                
                    >
                        <i className={iconList.closedIcon}></i>
                        <strong>{props.title}</strong>
                    </a>
                </li>
                <ul 
                data-te-collapse-item 
                id={props.id_element}
                className={`multi-collapse ml-4 mt-1 mb-1 !visible hidden`} //"multi-collapse !visible hidden ml-4 mt-1 mb-1"
                >
                    {props.children}
                </ul>
            </ul>
        </Fragment>
    );
}

export default ApprovalDisplayTreeViewCollapse;