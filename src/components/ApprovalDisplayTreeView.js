import React, {Fragment, useEffect, useState} from "react";

const ApprovalDisplayTreeView = (props) => {
    const [data, setData] = useState(props.data || [])

    useEffect(()=>{
        setData(props.data || [])
        console.log(props.data);
    });

    const renderizarItem = (item) => {
        return (
            <>
                <ul className="ml-4 mt-1 mb-1">
                    {Object.entries(item).map(([key, array]) => (
                        <>
                            {typeof array === "object" ? (
                                <>
                                    {item[key].log ? (
                                        <>
                                            {item[key].important ? (
                                                <li className="text-red-700">
                                                    <i className="fa-solid fa-circle-exclamation mr-1"></i>
                                                    <span dangerouslySetInnerHTML={{ __html: item[key].log}}/>
                                                </li>
                                            ):(
                                                <li className="text-green-700">
                                                    <i className="fa-solid fa-circle-check mr-1"></i>
                                                    <span dangerouslySetInnerHTML={{ __html: item[key].log}}/>
                                                </li>
                                            )}
                                        </>
                                    ):(
                                        <>
                                            {
                                                isNaN(key)  && (
                                                    <li >
                                                        <i class="fa-solid fa-diamond mr-2 ml-1"></i>
                                                        <strong>{key}</strong>
                                                    </li>
                                                )
                                            }
                                            {renderizarItem(item[key])}
                                        </>
                                    )}
                                </>
                            ):(
                                <ul className="ml-2">
                                    {key == "log" && (
                                        <li className="ml-2">
                                            {array ? (
                                                <span dangerouslySetInnerHTML={{ __html: array}}></span>
                                            ):(
                                                {key}
                                            )}
                                        </li>
                                    )}
                                </ul>
                            )
                            }
                        </>
                    ))}
                </ul>
            </>
        )
    };

    return (
        <Fragment>
            <ul className="pb-2 pt-2">
                {data.map((key, array) => (
                    <>
                        {renderizarItem(key)}
                    </>
                ))}
            </ul>
        </Fragment>
    );
}

export default ApprovalDisplayTreeView;