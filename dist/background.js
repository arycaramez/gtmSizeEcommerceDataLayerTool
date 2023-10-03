/* O content.js é usado para injetar código em páginas da web, ou seja, ele é 
 * executado no contexto da página da web em que você deseja interagir. 
 * Ele é útil para manipular o DOM da página, acessar informações da página 
 * ou interagir com elementos específicos da página.
 * 
 * Uso Típico: Você pode usar o content.js para coletar dados de uma página 
 * da web, interagir com elementos da página, modificar o conteúdo da página 
 * ou executar ações específicas em resposta a eventos na página.
 * 
 * Exemplo de Uso: Se você quiser criar uma extensão que realce 
 * automaticamente todos os links em uma página da web, o código para fazer 
 * isso seria inserido em um content.js.
 */

// Abaixo está a função da aplicação base
/*
(function() {
    let contentLengthObj = null
    let contentLengthInKb = null
    chrome.webRequest.onCompleted.addListener(
        (details) => {
            if(details.type == "script" && details.url.indexOf("https://www.googletagmanager.com/gtm.js") != -1) {
                contentLengthObj = details.responseHeaders.filter((v) => v.name == 'content-length')[0];
                contentLengthInKb = Math.round(parseInt(contentLengthObj.value) / 1024);

                chrome.action.setBadgeText({
                    text: `${contentLengthInKb.toString()}KB`,
                    tabId: details.tabId
                });

                if(sizeByGoogleTagManagerLimit(parseInt(contentLengthObj.value)) < 50) {
                    chrome.action.setBadgeBackgroundColor({
                        color: "green",
                        tabId: details.tabId
                    })
                    return
                }
                
                if(sizeByGoogleTagManagerLimit(parseInt(contentLengthObj.value)) < 69) {
                    chrome.action.setBadgeBackgroundColor({
                        color: "yellow",
                        tabId: details.tabId
                    })
                    return
                }
                
                if(sizeByGoogleTagManagerLimit(parseInt(contentLengthObj.value)) >= 70) {
                    chrome.action.setBadgeBackgroundColor({
                        color: "red",
                        tabId: details.tabId
                    })
                    return
                }
            }
        },
        {urls: ["<all_urls>"]},
        ["responseHeaders"]

    )

    const sizeByGoogleTagManagerLimit = (sizeOfContainer = 0) => {
        // 200KB
        const googleTagManagerSizeLimit = 200  * 1024

        return (sizeOfContainer / googleTagManagerSizeLimit) * 100
    }

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {

        if(contentLengthInKb === null) {
            sendResponse(
                { 
                    result: false
                }
            );
            return true;
        }
        
        sendResponse(
            { 
                result: `${contentLengthInKb.toString()}KB`,
                percent: Math.round(sizeByGoogleTagManagerLimit(parseInt(contentLengthObj.value)))
            }
        );
        return true; 
    });
}());
*/
// Os códigos abaixo são pertencentes aplicação "Ecommerce Datalayer Tool"...
var dataLayer = [];

// Recebe os dados enviados do script observer_datalayer_changes injetado no site.
chrome.runtime.onMessageExternal.addListener(async (message, sender, sendResponse) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if(tabs.length <= 0) return;

        // Verifica se o id da aba aberta é o mesmo da aba que enviou os dados.
        if(message.dataLayer && sender.tab.id === tabs[0].id){
            var t_dataLayer = message.dataLayer;
            if(dataLayer !== t_dataLayer && dataLayer.length !== t_dataLayer.length){
                dataLayer = t_dataLayer;

                // Evento usado para que a página da extensão atualize os dados caso alguma alteração tenha ocorrido na camada de dados
                chrome.runtime.sendMessage({ action: 'update_datalayer' , data: t_dataLayer});
            }
        }
    });
});

// Envia o dataLayer quando o evento "get_datalayer" é disparado na extensão.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'get_datalayer') {
        sendResponse(dataLayer);
    }
});


