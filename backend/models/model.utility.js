const faunadb = require("faunadb");
const constants = require("../constants");

const q = faunadb.query
const secret = CF_FAUNADB_SECRET
const domain = CF_FAUNADB_ENDPOINT

// Instantiate a client
const client = new faunadb.Client({
  secret: secret,
  domain: domain,
})

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
}

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
}

const log = async (data) => {
  try {
    return await client.query(
        q.Create(
            q.Collection('Logs'),
            { data }
        )
    )
        .then((res) => res)
        .catch((err) => console.error(
            'Error: ' + err.name + ': ' + err.message + ' ' + err.errors()[0].description
        ))
  } catch (err) {
    console.error(
        'Error: ' + err.name + ': ' + err.message + ' ' + err.errors()[0].description
    )
  }
}

// named export
module.exports = {
  isEmpty,
  sleep,
  log,
};