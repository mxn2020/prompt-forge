import { Play, Save, History, Settings2 } from "lucide-react";
export default function EditorPage() {
  return (<div style={{height:"100vh",display:"flex",flexDirection:"column"}}>
    <header style={{height:56,borderBottom:"1px solid var(--color-border)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 var(--space-4)"}}>
      <div style={{display:"flex",alignItems:"center",gap:"var(--space-3)"}}>
        <span className="badge badge-orange">v12</span>
        <h1 style={{fontSize:"var(--font-size-base)",fontWeight:600}}>Generate SQL Query</h1>
      </div>
      <div style={{display:"flex",gap:"var(--space-2)"}}>
        <button className="btn btn-sm"><History size={14}/> History</button>
        <button className="btn btn-sm"><Save size={14}/> Save</button>
        <button className="btn btn-primary btn-sm"><Play size={14}/> Run Test</button>
      </div>
    </header>
    <div style={{flex:1,display:"flex"}}>
      <div style={{flex:1,padding:"var(--space-4)",borderRight:"1px solid var(--color-border)",display:"flex",flexDirection:"column",gap:"var(--space-3)"}}>
        <label style={{fontSize:"var(--font-size-xs)",fontWeight:600,color:"var(--color-text-secondary)"}}>SYSTEM PROMPT</label>
        <textarea className="textarea" defaultValue="You are an expert PostgreSQL database administrator. Generate optimized, safe SQL statements based on the user's natural language request. Return ONLY the SQL code." style={{flex:1}} />
        <label style={{fontSize:"var(--font-size-xs)",fontWeight:600,color:"var(--color-text-secondary)",marginTop:"var(--space-2)"}}>USER MESSAGE</label>
        <textarea className="textarea" defaultValue="Get all active users who signed up in the last 30 days and have made at least one purchase. Join with the orders table." style={{minHeight:80}} />
      </div>
      <div style={{width:400,background:"var(--color-bg-secondary)",padding:"var(--space-4)",display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
        <div className="card" style={{padding:"var(--space-3)"}}>
          <h3 style={{fontSize:"var(--font-size-xs)",fontWeight:600,marginBottom:"var(--space-3)",display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Settings2 size={14}/> CONFIGURATION</h3>
          <div style={{marginBottom:"var(--space-3)"}}><label style={{display:"block",fontSize:"11px",marginBottom:4}}>Model</label><select className="input" style={{padding:4}}><option>gpt-4o</option><option>claude-3-5-sonnet</option></select></div>
          <div><label style={{display:"block",fontSize:"11px",marginBottom:4}}>Temperature: 0.2</label><input type="range" style={{width:"100%"}} /></div>
        </div>
        <div className="card" style={{padding:"var(--space-3)",flex:1}}>
          <h3 style={{fontSize:"var(--font-size-xs)",fontWeight:600,marginBottom:"var(--space-3)"}}>OUTPUT</h3>
          <pre style={{fontFamily:"var(--font-mono)",fontSize:"12px",whiteSpace:"pre-wrap",color:"var(--color-text-secondary)"}}>Output will appear here after running...</pre>
        </div>
      </div>
    </div>
  </div>);
}
