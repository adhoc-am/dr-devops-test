var expect = require('chai').expect;
var http = require('http');
var server = require('../hello-world');

describe('Hello World', function() {
  it('Should return HelloWorld!', function(done) {
    http.get('http://localhost:50001', function(res) {
      var body = '';

      res.on('data', function(chunk) {
        body += chunk;
      });

      res.on('end', function() {
        expect(body).to.equal('Hello World!');
        server.close();
        done();
      });
    });
  });
});