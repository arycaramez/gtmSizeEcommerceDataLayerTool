import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import "../assets/tailwind.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Scripts para realizar a homologação da camada de dados.
// import {ecommerce_events_ga4} from "../event_models/ecommerce_events_ga4.js";// modelo base usado na comparação.
// import {compararDatalayerComObjeto} from "../modules/ecommerce_datalayer_analyzer";// Comparador da camada de dados.
import ApprovalDisplayListVisualizer from "../components/ApprovalDisplayListVisualizer";// Componente usado para criar a lista de eventos analizados para que o usuário possa ver.
import GA4EcommerceEventValidator from "../modules/ecommerce_datalayer_validator";

function App () {
    const [dataLayer, setDataLayer] = useState([]);
    const [analysis,setAnalysis] = useState([]);

    const validator = new GA4EcommerceEventValidator();

    // Função usada para atualizar a camada de dados 
    function UpdateDataLayer(data){
        if (data && data !== dataLayer && data.length !== dataLayer.length) {
            setDataLayer(data || []);
        }
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
        // Analiza a camada de dados quando há uma atualização nela, retorna o resultado da analise.
        // var analise = compararDatalayerComObjeto(dataLayer,ecommerce_events_ga4);
        
        var teste = validator.validateDataLayer(dataLayer);
        // console.log("teste",teste)

        setAnalysis(teste || []);
    },[dataLayer]);
    
    return (
        <div className="w-[500px] max-h-[700px] min-h-[auto] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
            <div className="flex flex-col p-4 pb-0">
                <div className="flex-auto">
                    <div className="font-medium text-[1.25rem] "> <i className="fa-solid fa-cart-shopping"></i> Ecommerce Datalayer Tool</div>
                    {dataLayer ? (
                        <div className="mt-1 text-slate-500">Eventos do comércio eletrônico encontrados: <span className="font-medium">{analysis.length+"/"+dataLayer.length}.</span> </div>
                    ) : (
                        <div className="mt-1 text-slate-500 pb-5">There is no Events in this page refresh the page{`:/`}</div>
                    )}
                </div>
                <>
                    <div className="flex-auto py-2.5">    
                        <ApprovalDisplayListVisualizer analysis={analysis}/>
                    </div>
                </>
            </div>
        </div>
    )
}

const root = document.getElementById("root");

createRoot(root).render(<App />);
