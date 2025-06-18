import { Button } from "@/components/ui/button"
import { PlayCircle, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 text-balance">
          Créez des Démos Interactives{" "}
          <span className="text-emerald-500">Qui Vendent Pour Vous</span>.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto text-balance">
          Transformez un simple enregistrement d'écran en une expérience interactive qui captive vos prospects. Sans une ligne de code.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* -- MODIFICATION ICI -- */}
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform duration-200 ease-in-out hover:scale-105"
            >
              <Zap className="mr-2 h-5 w-5" /> Commencer Gratuitement
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold px-8 py-3 rounded-lg shadow-sm transition-transform duration-200 ease-in-out hover:scale-105"
          >
            <PlayCircle className="mr-2 h-5 w-5" /> Voir une Démo
          </Button>
        </div>

        <div className="mt-16 group relative w-full max-w-4xl mx-auto">
          <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-sky-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <PlayCircle className="h-20 w-20 text-white drop-shadow-lg" />
            </div>
            <Image
              src="/screenshot-app.png"
              alt="Aperçu du lecteur de démo interactif de DemoSnap"
              width={1200}
              height={750}
              className="rounded-xl shadow-2xl mx-auto border border-slate-200 relative z-0"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )

}
