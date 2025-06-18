// components/landing/how-it-works-section.js

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Edit3, Share2, MousePointerClick } from "lucide-react"

const steps = [
  {
    icon: <Video className="h-10 w-10 text-emerald-500 mb-4" />,
    title: "Enregistrez",
    description: "Utilisez notre extension Chrome pour capturer votre application. Un clic suffit, nous nous occupons de la magie en arrière-plan.",
  },
  {
    icon: <Edit3 className="h-10 w-10 text-emerald-500 mb-4" />,
    title: "Personnalisez",
    description: "Ajoutez des info-bulles, des liens et organisez votre storyboard. Guidez vos prospects vers les moments-clés de votre produit.",
  },
  {
    icon: <Share2 className="h-10 w-10 text-emerald-500 mb-4" />,
    title: "Partagez",
    description: "Obtenez un lien unique ou intégrez le lecteur ultra-léger (<30kB) sur votre site. Convertissez vos visiteurs 24/7.",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-balance">
            De l'idée à la démo en 3 étapes simples
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            DemoSnap est conçu pour être radicalement simple. Concentrez-vous sur votre produit, pas sur l'outil.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Ligne de connexion en arrière-plan (optionnel, pour le style) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-slate-200 h-full rounded-xl">
                <CardHeader>
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl border-4 border-white">
                    {index + 1}
                  </div>
                  <div className="flex justify-center pt-8">{step.icon}</div>
                  <CardTitle className="text-2xl font-semibold text-slate-800 pt-2">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}