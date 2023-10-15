import React, {Fragment, useState, useEffect} from "react"
import ApprovalDisplayCollapse from "./ApprovalDisplayCollapse";

import ApprovalDisplayTreeView from "./ApprovalDisplayTreeView";

const ApprovalDisplayListVisualizer = ({analysis=[],})=>{
    const [data,setData] = useState(analysis || []);
    
    useEffect(()=>{
        setData(analysis || []);
    });

    const getNewCollapseID = (id) => {
        return "collapse_"+id;
    }

    function GetElementsExeptEventName(data){
        var array = [];
        for (var chave in data) {
            if(chave === "event") continue;
            array.push({  [chave]: data[chave]});
        }
        return array;
    }

    return(
        <Fragment>
            {data && (
                data.map((item,index)=>

                    // Collapse do nome do evento
                    <ApprovalDisplayCollapse 
                    data={item}
                    collapseId={getNewCollapseID(index)}>

                        {/* Exibe o conteúdo referente ao evento */}
                        <ApprovalDisplayTreeView 
                        data={GetElementsExeptEventName(item)} 
                        collapseID={getNewCollapseID(index)}/>

                    </ApprovalDisplayCollapse>   

                )
            )}
        </Fragment>
    );
}

export default ApprovalDisplayListVisualizer;