import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import PerformancePage from "./pages/PerformancePage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/performance" element={<PerformancePage />} />
      </Routes>
    </BrowserRouter>
  )
}
