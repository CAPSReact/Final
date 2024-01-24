import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signin from "./pages/sign/Signin";
import Signup from "./pages/sign/Signup";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
