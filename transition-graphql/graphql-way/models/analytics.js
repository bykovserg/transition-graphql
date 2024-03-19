import { productAdded } from './product';

export const productAdded = domain.createEvent();

const sendAddProductAnalytics = createReduxEffect(({ dispatch }, params) => {
  dispatch(
    redux.actions.pushEvents([
      {
        event: 'OWOX',
        eventCategory: 'Conversions',
        eventAction: 'add',
        eventLabel: 'cart',
        ecommerce: {
          currencyCode: 'RUB',
        },
      },
    ]),
  );
});

sample ({
  source: productAdded,
  fn: params => params.productAnalytics,
  target: sendAddProductAnalytics,
});
