import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./components/Countries";
import Details from "./components/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countries />}>
          <Route path="countries/:cca2" element={<Details />} />
        </Route>
        <Route path="countries" element={<Countries />} />
      </Routes>
    </Router>
  );
}

export default App;
