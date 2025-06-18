import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Free",
    price: "0€",
    target: "Side-projects",
    features: [
      { text: "1 démo", included: true },
      { text: "500 vues/mois", included: true },
      { text: "Badge DemoSnap", included: true },
      { text: "Support communautaire", included: true },
    ],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Startup",
    price: "99€",
    target: "SaaS early-stage",
    features: [
      { text: "10 démos", included: true },
      { text: "Vues illimitées", included: true },
      { text: "Pas de badge DemoSnap", included: true },
      { text: "Support prioritaire", included: true },
      { text: "Analytiques de base", included: true },
    ],
    cta: "Choisir Startup",
    popular: true,
  },
  {
    name: "Growth",
    price: "299€",
    target: "Scale-ups / Agences",
    features: [
      { text: "Démos illimitées", included: true },
      { text: "Vues illimitées", included: true },
      { text: "Pas de badge DemoSnap", included: true },
      { text: "Domaine personnalisé", included: true },
      { text: "Analytiques avancées", included: true },
      { text: "Intégrations CRM", included: true },
    ],
    cta: "Choisir Growth",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "799€",
    target: "+ de 50 collaborateurs",
    features: [
      { text: "Tout du plan Growth", included: true },
      { text: "SSO (Single Sign-On)", included: true },
      { text: "SLA (Service Level Agreement)", included: true },
      { text: "CSM dédié (Customer Success Manager)", included: true },
      { text: "Fonctionnalités sur mesure", included: true },
    ],
    cta: "Contacter les ventes",
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Des Plans Adaptés à Votre <span className="text-emerald-500">Croissance</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            Choisissez le plan qui correspond à vos besoins et commencez à créer des démos impactantes dès aujourd'hui.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${plan.popular ? "border-emerald-500 border-2 shadow-xl relative" : "border-slate-200 shadow-lg"}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-3 py-1 text-sm font-semibold">
                  <Star className="w-4 h-4 mr-1 fill-white" /> Populaire
                </Badge>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-slate-800">{plan.name}</CardTitle>
                <CardDescription className="text-slate-500 h-10">{plan.target}</CardDescription>
                <div className="text-4xl font-extrabold text-slate-900 mt-2">
                  {plan.price}
                  {plan.name !== "Enterprise" && <span className="text-sm font-normal text-slate-500">/mois</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center text-slate-600">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-rose-400 mr-2 flex-shrink-0" />
                      )}
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-6">
                <Button
                  className={`w-full font-semibold py-3 ${plan.popular ? "bg-emerald-500 hover:bg-emerald-600 text-white" : "bg-slate-800 hover:bg-slate-900 text-white"}`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
