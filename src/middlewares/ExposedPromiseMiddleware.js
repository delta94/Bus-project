export const DEFERRED = 'meta';

const createExposedPromise = () => {
  const deferred = {};

  const promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });

  return [promise, deferred];
};

export default () => (next) => (action) => {
  if (!action?.meta?.async) {
    return next(action);
  }

  const [promise, deferred] = createExposedPromise();
  next({ ...action, deferred });
  return promise;
};
