function composerReducer(res, fn) {
  return [fn.call(null, ...res)];
}

export function compose(...fns) {
  return (...args) => fns.reduceRight(composerReducer, args)[0];
}
