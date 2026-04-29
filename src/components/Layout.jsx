import Sidebar from "./Sidebar"
import TopBar from "./TopBar"

export default function Layout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <div className="flex flex-1 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}
