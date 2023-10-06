import React, {Fragment, useEffect, useState} from "react";
import {Collapse,Ripple,initTE} from 'tw-elements';// Recursos extra para o módulo tailwind.

import ApprovalDisplayTreeView from "./ApprovalDisplayTreeView";



const ApprovalDisplayCollapse = (props) =>{    
    const [ data, setData ] = useState(props.data || [])

    useEffect(()=>{
        initTE({Collapse,Ripple});

        setData(props.data || []);
        // console.log("data",props.data);
    })

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
            <div class="py-0.5">
                <a
                    className ="w-[100%] inline-block rounded bg-primary px-2 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-collapse-init
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    href={"#"+props.collapseId}
                    role="button"
                    aria-expanded="false"
                    aria-controls={props.collapseId}>
                    {data && (
                        data.event
                    )}
                </a>
                <div className ="!visible hidden" id={props.collapseId} data-te-collapse-item>
                    <div className ="block rounded-lg bg-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] gray:bg-neutral-700 gray:text-neutral-50">
                        <ApprovalDisplayTreeView data={GetElementsExeptEventName(data)}/>
                    </div>
                </div>
            </div>            
        </Fragment>
    );
}

export default ApprovalDisplayCollapse;