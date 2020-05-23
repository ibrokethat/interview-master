export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const RATE_PRODUCT = 'RATE_PRODUCT';

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
  payload: [
    {
      id: 1,
      title: "Nike Trainers",
      description: "Some Nike trainers you might like to buy"
    },
    {
      id: 2,
      title: "Addidas Trainers",
      description: "Some Addidas trainers you might like to buy"
    },
    {
      id: 3,
      title: "Puma Trainers",
      description: "Some Puma trainers you might like to buy"
    },
    {
      id: 4,
      title: "New Balance Trainers",
      description: "Some New Balance trainers you might like to buy"
    }
  ]
});

export const rateProduct = (id, rating) => ({
  type: RATE_PRODUCT,
  id,
  rating
});
