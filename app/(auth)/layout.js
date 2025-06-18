// app/(auth)/layout.js
import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function AuthLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-slate-50 p-4">
            <div className="w-full max-w-md">
                <div className="flex justify-center items-center mb-6">
                    <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-slate-800">
                        <Zap className="h-7 w-7 text-emerald-500" />
                        DemoSnap
                    </Link>
                </div>
                {children}
            </div>
        </div>
    )
}