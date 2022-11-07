import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home";
import Editpage from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="edit" element={<Editpage />} />
      </Routes>
    </div>
  );
}

export default App;
