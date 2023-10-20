
class GA4EcommerceEventValidator {
    constructor() {
        this.defaultItemsList = [
            'item_id',
            'item_name',
            'affiliation',
            'coupon',
            'currency',
            'discount',
            'index',
            'item_brand',
            'item_category',
            'item_category2',
            'item_category3',
            'item_category4',
            'item_category5',
            'item_list_id',
            'item_list_name',
            'item_variant',
            'location_id',
            'price',
            'quantity',
        ];

        this.promotionItemsList = [
            'creative_name',
            'creative_slot',
            'location_id',
            'promotion_id',
            'promotion_name',
        ];

        this.itemValidationRules = {
            item_id: {
                type: 'string',
                maxLength: 256,
                required: true,
            },
            item_name: {
                type: 'string',
                maxLength: 256,
                required: true,
            },
            affiliation: {
                type: 'string',
                maxLength: 100,
            },
            coupon: {
                type: 'string',
                maxLength: 50,
            },
            creative_name: {
                type: 'string',
                maxLength: 256,
            },
            creative_slot: {
                type: 'string',
                maxLength: 256,
            },
            value: {
                type: 'number',
            },
            discount: {
                type: 'number',
            },
            index: {
                type: 'number',
            },
            currency: {
                type: 'string',
                maxLength: 3,
            },
            item_brand: {
                type: 'string',
                maxLength: 256,
            },
            item_category: {
                type: 'string',
                maxLength: 256,
            },
            item_category2: {
                type: 'string',
                maxLength: 256,
            },
            item_category3: {
                type: 'string',
                maxLength: 256,
            },
            item_category4: {
                type: 'string',
                maxLength: 256,
            },
            item_category5: {
                type: 'string',
                maxLength: 256,
            },
            item_list_id: {
                type: 'string',
                maxLength: 256,
            },
            item_list_name: {
                type: 'string',
                maxLength: 256,
            },
            item_variant: {
                type: 'string',
                maxLength: 256,
            },
            location_id: {
                type: 'string',
                maxLength: 256,
            },
            price: {
                type: 'number',
            },
            promotion_id: {
                type: 'string',
                maxLength: 256,
            },
            promotion_name: {
                type: 'string',
                maxLength: 256,
            },
            quantity: {
                type: 'number',
                required: true,
            },
            shipping_tier: {
                type: 'string',
                maxLength: 100,
            },
            shipping: {
                type: 'number',
            },
            tax: {
                type: 'number',
            },
            payment_type: {
                type: 'string',
                maxLength: 100,
            },
        };

        this.validationRules = {
            view_promotion: {
                requiredFields:[],
                itemsFields: ['creative_name', 'creative_slot', 'location_id', 'promotion_id', 'promotion_name'],
            },
            select_promotion: {
                requiredFields:[],
                itemsFields: ['creative_name', 'creative_slot', 'location_id', 'promotion_id', 'promotion_name'],
            },
            view_item_list: {
                requiredFields:[],
                optionalFields: ['item_list_id', 'item_list_name'],
                itemsFields: this.defaultItemsList,
            },
            select_item: {
                requiredFields:[],
                optionalFields: ['item_list_id', 'item_list_name'],
                itemsFields: this.defaultItemsList,
            },
            view_item: {
                requiredFields: ['value', 'currency'],
                itemsFields: this.defaultItemsList,
                maxFieldLengths: {
                    currency: 3,
                },
                valueGreaterThanZero: ['value'],
            },
            add_to_cart: {
                requiredFields: ['currency', 'value'],
                itemsFields: this.defaultItemsList,
                maxFieldLengths: {
                    currency: 3,
                },
                valueGreaterThanZero: ['value'],
            },
            remove_from_cart: {
                requiredFields:[],
                // Lista customizada de itens.
                itemsFields: [
                    'item_name',
                    'item_id',
                    'price',
                    'item_brand',
                    'item_category',
                    'item_variant',
                    'item_list_name',
                    'item_list_id',
                    'index',
                    'quantity',
                ],
            },
            add_to_wishlist: {
                requiredFields: ['currency', 'value'],
                itemsFields: this.defaultItemsList,
                maxFieldLengths: {
                    currency: 3,
                },
                valueGreaterThanZero: ['value'],
            },
            view_cart: {
                requiredFields: ['currency', 'value'],
                itemsFields: this.defaultItemsList,
                maxFieldLengths: {
                    currency: 3,
                },
                valueGreaterThanZero: ['value'],
            },
            begin_checkout: {
                requiredFields: ['currency', 'value'],
                optionalFields: ['coupon'],
                itemsFields: this.defaultItemsList,
                maxFieldLengths: {
                    currency: 3,
                    coupon: 50,
                },
                valueGreaterThanZero: ['value'],
            },
            add_shipping_info: {
                requiredFields: ['currency', 'value'],
                optionalFields: ['coupon', 'shipping_tier'],
                itemsFields: this.defaultItemsList,
                maxFieldLengths: {
                    currency: 3,
                    coupon: 50,
                    shipping_tier: 100,
                },
                valueGreaterThanZero: ['value'],
            },
            add_payment_info: {
                requiredFields: ['currency', 'value'],
                optionalFields: ['coupon', 'payment_type'],
                itemsFields: this.defaultItemsList,
                maxFieldLengths: {
                    currency: 3,
                    coupon: 50,
                    payment_type: 100,
                },
                valueGreaterThanZero: ['value'],
            },
            purchase: {
                requiredFields: ['currency', 'value', 'transaction_id'],
                optionalFields: ['coupon', 'payment_type', 'affiliation', 'tax', 'shipping'],
                itemsFields: this.defaultItemsList,
                maxFieldLengths: {
                    currency: 3,
                    coupon: 50,
                    payment_type: 100,
                    affiliation: 100,
                    transaction_id: 256,
                },
                valueGreaterThanZero: ['value'],
            },
            refund: {
                requiredFields: ['currency', 'value', 'transaction_id'],
                optionalFields: ['coupon', 'affiliation', 'tax', 'shipping'],
                itemsFields: this.defaultItemsList,
                maxFieldLengths: {
                    currency: 3,
                    coupon: 50,
                    payment_type: 100,
                    affiliation: 100,
                    transaction_id: 256,
                },
                valueGreaterThanZero: ['value'],
            },
        };
    }
    
