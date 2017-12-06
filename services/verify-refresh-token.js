'use strict';
var P = require('bluebird');
var request = require('superagent');

function VerifyRefreshToken(opts, params) {
  this.perform = function () {
    return new P(function (resolve) {
      var forestUrl = process.env.FOREST_URL ||
        'https://forestadmin-server.herokuapp.com';

      request
        .post(forestUrl + '/forest/verifyToken')
        .set('Accept', 'application/json')
        .send({
          userId: params.userId,
          renderingId: params.renderingId,
          refreshToken: params['refresh-token']
        })
        .end(function (error, result) {
          resolve(result);
        });
    });
  };
}

module.exports = VerifyRefreshToken;
