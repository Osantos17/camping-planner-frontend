import { Header } from "./Header";
import { Content } from "./Content";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, } from "react-router-dom";
import "./App.css";
// import { Signup } from "./Signup";
import "./Header.css"
// import { NationalParks } from "./NationalParks"
// import { MyParks } from './MyParks';

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <Content />
        {/* <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/nationalparks" element={<NationalParks />} />
          <Route path="/myparks" element={<MyParks />} />
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
