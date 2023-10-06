import React, {Fragment, useState, useEffect} from "react"
import ApprovalDisplayCollapse from "./ApprovalDisplayCollapse";

const ApprovalDisplayListVisualizer = (props)=>{
    const [data,setData] = useState(props.analysis || []);

    useEffect(()=>{
        setData(props.analysis || []);
        // console.log("data",data);
    });

    return(
        <Fragment>
            {data && (
                data.map((item,index)=>
                    <ApprovalDisplayCollapse 
                    data={item}
                    collapseId={"collapse_"+index}
                    key={"key"+index}>
                    </ApprovalDisplayCollapse>                    
                )
            )}
        </Fragment>
    );
}

export default ApprovalDisplayListVisualizer;