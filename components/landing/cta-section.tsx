// components/landing/cta-section.js

import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import Image from "next/image"

export default function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <Rocket className="h-16 w-16 mx-auto mb-6 opacity-80" />
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
          Prêt à transformer vos démos ?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto text-balance">
          Rejoignez les créateurs de SaaS qui ont déjà simplifié leur cycle de vente.
        </p>

        {/* --- SECTION PREUVE SOCIALE --- */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
            <blockquote className="text-lg italic text-white">
              “DemoSnap a changé la donne. On a pu remplacer nos longs calls de démo par un simple lien. Notre taux de conversion a augmenté de 40% en un mois.”
            </blockquote>
            <figcaption className="mt-4 flex items-center justify-center">
              {/* Remplacez par une vraie photo si possible */}
              <Image src="/avatar-placeholder.png" width={40} height={40} alt="Avatar de client" className="rounded-full mr-3 border-2 border-white/50" />
              <div className="text-left">
                <p className="font-semibold text-white">Marie Dubois</p>
                <p className="text-sm text-emerald-100">Head of Growth @ StartupTech</p>
              </div>
            </figcaption>
          </div>
        </div>

        <div className="mt-12">
          <Button
            size="lg"
            className="bg-white hover:bg-slate-100 text-emerald-600 font-bold px-10 py-4 rounded-lg shadow-2xl transition-transform duration-200 ease-in-out hover:scale-105 text-lg"
          >
            Créer ma première démo gratuite
          </Button>
          <p className="mt-4 text-sm text-emerald-200">
            Sans carte de crédit requise.
          </p>
        </div>
      </div>
    </section>
  )
}