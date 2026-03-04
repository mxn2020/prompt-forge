import { Plus, GitBranch } from "lucide-react";
import { Button, Card, Badge } from "@geenius-ui/react-css";

const prompts = [
  { id: "p1", title: "Summarize Email", tags: ["productivity", "summarization"], activeVersion: "v4", runs: 1240 },
  { id: "p2", title: "Generate SQL Query", tags: ["code", "sql"], activeVersion: "v12", runs: 850 },
  { id: "p3", title: "Extract JSON Entities", tags: ["data", "extraction"], activeVersion: "v2", runs: 420 },
];

export default function PromptsPage() {
  return (<div style={{ padding: "var(--space-6)", maxWidth: 1000 }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
      <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 600 }}>All Prompts</h1>
      <Button variant="primary" icon={<Plus size={16} />}>New Prompt</Button>
    </div>
    <div style={{ display: "grid", gap: "var(--space-4)" }}>{prompts.map(p => (<Card key={p.id} padding="md">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h3 style={{ fontSize: "var(--font-size-base)", marginBottom: "var(--space-2)" }}>{p.title}</h3>
          <div style={{ display: "flex", gap: "var(--space-2)" }}>{p.tags.map(t => (<Badge key={t} variant="warning">{t}</Badge>))}</div>
        </div>
        <div style={{ textAlign: "right", fontSize: "var(--font-size-sm)", color: "var(--color-text-secondary)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-1)", justifyContent: "flex-end", marginBottom: "var(--space-1)" }}><GitBranch size={14} /> Active: <strong>{p.activeVersion}</strong></div>
          <div>{p.runs} test runs</div>
        </div>
      </div>
    </Card>))}</div>
  </div>);
}
