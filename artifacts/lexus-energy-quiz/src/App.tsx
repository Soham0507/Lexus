import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

const QUIZ_FILE = "lexus_energy_quiz_tuned_v018.html";

function Home() {
  // The Lexus Energy Quiz is a self-contained static HTML experience.
  // Mirror the original Vercel setup: redirect root to the quiz file.
  const target = import.meta.env.BASE_URL + QUIZ_FILE;
  if (typeof window !== "undefined" && !window.location.pathname.endsWith("/" + QUIZ_FILE)) {
    window.location.replace(target);
  }
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black">
      <p className="text-sm text-white/60">Loading Lexus Energy Quiz…</p>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
