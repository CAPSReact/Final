import { Route, Routes } from "react-router-dom";
import Signin from "./pages/sign/Signin";
import Signup from "./pages/sign/Signup";
import Navigation from "./components/navigation/Navigation";
import House from "./pages/views/House";
import InSide from "./pages/views/InSide";
import Board from "./pages/board/Board";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<House />} />
        <Route path="/outside" element={<House />} />
        <Route path="/inside" element={<InSide />} />
        <Route path="/board" element={<Board />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
