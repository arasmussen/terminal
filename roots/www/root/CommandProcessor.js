define([], function() {
  var commands = {
  };

  return {
    process: function(cmd, cb) {
      if (cmd == '') {
        cb();
        return;
      }

      var bin = cmd.split(' ')[0];
      if (!commands[bin]) {
        cb('Command not found: "' + bin + '"');
      } else {
        commands[bin](cmd, cb);
      }
    }
  };
});
