define([], function() {
  var LINE_HEIGHT = 23;
  var MAX_HEIGHT = 600 - LINE_HEIGHT;

  return Base.extend({
    constructor: function(className) {
      this.element = $('.' + className);
    },

    push: function(text) {
      var li = $('<li>');
      li.html(text);

      var historyHeight = parseInt(this.element.css('height'));
      historyHeight += LINE_HEIGHT;
      if (historyHeight > MAX_HEIGHT) {
        historyHeight = MAX_HEIGHT;
      }

      this.element.css('height', historyHeight + 'px');
      this.element.append(li);
    }
  });
});
