Promise.all([fetch("/api/a"), fetch("/api/b"), fetch("/api/c")]).then(
  ([responseA, responseB, responseC]) => {
    // Use the responses from all three async requests.
  }
);

Promise.all = function MyPromiseAll(arr) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    arr.forEach((value, index) => {
      Promise.resolve(value)
        .then((result) => {
          results[index] = result;
          completed += 1;

          if (completed === arr.length) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};
