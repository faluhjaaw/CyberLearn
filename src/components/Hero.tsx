import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Eye } from "lucide-react";
export default function Hero() {
  return <div className="relative bg-gradient-to-b from-white to-phishguard-soft-blue py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-phishguard-deep-blue">Devenez un expert en</span>
            <span className="block text-phishguard-purple mt-1">cybersécurité</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Apprenez à vous protéger contre le phishing et les menaces en ligne grâce à des exercices interactifs, 
            des simulations et des quiz ludiques. PhishGuard vous forme pour naviguer en toute sécurité.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button className="bg-phishguard-purple hover:bg-phishguard-dark-purple px-8 py-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all text-zinc-50 bg-blue-500 hover:bg-blue-400">
                Commencer le parcours
              </Button>
            </Link>
            <a href="#features">
              <Button variant="outline" className="px-8 py-6 text-lg">
                En savoir plus
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-16 flow-root sm:mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative rounded-xl overflow-hidden bg-gray-900/5 px-6 pt-10 pb-8 shadow-2xl sm:px-12 sm:pt-16 sm:pb-14 lg:mx-auto lg:max-w-lg">
            <div className="grid grid-cols-3 gap-8 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-phishguard-purple/10">
                  <ShieldCheck className="h-8 w-8 text-phishguard-purple" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-sm font-semibold text-gray-900">Identifiez</h3>
                <p className="mt-1 text-sm text-gray-600">Repérez les tentatives de phishing</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-phishguard-purple/10">
                  <Lock className="h-8 w-8 text-phishguard-dark-purple" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-sm font-semibold text-gray-900">Protégez</h3>
                <p className="mt-1 text-sm text-gray-600">Apprenez à vous défendre</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-phishguard-purple/10">
                  <Eye className="h-8 w-8 text-phishguard-purple" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-sm font-semibold text-gray-900">Maîtrisez</h3>
                <p className="mt-1 text-sm text-gray-600">Devenez un expert cyber</p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-gray-200" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </div>;
}