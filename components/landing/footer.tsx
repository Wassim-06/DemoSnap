export default function Footer() {
  return (
    <footer className="py-8 bg-slate-800 text-slate-400">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} DemoSnap. Tous droits réservés.</p>
        <p className="text-sm mt-1">Construit avec passion pour simplifier vos ventes.</p>
      </div>
    </footer>
  )
}
