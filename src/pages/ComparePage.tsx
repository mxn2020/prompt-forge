import { SplitSquareHorizontal, Play } from "lucide-react";
import { Button, Card, Textarea } from "@geenius-ui/react-css";

export default function ComparePage() {
  return (<div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
    <header style={{ height: 56, borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--space-4)" }}>
      <h1 style={{ fontSize: "var(--font-size-base)", fontWeight: 600, display: "flex", alignItems: "center", gap: "var(--space-2)" }}><SplitSquareHorizontal size={16} /> A/B Prompt Comparison</h1>
      <Button variant="primary" size="sm" icon={<Play size={14} />}>Run Both</Button>
    </header>
    <div style={{ flex: 1, display: "flex" }}>
      <div style={{ flex: 1, padding: "var(--space-4)", borderRight: "1px solid var(--color-border)" }}>
        <h2 style={{ fontSize: "var(--font-size-sm)", marginBottom: "var(--space-4)" }}>Variant A: gpt-4o (v11)</h2>
        <Textarea defaultValue="Summarize the following text concisely." style={{ marginBottom: "var(--space-4)" }} />
        <Card padding="sm" className="output-placeholder">
          <span style={{ fontSize: "12px", color: "var(--color-text-tertiary)" }}>Awaiting execution...</span>
        </Card>
      </div>
      <div style={{ flex: 1, padding: "var(--space-4)" }}>
        <h2 style={{ fontSize: "var(--font-size-sm)", marginBottom: "var(--space-4)" }}>Variant B: claude-3-5-sonnet (v12)</h2>
        <Textarea defaultValue="Extract the 3 main bullet points from the text." style={{ marginBottom: "var(--space-4)" }} />
        <Card padding="sm" className="output-placeholder">
          <span style={{ fontSize: "12px", color: "var(--color-text-tertiary)" }}>Awaiting execution...</span>
        </Card>
      </div>
    </div>
  </div>);
}
