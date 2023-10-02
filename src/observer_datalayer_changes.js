// Esta função é responsável por inserir um evento no site, assim este evento pode enviar
// os dados da camada de dados do site onde foi inserida, para a extensão Ecommerce 
// Datalayer Tool específicamente.

function observeDataLayerChanges() {
  console.log("Observer Iniciado");

  const scriptElement = document.currentScript;
  const extension_id = scriptElement.getAttribute('extension_id');
  
  const dataLayer = window.dataLayer || [];

  const dataLayerChangeEvent = new Event('dataLayerChange');

  const originalPush = dataLayer.push;
  dataLayer.push = function () {
    originalPush.apply(this, arguments);
    window.dispatchEvent(dataLayerChangeEvent);
  };

  window.addEventListener('dataLayerChange', function () {
    var message = {
      dataLayer: dataLayer
    };

    chrome.runtime.sendMessage(extension_id, message,(response)=>{
      console.log(response);
    });
  });

}

observeDataLayerChanges();