// app/(auth)/login/page.js

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Chrome, Github } from "lucide-react"

export default function LoginPage() {
    return (
        <Card className="shadow-lg border-slate-200">
            <CardHeader className="text-center">
                <CardTitle className="text-2xl">Bon retour parmi nous !</CardTitle>
                <CardDescription>Connectez-vous pour accéder à votre tableau de bord.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
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
                            Ou connectez-vous avec votre email
                        </span>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="marie@exemple.com" required />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Mot de passe</Label>
                            <Link href="/forgot-password" className="ml-auto inline-block text-sm underline hover:text-emerald-600">
                                Mot de passe oublié ?
                            </Link>
                        </div>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
                        Se connecter
                    </Button>
                </div>
            </CardContent>
            <CardFooter className="text-center text-sm text-slate-600">
                <p>
                    Pas encore de compte ?{" "}
                    <Link href="/signup" className="font-semibold underline hover:text-emerald-600">
                        Inscrivez-vous
                    </Link>
                </p>
            </CardFooter>
        </Card>
    )
}