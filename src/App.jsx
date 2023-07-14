import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-contact" element={<NewContact />} />
      </Routes>
    </>
  );
}

export default App;
