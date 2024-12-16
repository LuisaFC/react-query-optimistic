import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./app/contexts/ThemeContext";
import { Header } from "./components/Header";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { queryClient } from "./app/lib/queryClient";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="max-w-[500px] mx-auto mt-20">
          <Header />

          <main className="mt-10 space-y-3">
            <UserForm />
            <UsersList />
          </main>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
