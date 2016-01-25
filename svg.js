exports.instantiate = function(load) {
  try {
    if (window && window.DOMParser) {
      return (new DOMParser()).parseFromString(load.source, 'image/svg+xml');
    } else {
      throw {
        name: 'NotImplemented',
        message: 'DOMParser not supported.'
      }
    }
  } catch(e) {
    throw e;
  }
};
