import { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { Lock, Shield, Eye, EyeOff, Mail, User, CheckCircle } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate passwords match
    if (formData.password !== formData.confirm_password) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }
    
    try {
      await axios.post("https://backend-surf-safe.onrender.com/api/register/", formData);
      alert("Inscription réussie !");
      navigate("/login");
    } catch (error: any) {
      alert(error.response?.data?.error || "Une erreur est survenue.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-center pt-8 sm:pt-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">SurfSafe</span>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 flex justify-center pb-16">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden w-full max-w-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-6 px-8">
              <div className="flex items-center justify-center">
                <User className="h-6 w-6 text-white mr-2" />
                <h2 className="text-xl font-bold text-white">Créer un compte</h2>
              </div>
            </div>

            {/* Form */}
            <div className="py-8 px-8">
              <form onSubmit={handleSubmit}>
                {/* Name fields */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="firstName"
                        name="first_name"
                        type="text"
                        required
                        value={formData.first_name}
                        onChange={handleChange}
                        className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm 
                                 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Abdou"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        required
                        value={formData.last_name}
                        onChange={handleChange}
                        className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm 
                                 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Fall"
                      />
                    </div>
                  </div>
                </div>

                {/* Email field */}
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="appearance-none block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm 
                               placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="text@email.com"
                    />
                  </div>
                </div>

                {/* Password field */}
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm 
                               placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="••••••••"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Minimum 8 caractères, avec au moins une majuscule, un chiffre et un caractère spécial
                  </p>
                </div>

                {/* Confirm Password field */}
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="confirm_password"
                      name="confirm_password"
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={formData.confirm_password}
                      onChange={handleChange}
                      className="appearance-none block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg shadow-sm 
                               placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="••••••••"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="text-gray-400 hover:text-gray-500 focus:outline-none"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm
                             text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800
                             hover:from-blue-700 hover:to-blue-900
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200`}
                  >
                    Créer mon compte
                  </button>
                </div>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                
              </div>

              {/* Login link */}
              <div className="mt-6 text-center">
                <span className="text-sm text-gray-600">Vous avez déjà un compte ?</span>
                <Link to="/login" className="ml-1 text-sm font-medium text-blue-600 hover:text-blue-500">
                  Se connecter
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Security message */}
        <div className="mt-2 mb-8 text-center">
          <div className="flex justify-center items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <p className="text-sm text-gray-600">Vos données sont sécurisées</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-700 to-blue-800 border-t border-blue-600">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-blue-200" />
              <span className="text-blue-200 font-bold text-lg">SurfSafe</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-blue-100 hover:text-white transition duration-150">
                À propos
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition duration-150">
                Contact
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition duration-150">
                Confidentialité
              </a>
            </div>
          </div>
          
          <div className="mt-8 border-t border-blue-600 pt-6">
            <p className="text-center text-blue-100 text-sm">
              © 2025 SurfSafe – Surfer en toute sécurité sur le net. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignupPage;