// components/landing/features-section.js

import { Zap, DollarSign, BarChart, Feather, ShieldCheck, Clock } from "lucide-react"

const features = [
  {
    icon: <Clock className="h-8 w-8 text-emerald-500" />,
    title: "Gagnez un temps précieux",
    description: "Créez une démo complète en 5 minutes, pas en 5 heures. Libérez vos équipes techniques et commerciales.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-emerald-500" />,
    title: "Un prix enfin juste",
    description: "Oubliez les devis à 5 chiffres. Nos plans sont conçus pour les startups et les PME, avec une option gratuite pour démarrer.",
  },
  {
    icon: <BarChart className="h-8 w-8 text-emerald-500" />,
    title: "Vendez en pilote automatique",
    description: "Laissez vos démos qualifier, éduquer et convertir vos prospects 24/7, même quand vous n'êtes pas là.",
  },
  {
    icon: <Feather className="h-8 w-8 text-emerald-500" />,
    title: "Léger comme une plume",
    description: "Notre lecteur pèse moins de 30kB. Il s'intègre à votre site sans jamais le ralentir, garantissant une expérience parfaite.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-emerald-500" />,
    title: "Fiabilité à toute épreuve",
    description: "Construit sur une stack technique moderne (Next.js, Vercel), DemoSnap est rapide, sécurisé et toujours disponible.",
  },
  {
    icon: <Zap className="h-8 w-8 text-emerald-500" />,
    title: "Engagement multiplié",
    description: "Transformez les visiteurs passifs en utilisateurs actifs. L'interactivité augmente la rétention et la compréhension de votre produit.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-balance">
            Plus qu'un outil, un <span className="text-emerald-500">avantage concurrentiel</span>.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            Nous avons conçu DemoSnap pour résoudre les vrais problèmes des équipes Produit et Growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-slate-200"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-800">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}