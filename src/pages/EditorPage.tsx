import { Play, Save, History, Settings2 } from "lucide-react";
import { Button, Card, Badge, Textarea, Label, Select, SelectItem } from "@geenius-ui/react-css";

export default function EditorPage() {
  return (<div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
    <header style={{ height: 56, borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--space-4)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
        <Badge variant="warning">v12</Badge>
        <h1 style={{ fontSize: "var(--font-size-base)", fontWeight: 600 }}>Generate SQL Query</h1>
      </div>
      <div style={{ display: "flex", gap: "var(--space-2)" }}>
        <Button variant="outline" size="sm" icon={<History size={14} />}>History</Button>
        <Button variant="outline" size="sm" icon={<Save size={14} />}>Save</Button>
        <Button variant="primary" size="sm" icon={<Play size={14} />}>Run Test</Button>
      </div>
    </header>
    <div style={{ flex: 1, display: "flex" }}>
      <div style={{ flex: 1, padding: "var(--space-4)", borderRight: "1px solid var(--color-border)", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <Label>SYSTEM PROMPT</Label>
        <Textarea defaultValue="You are an expert PostgreSQL database administrator. Generate optimized, safe SQL statements based on the user's natural language request. Return ONLY the SQL code." style={{ flex: 1 }} />
        <Label style={{ marginTop: "var(--space-2)" }}>USER MESSAGE</Label>
        <Textarea defaultValue="Get all active users who signed up in the last 30 days and have made at least one purchase. Join with the orders table." style={{ minHeight: 80 }} />
      </div>
      <div style={{ width: 400, background: "var(--color-bg-secondary)", padding: "var(--space-4)", display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <Card padding="sm">
          <h3 style={{ fontSize: "var(--font-size-xs)", fontWeight: 600, marginBottom: "var(--space-3)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Settings2 size={14} /> CONFIGURATION</h3>
          <div style={{ marginBottom: "var(--space-3)" }}><Label style={{ marginBottom: 4 }}>Model</Label>
            <Select defaultValue="gpt-4o">
              <SelectItem value="gpt-4o">gpt-4o</SelectItem>
              <SelectItem value="claude-3-5-sonnet">claude-3-5-sonnet</SelectItem>
            </Select>
          </div>
          <div><Label style={{ marginBottom: 4 }}>Temperature: 0.2</Label><input type="range" style={{ width: "100%" }} /></div>
        </Card>
        <Card padding="sm" className="output-card">
          <h3 style={{ fontSize: "var(--font-size-xs)", fontWeight: 600, marginBottom: "var(--space-3)" }}>OUTPUT</h3>
          <pre style={{ fontFamily: "var(--font-mono)", fontSize: "12px", whiteSpace: "pre-wrap", color: "var(--color-text-secondary)" }}>Output will appear here after running...</pre>
        </Card>
      </div>
    </div>
  </div>);
}
