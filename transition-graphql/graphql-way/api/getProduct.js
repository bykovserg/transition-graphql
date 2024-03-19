export const addProductApi = async ({ client, input }) => {
  const result = await getProductQuery({
    client,
    variables: {
      input,
    },
  });

  return result;
};
