class GA4EcommerceEventValidator {
    constructor() {
      // Define as regras de validação para eventos de comércio eletrônico.
      this.validationRules = {
        add_payment_info: {
          requiredFields: ['currency', 'value'],
          optionalFields: ['coupon', 'payment_type', 'items'],
          maxFieldLengths: {
            currency: 3,
            coupon: 50, // Ajuste conforme necessário.
            payment_type: 100, // Ajuste conforme necessário.
          },
          valueGreaterThanZero: ['value'],
        },
        // Adicione regras para outros eventos de comércio eletrônico aqui.
      };
  
      // Define as regras de validação para os parâmetros do item.
      this.itemValidationRules = {
        item_id: { type: 'string', maxLength: 256, required: true },
        item_name: { type: 'string', maxLength: 256, required: true },
        affiliation: { type: 'string', maxLength: 100 },
        coupon: { type: 'string', maxLength: 50 },
        creative_name: { type: 'string', maxLength: 256 },
        creative_slot: { type: 'string', maxLength: 256 },
        discount: { type: 'number' },
        index: { type: 'number' },
        item_brand: { type: 'string', maxLength: 256 },
        item_category: { type: 'string', maxLength: 256 },
        item_category2: { type: 'string', maxLength: 256 },
        item_category3: { type: 'string', maxLength: 256 },
        item_category4: { type: 'string', maxLength: 256 },
        item_category5: { type: 'string', maxLength: 256 },
        item_list_id: { type: 'string', maxLength: 256 },
        item_list_name: { type: 'string', maxLength: 256 },
        item_variant: { type: 'string', maxLength: 256 },
        location_id: { type: 'string', maxLength: 256 },
        price: { type: 'number' },
        promotion_id: { type: 'string', maxLength: 256 },
        promotion_name: { type: 'string', maxLength: 256 },
        quantity: { type: 'number', required: true },
      };
    }
  
    // Método para validar um evento de comércio eletrônico.
    validateEcommerceEvent(eventName, eventData) {
      if (!this.validationRules[eventName]) {
        throw new Error(`Evento de comércio eletrônico "${eventName}" não é suportado.`);
      }
  
      const { requiredFields, optionalFields, maxFieldLengths, valueGreaterThanZero } = this.validationRules[eventName];
  
      for (const field of requiredFields) {
        if (!(field in eventData)) {
          throw new Error(`Campo obrigatório "${field}" ausente no evento "${eventName}".`);
        }
      }
  
      for (const field in eventData) {
        if (![...requiredFields, ...optionalFields].includes(field)) {
          console.warn(`Campo "${field}" no evento "${eventName}" não é esperado.`);
        }
  
        if (maxFieldLengths[field] && eventData[field].length > maxFieldLengths[field]) {
          throw new Error(`Campo "${field}" no evento "${eventName}" excede o limite de caracteres.`);
        }
      }
  
      for (const field of valueGreaterThanZero) {
        if (typeof eventData[field] === 'number' && eventData[field] <= 0) {
          throw new Error(`O campo "${field}" no evento "${eventName}" deve ser maior que zero.`);
        }
      }
  
      if (eventData.items && Array.isArray(eventData.items)) {
        for (const item of eventData.items) {
          this.validateItem(item);
        }
      }
  
      console.log(`Evento de comércio eletrônico "${eventName}" validado com sucesso.`);
    }
  
    // Método para validar um item do evento.
    validateItem(item) {
        const requiredFields = ['item_id', 'item_name', 'quantity'];

  for (const field of requiredFields) {
    if (!item.hasOwnProperty(field)) {
      throw new Error(`Campo obrigatório "${field}" ausente no item.`);
    }
  }

      for (const field in item) {
        if (this.itemValidationRules[field]) {
          const rule = this.itemValidationRules[field];
          const value = item[field];
          if (rule.required && value === undefined) {
            throw new Error(`Campo obrigatório "${field}" ausente no item.`);
          }
  
          if (value !== undefined) {
            if (rule.type && typeof value !== rule.type) {
              throw new Error(`O campo "${field}" deve ser do tipo "${rule.type}".`);
            }
  
            if (rule.maxLength && value.length > rule.maxLength) {
              throw new Error(`Campo "${field}" no item excede o limite de caracteres.`);
            }
  
            if (rule.required && field === 'quantity' && value <= 0) {
              throw new Error(`O campo "quantity" no item deve ser maior que zero.`);
            }

            if (rule.required && field === 'quantity' && value <= 0) {
                throw new Error(`O campo "quantity" no item deve ser maior que zero.`);
            }
          }
        } else {
          console.warn(`Campo "${field}" no item não é esperado.`);
        }
      }
    }
  }
  
  // Exemplo de uso:
  const validator = new GA4EcommerceEventValidator();
  
  try {
    const eventName = 'add_payment_info';
    const eventData = {
      currency: 'USD',
      value: 7.77,
      coupon: 'SUMMER_FUN',
      payment_type: 'Cartão de crédito',
      items: [
        {
          item_id: 'item1',
          item_name: 'Item 1',
          quantity: 2,
        },
        {
          item_id: 'item2',
          item_name: 'Item 2',
        },
      ],
    };
  
    validator.validateEcommerceEvent(eventName, eventData);
  } catch (error) {
    console.error(`Erro de validação: ${error.message}`);
  }
  