// Função para comparar o Datalayer com o objeto base
function compararDatalayerComObjeto(datalayer, objetoBase) {
  const resultados = [];
  var index = 0;
  for (const idObjBase in objetoBase) {
    for(const idDataLayer in datalayer){
      if (objetoBase[idObjBase].hasOwnProperty("event") &&
        datalayer.hasOwnProperty(idDataLayer) && datalayer[idDataLayer].hasOwnProperty("event") &&
        objetoBase[idObjBase].event === datalayer[idDataLayer].event)
      { 
        resultados[index] = [];
        compararPropriedadesRecursivamente(
          datalayer[idDataLayer],
          objetoBase[idObjBase],
          resultados[index]
        );
        index++;
      }
    }
  }
  return resultados;
}

// Função para comparar propriedades recursivamente
function compararPropriedadesRecursivamente(datalayerProp, baseProp, resultado) {
    for (const propNome in baseProp) {   

      if(propNome === "event"){
        resultado[propNome] = baseProp[propNome];
        continue;
      }

      if (typeof baseProp[propNome] === "object" && !Array.isArray(baseProp[propNome])) {
          if (!datalayerProp || !datalayerProp.hasOwnProperty(propNome)) {       
              resultado[propNome] = {
                  important: true,
                  log: `A propriedade <strong>"${propNome}"</strong> não foi encontrada.`,
              };
              continue;
          }
          
          resultado[propNome] = [];
          compararPropriedadesRecursivamente(
              datalayerProp[propNome],
              baseProp[propNome],
              resultado[propNome]
          );
      } else {
        
        if(Array.isArray(baseProp[propNome])){
          resultado[propNome] = [];
          compararPropriedadesRecursivamente(
              datalayerProp[propNome],
              baseProp[propNome],
              resultado[propNome]
          );
        }else{
          resultado[propNome] = compararPropriedade(
              datalayerProp[propNome],
              baseProp[propNome],
              propNome
          );
          
        }
      }
    }
}

// Função para comparar propriedades individuais
function compararPropriedade(valorDatalayer, valorBase, propNome) {
    const tipoDatalayer = typeof valorDatalayer;
    const tipoBase = typeof valorBase;

    resultado = [];
    if (tipoDatalayer === undefined || tipoDatalayer === "undefined"){
      resultado.important = true;
      resultado.log = `Verificar a implementação do propriedade <strong>'${propNome}'</strong> (tipo 'undefined')`;
    } else if(valorDatalayer === null) {
      resultado.important = true;
      resultado.log = `A propriedade <strong>'${propNome}'</strong> possui um valor nulo (null).`;
    } else if (tipoDatalayer !== tipoBase) {
      resultado.important = true;
      resultado.log = `A propriedade <strong>'${propNome}'</strong> deveria receber o valor de tipo "${tipoBase}".`;
    } else if(tipoDatalayer === tipoBase){
      resultado.important = false;
      resultado.log = `O tipo de valor da propriedade <strong>'${propNome}'</strong> está correto (${tipoBase}).`;
    }    
    return resultado;
}

module.exports = {
  compararDatalayerComObjeto
}