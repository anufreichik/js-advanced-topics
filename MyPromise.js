const promise = new Promise((resolve, reject) => {
  resolve("hi");
});

class MyPromise {
  constructor(executor) {
    this.queue = [];
    this.errorHandler = (v) => {};
    this.finallyHandler = (v) => {};
    try {
      executor.call(null, this.onResolve.bind(this), this.onReject.bind(this));
    } catch (e) {
      this.errorHandler(e);
    }
  }

  onResolve(val) {
    this.queue.forEach((callback) => {
      val = callback(val);
    });
  }
  onReject(error) {
    this.errorHandler(error);
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
    this.finallyHandler = fn;
    return this;
  }
}
