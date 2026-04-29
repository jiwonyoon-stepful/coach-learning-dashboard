import Layout from "../components/Layout"
import ChatArea from "../components/ChatArea"
import RightPanel from "../components/RightPanel"

function AlertBanner({ text }) {
  return (
    <div className="flex items-center gap-2 px-5 py-2 text-xs shrink-0" style={{ background: "#d8f5ea", color: "#171717" }}>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#337b64" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
      <span>{text}</span>
    </div>
  )
}

export default function Dashboard() {
  return (
    <Layout>
      <div className="flex flex-col flex-1 overflow-hidden">
        <AlertBanner text="Nova L completed her assignment while you were away! Great job helping her get one step closer to graduating!" />
        <div className="flex flex-1 overflow-hidden">
          <ChatArea />
          <RightPanel />
        </div>
      </div>
    </Layout>
  )
}
