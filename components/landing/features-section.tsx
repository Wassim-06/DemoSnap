import { Zap, DollarSign, BarChart, Feather, Layers } from "lucide-react"

const features = [
  {
    icon: <Zap className="h-8 w-8 text-emerald-500" />,
    title: "Ultra-Simple & Rapide",
    description:
      "Aucune compétence technique requise. Créez une démo percutante en quelques minutes, pas en quelques jours.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-emerald-500" />,
    title: "Abordable pour Tous",
    description:
      "Des plans tarifaires flexibles, y compris une option gratuite, pour s'adapter à toutes les tailles d'équipes et budgets.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-emerald-500" />,
    title: "Vente Automatisée 24/7",
    description:
      "Laissez vos démos interactives qualifier et convertir vos prospects à tout moment, sans intervention manuelle.",
  },
  {
    icon: <Feather className="h-8 w-8 text-emerald-500" />,
    title: "Léger & Performant",
    description: "Notre lecteur d'intégration est optimisé pour la vitesse (<30kB) et n'alourdira pas votre site.",
  },
  {
    icon: <Layers className="h-8 w-8 text-emerald-500" />,
    title: "Technologie Moderne",
    description:
      "Construit avec Next.js, React, et Supabase pour une expérience utilisateur fluide et une fiabilité à toute épreuve.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Pourquoi Choisir <span className="text-emerald-500">DemoSnap</span> ?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Nous avons conçu DemoSnap pour être la solution la plus simple et efficace pour vos démonstrations produits.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200"
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-4 text-xl font-semibold text-slate-800">{feature.title}</h3>
              </div>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
