// app/(auth)/signup/page.js

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Chrome, Github } from "lucide-react"

export default function SignupPage() {
    return (
        <Card className="shadow-lg border-slate-200">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Créez votre compte</CardTitle>
                <CardDescription>Rejoignez-nous et commencez à créer des démos en quelques minutes.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                    <Button variant="outline">
                        <Chrome className="mr-2 h-4 w-4" /> Google
                    </Button>
                </div>
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-slate-500">
                            Ou continuez avec
                        </span>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="marie@exemple.com" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
                        Créer mon compte
                    </Button>
                </div>
            </CardContent>
            <CardFooter className="text-center text-sm text-slate-600 flex flex-col gap-2">
                <p>En vous inscrivant, vous acceptez nos <Link href="/terms" className="underline hover:text-emerald-600">Conditions d'utilisation</Link>.</p>
                <p>
                    Vous avez déjà un compte ?{" "}
                    <Link href="/login" className="font-semibold underline hover:text-emerald-600">
                        Connectez-vous
                    </Link>
                </p>
            </CardFooter>
        </Card>
    )
}