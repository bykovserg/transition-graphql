import {productAdded} from "./basket";

const sendAddProductAnalytics = createReduxEffect(({ dispatch }) => {
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
