import React, {Fragment, useState, useEffect} from "react"
import EcomDatalayerAnalyzerViewElement from "./ecomDatalayerAnalyzerViewElement";

const EcommerceAnalyzerView = (props)=>{
    const [data,setData] = useState(props.analysis || []);

    useEffect(()=>{
        setData(props.analysis || []);
        console.log(data);
    });

    return(
        <Fragment>
            {data && (
                data.map((item,index)=>
                    <EcomDatalayerAnalyzerViewElement 
                    title={item.event} 
                    description="Essa é a descrição de exemplo do elemento collapsável." 
                    collapseId={"collapse_"+index}
                    key={index}
                    />
                )
            )}
        </Fragment>
    );
}

export default EcommerceAnalyzerView;