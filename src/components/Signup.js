import React, { useState } from "react";
import { auth } from "../utils/firebase";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  return (
    <div>
      <label>email</label>
      <input
        type="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label>password</label>
      <input
        type="password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
    </div>
  );
};

export default Signup;
