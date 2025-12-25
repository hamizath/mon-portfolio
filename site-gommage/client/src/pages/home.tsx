import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Coffee, Leaf, Sparkles, ShoppingBag, Droplet, Heart } from "lucide-react";

/**
 * Design Philosophy: Luxe Minimaliste Contemporain
 * - Espace blanc généreux
 * - Typographie élégante (Playfair Display pour titres, Lato pour corps)
 * - Accent doré subtil (#d4af37)
 * - Asymétrie intentionnelle
 */

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>
            Gommage Éclat
          </div>
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
            <button onClick={() => navigate("/achetez")} className="text-gray-700 hover:text-amber-600 transition">
              Achetez
            </button>
          </div>
        </div>
      </nav>

      {/* SECTION HÉRO */}
      <section
        className="h-screen bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero-background.jpg')",
          marginTop: "80px",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center max-w-2xl px-6">
          <h1
            className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Gommage Éclat & Naturel
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 drop-shadow">
            Découvrez la pureté de la nature pour une peau radieuse et lumineuse
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button
              onClick={() => navigate("/avantages")}
              className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold rounded-lg transition transform hover:scale-105"
            >
              Découvrir les Avantages
            </Button>
            <Button
              onClick={() => navigate("/commander")}
              className="px-8 py-3 bg-white text-amber-900 hover:bg-gray-100 text-lg font-semibold rounded-lg transition transform hover:scale-105"
            >
              Commander Maintenant
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION AVANTAGES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold text-center text-gray-900 mb-20"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pourquoi Choisir Notre Gommage ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Avantage 1 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-amber-50 rounded-full group-hover:bg-amber-100 transition">
                  <Coffee className="w-12 h-12 text-amber-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Café Exfoliant
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Notre formule à base de café naturel élimine les cellules mortes en douceur et stimule la circulation sanguine pour une peau revitalisée.
              </p>
              <button
                onClick={() => navigate("/avantages")}
                className="mt-6 text-amber-600 hover:text-amber-700 font-semibold accent-text transition"
              >
                En savoir plus →
              </button>
            </div>

            {/* Avantage 2 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-green-50 rounded-full group-hover:bg-green-100 transition">
                  <Leaf className="w-12 h-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                100% Naturel
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Composé d'ingrédients naturels sélectionnés avec soin. Aucun produit chimique agressif, aucun parabène, aucune cruauté.
              </p>
              <button
                onClick={() => navigate("/ingredients")}
                className="mt-6 text-amber-600 hover:text-amber-700 font-semibold accent-text transition"
              >
                Voir les ingrédients →
              </button>
            </div>

            {/* Avantage 3 */}
            <div className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-pink-50 rounded-full group-hover:bg-pink-100 transition">
                  <Sparkles className="w-12 h-12 text-pink-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Résultats Visibles
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dès la première utilisation, votre peau devient plus douce, plus lumineuse et plus éclatante. Résultats durables garantis.
              </p>
              <button
                onClick={() => navigate("/avantages")}
                className="mt-6 text-amber-600 hover:text-amber-700 font-semibold accent-text transition"
              >
                Voir les résultats →
              </button>
            </div>
          </div>

          {/* Bouton Avantages */}
          <div className="text-center mt-20">
            <Button
              onClick={() => navigate("/avantages")}
              className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg font-semibold rounded-lg transition transform hover:scale-105"
            >
              Voir Tous les Avantages
            </Button>
          </div>
        </div>
      </section>

      {/* LIGNE DORÉE DIVISEUR */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

      {/* SECTION INGRÉDIENTS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div>
              <h2
                className="text-5xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Ingrédients Naturels Premium
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chaque ingrédient est sélectionné avec soin pour ses propriétés bénéfiques et sa qualité exceptionnelle. Notre gommage combine la puissance de la nature avec la science moderne.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <Coffee className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Café Moulu Naturel</h4>
                    <p className="text-gray-600">Exfolie en douceur et stimule la circulation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Droplet className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Huile de Coco Bio</h4>
                    <p className="text-gray-600">Hydrate et nourrit la peau en profondeur</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Miel Pur</h4>
                    <p className="text-gray-600">Apaise et revitalise la peau sensible</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => navigate("/ingredients")}
                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
              >
                Découvrir Tous les Ingrédients
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src="/images/ingredients-natural.jpg"
                alt="Ingrédients naturels"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PRODUIT */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 md:order-1">
              <img
                src="/images/product-gommage.jpg"
                alt="Produit Gommage Premium"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>
            </div>

            {/* Texte */}
            <div className="order-1 md:order-2">
              <h2
                className="text-5xl font-bold text-gray-900 mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Qualité Premium, Résultats Exceptionnels
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Notre gommage est formulé pour offrir une exfoliation efficace tout en respectant la délicatesse de votre peau. Testé dermatologiquement et approuvé par les professionnels de la beauté.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
                <p className="text-gray-800 font-semibold">
                  ✓ Résultats visibles dès la première utilisation  

                  ✓ Peau plus douce et plus lumineuse  

                  ✓ Formule respectueuse de l'environnement  

                  ✓ Convient à tous les types de peau
                </p>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Button
                  onClick={() => navigate("/achetez")}
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition transform hover:scale-105"
                >
                  <ShoppingBag className="w-5 h-5 mr-2 inline" />
                  Achetez Maintenant
                </Button>
                <Button
                  onClick={() => navigate("/commander")}
                  className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition transform hover:scale-105"
                >
                  Commander
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION CTA FINALE */}
      <section className="py-24 px-6 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-5xl font-bold text-white mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Transformez Votre Peau Dès Aujourd'hui
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Rejoignez des milliers de clients satisfaits qui ont découvert la beauté naturelle avec notre gommage premium.
          </p>
          <Button
            onClick={() => navigate("/commander")}
            className="px-10 py-4 bg-white text-amber-700 hover:bg-gray-100 text-lg font-bold rounded-lg transition transform hover:scale-105"
          >
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
              <p className="text-sm">Email: info@gommage-eclat.fr</p>
              <p className="text-sm">Tél: +33 (0)1 23 45 67 89</p>
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