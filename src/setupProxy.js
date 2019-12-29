const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/logs',
    proxy({
      target: 'http://localhost:4000',
      changeOrigin: true
    })
  );
  app.use(
    '/techs',
    proxy({
      target: 'http://localhost:4000',
      changeOrigin: true
    })
  );
};