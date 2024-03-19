export const headerStatusUpdated = domain.createEvent();

const $headerStatus = domain.createStore(null);

sample({
  clock: headerStatusUpdated,
  target: $headerStatus,
});
