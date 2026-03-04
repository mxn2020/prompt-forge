import { Settings, Key } from "lucide-react";
import { Button, Card, Input, Label } from "@geenius-ui/react-css";

export default function SettingsPage() {
  return (<div style={{ padding: "var(--space-6)", maxWidth: 600 }}>
    <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 600, marginBottom: "var(--space-6)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Settings size={20} /> Settings</h1>
    <Card padding="lg">
      <h2 style={{ fontSize: "var(--font-size-sm)", marginBottom: "var(--space-4)", display: "flex", alignItems: "center", gap: "var(--space-2)" }}><Key size={16} /> API Providers</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div><Label style={{ marginBottom: 4 }}>OpenAI API Key</Label><Input type="password" placeholder="sk-..." /></div>
        <div><Label style={{ marginBottom: 4 }}>Anthropic API Key</Label><Input type="password" placeholder="sk-ant-..." /></div>
        <Button variant="primary" style={{ alignSelf: "flex-start" }}>Save Keys</Button>
      </div>
    </Card>
  </div>);
}
