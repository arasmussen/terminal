var time = (new Date()).getTime();
requirejs.config({
  baseUrl: '.',
  urlArgs: 'bust=' + time,
  paths: {}
});

requirejs(['main'], function(main) {
  main();
});
