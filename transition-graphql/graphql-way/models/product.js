import { addProductApi } from '../api/addProduct';

export const productAdded = domain.createEvent();
export const recommendationAdded = domain.createEvent();
export const initialized = domain.createEvent();

const $product = domain.createStore(null);

const addProductFx = createApiEffect(addProductApi);

const getProductFx = createApiEffect(gatProductApi);

sample({
  clock: initialized,
  target: getProductFx,
});

sample({
  clock: getProductFx.doneData,
  target: $product,
});

sample({
  clock: productAdded,
  target: addProductFx,
});

sample({
  clock: recommendationAdded,
  target: addProductFx,
});

sample({
  clock: addProductFx.doneData,
  source: $product,
  fn: () => updateProduct(product, basketStatus),
  target: $product,
})
