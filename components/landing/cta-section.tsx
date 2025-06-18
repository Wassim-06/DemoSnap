import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-emerald-500 text-white">
      <div className="container mx-auto px-6 text-center">
        <Rocket className="h-16 w-16 mx-auto mb-6 text-emerald-100" />
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Prêt à Transformer Vos Démos ?</h2>
        <p className="mt-6 text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto">
          Rejoignez les Product Managers et Growth Marketers qui simplifient leur processus de vente avec DemoSnap.
          Commencez dès maintenant et voyez la différence.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            className="bg-white hover:bg-slate-100 text-emerald-600 font-bold px-10 py-4 rounded-lg shadow-md transition-transform duration-150 hover:scale-105 text-lg"
          >
            Créer ma première démo gratuite
          </Button>
        </div>
      </div>
    </section>
  )
}
