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

var s = document.createElement('script');
s.src = chrome.runtime.getURL(`observer_datalayer_changes.js`);
s.setAttribute("extension_id",`${chrome.runtime.id}`)
s.onload = function() { this.remove(); };
// see also "Dynamic values in the injected code" section in this answer
(document.head || document.documentElement).appendChild(s);