import { Route, Routes } from "react-router-dom";
import { Home } from "./Home.jsx"

export function Content() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}