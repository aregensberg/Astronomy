const proxy = require('http-proxy-middleware');

module.exports = function (app) {

  app.use(proxy('/apis', {
      logLevel: 'debug',
      target: "138.197.197.115:8080/",
      changeOrigin: true,
    }
  ));
};