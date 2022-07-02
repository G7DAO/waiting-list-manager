const createUsers = () => {

  const getUsers = async () => {
    try {
      return null
    } catch (err) {
      return null
    }
  };

  const createUser = async (signed_msg) => {
    const url = process.env.REACT_APP_API_LOCAL_URL+'/v1/auth/user'
    return await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Key': process.env.REACT_APP_PUBLIC_KEY,
          'Authorization': 'Bearer ' + process.env.REACT_APP_API_TOKEN
        },
      body: JSON.stringify({
        signed_msg
      }),
    });
  }

  return {
    getUsers,
    createUser,
  };
}

export default createUsers();