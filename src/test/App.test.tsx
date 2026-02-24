import { describe, it, expect } from "vitest"; import { render, screen } from "@testing-library/react"; import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar"; import PromptsPage from "../pages/PromptsPage"; import EditorPage from "../pages/EditorPage";
import ComparePage from "../pages/ComparePage"; import HistoryPage from "../pages/HistoryPage"; import SettingsPage from "../pages/SettingsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }
describe("Sidebar", () => { it("renders nav items", () => { wrap(<Sidebar/>); expect(screen.getByText("Prompt Forge")).toBeInTheDocument(); expect(screen.getByText("Editor")).toBeInTheDocument(); }); });
describe("Pages", () => {
  it("PromptsPage renders", () => { wrap(<PromptsPage/>); expect(screen.getByText("Generate SQL Query")).toBeInTheDocument(); });
  it("EditorPage renders", () => { wrap(<EditorPage/>); expect(screen.getByText("SYSTEM PROMPT")).toBeInTheDocument(); });
  it("ComparePage renders", () => { wrap(<ComparePage/>); expect(screen.getByText("A/B Prompt Comparison")).toBeInTheDocument(); });
  it("HistoryPage renders", () => { wrap(<HistoryPage/>); expect(screen.getAllByText("Summarize Email").length).toBeGreaterThan(0); });
  it("SettingsPage renders", () => { wrap(<SettingsPage/>); expect(screen.getByText("API Providers")).toBeInTheDocument(); });
});
