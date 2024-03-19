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
    basket: {
      id: result.basket.addProduct.query.id,
    },
    recordId: result.basket.addProduct.recordId,
  };
};
