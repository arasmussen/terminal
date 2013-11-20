define(['Input', 'History'], function(Input, History) {
  return function() {
    var history = new History('history');
    var input = new Input('input', history);
  };
});
