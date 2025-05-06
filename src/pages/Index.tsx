import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { useProgress } from "@/hooks/useProgress";
import { Footer } from "react-day-picker";
const Index = () => {
  const {
    score
  } = useProgress();
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        
      </main>
      
      <footer className="bg-gradient-to-r from-blue-700 to-blue-800 border-t border-blue-600">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-blue-300 font-bold text-lg">SurfSafe</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-blue-200 hover:text-white transition duration-150">
                À propos
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition duration-150">
                Contact
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition duration-150">
                Confidentialité
              </a>
            </div>
          </div>
          
          <div className="mt-8 border-t border-blue-800 pt-6">
            <p className="text-center text-blue-200 text-sm">
              © 2025 SurfSafe – Surfer en toute sécurité sur le net. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;