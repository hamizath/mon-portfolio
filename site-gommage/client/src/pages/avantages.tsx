import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { Coffee, Leaf, Sparkles, Shield, Zap, Heart, ArrowRight } from "lucide-react";

/**
 * Page Avantages - Design Philosophy: Luxe Minimaliste Contemporain
 * Présente tous les bénéfices du gommage avec détails et icônes
 */

export default function Avantages() {
  const [, navigate] = useLocation();

  const advantages = [
    {
      icon: Coffee,
      title: "Exfoliation Douce et Efficace",
      description:
        "Notre formule à base de café naturel élimine les cellules mortes sans agresser la peau. Le café moulu offre une exfoliation mécanique douce tout en stimulant la circulation sanguine.",
      details: [
        "Élimine les cellules mortes en profondeur",
        "Stimule la microcirculation",
        "Prépare la peau pour les soins suivants",
        "Texture granuleuse naturelle et contrôlée",
      ],
    },
    {
      icon: Leaf,
      title: "100% Naturel et Biologique",
      description:
        "Composé uniquement d'ingrédients naturels sélectionnés avec soin. Aucun produit chimique agressif, aucun parabène, aucune cruauté animale.",
      details: [
        "Certifié biologique",
        "Aucun parabène ni sulfate",
        "Aucun test sur les animaux",
        "Emballage écologique et recyclable",
      ],
    },
    {
      icon: Sparkles,
      title: "Résultats Visibles Immédiatement",
      description:
        "Dès la première utilisation, votre peau devient plus douce, plus lumineuse et plus éclatante. Les résultats s'amplifient avec une utilisation régulière.",
      details: [
        "Peau plus douce après 1 application",
        "Éclat visible dès la première semaine",
        "Amélioration progressive de la texture",
        "Résultats durables et cumulatifs",
      ],
    },
    {
      icon: Shield,
      title: "Convient à Tous les Types de Peau",
      description:
        "Formulé pour être doux et efficace sur tous les types de peau, y compris les peaux sensibles. Testé dermatologiquement et approuvé par les professionnels.",
      details: [
        "Peau sèche: hydratation intense",
        "Peau grasse: régulation sébum",
        "Peau sensible: formule apaisante",
        "Peau mixte: équilibre parfait",
      ],
    },
    {
      icon: Zap,
      title: "Haute Performance",
      description:
        "Notre gommage combine la puissance de la nature avec la science moderne pour offrir une performance exceptionnelle. Résultats professionnels à la maison.",
      details: [
        "Formule concentrée en actifs",
        "Absorption rapide et efficace",
        "Résultats comparables aux soins professionnels",
        "Efficacité prouvée cliniquement",
      ],
    },
    {
      icon: Heart,
      title: "Respectueux de l'Environnement",
      description:
        "Nous nous engageons pour la durabilité. Notre produit est formulé pour minimiser l'impact environnemental tout en maximiser les bénéfices pour votre peau.",
      details: [
        "Ingrédients durables et éthiques",
        "Emballage biodégradable",
        "Formule sans microplastiques",
        "Soutien des producteurs locaux",
      ],
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
            <button onClick={() => navigate("/avantages")} className="text-amber-600 font-semibold">
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

      {/* HEADER */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Les Avantages de Notre Gommage
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Découvrez pourquoi notre gommage est le choix préféré des amateurs de beauté naturelle. Une formule révolutionnaire qui transforme votre peau.
          </p>
        </div>
      </section>

      {/* GRILLE D'AVANTAGES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition duration-300">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
                      <Icon className="w-8 h-8 text-amber-700" />
                    </div>
                    <h3
                      className="text-2xl font-bold text-gray-900"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {advantage.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {advantage.description}
                  </p>

                  <ul className="space-y-3">
                    {advantage.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ArrowRight className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIGNE DORÉE */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>

      {/* SECTION COMPARAISON */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pourquoi Nous Choisir ?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-amber-300">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">Caractéristique</th>
                  <th className="text-center py-4 px-4 font-bold text-amber-700">Notre Gommage</th>
                  <th className="text-center py-4 px-4 font-bold text-gray-500">Gommages Classiques</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Ingrédients Naturels", ours: "✓", autres: "✗" },
                  { feature: "Sans Parabènes", ours: "✓", autres: "✗" },
                  { feature: "Testé Dermatologiquement", ours: "✓", autres: "Parfois" },
                  { feature: "Convient à Tous les Types", ours: "✓", autres: "✗" },
                  { feature: "Résultats Visibles", ours: "Immédiat", autres: "Progressif" },
                  { feature: "Écologique", ours: "✓", autres: "✗" },
                  { feature: "Prix Abordable", ours: "✓", autres: "✓" },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-white transition">
                    <td className="py-4 px-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-amber-700 font-bold text-lg">{row.ours}</td>
                    <td className="py-4 px-4 text-center text-gray-500">{row.autres}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-center text-gray-900 mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ce que Disent Nos Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Marie L.",
                text: "Incroyable ! Ma peau n'a jamais été aussi douce. Les résultats sont visibles dès la première utilisation.",
                rating: 5,
              },
              {
                name: "Sophie D.",
                text: "Enfin un gommage qui ne dessèche pas ma peau sensible. Je l'adore et je le recommande à tous mes amis.",
                rating: 5,
              },
              {
                name: "Claire M.",
                text: "Produit de qualité exceptionnelle. L'odeur est divine et les résultats sont durables. Très satisfaite !",
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-amber-50 rounded-xl p-8 border border-amber-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-amber-600 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">— {testimonial.name}</p>
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
            Prêt à Transformer Votre Peau ?
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Découvrez par vous-même pourquoi des milliers de clients nous font confiance.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button
              onClick={() => navigate("/commander")}
              className="px-10 py-4 bg-white text-amber-700 hover:bg-gray-100 text-lg font-bold rounded-lg transition transform hover:scale-105"
            >
              Commander Maintenant
            </Button>
            <Button
              onClick={() => navigate("/achetez")}
              className="px-10 py-4 bg-amber-800 hover:bg-amber-900 text-white text-lg font-bold rounded-lg transition transform hover:scale-105"
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
              <p className="text-sm">Email: hamizathalaofe4@gmail.com
              </p>
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
