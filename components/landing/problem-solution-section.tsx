import { Lightbulb, AlertTriangle } from "lucide-react"

export default function ProblemSolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
          Montrer la valeur de votre produit, c'est <span className="text-emerald-500">compliqué</span> ?
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <div className="flex items-center text-rose-500 mb-4">
              <AlertTriangle className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-semibold">Le Problème Actuel</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Les SaaS et outils B2B doivent prouver leur valeur rapidement. Mais les solutions de démo existantes
              (Navattic, Walnut, Reprise) sont souvent chères (500€ - 3000€/mois) et complexes à mettre en place. C'est
              un frein majeur, surtout pour les petites équipes et les indie-hackers.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-300">
            <div className="flex items-center text-emerald-600 mb-4">
              <Lightbulb className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-semibold">Notre Solution : DemoSnap</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              DemoSnap est la solution{" "}
              <strong className="font-semibold text-emerald-600">plug-and-play, abordable et ultra-simple</strong> que
              vous attendiez. Transformez vos enregistrements d'écran en démos interactives percutantes qui engagent vos
              prospects et accélèrent votre cycle de vente.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
