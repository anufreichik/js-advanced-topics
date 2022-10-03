class MarinaPromise {
  constructor(executor) {
    this.queue = [];
    this.errorHandler = () => {};
    this.finalHandler = () => {};
    executor.call(null, this.onResolve.bind(this), this.onReject.bind(this));
  }
  onResolve(val) {
    this.queue.forEach((cb) => {
      val = cb(val);
    });
  }

  onReject(val) {
    this.errorHandler(val);
  }

  then(fn) {
    this.queue.push(fn);
    return this;
  }
  catch(fn) {
    this.errorHandler = fn;
    return this;
  }
  finally(fn) {
    this.finalHandler = fn;
    return this;
  }
}

const promise = new Promise((resolve, reject) => {
  resolve("hi");
});
promise.then((res) => {
  console.log(res);
});
