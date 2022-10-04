const throttle = (cb, delay) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < delay) return;
    else {
      last = now;
      cb(...args);
    }
  };
};

const clickWithThrottle = throttle(() => {
  console.log("click");
}, 1000);
