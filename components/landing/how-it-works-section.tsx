import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Edit3, Share2, MousePointerClick } from "lucide-react"

const steps = [
  {
    icon: <Video className="h-10 w-10 text-emerald-500 mb-4" />,
    title: "1. Enregistrez",
    description:
      "Utilisez notre extension Chrome intuitive pour capturer votre application en action. C'est simple et rapide.",
  },
  {
    icon: <Edit3 className="h-10 w-10 text-emerald-500 mb-4" />,
    title: "2. Personnalisez",
    description:
      "Générez et éditez facilement votre storyboard interactif. Ajoutez des info-bulles, des étapes, et guidez vos utilisateurs.",
  },
  {
    icon: <Share2 className="h-10 w-10 text-emerald-500 mb-4" />,
    title: "3. Partagez",
    description:
      "Obtenez un lien unique ou intégrez le lecteur ultra-léger (<30kB) directement sur votre site web ou dans vos campagnes.",
  },
]

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <MousePointerClick className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            De l'Enregistrement à la Démo Interactive en 3 Étapes Simples
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            DemoSnap simplifie la création de démos produits. Concentrez-vous sur votre message, nous nous occupons du
            reste.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border-slate-200"
            >
              <CardHeader>
                <div className="flex justify-center">{step.icon}</div>
                <CardTitle className="text-2xl font-semibold text-slate-800">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