    validateEcommerceEvent(eventData) {
        // Formato de evento de comércio eletrônico inválido.
        if(!eventData || !eventData.event){
            return null;
        }

        const eventName = eventData.event;

        // O evento de comércio eletrônico não é suportado.
        if (!this.validationRules[eventName]) return null;

        const { requiredFields, optionalFields, itemsFields, maxFieldLengths, valueGreaterThanZero } = this.validationRules[eventName];
        const ecommerceData = eventData.ecommerce;

        var validations = {
            event: eventName,
            logs:[],
            show_list_id:false,
            ecommerce:{ 
                logs:[],
                show_list_id:false, 

                items: { 
                    logs:[],
                    show_list_id:true, 
                },
            },
        }

        // Usado para validar os parâmetros obrigatórios presentes no parâmetro ecommerce
        if(requiredFields){
            for (const field of requiredFields) {
                if (!(field in ecommerceData)) {
                    validations.ecommerce.logs.push({
                        [field]: { 
                            log: `Parâmetro obrigatório <strong>${field}</strong> ausente.`, 
                            status: 'error',
                        }
                    });
                    continue;
                }
            }
        }
        // Usado para validar se no parâmetro ecommerce existem itens faltando.
        for (const field in ecommerceData) {
            // console.log("valor",ecommerceData[field])
            
            if(ecommerceData[field] === undefined || ecommerceData[field] === "undefined"){
                validations.ecommerce.logs.push({
                    [field]: { 
                        log: `Parâmetro <strong>${field}</strong> com valor não definido ou inexistente.`, 
                        status: 'warning',
                    }
                });
                continue;
            } 

            if(optionalFields && requiredFields){
                if (![...optionalFields,...requiredFields, "items"].includes(field)) {
                    validations.ecommerce.logs.push({
                        [field]: { 
                            log: `Parâmetro <strong>${field}</strong> não foi encontrado.`, 
                            status: 'error',
                        }
                    });
                    continue;
                }
            }

            if(maxFieldLengths && ecommerceData){
                if (maxFieldLengths[field] && ecommerceData[field].length > maxFieldLengths[field]) {
                    validations.ecommerce.logs.push({
                        [field]: { 
                            log: `Parâmetro <strong>${field}</strong> excede o limite de caracteres.`, 
                            status: 'warning',
                        }
                    });
                    continue;
                }
            }

            /*
            if (typeof ecommerceData[field] === 'string' && String(ecommerceData[field]).trim() === '') {
                validations.ecommerce.logs.push({
                    [field]: { 
                        log: `Parâmetro <strong>${field}</strong> está recebendo um texto vazio.`,
                        status: 'error',
                    }
                });
                continue;
            }*/
        }

        
        // Verifica se os parâmetros marcados para receber valores maiores que zero, fazem parte da lista.
        if(valueGreaterThanZero){
            for (const field of valueGreaterThanZero) {
                if (typeof ecommerceData[field] === 'number' && ecommerceData[field] <= 0) {
                    validations.ecommerce.logs.push({
                        [field]: { 
                            log: `Parâmetro <strong>${field}</strong> deve ser maior que zero.`,
                            status: 'error',
                        }
                    });
                }
            }
        }

        // Verifica se existem parâmetros no evento dentro de ecommerce, 
        // caso o parâmetro não possua um log de erro, criamos um log 
        // informando que ele foi implementado com sucesso no evento.
        for (const key in ecommerceData) {
            if(key === 'items') continue;
            // Verifica se a chave não está presente nos logs de validação
            const isKeyValidated = validations.ecommerce.logs.some(log => log.hasOwnProperty(key));

            // Se não estiver validado, adiciona à lista de chaves ausentes
            if (!isKeyValidated) {
                validations.ecommerce.logs.push({
                    [key]: { 
                        log: (requiredFields.includes(key))? 
                        `O Campo obrigatório <strong>${key}</strong> implementado com sucesso!`:
                        `O Campo ${key} implementado com sucesso!`,
                        status: 'success',
                    }
                });
            }
        }

        // Validação dos parâmetros de items.
        const itemsToValidate = eventData.ecommerce.items;

        if(itemsToValidate===null){
            validations.ecommerce.logs.push({
                items: { 
                    log: `Parâmetro <strong>items</strong> está recebendo um valor nulo.`,
                    status: 'error',
                }
            });
        }else if(itemsToValidate===undefined || itemsToValidate === "undefined"){
            validations.ecommerce.logs.push({
                items: { 
                    log: `Parâmetro <strong>items</strong> está recebendo um valor indefinido ou inexistente.`,
                    status: 'error',
                }
            });
        }else{
            // Valida se items é de fato um array
            if (!Array.isArray(itemsToValidate)) {
                validations.ecommerce.logs.push({
                    items: { 
                        log: `Parâmetro <strong>items</strong> deve receber uma lista de parâmetros.`,
                        status: 'error',
                    }
                });
            }else{
                // Valida se items possui mais de um parametros
                if(itemsToValidate.length <= 0){
                    validations.ecommerce.logs.push({
                        items: { 
                            log: `Parâmetro <strong>items</strong> deve receber uma lista de parâmetros.`,
                            status: 'error',
                        }
                    });
                }
            }

            // Valida se ecommerce possui parâmetros
            // if(validations.ecommerce.logs.length <= 0){
            //     // incluir futuramente a nota "Não foi encontrado nenhum <strong>parâmetro</strong> no evento, exceto <strong>items</strong>!"
            //     validations.ecommerce.logs.push({                     
            //         log: `Não foi encontrado nenhum <strong>parâmetro</strong> no evento!`,
            //         status: 'error',                    
            //     });
            // }

            // Validação dos parâmetros de todos os itens na lista.
            var groupItems = {};
            if (Array.isArray(itemsToValidate)) {
                for (const item of itemsToValidate) {
                    var index = itemsToValidate.findIndex(e => e === item);
                    groupItems = this.validateItem(item, index, groupItems);
                }
            }
            groupItems = Object.values(groupItems);
            // Verifica se foram encontrados itens na lista
            if(groupItems.length > 0){
                validations.ecommerce.items.logs = groupItems;
            }else{
                validations.ecommerce.items.logs.push({                     
                    log: `Não foi encontrado nenhum <strong>item</strong> no evento!`,
                    status: 'error',                    
                });
            }
        }
        return validations;
    }

