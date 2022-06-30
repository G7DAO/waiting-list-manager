const _c = require('../constants');
module.exports = class AppRes {
  constructor(request) {

  }

  /**
   * Send Response with data, headers and status code
   * @param {any} data data sent by user
   * @param {boolean} status status for the response, default 200
   * @returns
   */
  send(data, status = _c.GENERAL_SUCCESS_CODE) {
    return new Response(JSON.stringify(data), {
      status,
      headers: _c.CORS_HEADER, // security addition
    });
  }
};
