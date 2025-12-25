import { Button } from "../components/ui/button";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-pink-600 flex items-center justify-center px-4">
      <div className="text-center text-white">
        <h1 className="text-8xl font-bold mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-6">Page non trouvée</h2>
        <p className="text-xl mb-8">
          Désolé, la page que vous recherchez n'existe pas.
        </p>
        <Button
          variant="primary"
          size="lg"
          onClick={() => navigate("/")}
          className="bg-white text-purple-600 hover:bg-gray-100"
        >
          Retour à l'accueil
        </Button>
      </div>
    </div>
  );
}
