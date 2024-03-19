export const addProductApi = async ({ client, input }) => {
  const result = await addProductMutation({
    client,
    variables: {
      input,
    },
  });

  if (
    result.basket.addProduct.__typename !==
    'Order_AddProductPayload'
  ) {
    throw new Error('Ошибка добавления в корзину');
  }

  if (!result.basket.addProduct.query) {
    throw new Error('Ошибка получения корзины');
  }

  return {
    record: result.basket.addProduct.record,
  };
};
