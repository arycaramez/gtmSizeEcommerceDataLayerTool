import React, {Fragment, useState, useEffect} from "react"

import ApprovalDisplayCollapse from "./ApprovalDisplayCollapse";
import ApprovalDisplayTreeView from "./ApprovalDisplayTreeView";
import ReactPaginate from "react-paginate";

const ApprovalDisplayListVisualizer = ({analysis=[],})=>{
    const [data,setData] = useState(analysis || []);
    const [pageNumber,setPageNumber] = useState(0);

    useEffect(()=>{
        setData(analysis);
    },[analysis]);

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

    // pagination
    const itemsPerPage = 10;
    const pagesVisited = pageNumber * itemsPerPage;
    const pageCount = Math.ceil(data.length/itemsPerPage);
    const changePage = ({selected})=>{
        setPageNumber(selected)
    }
    const paginationStyle = {
        container:"select-none flex justify-center max-w-screen-xl mx-auto",
        breakLink:"select-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-black",
        stylePageNumberActive:"select-none font-bold relative block rounded bg-transparent px-3 py-1.5 text-sm text-primary transition-all duration-300 hover:bg-neutral-100 dark:text-primary dark:hover:bg-neutral-300 dark:hover:text-black/70",
        stylePageNumber:"select-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-black transition-all duration-300 hover:bg-neutral-100 dark:text-black/70 dark:hover:bg-neutral-300 dark:hover:text-black/70"
    }
    //

    return(
        <Fragment>            
            {data && (
                data.slice(pagesVisited,pagesVisited + itemsPerPage)
                .map((item,index)=>

                    // Collapse do nome do evento
                    <ApprovalDisplayCollapse 
                    data={item}
                    collapseId={getNewCollapseID(index)}
                    >
                        {item.metadata && ( 
                            <p className="ml-4 mr-4 mt-2 text-xs">
                                {`Página: `}
                                <a 
                                className="text-primary transition duration-150 ease-in-out hover:text-primary-500 focus:text-primary-500 active:text-primary"
                                href={item.metadata.pageUrl}
                                >
                                    {item.metadata.pageUrl}
                                </a>
                            </p>
                        )}

                        {/* Exibe o conteúdo referente ao evento */}
                        <ApprovalDisplayTreeView 
                        data={GetElementsExeptEventName(item)} 
                        collapseID={getNewCollapseID(index)}
                        />

                    </ApprovalDisplayCollapse>   

                )
            )}
            
            {data.length > itemsPerPage + 1 && (
                <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={paginationStyle.container}
                previousLinkClassName={paginationStyle.stylePageNumber}
                nextLinkClassName={paginationStyle.stylePageNumber}
                pageLinkClassName={paginationStyle.stylePageNumber}
                activeLinkClassName={paginationStyle.stylePageNumberActive}
                breakLinkClassName={paginationStyle.breakLink}
                />
            )}
        </Fragment>
    );
}

export default ApprovalDisplayListVisualizer;