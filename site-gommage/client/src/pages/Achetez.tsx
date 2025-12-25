import { Button } from "../components/ui/button";
import { useLocation } from "wouter";
import { ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";

/**
 * Page Achetez - Design Philosophy: Luxe Minimaliste Contemporain
 * Présente les options d'achat et les détails produit
 */

export default function Achetez() {
  const [, navigate] = useLocation();

  const products = [
    {
      name: "Gommage Éclat 200ml",
      price: 12000,
      originalPrice: 20000,
      description: "Taille standard pour une utilisation quotidienne",
      features: ["200ml", "Utilisation 2-3 mois", "Idéal pour tester"],
      image: "/images/product-gommage.jpg",
    },
    {
      name: "Gommage Éclat 500ml",
      price: 20000,
      originalPrice: 25000,
      description: "Taille économique pour les utilisateurs réguliers",
      features: ["500ml", "Utilisation 6-8 mois", "Meilleure valeur"],
      image: "/images/product-gommage.jpg",
      popular: true,
    },
    {
      name: "Pack Duo (2x200ml)",
      price: 35000,
      originalPrice: 40000,
      description: "Parfait pour partager ou pour les amateurs",
      features: ["2x200ml", "Utilisation 4-6 mois", "Idéal en cadeau"],
      image: "/images/product-gommage.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <button onClick={() => navigate("/")} className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Gommage Éclat
          </button>
          <div className="flex gap-8 text-sm accent-text">
            <button onClick={() => navigate("/")} className="text-gray-700 hover:text-amber-600 transition">
              Accueil
            </button>
            <button onClick={() => navigate("/avantages")} className="text-gray-700 hover:text-amber-600 transition">
              Avantages
            </button>
            <button onClick={() => navigate("/ingredients")} className="text-gray-700 hover:text-amber-600 transition">
              Ingrédients
            </button>
            <button onClick={() => navigate("/achetez")} className="text-amber-600 font-semibold">
              Achetez
            </button>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Boutique Gommage Éclat
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Choisissez la taille qui vous convient et commencez votre voyage vers une peau plus radieuse.
          </p>
        </div>
      </section>

      {/* GRILLE DE PRODUITS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ${
                  product.popular ? "ring-2 ring-amber-500 transform scale-105" : ""
                }`}
              >
                {product.popular && (
                  <div className="bg-amber-500 text-white text-center py-2 font-bold accent-text">
                    ⭐ PLUS POPULAIRE
                  </div>
                )}

                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>

                <div className="p-8">
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-4xl font-bold text-amber-600">{product.price}€</span>
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice}€</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Économisez {(product.originalPrice - product.price).toFixed(2)}€
                    </div>
                  </div>

                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="text-amber-600">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => navigate("/commander")}
                    className={`w-full py-3 rounded-lg font-bold transition transform hover:scale-105 ${
                      product.popular
                        ? "bg-amber-600 hover:bg-amber-700 text-white"
                        : "bg-gray-200 hover:bg-gray-300 text-gray-900"
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2 inline" />
                    Ajouter au Panier
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGNE DORÉE */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

      {/* SECTION AVANTAGES ACHAT */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pourquoi Acheter Chez Nous ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Truck,
                title: "Livraison Rapide",
                description: "Livraison et expédition en France congo guinée métropolitaine pour les commandes supérieures à 50€. Expédition sous 24h.",
              },
              {
                icon: Shield,
                title: "Garantie Satisfaction",
                description: "100% satisfait ou remboursé. Si vous n'êtes pas satisfait, nous vous remboursons intégralement.",
              },
              {
                icon: RotateCcw,
                title: "Retours Faciles",
                description: "Vous avez 30 jours pour retourner votre produit sans questions. Frais de retour gratuits.",
              },
              {
                icon: ShoppingCart,
                title: "Paiement Sécurisé",
                description: "Vos données sont protégées. Nous acceptons tous les modes de paiement sécurisés.",
              },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                      <Icon className="w-8 h-8 text-amber-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Questions Fréquemment Posées
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Quelle est la meilleure taille pour commencer ?",
                a: "Nous recommandons le format 200ml pour tester le produit. Si vous l'aimez, le format 500ml offre une meilleure valeur.",
              },
              {
                q: "Combien de temps dure un pot ?",
                a: "Un pot de 200ml dure environ 2-3 mois avec une utilisation régulière (2-3 fois par semaine). Le 500ml dure 6-8 mois.",
              },
              {
                q: "Y a-t-il des frais de livraison ?",
                a: "La livraison est possible en France  pour les commandes supérieures a 200000FCFA. Pour les petites commandes, les frais sont de 5€.",
              },
              {
                q: "Puis-je retourner le produit ?",
                a: "Oui, vous avez 30 jours pour retourner votre produit non ouvert. Les frais de retour sont gratuits.",
              },
              {
                q: "Le produit convient-il à ma peau sensible ?",
                a: "Oui ! Notre formule est douce et testée dermatologiquement. Elle convient à tous les types de peau, y compris les peaux sensibles.",
              },
              {
                q: "Puis-je utiliser ce produit tous les jours ?",
                a: "Nous recommandons une utilisation 2-3 fois par semaine pour les meilleurs résultats. Une utilisation quotidienne peut être trop exfoliante.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-amber-50 rounded-xl p-8 border border-amber-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 px-6 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-5xl font-bold text-white mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Prêt à Commander ?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Choisissez votre taille et commencez votre transformation beauté aujourd'hui.
          </p>
          <Button
            onClick={() => navigate("/commander")}
            className="px-10 py-4 bg-white text-amber-700 hover:bg-gray-100 text-lg font-bold rounded-lg transition transform hover:scale-105"
          >
            <ShoppingCart className="w-5 h-5 mr-2 inline" />
            Commander Maintenant
          </Button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Gommage Éclat
              </h3>
              <p className="text-sm">Beauté naturelle, résultats exceptionnels.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigate("/")} className="hover:text-white transition">
                    Accueil
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/avantages")} className="hover:text-white transition">
                    Avantages
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/ingredients")} className="hover:text-white transition">
                    Ingrédients
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Acheter</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => navigate("/achetez")} className="hover:text-white transition">
                    Boutique
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/commander")} className="hover:text-white transition">
                    Commander
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-sm">Email: hamizathalaofe4@gmail.com</p>
              <p className="text-sm">Tél: +229 0147351463/0165360002</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Gommage Éclat & Naturel. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
