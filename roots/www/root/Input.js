define(['CommandProcessor'], function(CommandProcessor) {
  var PREFIX = '$ ';

  return Base.extend({
    constructor: function(className, history) {
      this.element = $('.' + className);
      this.history = history;
      this.frozen = false;

      this.element.keypress(this.onKeypress.bind(this));
      this.element.val(PREFIX);
    },

    freeze: function() {
      this.frozen = true;
    },

    unfreeze: function() {
      this.frozen = false;
    },

    onCommandProcessed: function(response) {
      this.history.push(response);
      this.unfreeze();
    },

    onEnterPress: function() {
      if (this.frozen) {
        return;
      }

      var cmd = this.element.val();
      if (cmd == '') {
        this.history.push('');
        return;
      }

      // freeze input until command is finished executing
      this.freeze();

      // clear input and move it to history
      this.element.val(PREFIX);
      this.history.push(cmd);

      // kick off the command execution
      var command = CommandProcessor.process(
        cmd,
        this.onCommandProcessed.bind(this)
      );
      var bin = cmd.split(' ')[0];
    },

    onKeypress: function(e) {
      console.log('here');
      if (e.charCode == 13) { // enter
        this.onEnterPress();
      }
    }
  });
});
