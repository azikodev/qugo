import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import Navbar from "./layout/Navbar";
function App() {
  const { login, register } = useKindeAuth();
  return (
    <>
      <Navbar/>
      {/* <button onClick={register} type="button">Register</button> */}
      {/* <button onClick={login} type="button">Log In</button> */}
    </>
  )
}

export default App
