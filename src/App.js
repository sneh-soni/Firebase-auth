import { useEffect, useState } from "react";
import Login from "./components/Login";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (User) => {
      if (user) {
        setUser(User);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <div>{user ? <></> : <Login />}</div>;
}

export default App;
