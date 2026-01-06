import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Award,
  Shield,
  Clock,
  Star,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function ModernTravelAboutLight() {
  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "10+ Years Experience",
      description: "Trusted by thousands of travelers",
      color: "from-yellow-400 to-amber-500",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safe & Secure",
      description: "Well-maintained fleet & drivers",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Guides",
      description: "Professional & friendly service",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Best Rates",
      description: "Competitive pricing guaranteed",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const benefits = [
    "Hourly & kilometer-based rides",
    "Multi-day tour packages",
    "Interstate travel coverage",
    "24/7 customer support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200/50 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-50"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-xl">
                  <span className="text-white font-black text-xl">MK</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  COIMBATORE TAXI
                </h1>
                <p className="text-xs text-yellow-600 font-semibold">
                  Tours & Travels
                </p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-600 transition font-medium"
              >
                Home
              </a>
              <a href="#" className="text-yellow-600 font-bold relative">
                About Us
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500"></span>
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-600 transition font-medium"
              >
                Tariff
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-600 transition font-medium"
              >
                Tour Packages
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-yellow-600 transition font-medium"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-2 text-sm bg-gray-100/80 px-4 py-2 rounded-full border border-gray-200">
                <Phone className="w-4 h-4 text-yellow-600" />
                <span className="text-gray-900 font-semibold">
                  +91 63808 29253
                </span>
              </div>
              <button className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
                <div className="relative bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-6 py-2.5 rounded-full font-bold hover:shadow-2xl transform hover:-translate-y-0.5 transition">
                  Enquiry Now
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-700 text-sm font-semibold mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Premium Travel Experience</span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
              <span className="block text-gray-900 mb-2">
                We create journeys
              </span>
              <span className="block bg-gradient-to-r from-yellow-500 via-amber-600 to-orange-600 bg-clip-text text-transparent">
                for the excited
              </span>
              <span className="block text-gray-900">traveler</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Your premium travel partner for unforgettable experiences across
              South India
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-40 right-20 animate-bounce"
          style={{ animationDuration: "3s" }}
        >
          <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
        </div>
        <div
          className="absolute bottom-40 left-20 animate-bounce"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        >
          <Sparkles className="w-6 h-6 text-yellow-500" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Side - Image */}
          <div className="relative">
            {/* Yellow Accent Border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-3xl blur-xl"></div>

            <div className="relative bg-white p-8 rounded-3xl border border-gray-200 shadow-2xl">
              {/* Yellow Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-tr-3xl"></div>

              <div className="aspect-square bg-gradient-to-br from-blue-50 via-white to-emerald-50 rounded-2xl flex items-center justify-center overflow-hidden relative border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent"></div>
                <div className="text-center p-8 relative z-10">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-yellow-400 blur-2xl opacity-30"></div>
                    <div className="relative w-40 h-40 bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                      <Users className="w-20 h-20 text-white" />
                    </div>
                  </div>
                  <div className="inline-block px-4 py-1 bg-yellow-400/20 border border-yellow-400/40 rounded-full mb-2">
                    <span className="text-yellow-700 text-sm font-bold">
                      ★★★★★
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Your Travel Partner
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Trusted Since 2014
                  </p>
                </div>
              </div>

              {/* Stats Cards with Yellow Accent */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-5 rounded-xl border border-yellow-300 relative overflow-hidden group hover:border-yellow-400 transition hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl group-hover:bg-yellow-400/30 transition"></div>
                  <p className="text-4xl font-black bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    10+
                  </p>
                  <p className="text-sm text-gray-700 font-semibold">
                    Years Experience
                  </p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-xl border border-emerald-300 relative overflow-hidden group hover:border-emerald-400 transition hover:shadow-lg">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-400/20 rounded-full blur-2xl group-hover:bg-emerald-400/30 transition"></div>
                  <p className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    5000+
                  </p>
                  <p className="text-sm text-gray-700 font-semibold">
                    Happy Customers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white/80 px-6 py-3 rounded-full border border-gray-200 backdrop-blur-sm shadow-md">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-50"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-sm">MK</span>
                </div>
              </div>
              <span className="font-bold text-gray-900">TOURS & TRAVELS</span>
              <span className="px-3 py-1 bg-yellow-400/20 text-yellow-700 text-xs font-bold rounded-full border border-yellow-400/40">
                PREMIUM
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              Your reliable travel partner for
              <span className="text-yellow-600"> exceptional journeys</span>
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Successfully running our company for past 10 years, we are experts
              in providing flexible taxi services that cater to your needs. We
              can accommodate hourly rides, kilometer-based trips, and longer
              trips lasting one, two, or more than five days.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              We have extended services to all the other parts of Tamil Nadu as
              well as the neighboring States like Kerala, Karnataka, and Andhra
              Pradesh. You can concentrate on what matters on your journey while
              we guarantee comfortable and safe travel.
            </p>

            {/* Benefits List with Yellow Checkmarks */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
                <div className="relative bg-gradient-to-r from-yellow-400 to-amber-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transform hover:-translate-y-1 transition flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Book Your Journey</span>
                </div>
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transform hover:-translate-y-1 transition border-2 border-gray-200 flex items-center space-x-2 hover:border-gray-300 shadow-md">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-yellow-400 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition rounded-2xl"></div>
                <div
                  className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 relative">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm relative">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Premium CTA Section */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

          <div className="relative p-12 md:p-16 text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/30 backdrop-blur-sm rounded-full text-white text-sm font-bold mb-6 border border-white/30">
              <TrendingUp className="w-4 h-4" />
              <span>24/7 Available</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-10 text-white/90 font-semibold max-w-2xl mx-auto">
              Contact us anytime for instant bookings and personalized travel
              solutions
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+916380829253"
                className="flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transform hover:-translate-y-1 transition shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>+91 63808 29253</span>
              </a>
              <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition border-2 border-white/30">
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Accent */}
      <div className="h-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600"></div>
    </div>
  );
}
