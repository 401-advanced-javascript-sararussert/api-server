'use strict';

const supergoose = require('@code-fellows/supergoose');
const app = require('../lib/server.js');

const testServer = supergoose(app);

describe('tests the products and categories routes and data layer', () => {
  test('I can use the post method to add products to the db', () => {
    return testServer.post('/products')
      .send({"category": "shoes",
        "name": "Cool Shoes",
        "display_name": "real cool shoes",
        "description": "hey let's test these real cool shoes" })
      .then(res => {
        expect(res.status).toStrictEqual(200);
        expect(res.body._id).toBeTruthy();
        expect(res.body.name).toStrictEqual('Cool Shoes');
      })
  });


});

