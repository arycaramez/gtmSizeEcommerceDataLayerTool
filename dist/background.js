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

// Os códigos abaixo são pertencentes aplicação "Ecommerce Datalayer Tool"...
var dataLayer = [];

// Recebe os dados enviados do script observer_datalayer_changes injetado no site.
chrome.runtime.onMessageExternal.addListener(async (message, sender, sendResponse) => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        // Não execute caso não tenham abas abertas.
        if(tabs.length <= 0) return; 

        if(message.mostRecentEvents){
            var mostRecentEvents = message.mostRecentEvents

            mostRecentEvents.forEach(item => {
                dataLayer.push(item);
            });

            // Evento usado para que a página da extensão atualize os dados caso alguma alteração tenha ocorrido na camada de dados
            chrome.runtime.sendMessage({ action: 'update_datalayer' , data: dataLayer});
        }

        if(message.paginaRecarregada){
            dataLayer = [];
            chrome.runtime.sendMessage({ action: 'update_datalayer' , data: dataLayer});
        }
    });
});

// Envia o dataLayer quando o evento "get_datalayer" é disparado na extensão.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'get_datalayer') {
        sendResponse(dataLayer);
    }
});