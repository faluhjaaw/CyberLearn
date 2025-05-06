
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X, ChevronRight, Lock, ShieldAlert } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Quiz", path: "/quiz" },
    { name: "Phishing", path: "/phishing" },
    { name: "Scénarios", path: "/scenarios" },
    { name: "Résultats", path: "/results" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={cn(
      "sticky top-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="relative">
                <Shield className={cn(
                  "h-8 w-8 text-cybersec-blue transition-all duration-300",
                  scrolled ? "animate-cyber-pulse" : ""
                )} />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cybersec-neon-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cybersec-neon-green"></span>
                </span>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-cybersec-blue to-cybersec-tech-purple bg-clip-text text-transparent">
                SurfSafe
              </span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:ml-6 md:flex md:items-center">
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.name}>
                    <Link to={link.path}>
                      <NavigationMenuLink 
                        className={cn(
                          "px-3 py-2 text-sm font-medium relative overflow-hidden group",
                          pathname === link.path 
                            ? "text-cybersec-blue" 
                            : "text-gray-700 hover:text-cybersec-blue"
                        )}
                      >
                        <span className="relative z-10">{link.name}</span>
                        {pathname === link.path && (
                          <span className="absolute inset-x-1 bottom-0 h-0.5 bg-cybersec-blue"></span>
                        )}
                        <span className="absolute bottom-0 left-0 w-full h-0 bg-cybersec-light-gray transition-all duration-200 group-hover:h-full z-0"></span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="ml-6 flex items-center">
              {!token ? (
                  <Button 
                    variant="outline"
                    className="text-cybersec-blue border-cybersec-blue hover:bg-cybersec-soft-blue hover:text-cybersec-dark-blue flex items-center gap-2">
                    <Lock size={16} />
                    <span><Link to="/login">Se connecter</Link></span>
                  </Button>
                ) : (
                  <Button 
                    onClick={handleLogout}
                    className="bg-transparent text-red-900 border-cybersec-blue hover:bg-cybersec-soft-blue hover:text-cybersec-dark-blue flex items-center gap-2">
                    <span>Se déconnecter</span>
                  </Button>
                )
              }
              
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-cybersec-blue hover:bg-cybersec-light-gray"
              aria-expanded="false"
            >
              <span className="sr-only">Ouvrir le menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center ${
                  pathname === link.path
                    ? "bg-cybersec-light-gray border-l-4 border-cybersec-blue text-cybersec-blue"
                    : "border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300"
                } pl-3 pr-4 py-3 text-base font-medium`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                {pathname === link.path ? (
                  <ShieldAlert className="ml-auto h-5 w-5 text-cybersec-blue" />
                ) : (
                  <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
                )}
              </Link>
            ))}
            <div className="px-4 py-4">
              <Button 
                className="w-full bg-cybersec-blue hover:bg-cybersec-dark-blue flex items-center justify-center gap-2"
              >
                <Lock size={16} />
                <span><Link to="/login">Se connecter</Link></span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
