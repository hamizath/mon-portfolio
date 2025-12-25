import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/home";
import Avantages from "./pages/avantages";
import Ingredients from "./pages/Ingredients";
import Achetez from "./pages/Achetez";
import Commander from "./pages/commander";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/avantages" component={Avantages} />
      <Route path="/ingredients" component={Ingredients} />
      <Route path="/achetez" component={Achetez} />
      <Route path="/commander" component={Commander} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;