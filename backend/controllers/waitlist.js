const models = require('../models');
const _c = require('../constants');

const db = models._waitlist
const utility = models._utility

/*
  GET A SINGLE Wait List Entry
  RETURN: Object
 */
exports.getWaitListEntry = async (req, res) => {

  const { entryId } = req.params
  try {
    if (entryId) {
      const resp = await db.getWaitListEntry(entryId)
      // get resource
      if (typeof(resp) === "object" && utility.isEmpty(resp) === false) {
        let data = resp["data"]
        data["ts"] = resp["ts"]
        data["id"] = resp["ref"]["id"]

        return res.send({
          status: 1,
          message: _c.FOUND_MESSAGE,
          data,
        }, _c.GENERAL_SUCCESS_CODE, _c.FOUND_MESSAGE)
      }
    }

    // resource not found error
    return res.send({
      status: 0,
      message: _c.NOT_FOUND_ERROR_MESSAGE,
      data:null,
    }, _c.NOT_FOUND_ERROR_CODE, _c.NOT_FOUND_ERROR_MESSAGE)

  } catch (e) {
    // fatal error occurred
    return res.send({
      status: 0,
      message: _c.INTERNAL_SERVER_ERROR_MESSAGE,
      data:null,
    }, _c.INTERNAL_SERVER_ERROR_CODE, _c.INTERNAL_SERVER_ERROR_MESSAGE)
  }
}

/*
  GET ALL Wait List Entries
  RETURN: Array
 */
exports.getWaitListEntries = async (req, res) => {
  try {
    // array of Wait Lists
    const resp = await db.getAllWaitListEntries()
    if (typeof(resp) === "object" && utility.isEmpty(resp) === false) {
      const data = []
      for (let i in resp) {
        // fail-over to catch block is value not available
        let _d = resp[i]["data"]
        _d["ts"] = resp[i]["ts"]
        _d["id"] = resp[i]["ref"]["id"]

        data.push(_d)
      }

      return res.send({
        status: 1,
        message: _c.FOUND_MESSAGE,
        data,
      }, _c.GENERAL_SUCCESS_CODE, _c.FOUND_MESSAGE)
    }

    // resource not found error
    return res.send({
      status: 0,
      message: _c.NOT_FOUND_ERROR_MESSAGE,
      data:null,
    }, _c.NOT_FOUND_ERROR_CODE, _c.NOT_FOUND_ERROR_MESSAGE)

  } catch (e) {
    // fatal error occurred
    return res.send({
      status: 0,
      message: _c.INTERNAL_SERVER_ERROR_MESSAGE,
      data:null,
    }, _c.INTERNAL_SERVER_ERROR_CODE, _c.INTERNAL_SERVER_ERROR_MESSAGE)
  }
}

/*
  CREATE SINGLE Wait List Entry
  RETURN: Post Body
 */
exports.createWaitListEntry = async (req, res) => {
  try {
    const _body = await req.body()

    if (typeof(_body) === "object" && utility.isEmpty(_body) === false) {

      const resp = await db.createWaitListEntry(_body)
      if (typeof(resp) === "object" && utility.isEmpty(resp) === false) {
        let data = resp["data"]
        data["ts"] = resp["ts"]
        data["id"] = resp["ref"]["id"]
        // Discord Webhook

        // Create State

        // Create XP

        return res.send({
          status: 1,
          message: _c.CREATE_SUCCESS_MESSAGE,
          data,
        }, _c.CREATE_SUCCESS_CODE, _c.CREATE_SUCCESS_MESSAGE)
      }
    }

    return res.send({
      status: 0,
      message: _c.CREATE_ERROR_MESSAGE,
      data:null,
    }, _c.GENERAL_ERROR_CODE, _c.CREATE_ERROR_MESSAGE)

  } catch(err) {
    return res.send({
      status: 0,
      message: _c.INTERNAL_SERVER_ERROR_MESSAGE,
      data:null,
    }, _c.INTERNAL_SERVER_ERROR_CODE, _c.INTERNAL_SERVER_ERROR_MESSAGE)
  }

}

/*
  UPDATE SINGLE Wait List Entry
  RETURN: Post Body
 */
exports.updateWaitListEntry = async (req, res) => {

  const body = await req.body()
  const { entryId } = req.params

  if (typeof(body) === "object" && utility.isEmpty(body) === false) {
    const resp = await db.updateWaitListEntry(body, entryId)
    if (typeof(resp) === "object" && utility.isEmpty(resp) === false) {
      let data = resp["data"]
      data["ts"] = resp["ts"]
      data["id"] = resp["ref"]["id"]

      return res.send({
        status: 1,
        message: _c.UPDATE_SUCCESS_MESSAGE,
        data,
      }, _c.GENERAL_SUCCESS_CODE, _c.UPDATE_SUCCESS_MESSAGE)
    }
  }

  return res.send({
    status: 0,
    message: _c.UPDATE_ERROR_MESSAGE,
    data:null,
  }, _c.GENERAL_ERROR_CODE, _c.UPDATE_ERROR_MESSAGE)
}

/*
  DELETE SINGLE Wait List Entry
  RETURN: object that was deleted
 */
exports.deleteWaitListEntry = async (req, res) => {
  const { entryId } = req.params
  try {
    if (entryId) {
      const resp = await db.deleteWaitListEntry(entryId)
      // get resource
      if (typeof(resp) === "object" && utility.isEmpty(resp) === false) {
        let data = resp["data"]
        data["ts"] = resp["ts"]

        return res.send({
          status: 1,
          message: _c.DELETE_SUCCESS_MESSAGE,
          data,
        }, _c.GENERAL_SUCCESS_CODE, _c.DELETE_SUCCESS_MESSAGE)
      }
    }

    // resource not found error
    return res.send({
      status: 0,
      message: _c.DELETE_ERROR_MESSAGE,
      data:null,
    }, _c.GENERAL_ERROR_CODE, _c.DELETE_ERROR_MESSAGE)

  } catch (e) {
    // fatal error occurred
    return res.send({
      status: 0,
      message: _c.INTERNAL_SERVER_ERROR_MESSAGE,
      data:null,
    }, _c.INTERNAL_SERVER_ERROR_CODE, _c.INTERNAL_SERVER_ERROR_MESSAGE)
  }
}