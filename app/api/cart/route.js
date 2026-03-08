export async function GET() {
  return Response.json({
    cartItems: [
      {
        product_id: 101,
        product_name: "Bamboo Toothbrush (Pack of 4)",
        product_price: 299,
        quantity: 2,
        image: "https://picsum.photos/200?1"
      },
      {
        product_id: 102,
        product_name: "Reusable Cotton Produce Bags",
        product_price: 450,
        quantity: 1,
        image: "https://picsum.photos/200?2"
      },
      {
        product_id: 103,
        product_name: "Steel Straw Set",
        product_price: 199,
        quantity: 1,
        image: "https://picsum.photos/200?3"
      },
      {
        product_id: 104,
        product_name: "Eco Soap Bar",
        product_price: 120,
        quantity: 2,
        image: "https://picsum.photos/200?4"
      },
      {
        product_id: 105,
        product_name: "Organic Cotton Towel",
        product_price: 650,
        quantity: 1,
        image: "https://picsum.photos/200?5"
      },
      {
        product_id: 106,
        product_name: "Bamboo Hair Brush",
        product_price: 350,
        quantity: 1,
        image: "https://picsum.photos/200?6"
      },
      {
        product_id: 107,
        product_name: "Eco Dish Scrubber",
        product_price: 180,
        quantity: 1,
        image: "https://picsum.photos/200?7"
      },
      {
        product_id: 108,
        product_name: "Reusable Water Bottle",
        product_price: 799,
        quantity: 1,
        image: "https://picsum.photos/200?8"
      },
      {
        product_id: 109,
        product_name: "Natural Laundry Powder",
        product_price: 499,
        quantity: 1,
        image: "https://picsum.photos/200?9"
      },
      {
        product_id: 110,
        product_name: "Plant Based Cleaner",
        product_price: 299,
        quantity: 1,
        image: "https://picsum.photos/200?10"
      },
      {
        product_id: 111,
        product_name: "Organic Face Wash",
        product_price: 399,
        quantity: 1,
        image: "https://picsum.photos/200?11"
      },
      {
        product_id: 112,
        product_name: "Eco Toothpaste",
        product_price: 250,
        quantity: 1,
        image: "https://picsum.photos/200?12"
      },
      {
        product_id: 113,
        product_name: "Compostable Trash Bags",
        product_price: 550,
        quantity: 1,
        image: "https://picsum.photos/200?13"
      },
      {
        product_id: 114,
        product_name: "Natural Shampoo Bar",
        product_price: 320,
        quantity: 1,
        image: "https://picsum.photos/200?14"
      },
      {
        product_id: 115,
        product_name: "Reusable Lunch Box",
        product_price: 850,
        quantity: 1,
        image: "https://picsum.photos/200?15"
      }
    ],
    shipping_fee: 50,
    discount_applied: 0
  });
}