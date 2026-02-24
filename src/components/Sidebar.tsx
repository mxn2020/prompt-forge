import { Link, useLocation } from "react-router-dom";
import { Flame, FileText, Edit3, SplitSquareHorizontal, History, Settings } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import "./Sidebar.css";
export default function Sidebar() {
  const loc = useLocation();
  const links = [
    { to: "/", icon: FileText, label: "All Prompts" },
    { to: "/editor", icon: Edit3, label: "Editor" },
    { to: "/compare", icon: SplitSquareHorizontal, label: "A/B Compare" },
    { to: "/history", icon: History, label: "Run History" },
    { to: "/settings", icon: Settings, label: "Settings" }
  ];
  return (<aside className="pf-sidebar">
    <div className="pf-sidebar-header"><Flame size={20} style={{color:"var(--color-accent-primary)"}}/><strong>Prompt Forge</strong></div>
    <nav className="pf-sidebar-nav">{links.map(l=>(<Link key={l.to} to={l.to} className={`pf-nav-link ${loc.pathname===l.to?"active":""}`}><l.icon size={16}/>{l.label}</Link>))}</nav>
    <div className="pf-sidebar-footer"><ThemeToggle /></div>
  </aside>);
}
