import React, { Fragment, useEffect, useState } from "react";

import "../assets/tailwind.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Scripts para realizar a homologação da camada de dados.
import ApprovalDisplayListVisualizer from "../components/ApprovalDisplayListVisualizer";// Componente usado para criar a lista de eventos analizados para que o usuário possa ver.
import GA4EcommerceEventValidator from "../modules/datalayer_validator";
import MenuFooter from "../components/MenuFooter";


function DatalayerValidatorScreen () {
    const [dataLayer, setDataLayer] = useState([]);
    const [analysis,setAnalysis] = useState([]);

    const validator = new GA4EcommerceEventValidator();

    document.body.classList.add("h-[590px]")

    // Função usada para atualizar a camada de dados 
    function UpdateDataLayer(data){
        if (data !== null && data !== undefined && data !== dataLayer && data.length !== dataLayer.length) {
            setDataLayer(data || []);
        }
    }

    function requestUpdateDataLayer(){
        chrome.runtime.sendMessage({ action: 'get_datalayer' }, function(response){
            UpdateDataLayer(response);
            console.log("get_datalayer ",response)
        });
    }

    // Requisita uma atualização da camada de dados quando o usuário clica no icone da extensão.
    chrome.runtime.sendMessage({ action: 'get_datalayer' }, function(response){
        UpdateDataLayer(response);
    });

    // Atualiza a camada de dados quando há uma atualização na camada de dados do site monitorado.
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.action === 'update_datalayer') {
            UpdateDataLayer(request.data);
        }
    });

    // Executa toda vez que o valor do dataLayer for atualizado. 
    useEffect(()=>{        
        var dl = validator.validateDataLayer(dataLayer);
        setAnalysis(dl || []);
    },[dataLayer]);

    return (
        <Fragment>
            <div>
                {dataLayer && dataLayer.length > 0 ? (
                    <div className="mb-1 text-slate-500">
                        Eventos do comércio eletrônico encontrados:
                        <span className="font-medium">{` ${
                            analysis.length < 10 ? "0" + analysis.length : analysis.length
                        }/${dataLayer.length}.`}</span>
                    </div>
                ) : (
                    <div className="text-slate-500 pb-5">
                        Não foram detectados eventos nesta página, recarregue-a novamente {`:/`}
                    </div>
                )}   

                <div className="py-2.5 h-auto" id="contentContainer">
                    <ApprovalDisplayListVisualizer analysis={analysis}/>
                </div>
                
                <MenuFooter title={`OPÇÕES:`}>
                    ...
                </MenuFooter>
            </div>
        </Fragment>
    );
}

export default DatalayerValidatorScreen;