import { ThemeProvider } from "./app/contexts/ThemeContext";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export function App() {
  return (
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}
