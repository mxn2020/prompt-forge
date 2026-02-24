import { History, CheckCircle, XCircle } from "lucide-react";
const runs = [
  { id: "r1", prompt: "Summarize Email", version: "v4", model: "gpt-4o", latency: "840ms", status: "success", time: "2 min ago" },
  { id: "r2", prompt: "Generate SQL Query", version: "v12", model: "claude-3-5-sonnet", latency: "1.2s", status: "success", time: "15 min ago" },
  { id: "r3", prompt: "Extract JSON Entities", version: "v2", model: "gpt-3.5-turbo", latency: "340ms", status: "failed", time: "1 hour ago" },
];
export default function HistoryPage() {
  return (<div style={{padding:"var(--space-6)",maxWidth:1000}}>
    <h1 style={{fontSize:"var(--font-size-xl)",fontWeight:600,marginBottom:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-2)"}}><History size={20}/> Test Run History</h1>
    <div style={{display:"flex",flexDirection:"column",gap:"var(--space-2)"}}>{runs.map(r=>(<div key={r.id} className="card" style={{padding:"var(--space-3) var(--space-4)",display:"flex",alignItems:"center",gap:"var(--space-4)"}}>
      {r.status==="success"?<CheckCircle size={16} style={{color:"var(--color-success)"}}/>:<XCircle size={16} style={{color:"var(--color-error)"}}/>}
      <div style={{flex:1}}><strong>{r.prompt}</strong> <span className="badge badge-orange" style={{marginLeft:8}}>{r.version}</span></div>
      <span style={{fontFamily:"var(--font-mono)",fontSize:"12px"}}>{r.model}</span>
      <span style={{fontFamily:"var(--font-mono)",fontSize:"12px",color:"var(--color-text-secondary)"}}>{r.latency}</span>
      <span style={{fontSize:"12px",color:"var(--color-text-tertiary)",width:80,textAlign:"right"}}>{r.time}</span>
    </div>))}</div>
  </div>);
}
