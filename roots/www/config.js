// Copyright (c) Andrew Rasmussen 2013 All Rights Reserved

define(function() {
  return {
    // loads B when A is requested
    aliases: {
      '/': '/index',
      '/favicon.ico': '/img/favicon.ico',
    },

    cssFiles: {
      '/index': ['index']
    },

    endpoints: {},

    // sends a 302 redirect from A to B
    redirects: {
      '/home': '/'
    }
  };
});
