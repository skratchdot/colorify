/*globals self */
export default function(fn) {
  if (typeof fn !== 'function') {
    fn = function() {};
  }
  self.onmessage = function(event) {
    self.postMessage(fn.apply(null, event.data));
  };
  self.onerror = function() {
    self.postMessage(null);
  };
};
