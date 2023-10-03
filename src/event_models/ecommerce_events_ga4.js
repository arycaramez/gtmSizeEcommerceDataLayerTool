const ecommerce_events_ga4 = 
[
  {
    event: "view_promotion",
    ecommerce: {
      items: [
      {
        creative_name: "Summer Banner",
        creative_slot: "featured_app_1",
        location_id: "L_12345",
        promotion_id: "P_12345",
        promotion_name: "Summer Sale",
      }
      ]
    }
  },
  {
    event: "select_promotion",
    ecommerce: {
      items: [
      {
        creative_name: "Summer Banner",
        creative_slot: "featured_app_1",
        location_id: "L_12345",
        promotion_id: "P_12345",
        promotion_name: "Summer Sale",
      }
      ]
    }
  },
  {
    event: "view_item_list",
    ecommerce: {
      item_list_id: "related_products",
      item_list_name: "Related products",
      items: 
      [
        {
          item_id: "SKU_12345",
          item_name: "Stan and Friends Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          currency: "USD",
          discount: 2.22,
          index: 0,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Search",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "L_12345",
          price: 9.99,
          quantity: 1
        }
      ]
    }
  },
  {
    event: "select_item",
    ecommerce: {
      item_list_id: "related_products",
      item_list_name: "Related products",
      items: 
      [
        {
          item_id: "SKU_12345", 
          item_name: "Stan and Friends Tee", 
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          currency: "USD",
          discount: 2.22,
          index: 0, 
          item_brand: "Google", 
          item_category: "Search", 
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "L_12345",
          price: 9.99,
          quantity: 1
        }
      ]
    }
  },
  {
    event: "view_item",
    ecommerce: 
    {
      currency: "USD",
      value: 7.77,
      items: 
      [
        {
          item_id: "SKU_12345",
          item_name: "Stan and Friends Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          currency: "USD",
          discount: 2.22,
          index: 0,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "L_12345",
          price: 9.99,
          quantity: 1
        }
      ]
    }
  },  
  {
  event: "add_to_cart",
	ecommerce: {
		currency: "USD",
	  value: 7.77,
    items: 
    [
	    {
	      item_id: "SKU_12345",
	      item_name: "Stan and Friends Tee",
	      affiliation: "Google Merchandise Store",
	      coupon: "SUMMER_FUN",
	      currency: "USD", 
	      discount: 2.22,
	      index: 0,
	      item_brand: "Google",
	      item_category: "Apparel", 
	      item_category2: "Adult",
	      item_category3: "Shirts",
	      item_category4: "Crew",
	      item_category5: "Short sleeve",
	      item_list_id: "related_products", 
	      item_list_name: "Related Products",
	      item_variant: "green",
	      location_id: "L_12345",
	      price: 9.99,
	      quantity: 1
	    }
    ]
	 }
	},
  {
    event: "remove_from_cart",
    ecommerce: {
      items: 
      [
        {
          item_name: "Donut Friday Scented T-Shirt",
          item_id: "67890",
          price: 33.75,
          item_brand: "Google",
          item_category: "Apparel",
          item_variant: "Black",
          item_list_name: "Search Results", 
          item_list_id: "SR123",
          index: 1,
          quantity: 1
        }
      ]
    }
  },
  {
    event: "add_to_wishlist",
    ecommerce: {
      currency: "USD",
      value: 7.77,
      items: 
      [
        {
          item_id: "SKU_12345",
          item_name: "Stan and Friends Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          currency: "USD",
          discount: 2.22,
          index: 0,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "L_12345",
          price: 9.99,
          quantity: 1
        }
      ]
    }
  },
  {
    event: "view_cart",
    ecommerce: {
      currency: "USD",
      value: 7.77,
      items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        currency: "USD",
        discount: 2.22,
        index: 0,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "green",
        location_id: "L_12345",
        price: 9.99,
        quantity: 1
      }
      ]
    }
  },
  {
    event: "begin_checkout",
    ecommerce: {
      currency: "USD",
      value: 7.77,
      coupon: "SUMMER_FUN",
      items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        currency: "USD",
        discount: 2.22,
        index: 0,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "green",
        location_id: "L_12345",
        price: 9.99,
        quantity: 1
      }
      ]
    }
  },
  {
    event: "add_shipping_info",
    ecommerce: {
      currency: "USD",
      value: 7.77,
      coupon: "SUMMER_FUN",
      shipping_tier: "Ground",
      items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        currency: "USD",
        discount: 2.22,
        index: 0,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "green",
        location_id: "L_12345",
        price: 9.99,
        quantity: 1
      }
      ]
    }
  },
  {
    event: "add_payment_info",
    ecommerce: {
      currency: "USD",
      value: 7.77,
      coupon: "SUMMER_FUN",
      payment_type: "Credit Card",
      items: [
      {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        currency: "USD",
        discount: 2.22,
        index: 0,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "green",
        location_id: "L_12345",
        price: 9.99,
        quantity: 1
      }
      ]
    }
  },
  {
    event: "purchase",
    ecommerce: {
      transaction_id: "T_12345",
      affiliation: "Google Merchandise Store",
      value: 25.42,
      tax: 4.90,
      shipping: 5.99,
      currency: "USD",
      coupon: "SUMMER_SALE",
      items: 
      [
        {
          item_id: "SKU_12345",
          item_name: "Stan and Friends Tee",
          affiliation: "Google Merchandise Store",
          coupon: "SUMMER_FUN",
          currency: "USD",
          discount: 2.22,
          index: 0,
          item_brand: "Google",
          item_category: "Apparel",
          item_category2: "Adult",
          item_category3: "Shirts",
          item_category4: "Crew",
          item_category5: "Short sleeve",
          item_list_id: "related_products",
          item_list_name: "Related Products",
          item_variant: "green",
          location_id: "L_12345",
          price: 9.99,
          quantity: 1
        }
      ]
    }
  }
];

module.exports = {
  ecommerce_events_ga4: ecommerce_events_ga4
}