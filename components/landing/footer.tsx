// components/landing/footer.js
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-6 text-center text-slate-500">
        <p className="text-lg font-bold text-slate-700">DemoSnap</p>
        <div className="flex justify-center gap-6 my-4">
          <Link href="#pricing" className="hover:text-emerald-500 transition-colors">Tarifs</Link>
          <Link href="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link>
          <Link href="/terms" className="hover:text-emerald-500 transition-colors">Mentions Légales</Link>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} DemoSnap. Tous droits réservés.</p>
      </div>
    </footer>
  )
}