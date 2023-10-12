import React, {Fragment, useEffect, useState} from "react";
import { Collapse, initTE, Ripple} from "tw-elements"; 

const ApprovalDisplayTreeView = (props) => {
    const [data, setData] = useState(props.data || [])

    // Verifica se os ID's devem ser exibidos nas listas de validação 
    var checkShowListID = false;

    const iconList = {
        openIcon:'fa-solid fa-chevron-left mr-2',
        closedIcon: 'fa-solid fa-chevron-right mr-2',
        errorIcon:'fa-solid fa-circle-xmark mr-1',
        warningIcon:'fa-solid fa-circle-exclamation mr-1',
        successIcon:'fa-solid fa-circle-check mr-1',
        emptyIcon: 'far fa-square mr-1',
    }

    useEffect(()=>{
        setData(props.data || []);
        initTE({Collapse,Ripple});
    });

    function getIconStatus(status){
        switch (status) {
            case "error": return iconList.errorIcon; 
            case "warning": return iconList.warningIcon; 
            case "success": return iconList.successIcon; 
            default: break;
        }
        return iconList.errorIcon; 
    }

    const changeIcon = (event) =>{
        
        // Acesse o elemento <a> que acionou o clique
        const clickedElement = event.target;
        
        // Lógica para alterar o ícone
        console.log('Clique no elemento <a>!', clickedElement);

        // Exemplo: Alterar a classe do ícone
        const iconElement = clickedElement.closest('a').querySelector('i');
        console.log('i: ', iconElement);
        if (iconElement) {
            
            if(iconElement.className === iconList.openIcon){
                iconElement.className = iconList.closedIcon;
            }else if(iconElement.className === iconList.closedIcon){
                iconElement.className = iconList.openIcon;
            }
        }
    }

    const rendererStateMessage = (item) => {
        var message = <></>;

        var icon = getIconStatus(item.status);

        if (item.status === "success") {
            message = (
            <li className="text-green-700">
                <i className={icon}></i>
                <span dangerouslySetInnerHTML={{ __html: item.log }} />
            </li>
            );
        } else if (item.status === "error") {
            message = (
            <li className="text-red-700">
                <i className={icon}></i>
                <span dangerouslySetInnerHTML={{ __html: item.log }} />
            </li>
            );
        } else if (item.status === "warning") {
            message = (
            <li className="text-yellow-700">
                <i className={icon}></i>
                <span dangerouslySetInnerHTML={{ __html: item.log }} />
            </li>
            );
        } else if(item.status === "none" || item.status === "text"){
            message = (<li> <span dangerouslySetInnerHTML={{ __html: item.log }}/> </li>);
        }

        return (<> {message}</>);
    };

    const rendererExibitionLogic = (item,key,array,collapseID) =>{
        var message = <></>;
        const id_element = `co_${key}_${collapseID}`;
        var itHasNoLogs = item[key].hasOwnProperty("logs") && Object.keys(item[key].logs).length <= 0; 
        var keyIsNaN = isNaN((parseInt(key)));
        
        if(item[key].hasOwnProperty("show_list_id")){
            checkShowListID = item[key].show_list_id;
        }
        
        if (item[key].log) {
            message = ( <> {rendererStateMessage(item[key])} </> );
        }else{
            if(key !== "logs" && key !== "show_list_id" && (keyIsNaN || !keyIsNaN && checkShowListID)){
                message = (
                    <ul>
                        <li >
                            <a
                            data-te-collapse-init
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            href={`#${id_element}`}
                            role="button"
                            aria-expanded="true"
                            aria-controls="multiCollapseExample1"
                            onClick={changeIcon}
                            >
                                <i className={iconList.closedIcon}></i>
                                <strong>{key}</strong>
                            </a>
                        </li>
                        <ul 
                        data-te-collapse-item 
                        id={id_element}
                        className={`multi-collapse !visible hidden ml-4 mt-1 mb-1`}
                        >
                            <>{renderizarItem(item[key],id_element,key)}</>
                        </ul>
                    </ul>
                );
            }else{
                message = ( <> {renderizarItem(item[key],id_element,key)} </> );
            }
        }

        return ( <>{message}</> );
    }

    const renderizarItem = (item,collapseID) => {
        return (
            <>
                {Object.entries(item).map(([key, array]) => (
                    <>
                        {rendererExibitionLogic(item,key,array,collapseID)}                        
                    </>
                ))}
            </>
        )
    };

    return (
        <Fragment>
            <ul className="pb-2 pt-2 ml-4 mt-1 mb-1">
                {data.map((key, array) => (
                    <>
                        {renderizarItem(key,props.collapseID+"_start")}
                    </>
                ))}
            </ul>
        </Fragment>
    );
}

export default ApprovalDisplayTreeView;