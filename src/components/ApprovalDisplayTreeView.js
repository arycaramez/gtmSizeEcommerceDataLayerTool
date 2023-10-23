import React, {Fragment, useEffect, useState} from "react";
import { Collapse, initTE, Ripple} from "tw-elements"; 

import ApprovalDisplayTreeViewCollapse from "./CollapseElement";

const ApprovalDisplayTreeView = ({data,collapseID}) => {
    const [dataTemp, setDataTemp] = useState(data || [])

    // Verifica se os ID's devem ser exibidos nas listas de validação 
    var checkShowListID = false;

    const ecommerceExiste = dataTemp && dataTemp.some(objeto =>
        objeto.logs && objeto.logs.some(log => log.ecommerce)
    );

    const itemsExiste = dataTemp && dataTemp.some(objeto =>
        objeto.ecommerce && objeto.ecommerce.logs && objeto.ecommerce.logs.some(log => log.items)
    );

    const iconList = {
        errorIcon:'fa-solid fa-circle-xmark mr-1',
        warningIcon:'fa-solid fa-circle-exclamation mr-1',
        successIcon:'fa-solid fa-circle-check mr-1',
    }

    useEffect(()=>{
        setDataTemp(data || []);
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

    const rendererStateMessage = (item) => {
        var message = <></>;

        var icon = getIconStatus(item.status);

        if (item.status === "success") {
            message = (
            <div className="text-green-700">
                <i className={icon}></i>
                <span dangerouslySetInnerHTML={{ __html: item.log }} />
            </div>
            );
        } else if (item.status === "error") {
            message = (
            <div className="text-red-700">
                <i className={icon}></i>
                <span dangerouslySetInnerHTML={{ __html: item.log }} />
            </div>
            );
        } else if (item.status === "warning") {
            message = (
            <div className="text-yellow-700">
                <i className={icon}></i>
                <span dangerouslySetInnerHTML={{ __html: item.log }} />
            </div>
            );
        } else if(item.status === "none" || item.status === "text"){
            message = (<div> <span dangerouslySetInnerHTML={{ __html: item.log }}/> </div>);
        }

        return (<> {message}</>);
    };

    const rendererExibitionLogic = (item,key,array,collapse_id) =>{
        var message = <></>;
        const id_element = `co_${key}_${collapse_id}`;
        var keyIsNaN = isNaN((parseInt(key)));
        
        if(key === "metadata") return;


        if(item[key].hasOwnProperty("show_list_id")){
            checkShowListID = item[key].show_list_id;
        }
        
        if (item[key].log) {
            message = ( <> {rendererStateMessage(item[key])} </> );
        }else{
            if(key === "ecommerce" && ecommerceExiste) return;
            if(key === "items" && itemsExiste) return;

            if(key !== "logs" && key !== "show_list_id" && (keyIsNaN || !keyIsNaN && checkShowListID)){
                message = (
                    <ApprovalDisplayTreeViewCollapse
                    id_element={id_element}
                    title={key}
                    initCollapsed={!isNaN(key) && key !== '0'? true : false}
                    >
                        <>{renderizarItem(item[key],id_element)}</>
                    </ApprovalDisplayTreeViewCollapse>
                );
            }else{
                message = ( <> {renderizarItem(item[key],id_element)} </> );
            }
        }

        return ( <>{message}</> );
    }

    const renderizarItem = (item,collapse_id) => {
        return (
            <>
                {Object.entries(item).map(([key, array]) => (
                    <>
                        {rendererExibitionLogic(item,key,array,collapse_id)}                        
                    </>
                ))}
            </>
        )
    };

    return (
        <Fragment>
            <ul className="pb-2 pt-2 ml-4 mt-1 mb-1 ">
                {dataTemp.map((key, array) => (
                    <>
                        {renderizarItem(key,collapseID+"_start")}
                    </>
                ))}
            </ul>
        </Fragment>
    );
}

export default ApprovalDisplayTreeView;