    validateItem(item, index,groupItems) {
        if (!item) {
            return groupItems;
        }

        var id_group = index;
        var info = null;
        for (const field in item) {    
            var param = field;

            if (this.itemValidationRules[field]) {
                const rule = this.itemValidationRules[field];
                const value = item[field];

                if (rule.required && (value === undefined || value === "undefined" || value === null || value === "null" )) {
                    info = {                        
                        log: `Parâmetro obrigatório <strong>${field}</strong> recebe um valor indefinido ou nulo.`,
                        status: 'error',
                    }
                    continue;
                }

                if (value !== undefined) {
                    if (rule.type && typeof value !== rule.type) {
                        info = {                        
                            log: `Parâmetro <strong>${field}</strong> deve ser do tipo <strong>${rule.type}</strong>.`,
                            status: 'error',
                        }
                        continue;
                    }

                    if (rule.maxLength && value.toString().length > rule.maxLength) {
                        info = {                        
                            log: `Parâmetro <strong>${field}</strong> excede o limite de caracteres.`,
                            status: 'error',
                        }
                        continue;
                    }

                    if (typeof value === 'string' && rule.type === 'string' && String(value).trim() === '') {
                        info = { 
                            log: `Parâmetro <strong>${field}</strong> está recebendo um texto vazio.`,
                            status: 'error',
                        };
                        continue;
                    }
                }

                info = {                        
                    log: `Parâmetro <strong>${field}</strong> implementado com sucesso!`,
                    status: 'success',
                }
            } else {
                info = {                        
                    log: `Parâmetro <strong>${field}</strong> não esperado neste contexto.`,
                    status: 'error',
                }
            }
            // Aplica o resultado da validação
            if(info){
                if (!groupItems[id_group]) {
                    groupItems[id_group] = {
                        [param]:info
                    };
                }else{
                    groupItems[id_group][param] = info;
                }   
            }else{
                console.error(`Erro: O parâmetro ${param} em items, nenhuma informação de validação foi gerada!`);
            }
        }

        return groupItems;
    }

    validateDataLayer(dataLayer){
        var dataLayerValidation = [];
        for(const eventData of dataLayer){
            var response = this.validateEcommerceEvent(eventData);
            if(response !== null){
                dataLayerValidation.push(response);
            }
        }
        return dataLayerValidation;
    }
}

module.exports = GA4EcommerceEventValidator