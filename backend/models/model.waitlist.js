const faunadb = require("faunadb");

const q = faunadb.query
const secret = CF_FAUNADB_SECRET
const domain = CF_FAUNADB_ENDPOINT

// Instantiate a client
const client = new faunadb.Client({
  secret: secret,
  domain: domain,
})

const deleteWaitListEntry = async (uuid) => {
    return await client.query(
      q.Delete(q.Ref(q.Collection('Waitlist'), uuid))
  )
      .then((res) => res)
      .catch((err) => console.error(
          'Error: ' + err.name + ': ' + err.message + ' ' + err.errors()[0].description
      ))
};

const getWaitListEntry = async (uuid) => {
    return await client.query(
      q.Get(q.Ref(q.Collection('Waitlist'), uuid))
  )
      .then((res) => res)
      .catch((err) => console.error(
          'Error: ' + err.name + ': ' + err.message + ' ' + err.errors()[0].description
      ))
};

const getAllWaitListEntries = async () => {
  return await client.query(
      q.Map(
          q.Paginate(q.Documents(q.Collection('Waitlist')), {size: 100}),
          q.Lambda('ref', q.Get(q.Var('ref')))
      )
  )
      .then((res) => res.data)
      .catch((err) => console.error(
          'Error: ' + err.name + ': ' + err.message + ' ' + err.errors()[0].description
      ))
};

const createWaitListEntry = async (dataMap) => {
  try {
    const { waitlist } = dataMap
    waitlist['state'] = "submission:review"

    return await client.query(
        q.Create(
            q.Collection('Waitlist'),
            { data: waitlist }
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

const updateWaitListEntry = async (dataMap, id) => {
  try {
    return await client.query(
        q.Update(
          q.Ref(q.Collection('Waitlist'), id),
          {data: dataMap}
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
  getWaitListEntry,
  getAllWaitListEntries,
  createWaitListEntry,
  updateWaitListEntry,
  deleteWaitListEntry,
};