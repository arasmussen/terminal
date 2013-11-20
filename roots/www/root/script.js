$(function() {
  var input = $('.input');
  var history = $('.history');

  var LINE_HEIGHT = 23;
  var HISTORY_MAX_HEIGHT = 600 - LINE_HEIGHT;

  var commands = {
  };

  function historyPush(text) {
    var li = $('<li>');
    li.html(text);

    var historyHeight = parseInt(history.css('height'));
    historyHeight += LINE_HEIGHT;
    if (historyHeight > HISTORY_MAX_HEIGHT) {
      historyHeight = HISTORY_MAX_HEIGHT;
    }

    history.css('height', historyHeight + 'px');
    history.append(li);
  }

  function moveToHistory(cmd) {
    historyPush(cmd);
    input.val('');
  }

  function processCommand(cmd) {
    if (cmd == '') {
      return;
    }

    var bin = cmd.split(' ')[0];
    if (!commands[bin]) {
      historyPush('Command not found: "' + bin + '"');
    } else {
      commands[bin](cmd);
    }
  }

  function handleEnterPress() {
    var cmd = input.val();
    moveToHistory(cmd);
    processCommand(cmd);
  }

  input.keypress(function(e) {
    if (e.charCode == 13) { // enter key
      handleEnterPress();
    }
  });
});
