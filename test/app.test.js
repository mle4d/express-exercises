const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('has an index page', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Go Away'));
      });
  });
});