import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Eye } from "lucide-react";
export default function Hero() {
  return <div className="relative bg-gradient-to-b from-white to-phishguard-soft-blue py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-phishguard-deep-blue">Navigez en toute sécurité</span>
            <span className="block text-phishguard-purple mt-1">sur le net</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Apprenez à vous protéger contre le phishing et les menaces en ligne grâce à des exercices interactifs, 
            des simulations et des quiz ludiques. SurfSafe vous forme pour naviguer en toute sécurité.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-12 max-w-6xl mx-auto">
            {/* Feature 1 - Identifier */}
            <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-lg bg-white shadow-md hover:shadow-lg">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-md mb-2">
                <ShieldCheck className="h-10 w-10 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Identifiez</h3>
              <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto my-3"></div>
              <p className="text-base text-gray-600 leading-relaxed">
                Repérez facilement les tentatives de phishing et protégez vos informations personnelles
              </p>
              <a href="#identifier" className="mt-4 inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
                En savoir plus
                <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Feature 2 - Protéger */}
            <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-lg bg-white shadow-md hover:shadow-lg">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md mb-2">
                <Lock className="h-10 w-10 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Protégez</h3>
              <div className="w-12 h-1 bg-purple-500 rounded-full mx-auto my-3"></div>
              <p className="text-base text-gray-600 leading-relaxed">
                Apprenez les techniques efficaces pour vous défendre contre les cybermenaces
              </p>
              <a href="#proteger" className="mt-4 inline-flex items-center text-purple-600 font-semibold hover:text-purple-800">
                En savoir plus
                <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Feature 3 - Maîtriser */}
            <div className="flex flex-col items-center text-center group hover:transform hover:scale-105 transition-all duration-300 p-6 rounded-lg bg-white shadow-md hover:shadow-lg">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 shadow-md mb-2">
                <Eye className="h-10 w-10 text-white" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Maîtrisez</h3>
              <div className="w-12 h-1 bg-indigo-500 rounded-full mx-auto my-3"></div>
              <p className="text-base text-gray-600 leading-relaxed">
                Navigez en toute sécurité sur le net et partagez vos connaissances avec les autres
              </p>
              <a href="#maitriser" className="mt-4 inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800">
                En savoir plus
                <svg className="ml-2 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-gray-200" aria-hidden="true"></div>
        </div>
      </div>
    </div>;
}