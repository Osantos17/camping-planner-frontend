import { Header } from "./Header";
import { Content } from "./Content";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./Signup";
import "./Header.css"
import { NationalParks } from "./NationalParks"
import { LogIn } from "./LogIn"
import { MyParks } from './MyParks';
import { RadarMap } from './RadarMap'

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/nationalparks" element={<NationalParks />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/myparks" element={<MyParks />} />
          <Route path="/maps" element={<RadarMap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
