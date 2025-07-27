/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (function () {
  let time: ReturnType<typeof setTimeout> | undefined;

  return function (callback: (...args: any[]) => void, delay: number) {
    return (...args: any[]) => {
      if (time) {
        clearTimeout(time);
      }
      time = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };
})();
