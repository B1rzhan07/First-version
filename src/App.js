import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import HomeAdmin from "./Pages/Home/HomeAdmin";
import RegisterPatient from "./Pages/Registration/RegisterPatient";
import RegisterDoctor from "./Pages/Registration/RegisterDoctor";
import HomeDoctor from "./Pages/Home/HomeDoctor";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path="/doctor" element={<HomeDoctor />} />
        <Route
          path="/registerPatient"
          exact
          element={<RegisterPatient />}
        />
        <Route
          path="/registerDoctor"
          exact
          element={<RegisterDoctor />}
        />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
