import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Coffee, Droplet, Leaf, Heart, Zap, Shield } from "lucide-react";

/**
 * Page Ingrédients - Design Philosophy: Luxe Minimaliste Contemporain
 * Détail complet de chaque ingrédient naturel utilisé
 */

export default function Ingredients() {
  const [, navigate] = useLocation();

  const ingredients = [
    {
      icon: Coffee,
      name: "Café Moulu Naturel",
      origin: "Colombie - Plantation Équitable",
      benefits: [
        "Exfoliation mécanique douce et naturelle",
        "Stimule la circulation sanguine",
        "Riche en antioxydants",
        "Élimine les cellules mortes efficacement",
      ],
      description:
        "Le café moulu est le cœur de notre formule. Ses propriétés exfoliantes naturelles éliminent les cellules mortes sans agresser la peau. Les antioxydants du café protègent également la peau contre les radicaux libres.",
    },
    {
      icon: Droplet,
      name: "Huile de Coco Bio",
      origin: "Îles du Pacifique - Certifiée Bio",
      benefits: [
        "Hydratation intense et durable",
        "Nourrit la peau en profondeur",
        "Propriétés anti-inflammatoires",
        "Crée une barrière protectrice",
      ],
      description:
        "L'huile de coco vierge extra offre une hydratation exceptionnelle. Elle pénètre profondément dans la peau pour la nourrir et la protéger, tout en créant une sensation de douceur incomparable.",
    },
    {
      icon: Heart,
      name: "Miel Pur et Brut",
      origin: "Ruches Locales - Miel Non Traité",
      benefits: [
        "Apaise et calme la peau",
        "Propriétés antibactériennes naturelles",
        "Hydrate et revitalise",
        "Riche en enzymes bénéfiques",
      ],
      description:
        "Le miel pur est un trésor de la nature. Ses propriétés apaisantes et antibactériennes en font un ingrédient parfait pour les peaux sensibles. Il renforce également l'hydratation naturelle de la peau.",
    },
    {
      icon: Leaf,
      name: "Extrait de Thé Vert",
      origin: "Montagnes du Japon - Thé Premium",
      benefits: [
        "Puissant antioxydant naturel",
        "Protège contre les radicaux libres",
        "Apaise les inflammations",
        "Tonifie la peau",
      ],
      description:
        "Le thé vert est reconnu mondialement pour ses propriétés antioxydantes exceptionnelles. Il protège la peau contre le vieillissement prématuré et offre une protection naturelle contre les agressions extérieures.",
    },
    {
      icon: Zap,
      name: "Sel de Mer Cristallin",
      origin: "Côtes Méditerranéennes - Pur et Naturel",
      benefits: [
        "Exfoliation douce et efficace",
        "Riche en minéraux essentiels",
        "Régule le sébum",
        "Purifie la peau",
      ],
      description:
        "Le sel de mer cristallin complète l'action du café pour une exfoliation optimale. Riche en minéraux, il purifie la peau et aide à réguler la production de sébum, idéal pour tous les types de peau.",
    },
    {
      icon: Shield,
      name: "Vitamine E Naturelle",
      origin: "Germes de Blé - Source Naturelle",
      benefits: [
        "Antioxydant puissant",
        "Protège la peau",
        "Favorise la régénération cellulaire",
        "Prévient le vieillissement",
      ],
      description:
        "La vitamine E est l'antioxydant ultime. Elle protège la peau contre les dommages causés par les radicaux libres et favorise la régénération cellulaire naturelle, pour une peau plus jeune et radieuse.",
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
            <button onClick={() => navigate("/ingredients")} className="text-amber-600 font-semibold">
              Ingrédients
            </button>
            <button onClick={() => navigate("/achetez")} className="text-gray-700 hover:text-amber-600 transition">
              Achetez
            </button>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ingrédients Naturels Premium
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Découvrez la composition complète de notre gommage. Chaque ingrédient est sélectionné avec soin pour ses propriétés bénéfiques et sa qualité exceptionnelle.
          </p>
        </div>
      </section>

      {/* IMAGE INGRÉDIENTS */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <img
            src="/images/ingredients-natural.jpg"
            alt="Ingrédients naturels du gommage"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* GRILLE D'INGRÉDIENTS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {ingredients.map((ingredient, index) => {
              const Icon = ingredient.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                      <Icon className="w-8 h-8 text-green-700" />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold text-gray-900"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {ingredient.name}
                      </h3>
                      <p className="text-sm text-amber-600 font-semibold">{ingredient.origin}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {ingredient.description}
                  </p>

                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3">Bénéfices :</h4>
                    <ul className="space-y-2">
                      {ingredient.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIGNE DORÉE */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

      {/* SECTION CERTIFICATIONS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Certifications et Qualité
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Certifié Bio",
                description: "Tous nos ingrédients sont certifiés biologiques et proviennent de sources durables.",
              },
              {
                title: "Testé Dermatologiquement",
                description: "Formulé et testé par des dermatologues pour garantir la sécurité et l'efficacité.",
              },
              {
                title: "Cruelty-Free",
                description: "Aucun test sur les animaux. Nous respectons les droits des animaux et l'éthique.",
              },
            ].map((cert, idx) => (
              <div key={idx} className="bg-gradient-to-br from-amber-50 to-green-50 rounded-xl p-8 border border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cert.title}</h3>
                <p className="text-gray-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION TRANSPARENCE */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Transparence Totale
          </h2>

          <div className="bg-white rounded-xl p-12 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Composition Complète :</h3>
            <div className="space-y-4">
              {[
                "Café Moulu Naturel (30%)",
                "Huile de Coco Bio (25%)",
                "Sel de Mer Cristallin (20%)",
                "Miel Pur et Brut (15%)",
                "Extrait de Thé Vert (7%)",
                "Vitamine E Naturelle (3%)",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-b-0">
                  <span className="text-gray-700 font-semibold">{item}</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-green-500"
                      style={{
                        width: item.includes("30%")
                          ? "30%"
                          : item.includes("25%")
                            ? "25%"
                            : item.includes("20%")
                              ? "20%"
                              : item.includes("15%")
                                ? "15%"
                                : item.includes("7%")
                                  ? "7%"
                                  : "3%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-bold text-gray-900 mb-3">Ce que nous N'utilisons PAS :</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "✗ Parabènes",
                  "✗ Sulfates",
                  "✗ Silicones",
                  "✗ Colorants Synthétiques",
                  "✗ Parfums Artificiels",
                  "✗ Microplastiques",
                ].map((item, idx) => (
                  <p key={idx} className="text-gray-700">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 px-6 bg-gradient-to-r from-green-600 to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-5xl font-bold text-white mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ingrédients Purs, Résultats Purs
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Notre engagement envers la qualité et la transparence fait la différence. Essayez notre gommage et ressentez la pureté de la nature.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button
              onClick={() => navigate("/commander")}
              className="px-10 py-4 bg-white text-green-700 hover:bg-gray-100 text-lg font-bold rounded-lg transition transform hover:scale-105"
            >
              Commander Maintenant
            </Button>
            <Button
              onClick={() => navigate("/achetez")}
              className="px-10 py-4 bg-green-800 hover:bg-green-900 text-white text-lg font-bold rounded-lg transition transform hover:scale-105"
            >
              Voir la Boutique
            </Button>
          </div>
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
