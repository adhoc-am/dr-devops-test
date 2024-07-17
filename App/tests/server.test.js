describe('HTTP Server Test', function() {
    let app;
  
    // Before each test, start the server
    beforeEach(function(done) {
      app = server.listen(8080, done);
    });
  
    // After each test, close the server
    afterEach(function(done) {
      app.close(done);
    });
  
    // Test case for GET /
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