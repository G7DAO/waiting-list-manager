const faunadb = require("faunadb");
const jwt = require("jsonwebtoken");

const q = faunadb.query
const secret = CF_FAUNADB_SECRET
const domain = CF_FAUNADB_ENDPOINT

// Instantiate a client
const client = new faunadb.Client({
  secret: secret,
  domain: domain,
})

/*
  GET single user profile by id
  NOT USED ATM
 */
const getUser = async (uuid) => {
    return await client.query(
      q.Get(q.Ref(q.Collection('Users'), uuid))
  )
      .then((res) => res)
      .catch((err) => console.error(
          'Error: ' + err.name + ': ' + err.message + ' ' + err.errors()[0].description
      ))
};

/*
  GET array of users
  NOT USED ATM
 */
const getUsers = async () => {
  return await client.query(
      q.Map(
          q.Paginate(q.Documents(q.Collection('Users')), {size: 100}),
          q.Lambda('ref', q.Get(q.Var('ref')))
      )
  )
      .then((res) => res.data)
      .catch((err) => console.error(
          'Error: ' + err.name + ': ' + err.message + ' ' + err.errors()[0].description
      ))
};

/*
  CREATE A NEW USER OR IDENTIFY USER FOR AUTH
  ACTIVE
 */
const createUser = async (address) => {
  try {
    // Find user
    const user = await client.query(
      q.Get(
        q.Match(q.Index('user_by_public_address'), address)
      )
    )

    const token = await createJWTAccessToken(user.ref.id);
    return {
      token,
      userId: "", // user.ref.id
      code: 200,
    }

  } catch (error) {

    // If user not found in database create a new user
    if(error.name === 'NotFound') {
      const newUser = await registerUser(address)
      const token = await createJWTAccessToken(newUser.ref.id);

      return {
        token,
        //userId: newUser.ref.id, << possible security issue
        userId:  "",
        code: 201,
      }
    }

    return {
      token: "",
      userId: "",
      code: 401,
    }
  }
}

/*
  UPDATE single user by id
  NOT USED ATM
 */
const updateUser = async (dataMap, id) => {
  /*
    NOT USED
   */
  try {
    return await client.query(
        q.Update(
          q.Ref(q.Collection('Users'), id),
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

/*
  CREATE A NEW USER
  Registers a new User in FaunaDB
  ACTIVE
 */
const registerUser = (public_address) => {
  return client.query(
      q.Create(
        q.Collection('Users'),
        { data: { public_address } },
      )
  );
};

/*
  Generate an access Token For Fauna
  Useful when you want to grant an authenticated user direct read access to faunadb from DAPP
  NOT USED ATM
 */
const createFaunaAccessToken = (ref, ttl) => {
  return client.query(
    q.Create(q.Tokens(), {
      instance: q.Ref(q.Collection("Ideas"), ref),
      data: {
        type: "access"
      },
      ttl: q.TimeAdd(q.Now(), ttl, "seconds"),
    })
  );
};

/*
  Generate a JWT Access Token
  ACTIVE
 */
const createJWTAccessToken = (user) => {
  return jwt.sign({ user }, CF_TOKEN_SECRET, { expiresIn: '1h' })
};

// named export
module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
};