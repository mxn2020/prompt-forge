import { Settings, Key } from "lucide-react";
export default function SettingsPage() {
  return (<div style={{padding:"var(--space-6)",maxWidth:600}}>
    <h1 style={{fontSize:"var(--font-size-xl)",fontWeight:600,marginBottom:"var(--space-6)",display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Settings size={20}/> Settings</h1>
    <div className="card" style={{padding:"var(--space-5)"}}>
      <h2 style={{fontSize:"var(--font-size-sm)",marginBottom:"var(--space-4)",display:"flex",alignItems:"center",gap:"var(--space-2)"}}><Key size={16}/> API Providers</h2>
      <div style={{display:"flex",flexDirection:"column",gap:"var(--space-4)"}}>
        <div><label style={{fontSize:"12px",fontWeight:600,marginBottom:4,display:"block"}}>OpenAI API Key</label><input type="password" placeholder="sk-..." className="input" /></div>
        <div><label style={{fontSize:"12px",fontWeight:600,marginBottom:4,display:"block"}}>Anthropic API Key</label><input type="password" placeholder="sk-ant-..." className="input" /></div>
        <button className="btn btn-primary" style={{alignSelf:"flex-start"}}>Save Keys</button>
      </div>
    </div>
  </div>);
}
