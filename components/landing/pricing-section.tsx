import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const plans = [
  {
    name: "Free",
    price: "0€",
    target: "Pour les side-projects & tests",
    features: [
      { text: "1 démo active", included: true },
      { text: "500 vues/mois", included: true },
      { text: "Badge DemoSnap", included: true },
    ],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Startup",
    price: "99€",
    target: "Pour les SaaS en lancement",
    features: [
      { text: "10 démos actives", included: true },
      { text: "10,000 vues/mois", included: true },
      { text: "Pas de badge DemoSnap", included: true },
      { text: "Analytiques de base", included: true },
      { text: "Support prioritaire par email", included: true },
    ],
    cta: "Choisir Startup",
    popular: true,
  },
  {
    name: "Growth",
    price: "299€",
    target: "Pour les scale-ups & agences",
    features: [
      { text: "Démos illimitées", included: true },
      { text: "Vues illimitées", included: true },
      { text: "Domaine personnalisé", included: true },
      { text: "Analytiques avancées", included: true },
      { text: "Intégrations (CRM, etc.)", included: true },
    ],
    cta: "Choisir Growth",
    popular: false,
  },
  {
    name: "Enterprise",
    price: "Sur Mesure",
    target: "Pour les grandes équipes",
    features: [
      { text: "Tout du plan Growth", included: true },
      { text: "SSO & Sécurité avancée", included: true },
      { text: "SLA & Support dédié (CSM)", included: true },
      { text: "Fonctionnalités sur mesure", included: true },
    ],
    cta: "Contacter les ventes",
    popular: false,
  },
];

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  target: string;
  features: PlanFeature[];
  cta: string;
  popular: boolean;
}


// Fonction helper pour déterminer le lien du CTA
const getPlanLink = (plan: PricingPlan): string => {
  switch (plan.name) {
    case "Startup":
      return "/signup?plan=startup";
    case "Growth":
      return "/signup?plan=growth";
    case "Enterprise":
      return "mailto:sales@demosnap.com?subject=Demande de démo pour le plan Enterprise"; // Ouvre le client mail
    default:
      return "/signup"; // Plan Free
  }
}



export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-balance">
            Des Plans Adaptés à Votre <span className="text-emerald-500">Croissance</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto text-balance">
            Commencez gratuitement. Montez en puissance quand vous êtes prêt. Pas de surprise.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col rounded-xl transition-all duration-300 ${plan.popular ? "border-emerald-500 border-2 shadow-2xl scale-105" : "border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-2"}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 text-sm font-semibold shadow-md">
                  <Star className="w-4 h-4 mr-1.5 fill-white" /> Populaire
                </Badge>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-slate-800">{plan.name}</CardTitle>
                <CardDescription className="text-slate-500 h-10 pt-1">{plan.target}</CardDescription>
                <div className="text-4xl font-extrabold text-slate-900 pt-4">
                  {plan.price}
                  {plan.name !== "Enterprise" && plan.name !== "Free" && <span className="text-base font-medium text-slate-500"> /mois</span>}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center text-slate-600">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto pt-6">
                <Link href={getPlanLink(plan)} className="w-full">
                  <Button
                    className={`w-full font-semibold py-3 rounded-lg text-base ${plan.popular ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-200 shadow-md" : "bg-slate-800 hover:bg-slate-900 text-white"}`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}