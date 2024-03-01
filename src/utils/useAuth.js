const signUpFetch = async (credentials) => {
  try {
    const res = await fetch("http://localhost:5001/users/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

const signInFetch = async (credentials) => {
  try {
    const res = await fetch("http://localhost:5001/users/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

const verifyUser = async () => {
  try {
    const res = await fetch("http://localhost:5001/users/verify", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5001",
      },
      credentials: "include",
    });
    const data = await res.json();

    return data;
  } catch (err) {
    return err;
  }
};

export default { signUpFetch, signInFetch, verifyUser };
