'use strict';

const supergoose = require('@code-fellows/supergoose');
const app = require('../lib/server.js');

const testServer = supergoose(app);

describe('tests the products and categories routes and data layer', () => {
  test('should return a new category on POST /user', () => {

    return testServer.post('/categories')
      .send({ "name": "Tester", "display_name": "test", "description": "testing the put" })
      .then(res => {
        expect(res.status).toStrictEqual(200);
        expect(res.body._id).toBeTruthy();
        expect(res.body.name).toStrictEqual('Tester');
      })
  });

  test('should return the category we just made when I GET from /categories', () => {
    return testServer.get(`/categories`)
      .then(res => {
        expect(res.status).toStrictEqual(200);
        expect(res.body.length).toStrictEqual(1);
      });
  });
});