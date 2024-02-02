import "./App.css";
import Create from "./component/Create";
import { Routes, Route } from "react-router-dom";
import Read from "./component/Read";
import Edit from "./component/Edit";

function App() {
  return (
    <div className="conatiner">
      <Routes>
        <Route exact path="/" element={<Read></Read>}></Route>
        <Route exact path="/create" element={<Create></Create>}></Route>
        <Route exact path="/edit" element={<Edit></Edit>}></Route>
      </Routes>
    </div>
  );
}

export default App;
