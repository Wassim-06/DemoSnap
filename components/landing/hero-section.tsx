import { Button } from "@/components/ui/button"
import { PlayCircle, Zap } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900">
          Créez des Démos Interactives <span className="text-emerald-500">Qui Vendent Pour Vous</span>.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
          Avec DemoSnap, enregistrez votre application en 5 minutes et obtenez un lien interactif. Plus besoin de code
          complexe ni de longs appels de démo.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-transform duration-150 hover:scale-105"
          >
            <Zap className="mr-2 h-5 w-5" /> Commencer Gratuitement
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold px-8 py-3 rounded-lg shadow-sm transition-transform duration-150 hover:scale-105"
          >
            <PlayCircle className="mr-2 h-5 w-5" /> Voir un Exemple
          </Button>
        </div>
        <div className="mt-16">
          <Image
            src="/placeholder.svg?width=1000&height=600"
            alt="DemoSnap interactive demo player mockup"
            width={1000}
            height={600}
            className="rounded-xl shadow-2xl mx-auto border border-slate-200"
            priority
          />
        </div>
      </div>
    </section>
  )
}
