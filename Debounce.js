const debounce = (cb, delay) => {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const clickDebounced = debounce(() => {
  console.log("clicked");
}, 500);
