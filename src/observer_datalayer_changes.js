// Esta função é responsável por inserir um evento no site, assim este evento pode enviar
// os dados da camada de dados do site onde foi inserida, para a extensão Ecommerce 
// Datalayer Tool específicamente.
function observeDataLayerChanges() {
  // console.log("Observer Iniciado");

  const scriptElement = document.currentScript;
  const extension_id = scriptElement.getAttribute('extension_id');
  
  const dataLayer = window.dataLayer || [];
  const eventosEnviados = new Set();//teste

  const dataLayerChangeEvent = new Event('dataLayerChange');

  const originalPush = dataLayer.push;
  dataLayer.push = function () {
    originalPush.apply(this, arguments);
    window.dispatchEvent(dataLayerChangeEvent);
  };

  window.addEventListener('dataLayerChange', function () {
    // Filtra os eventos mais recentes que ainda não foram enviados
    const notSendedEvents = dataLayer.filter(evento => !eventosEnviados.has(evento));

    // Atualiza o conjunto de eventos enviados
    notSendedEvents.forEach(evento => {
      evento.metadata = evento.metadata || {};
      evento.metadata.pageUrl = window.location.href;

      eventosEnviados.add(evento)
    });

    var message = {
      // dataLayer: dataLayer,
      mostRecentEvents: notSendedEvents,
    };

    chrome.runtime.sendMessage(extension_id, message,(response)=>{
      console.log("dataLayerChange: ",response);
    });
  });

  //----------------------------------------------------------------
  // Evento beforeunload
  window.addEventListener('beforeunload', function () {
    chrome.runtime.sendMessage(extension_id, { paginaRecarregada: true });
  });
}

observeDataLayerChanges();
