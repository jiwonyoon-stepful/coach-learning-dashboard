import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Dashboard from "./pages/Dashboard"

function Placeholder({ title }) {
  return (
    <div className="flex items-center justify-center h-64 text-gray-400 text-sm">
      {title} — coming soon
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Placeholder title="My Tasks" />} />
          <Route path="/resources" element={<Placeholder title="Resources" />} />
          <Route path="/messages" element={<Placeholder title="Messages" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
