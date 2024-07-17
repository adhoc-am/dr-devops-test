const assert = require('assert');
const http = require('http');
const request = require('../hello-world');

// Your server creation logic (server.js)
const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
});

describe('HTTP Server Test', function() {
    let app;
  
    beforeEach(function(done) {
      app = server.listen(8080, done);
    });
  
    afterEach(function(done) {
      app.close(done);
    });
  
    it('responds with Hello World', function(done) {
      request(server)
        .get('/')
        .expect(200)
        .expect('Content-Type', 'text/html')
        .end(function(err, res) {
          if (err) return done(err);
          assert.strictEqual(res.text, 'Hello World!');
          done();
        });
    });
  });