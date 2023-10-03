import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {Collapse,Ripple,initTE} from 'tw-elements';// Recursos extra para o módulo tailwind.

import "../assets/tailwind.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";

// Scripts para realizar a homologação da camada de dados.
import {ecommerce_events_ga4} from "../event_models/ecommerce_events_ga4.js";// modelo base usado na comparação.
import {compararDatalayerComObjeto} from "../modules/ecommerce_datalayer_analyzer.js";// Comparador da camada de dados.
import EcommerceAnalyzerView from "../components/ecomDatalayerAnalyzerView";// Componente usado para criar a lista de eventos analizados para que o usuário possa ver.


function App () {
    initTE({Collapse,Ripple});
    // const [containerSize, setContainerSize] = useState({ result: 0, percent: 0});
    // useEffect(() => {
    //     chrome.runtime.sendMessage("open", function(response) {
    //         setContainerSize(
    //             { 
    //                 result: response.result, 
    //                 percent: response.percent || null
    //             })
    //     });
    // }, [])
    const [dataLayer, setDataLayer] = useState([]);
    const [analysis,setAnalysis] = useState([]);

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
        var analise = compararDatalayerComObjeto(dataLayer,ecommerce_events_ga4);
        setAnalysis(analise || []);
    },[dataLayer]);
    
    return (
        <div className="w-[500px] max-h-[700px] min-h-[500px] rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
            <div className="flex flex-col p-4 pb-0">
                <div className="flex-auto">
                    <div className="font-medium text-[1.25rem] "> <i class="fa-solid fa-cart-shopping"></i> Ecommerce Datalayer Tool</div>
                    {dataLayer ? (
                        <div className="mt-1 text-slate-500">Eventos do comércio eletrônico encontrados: <span className="font-medium">{analysis.length+"/"+dataLayer.length}.</span> </div>
                    ) : (
                        <div className="mt-1 text-slate-500 pb-5">There is no Events in this page refresh the page{`:/`}</div>
                    )}
                </div>
                <>
                    <div className="flex-auto py-2.5">    
                        <EcommerceAnalyzerView analysis={analysis}/>
                    </div>
                </>

                {/* {containerSize.result && (
                    <>
                        <div className="ml-4 flex-auto py-5">
                            <h2 className="font-medium">What does that mean?</h2>
                            <p className="mt-1 text-slate-500">The Google Tag Manager container limit is 200kb that means you are so much {`${containerSize.percent}%`} from exceeding the limit</p>
                        </div>

                        <div className="ml-4 flex-auto py-5">
                            <h2 className="font-medium">Tips by Métricas Boss: </h2>
                            <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Delete all paused tags you have inside your container
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Delete all triggerless tags you have inside your container
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Delete all untagged triggers you have inside your container
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Delete all unused or duplicated variables within your container
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    {`Follow us on instagram `}&nbsp;@metricasboss
                                </li>
                            </ul>
                        </div>
                    </>
                )} */}
            </div>
        </div>
    )
}

const root = document.getElementById("root");


createRoot(root).render(<App />);
