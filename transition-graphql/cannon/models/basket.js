import { addProductApi } from '../api/addProduct';

const domain = createDomain('basket');

export const productAdded = domain.createEvent();

const addProductFx = createApiEffect(addProductApi);

export const $basket = domain.createStore();
export const $error = domain.createStore(null);
export const $isPending = domain.createStore(false);

sample({
  clock: productAdded,
  fn: params => params.id,
  target: addProductFx,
});

sample({
  clock: addProductFx.doneData,
  target: $basket,
});

sample({
  clock: addProductFx.pending,
  target: $isPending,
});
