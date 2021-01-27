export const mockIntersectionObserver = function () {
  global.IntersectionObserver = jest.fn(function () {
    this.observe = jest.fn();
    this.unobserve = jest.fn();
    this.disconnect = jest.fn();
  });
};
