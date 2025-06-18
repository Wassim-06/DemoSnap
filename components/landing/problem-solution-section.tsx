import { Lightbulb, AlertTriangle, XCircle, CheckCircle } from "lucide-react"

export default function ProblemSolutionSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-50/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-balance">
            Les démos produits traditionnelles sont <span className="text-rose-500">cassées</span>.
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Perte de temps, coûts exorbitants et faible engagement. Il est temps de changer de méthode.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Le Problème */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
            <div className="flex items-center mb-5">
              <AlertTriangle className="h-8 w-8 mr-3 text-rose-500 flex-shrink-0" />
              <h3 className="text-2xl font-semibold text-slate-800">Le Problème Actuel</h3>
            </div>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start">
                <XCircle className="h-5 w-5 mr-3 mt-1 text-rose-400 flex-shrink-0" />
                <span><strong className="font-semibold text-slate-700">Coûts Prohibitifs :</strong> Les outils existants (Navattic, Walnut) coûtent des milliers d'euros par mois, inaccessibles aux startups.</span>
              </li>
              <li className="flex items-start">
                <XCircle className="h-5 w-5 mr-3 mt-1 text-rose-400 flex-shrink-0" />
                <span><strong className="font-semibold text-slate-700">Complexité :</strong> Des heures de configuration et une courbe d'apprentissage abrupte pour créer une seule démo.</span>
              </li>
              <li className="flex items-start">
                <XCircle className="h-5 w-5 mr-3 mt-1 text-rose-400 flex-shrink-0" />
                <span><strong className="font-semibold text-slate-700">Dépendance :</strong> Nécessite des appels de vente synchrones pour montrer la valeur, ralentissant votre cycle de vente.</span>
              </li>
            </ul>
          </div>

          {/* La Solution */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-emerald-400">
            <div className="flex items-center mb-5">
              <Lightbulb className="h-8 w-8 mr-3 text-emerald-500 flex-shrink-0" />
              <h3 className="text-2xl font-semibold text-slate-800">Notre Solution : DemoSnap</h3>
            </div>
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-1 text-emerald-500 flex-shrink-0" />
                <span><strong className="font-semibold text-slate-700">Plug-and-Play :</strong> Enregistrez votre écran, ajoutez des info-bulles et partagez. C'est tout.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-1 text-emerald-500 flex-shrink-0" />
                <span><strong className="font-semibold text-slate-700">Abordable :</strong> Un plan gratuit généreux et des prix justes pour accompagner votre croissance.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-3 mt-1 text-emerald-500 flex-shrink-0" />
                <span><strong className="font-semibold text-slate-700">Vente Asynchrone :</strong> Votre démo travaille pour vous 24/7, qualifiant et convertissant les prospects pendant que vous dormez.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
