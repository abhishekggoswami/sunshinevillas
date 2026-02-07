"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InfiniteMovingCardsDemo } from "@/components/infinite-moving-cards-demo"
import { LoadingScreen } from "@/components/loading-screen"
import {
  Sun,
  Moon,
  MapPin,
  Star,
  Waves,
  Car,
  Wifi,
  Users,
  ChevronDown,
  Crown,
  Award,
  ArrowRight,
  Menu,
  X,
  MessageSquare,
  Utensils,
  Plane,
  Coffee,
  Building,
  CheckCircle,
  Heart,
  Anchor,
  Mountain,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react"

export default function HomePage() {
  const [isDayMode, setIsDayMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // Gallery slideshow images
  const galleryImages = [
    { src: "/images/gallery-villa-exterior-pool.jpg", title: "Villa Exterior with Pool", category: "Exterior" },
    { src: "/images/gallery-living-room-modern.jpg", title: "Modern Living Room", category: "Interior" },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-04%20at%208.52.02%20PM-TtqvKM36Ckx5NFaooPjpGekFSNX1d5.jpeg",
      title: "Master Bedroom",
      category: "Bedroom",
    },
    { src: "/images/gallery-villa-landscape.jpg", title: "Villa Landscape", category: "Exterior" },
    { src: "/images/gallery-bathroom-luxury-tub.jpg", title: "Luxury Bathroom", category: "Bathroom" },
    { src: "/images/gallery-villa-exterior-day.jpg", title: "Villa Exterior Day", category: "Exterior" },
    { src: "/images/gallery-bedroom-ensuite.jpg", title: "Bedroom with Ensuite", category: "Bedroom" },
    { src: "/images/gallery-bathroom-modern.jpg", title: "Modern Bathroom", category: "Bathroom" },
    { src: "/images/gallery-bedroom-balcony.jpg", title: "Bedroom with Balcony", category: "Bedroom" },
    { src: "/images/gallery-interior-staircase.jpg", title: "Interior Staircase", category: "Interior" },
  ]

  // Auto-play slideshow
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, galleryImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const toggleMode = () => {
    setIsDayMode(!isDayMode)
  }

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen custom-scrollbar">
      {/* Luxury Navigation - Fully Responsive */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrollY > 50
            ? isDayMode
              ? "glass-morphism border-b border-white/20"
              : "glass-morphism-dark border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-gradient-ocean">
                  Sunshine Villas
                </h1>
                <p className={`text-xs font-medium hidden sm:block ${isDayMode ? "text-gray-800" : "text-gray-400"}`}>
                  Coastal Luxury Redefined
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {[
                { name: "Home", id: "home" },
                { name: "Villas", id: "villa-814" },
                { name: "Experience", id: "experience" },
                { name: "Amenities", id: "amenities" },
                { name: "Gallery", id: "gallery" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-medium transition-all duration-300 hover:scale-105 text-sm xl:text-base ${
                    isDayMode ? "text-gray-800 hover:text-ocean-600" : "text-slate-200 hover:text-aqua-400"
                  } group`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-ocean-600 to-aqua-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>

            {/* Day/Night Toggle & Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                onClick={toggleMode}
                variant="outline"
                size="sm"
                className={`relative overflow-hidden transition-all duration-500 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 ${
                  isDayMode
                    ? "border-ocean-200 hover:bg-ocean-50 text-ocean-700"
                    : "border-gray-600 hover:bg-gray-800 text-slate-200 bg-gray-900/50"
                }`}
              >
                <div className="flex items-center space-x-1 sm:space-x-2">
                  {isDayMode ? (
                    <Moon className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-500 rotate-0" />
                  ) : (
                    <Sun className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-500 rotate-180" />
                  )}
                  <span className="font-medium hidden sm:inline">{isDayMode ? "Night" : "Day"}</span>
                </div>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                variant="outline"
                size="sm"
                className={`lg:hidden px-2 py-1 sm:px-3 sm:py-2 ${
                  isDayMode
                    ? "border-ocean-200 hover:bg-ocean-50 text-ocean-700"
                    : "border-gray-600 hover:bg-gray-800 text-slate-200 bg-gray-900/50"
                }`}
              >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className={`lg:hidden mt-4 p-4 sm:p-6 rounded-2xl transition-all duration-300 ${
                isDayMode ? "glass-morphism" : "glass-morphism-dark"
              }`}
            >
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {[
                  { name: "Home", id: "home" },
                  { name: "Villas", id: "villa-814" },
                  { name: "Experience", id: "experience" },
                  { name: "Amenities", id: "amenities" },
                  { name: "Gallery", id: "gallery" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-medium transition-colors duration-300 text-left text-base sm:text-lg ${
                      isDayMode ? "text-gray-800 hover:text-ocean-600" : "text-slate-200 hover:text-aqua-400"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Fully Responsive */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 transition-opacity duration-1000 animate-slide-up-from-bottom"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <Image
              src={isDayMode ? "/images/villa-day.jpg" : "/images/villa-night.jpg"}
              alt="Sunshine Villas"
              fill
              className="object-cover scale-110"
              priority
            />
          </div>
          <div
            className={`absolute inset-0 transition-all duration-1000 ${
              isDayMode
                ? "bg-gradient-to-br from-white/20 via-ocean-500/25 to-aqua-400/30"
                : "bg-gradient-to-br from-slate-900/85 via-slate-800/70 to-ocean-900/60"
            }`}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-aqua-400 rounded-full animate-float opacity-60"></div>
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-gold-400 rounded-full animate-float opacity-80"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-ocean-400 rounded-full animate-float opacity-40"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Hero Content - Responsive */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="animate-slide-down-from-top">
            <Badge className="mb-6 sm:mb-8 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg font-medium bg-gradient-to-r from-ocean-500/20 to-aqua-500/20 border border-white/30 text-white backdrop-blur-luxury">
              <Crown className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">Chennai's Most Exclusive Coastal Retreat</span>
              <span className="sm:hidden">Exclusive Coastal Retreat</span>
            </Badge>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold mb-6 sm:mb-8 leading-none">
              <span
                className={`block transition-colors duration-1000 ${
                  isDayMode ? "text-gray-800 text-shadow-luxury" : "text-gray-100"
                }`}
              >
                Sunshine
              </span>
              <span className="block text-gradient-ocean">Villas</span>
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif font-bold mb-6 sm:mb-8 px-4 text-white"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(0, 0, 0, 0.8), 1px -1px 2px rgba(0, 0, 0, 0.8), -1px 1px 2px rgba(0, 0, 0, 0.8)",
              }}
            >
              Where Ocean Dreams Meet Architectural Poetry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
              <Link href="/villa-814">
                <Button
                  size="lg"
                  className="group w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-ocean-600 to-aqua-500 hover:from-ocean-700 hover:to-aqua-600 transition-all duration-500 transform hover:scale-105 luxury-shadow-xl"
                >
                  <Waves className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
                  Discover Villa 814
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className={`w-6 h-6 sm:w-8 sm:h-8 ${isDayMode ? "text-gray-800" : "text-gray-300"}`} />
        </div>
      </section>

      {/* Awards & Recognition Section - Responsive */}
      <section
        className={`py-12 sm:py-16 md:py-20 transition-colors duration-1000 ${
          isDayMode ? "bg-gradient-to-r from-gold-50 to-ocean-50" : "bg-gradient-to-r from-gray-900 to-slate-800"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 opacity-80">
            {[
              { text: "Guest Satisfaction", subtitle: "4.8/5 Rating" },
              { text: "Family Friendly", subtitle: "Perfect for Celebrations" },
              { text: "Coastal Location", subtitle: "Beachside Villa" },
              { text: "Trusted Host", subtitle: "Verified Property" },
            ].map((award, index) => (
              <div key={index} className="text-center">
                <Award
                  className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${isDayMode ? "text-gold-600" : "text-gold-400"}`}
                />
                <p className={`font-semibold text-sm sm:text-base ${isDayMode ? "text-gray-800" : "text-gray-200"}`}>
                  {award.text}
                </p>
                <p className={`text-xs sm:text-sm ${isDayMode ? "text-gray-600" : "text-gray-400"}`}>
                  {award.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Features Section - Responsive */}
      <section
        className={`py-16 sm:py-24 md:py-32 transition-colors duration-1000 ${
          isDayMode
            ? "bg-gradient-to-b from-pearl-50 via-ocean-50/30 to-aqua-50/20"
            : "bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge
              className={`mb-4 sm:mb-6 px-4 sm:px-6 py-2 text-sm font-medium ${
                isDayMode
                  ? "bg-ocean-100 text-ocean-800 border-ocean-200"
                  : "bg-slate-800/90 text-aqua-400 border-gray-700"
              }`}
            >
              <Award className="w-4 h-4 mr-2" />
              Unmatched Excellence
            </Badge>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 sm:mb-8 transition-colors duration-1000 ${
                isDayMode ? "text-gray-800" : "text-gray-100"
              }`}
            >
              The Art of
              <span className="block text-gradient-ocean">Coastal Living</span>
            </h2>
            <p
              className={`text-lg sm:text-xl md:text-2xl font-serif max-w-4xl mx-auto transition-colors duration-1000 px-4 ${
                isDayMode ? "text-gray-600" : "text-slate-300"
              }`}
            >
              Every detail crafted to perfection, every moment designed to inspire. Experience luxury that transcends
              expectations in Chennai's most coveted coastal sanctuary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            {[
              {
                icon: <Waves className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Oceanfront Serenity",
                description:
                  "Wake to the gentle symphony of waves lapping against pristine shores. Our villa offers beautiful views of the Bay of Bengal from comfortable balconies, where you can enjoy your morning coffee while watching the sunrise over the ocean.",
                gradient: "from-ocean-500 to-aqua-400",
                features: ["Beach nearby for walks", "Sea breeze and coastal atmosphere", "Peaceful coastal setting"],
              },
              {
                icon: <Crown className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Comfort & Elegance",
                description:
                  "Experience the perfect blend of modern comfort and timeless elegance. Every space is thoughtfully designed to provide a peaceful retreat where you can relax, unwind, and create lasting memories with your loved ones.",
                gradient: "from-gold-500 to-gold-400",
                features: ["Spacious living areas", "Comfortable accommodations", "Peaceful environment"],
              },
              {
                icon: <Star className="w-8 h-8 sm:w-10 sm:h-10" />,
                title: "Memorable Experiences",
                description:
                  "Our guests consistently share stories of unforgettable moments - from intimate family gatherings to joyful celebrations. The villa provides the perfect backdrop for creating cherished memories that last a lifetime.",
                gradient: "from-teal-500 to-aqua-400",
                features: ["Perfect for celebrations", "Family-friendly atmosphere", "Memorable stays"],
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden transition-all duration-700 hover:scale-105 cursor-pointer ${
                  isDayMode
                    ? "bg-white/80 backdrop-blur-luxury border-white/50 hover:shadow-luxury-xl"
                    : "bg-slate-800/90 backdrop-blur-luxury border-gray-700/50 hover:shadow-luxury-xl"
                }`}
              >
                <CardContent className="p-6 sm:p-8 md:p-10 text-center relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-6 sm:mb-8 bg-gradient-to-r ${feature.gradient} text-white group-hover:scale-110 transition-transform duration-500`}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className={`text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6 transition-colors duration-1000 ${
                      isDayMode ? "text-gray-800" : "text-gray-100"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 transition-colors duration-1000 ${
                      isDayMode ? "text-gray-600" : "text-slate-300"
                    }`}
                  >
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className={`text-sm ${isDayMode ? "text-gray-700" : "text-slate-300"}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Villa 814 Showcase - Responsive */}
      <section
        id="villa-814"
        className={`py-16 sm:py-24 md:py-32 transition-colors duration-1000 ${isDayMode ? "bg-white" : "bg-gradient-to-b from-slate-900 to-gray-900"}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge
              className={`mb-4 sm:mb-6 px-4 sm:px-6 py-2 text-sm font-medium ${
                isDayMode
                  ? "bg-gradient-to-r from-ocean-100 to-aqua-100 text-ocean-800 border-ocean-200"
                  : "bg-gradient-to-r from-gray-800 to-gray-700 text-aqua-400 border-gray-600"
              }`}
            >
              <Star className="w-4 h-4 mr-2" />
              Flagship Property
            </Badge>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 sm:mb-8 transition-colors duration-1000 ${
                isDayMode ? "text-gray-800" : "text-gray-100"
              }`}
            >
              Villa 814
            </h2>
            <p
              className={`text-lg sm:text-xl md:text-2xl font-serif max-w-4xl mx-auto transition-colors duration-1000 px-4 ${
                isDayMode ? "text-gray-600" : "text-slate-300"
              }`}
            >
              This elegant 3,500 sq. ft. villa is thoughtfully crafted and situated on a generous half-acre plot,
              offering ample space, privacy, and a seamless blend of indoor and outdoor living.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Card
              className={`overflow-hidden transition-all duration-700 hover:scale-[1.02] ${
                isDayMode
                  ? "bg-gradient-to-br from-pearl-50 to-ocean-50/30 border-ocean-200/50 luxury-shadow-xl"
                  : "bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600/50 shadow-glow-lg"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Gallery - Responsive */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto">
                  <div className="absolute inset-0">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                      <source
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2794%20%281%29-yUVOtNl2USSNuVDsNSqqU7NPrZLFSf.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                    <Badge className="bg-gradient-to-r from-gold-500 to-gold-400 text-white text-sm sm:text-lg px-3 sm:px-6 py-2 sm:py-3 font-display font-semibold">
                      Villa 814
                    </Badge>
                  </div>
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                    <Badge className="bg-black/50 text-white text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 backdrop-blur-sm">
                      Sprawling 3,500 Sq. Ft. Luxury Villa Nestled on Half an Acre of Prime Land
                    </Badge>
                  </div>
                </div>

                {/* Content - Responsive */}
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <h3
                    className={`text-2xl sm:text-3xl font-display font-bold mb-4 sm:mb-6 transition-colors duration-1000 ${
                      isDayMode ? "text-gray-800" : "text-gray-100"
                    }`}
                  >
                    Architectural Masterpiece
                  </h3>
                  <p
                    className={`text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed transition-colors duration-1000 ${
                      isDayMode ? "text-gray-600" : "text-slate-300"
                    }`}
                  >
                    A symphony of modern design and coastal elegance, Villa 814 stands as our flagship property. Every
                    space tells a story of luxury, comfort, and uncompromising quality. Featured in Architectural Digest
                    and winner of the International Design Excellence Award.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-10">
                    {[
                      {
                        icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
                        text: "3 Master Suites • 5 Luxury Bathrooms",
                      },
                      { icon: <Waves className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Swimming Pool • Premium Amenities" },
                      { icon: <Car className="w-4 h-4 sm:w-5 sm:h-5" />, text: "8-Car Parking • Easy Access" },
                      { icon: <Wifi className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Smart Home • Premium Amenities" },
                      { icon: <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />, text: "Big Lawn with Sitout Area" },
                      {
                        icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
                        text: "24/7 Caretaker • Party Speaker Available",
                      },
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-ocean-500 to-aqua-400 rounded-full flex items-center justify-center text-white">
                          {feature.icon}
                        </div>
                        <span
                          className={`font-medium text-sm sm:text-base transition-colors duration-1000 ${
                            isDayMode ? "text-gray-700" : "text-slate-200"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link href="/villa-814">
                    <Button
                      size="lg"
                      className="w-full text-base sm:text-lg font-semibold bg-gradient-to-r from-ocean-600 to-aqua-500 hover:from-ocean-700 hover:to-aqua-600 transition-all duration-500 transform hover:scale-105 luxury-shadow group py-3 sm:py-4"
                    >
                      Explore Villa 814
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Slideshow Section - Responsive */}
      <section
        id="gallery"
        className={`py-16 sm:py-24 md:py-32 transition-colors duration-1000 ${
          isDayMode
            ? "bg-gradient-to-b from-pearl-50 via-ocean-50/30 to-aqua-50/20"
            : "bg-gradient-to-b from-slate-800/95 via-slate-900 to-slate-800/95"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge
              className={`mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium ${
                isDayMode
                  ? "bg-teal-100 text-teal-800 border-teal-200"
                  : "bg-slate-800/90 text-teal-400 border-gray-700"
              }`}
            >
              <Star className="w-4 h-4 mr-2" />
              Visual Journey
            </Badge>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 sm:mb-8 transition-colors duration-1000 ${
                isDayMode ? "text-gray-800" : "text-gray-100"
              }`}
            >
              Villa 814
              <span className="block text-gradient-ocean">Gallery</span>
            </h2>
            <p
              className={`text-lg sm:text-xl md:text-2xl font-serif max-w-4xl mx-auto transition-colors duration-1000 px-4 ${
                isDayMode ? "text-gray-600" : "text-slate-300"
              }`}
            >
              Explore every exquisite detail of our architectural masterpiece through this curated visual journey
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card
              className={`overflow-hidden transition-all duration-1000 ${
                isDayMode
                  ? "bg-white/90 border-ocean-200/50 luxury-shadow-xl"
                  : "bg-slate-800/90 border-gray-700/50 shadow-glow-lg"
              }`}
            >
              <div className="relative">
                {/* Main Slideshow - Responsive */}
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {galleryImages.map((image, index) => (
                      <div key={index} className="w-full flex-shrink-0 relative">
                        <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                          <Badge className="bg-white/90 text-gray-800 text-sm sm:text-lg px-3 sm:px-4 py-1 sm:py-2 font-semibold">
                            {image.title}
                          </Badge>
                          <Badge className="ml-2 bg-ocean-500/90 text-white text-xs sm:text-sm px-2 sm:px-3 py-1">
                            {image.category}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows - Responsive */}
                  <Button
                    onClick={prevSlide}
                    variant="outline"
                    size="sm"
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm p-2"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={nextSlide}
                    variant="outline"
                    size="sm"
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm p-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>

                  {/* Play/Pause Button - Responsive */}
                  <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    variant="outline"
                    size="sm"
                    className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm p-2"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Thumbnail Navigation - Responsive */}
                <div className="p-4 sm:p-6">
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {galleryImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`flex-shrink-0 relative w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                          currentSlide === index ? "ring-2 ring-ocean-500 scale-105" : "opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image src={image.src || "/placeholder.svg"} alt={image.title} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Progress Indicators - Responsive */}
                <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Luxury Amenities Section - Responsive */}
      <section
        id="amenities"
        className={`py-16 sm:py-24 md:py-32 transition-colors duration-1000 ${
          isDayMode
            ? "bg-gradient-to-b from-aqua-50/30 via-teal-50/20 to-ocean-50/30"
            : "bg-gradient-to-b from-slate-800/95 via-slate-900 to-slate-800/95"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge
              className={`mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium ${
                isDayMode
                  ? "bg-teal-100 text-teal-800 border-teal-200"
                  : "bg-slate-800/90 text-teal-400 border-gray-700"
              }`}
            >
              <Star className="w-4 h-4 mr-2" />
              Guest Memories
            </Badge>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 sm:mb-8 transition-colors duration-1000 ${
                isDayMode ? "text-gray-800" : "text-gray-100"
              }`}
            >
              Creating Beautiful
              <span className="block text-gradient-ocean">Memories Together</span>
            </h2>
            <p
              className={`text-lg sm:text-xl md:text-2xl font-serif max-w-4xl mx-auto transition-colors duration-1000 px-4 ${
                isDayMode ? "text-gray-600" : "text-slate-300"
              }`}
            >
              Villa 814 has been the backdrop for countless beautiful moments - from intimate family reunions to joyful
              celebrations. Our guests often tell us about the peaceful mornings by the pool, the laughter-filled
              evenings on the terrace, and the comfort of being together in such a beautiful setting.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {[
              {
                icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Family Reunions",
                description:
                  "Spacious areas perfect for bringing families together, creating bonds and sharing stories across generations.",
                gradient: "from-pink-500 to-rose-400",
              },
              {
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Celebrations",
                description:
                  "Whether birthdays, anniversaries, or special milestones, our villa provides the perfect setting for joy.",
                gradient: "from-purple-500 to-indigo-400",
              },
              {
                icon: <Coffee className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Peaceful Mornings",
                description:
                  "Start your day with coffee overlooking the ocean, enjoying quiet moments of tranquility and reflection.",
                gradient: "from-amber-500 to-orange-400",
              },
              {
                icon: <Waves className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Seaside Relaxation",
                description:
                  "Unwind by the pool or on the beach, letting the sound of waves wash away your worries and stress.",
                gradient: "from-blue-500 to-cyan-400",
              },
              {
                icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Special Moments",
                description:
                  "From sunset dinners to midnight conversations, every moment becomes special in this beautiful setting.",
                gradient: "from-yellow-500 to-amber-400",
              },
              {
                icon: <Crown className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Comfort & Care",
                description:
                  "Experience genuine hospitality and comfort that makes you feel at home while being pampered.",
                gradient: "from-emerald-500 to-teal-400",
              },
            ].map((memory, index) => (
              <Card
                key={index}
                className={`group text-center transition-all duration-500 hover:scale-105 cursor-pointer ${
                  isDayMode
                    ? "bg-white/80 backdrop-blur-luxury border-white/50 hover:shadow-luxury-xl"
                    : "bg-slate-800/90 backdrop-blur-luxury border-gray-700/50 hover:shadow-glow"
                }`}
              >
                <CardContent className="p-6 sm:p-8">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6 bg-gradient-to-r ${memory.gradient} text-white group-hover:scale-110 transition-transform duration-500`}
                  >
                    {memory.icon}
                  </div>
                  <h3
                    className={`text-lg sm:text-xl font-display font-bold mb-3 sm:mb-4 transition-colors duration-1000 ${
                      isDayMode ? "text-gray-800" : "text-gray-100"
                    }`}
                  >
                    {memory.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-1000 ${
                      isDayMode ? "text-gray-600" : "text-slate-300"
                    }`}
                  >
                    {memory.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Guest Stories - Responsive */}
          <Card
            className={`transition-all duration-1000 ${
              isDayMode
                ? "bg-gradient-to-r from-ocean-50 to-aqua-50 border-ocean-200/50"
                : "bg-gradient-to-r from-slate-800 to-gray-800 border-gray-700/50"
            }`}
          >
            <CardContent className="p-6 sm:p-8 md:p-12 text-center">
              <h3
                className={`text-2xl sm:text-3xl font-display font-bold mb-4 sm:mb-6 transition-colors duration-1000 ${
                  isDayMode ? "text-gray-800" : "text-gray-100"
                }`}
              >
                What Our Guests Remember Most
              </h3>
              <p
                className={`text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto transition-colors duration-1000 ${
                  isDayMode ? "text-gray-600" : "text-slate-300"
                }`}
              >
                "The peaceful mornings with coffee by the pool, the comfortable rooms that felt like home, and the
                beautiful sunsets we watched together as a family. Villa 814 gave us exactly what we needed - a place to
                reconnect and create memories we'll treasure forever."
              </p>
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />, text: "Comfortable & welcoming atmosphere" },
                  {
                    icon: <Waves className="w-5 h-5 sm:w-6 sm:h-6" />,
                    text: "Beautiful ocean views and peaceful setting",
                  },
                  { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, text: "Perfect for bringing people together" },
                ].map((highlight, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <span
                      className={`font-medium text-sm sm:text-base text-center sm:text-left transition-colors duration-1000 ${
                        isDayMode ? "text-gray-700" : "text-slate-200"
                      }`}
                    >
                      {highlight.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Testimonials Section - Responsive */}
      <section
        className={`py-16 sm:py-24 md:py-32 transition-colors duration-1000 ${
          isDayMode
            ? "bg-gradient-to-b from-aqua-50/30 via-teal-50/20 to-ocean-50/30"
            : "bg-gradient-to-b from-slate-800/95 via-slate-900 to-slate-800/95"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge
              className={`mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium ${
                isDayMode
                  ? "bg-teal-100 text-teal-800 border-teal-200"
                  : "bg-slate-800/90 text-teal-400 border-gray-700"
              }`}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Guest Experiences
            </Badge>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 sm:mb-8 transition-colors duration-1000 ${
                isDayMode ? "text-gray-800" : "text-gray-100"
              }`}
            >
              What Our Distinguished
              <span className="block text-gradient-ocean">Guests Are Saying</span>
            </h2>
            <p
              className={`text-lg sm:text-xl md:text-2xl font-serif max-w-4xl mx-auto transition-colors duration-1000 px-4 ${
                isDayMode ? "text-gray-600" : "text-slate-300"
              }`}
            >
              Real experiences from discerning families and high-profile guests who have created unforgettable memories
              at Villa 814. Join an exclusive community of luxury travelers who demand nothing but the finest.
            </p>
          </div>

          <InfiniteMovingCardsDemo />
        </div>
      </section>

      {/* Location & Accessibility Section - Responsive */}
      <section
        className={`py-16 sm:py-24 md:py-32 transition-colors duration-1000 ${
          isDayMode ? "bg-white" : "bg-gradient-to-b from-slate-900 to-slate-800"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge
              className={`mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium ${
                isDayMode
                  ? "bg-ocean-100 text-ocean-800 border-ocean-200"
                  : "bg-slate-800/90 text-ocean-400 border-gray-700"
              }`}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Prime Location
            </Badge>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 sm:mb-8 transition-colors duration-1000 ${
                isDayMode ? "text-gray-800" : "text-gray-100"
              }`}
            >
              Perfectly Positioned in
              <span className="block text-gradient-ocean">Chennai's Golden Coast</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div>
              <h3
                className={`text-2xl sm:text-3xl font-display font-bold mb-6 sm:mb-8 transition-colors duration-1000 ${
                  isDayMode ? "text-gray-800" : "text-gray-100"
                }`}
              >
                Strategic Location & Connectivity
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    icon: <Plane className="w-5 h-5 sm:w-6 sm:h-6" />,
                    text: "31.6 km from Chennai International Airport",
                    time: "Easy airport connectivity",
                  },
                  {
                    icon: <Building className="w-5 h-5 sm:w-6 sm:h-6" />,
                    text: "28.6 km from Chennai city center",
                    time: "Direct highway access",
                  },
                  {
                    icon: <Anchor className="w-5 h-5 sm:w-6 sm:h-6" />,
                    text: "Beachfront location on East Coast Road",
                    time: "Private beach access",
                  },
                  {
                    icon: <Mountain className="w-5 h-5 sm:w-6 sm:h-6" />,
                    text: "Near Mahabalipuram UNESCO World Heritage Site",
                    time: "Cultural excursions available",
                  },
                  {
                    icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />,
                    text: "Walking distance to premium restaurants",
                    time: "Fine dining reservations",
                  },
                ].map((location, index) => (
                  <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-ocean-500 to-aqua-400 rounded-full flex items-center justify-center text-white">
                      {location.icon}
                    </div>
                    <div>
                      <p
                        className={`font-semibold text-base sm:text-lg transition-colors duration-1000 ${
                          isDayMode ? "text-gray-800" : "text-gray-100"
                        }`}
                      >
                        {location.text}
                      </p>
                      <p
                        className={`text-sm transition-colors duration-1000 ${
                          isDayMode ? "text-gray-600" : "text-slate-300"
                        }`}
                      >
                        {location.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card
              className={`overflow-hidden transition-all duration-1000 ${
                isDayMode
                  ? "bg-white border-ocean-200/50 luxury-shadow-xl"
                  : "bg-slate-800/90 border-gray-700/50 shadow-glow"
              }`}
            >
              <CardContent className="p-0">
                <div className="relative h-64 sm:h-80 md:h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0123456789!2d80.2430251!3d12.8466285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b007d49b61d%3A0x11c44f2842e90ab9!2sVilla%20814!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-t-lg"
                  ></iframe>
                </div>
                <div className="p-6 sm:p-8">
                  <h4
                    className={`text-lg sm:text-xl font-display font-bold mb-3 sm:mb-4 transition-colors duration-1000 ${
                      isDayMode ? "text-gray-800" : "text-gray-100"
                    }`}
                  >
                    Villa 814 Location Details
                  </h4>
                  <p
                    className={`text-sm sm:text-base transition-colors duration-1000 ${isDayMode ? "text-gray-600" : "text-slate-300"}`}
                  >
                    Nestled along Chennai's most prestigious coastal stretch, Villa 814 offers unparalleled privacy
                    while maintaining convenient access to the city's finest attractions and business districts.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section - Responsive */}
      <section
        id="experience"
        className={`py-16 sm:py-24 md:py-32 transition-colors duration-1000 ${
          isDayMode ? "bg-gradient-to-b from-pearl-50 to-ocean-50/20" : "bg-gradient-to-b from-slate-900 to-slate-800"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <Badge
              className={`mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 text-sm font-medium ${
                isDayMode
                  ? "bg-ocean-100 text-ocean-800 border-ocean-200"
                  : "bg-slate-800/90 text-ocean-400 border-gray-700"
              }`}
            >
              <Heart className="w-4 h-4 mr-2" />
              Our Story
            </Badge>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 sm:mb-12 transition-colors duration-1000 ${
                isDayMode ? "text-gray-800" : "text-gray-100"
              }`}
            >
              Crafting Memories by the
              <span className="block text-gradient-ocean">Azure Coast</span>
            </h2>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl leading-relaxed">
              <p className={`transition-colors duration-1000 ${isDayMode ? "text-gray-700" : "text-slate-300"}`}>
                Born from a vision to redefine coastal luxury, Sunshine Villas represents the pinnacle of architectural
                excellence and hospitality refinement. Nestled along Chennai's pristine coastline, our sanctuary offers
                an escape where time slows and memories are etched in golden sunsets.
              </p>
              <p className={`transition-colors duration-1000 ${isDayMode ? "text-gray-700" : "text-slate-300"}`}>
                Whether orchestrating an intimate celebration, hosting a corporate retreat, or simply seeking respite
                from the ordinary, our meticulously curated spaces provide the perfect canvas for life's most precious
                moments. Each guest becomes part of our exclusive family, enjoying personalized service that anticipates
                every need and exceeds every expectation.
              </p>
              <p className={`transition-colors duration-1000 ${isDayMode ? "text-gray-700" : "text-slate-300"}`}>
                From hosting international dignitaries to celebrating milestone moments for discerning families, Villa
                814 has become Chennai's most sought-after luxury destination. Our commitment to excellence has earned
                recognition from the world's most prestigious travel publications and awards.
              </p>
              <p
                className={`font-serif text-xl sm:text-2xl italic transition-colors duration-1000 ${
                  isDayMode ? "text-ocean-700" : "text-aqua-400"
                }`}
              >
                "Where every sunrise brings new possibilities, and every sunset seals unforgettable memories in golden
                hues."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Responsive */}
      <section
        id="contact"
        className={`py-16 sm:py-24 md:py-32 transition-colors duration-1000 ${isDayMode ? "bg-white" : "bg-gradient-to-b from-slate-900 to-slate-800"}`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <Badge
              className={`mb-4 sm:mb-6 px-4 sm:px-6 py-2 text-sm font-medium ${
                isDayMode
                  ? "bg-ocean-100 text-ocean-800 border-ocean-200"
                  : "bg-slate-800/90 text-ocean-400 border-gray-700"
              }`}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Connect With Us
            </Badge>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 sm:mb-8 transition-colors duration-1000 ${
                isDayMode ? "text-gray-800" : "text-gray-100"
              }`}
            >
              Begin Your
              <span className="block text-gradient-ocean">Luxury Journey</span>
            </h2>
            <p
              className={`text-lg sm:text-xl md:text-2xl font-serif max-w-3xl mx-auto transition-colors duration-1000 px-4 ${
                isDayMode ? "text-gray-600" : "text-slate-300"
              }`}
            >
              Let our dedicated team craft an extraordinary experience tailored exclusively for you. Every detail
              meticulously planned, every moment perfectly orchestrated.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[
                {
                  icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "24/7 Concierge",
                  info: "+91 76959 66679",
                  subtitle: "Immediate assistance available",
                  gradient: "from-ocean-500 to-aqua-400",
                },
                {
                  icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Luxury Reservations",
                  info: "beachvilla814@gmail.com",
                  subtitle: "Personalized booking service",
                  gradient: "from-teal-500 to-aqua-400",
                },
                {
                  icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
                  title: "Exclusive Location",
                  info: "Chennai Coastal District",
                  subtitle: "Private entrance & valet",
                  gradient: "from-gold-500 to-gold-400",
                },
              ].map((contact, index) => (
                <Card
                  key={index}
                  className={`group text-center transition-all duration-500 hover:scale-105 cursor-pointer ${
                    isDayMode
                      ? "bg-gradient-to-br from-pearl-50 to-ocean-50/30 border-ocean-200/50 hover:shadow-luxury-xl"
                      : "bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600/50 hover:shadow-glow"
                  }`}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6 bg-gradient-to-r ${contact.gradient} text-white group-hover:scale-110 transition-transform duration-500`}
                    >
                      {contact.icon}
                    </div>
                    <h3
                      className={`text-lg sm:text-xl font-display font-bold mb-2 transition-colors duration-1000 ${
                        isDayMode ? "text-gray-800" : "text-gray-100"
                      }`}
                    >
                      {contact.title}
                    </h3>
                    <p
                      className={`font-medium mb-2 text-sm sm:text-base transition-colors duration-1000 ${
                        isDayMode ? "text-gray-700" : "text-slate-200"
                      }`}
                    >
                      {contact.info}
                    </p>
                    <p
                      className={`text-xs sm:text-sm transition-colors duration-1000 ${
                        isDayMode ? "text-gray-600" : "text-slate-300"
                      }`}
                    >
                      {contact.subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Responsive */}
      <footer
        className={`py-12 sm:py-16 transition-colors duration-1000 ${
          isDayMode
            ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
            : "bg-gradient-to-b from-gray-950 to-gray-900 text-gray-300"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full gradient-ocean flex items-center justify-center">
              {/* No icon needed */}
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-gradient-ocean">Sunshine Villas</h3>
              <p className="text-xs sm:text-sm text-gray-400">Coastal Luxury Redefined</p>
            </div>
          </div>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-400">
            Creating extraordinary memories along Chennai's pristine coastline since 2018
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400 mb-4 sm:mb-6">
            <span>📞 +91 76959 66679</span>
            <span>📧 beachvilla814@gmail.com</span>
            <span>📍 Chennai Coastal District</span>
          </div>
          <div className="border-t border-gray-700 pt-4 sm:pt-6">
            <p className="text-xs sm:text-sm text-gray-500">© 2024 Sunshine Villas. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Enquiry Popup - Responsive */}
      {isEnquiryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <Card
            className={`w-full max-w-sm sm:max-w-md transition-all duration-500 transform ${
              isDayMode
                ? "bg-white/95 border-ocean-200/50 luxury-shadow-xl"
                : "bg-slate-800/95 border-gray-700/50 shadow-glow"
            }`}
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={`text-lg sm:text-xl font-display font-bold transition-colors duration-1000 ${
                    isDayMode ? "text-gray-800" : "text-gray-100"
                  }`}
                >
                  Connect Now
                </h3>
                <Button
                  onClick={() => setIsEnquiryOpen(false)}
                  variant="ghost"
                  size="sm"
                  className={`transition-colors duration-300 ${
                    isDayMode ? "text-gray-600 hover:text-gray-800" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <p
                className={`text-sm mb-4 transition-colors duration-1000 ${
                  isDayMode ? "text-gray-600" : "text-slate-300"
                }`}
              >
                Get in touch with us for Villa 814 bookings and inquiries
              </p>
              <div className="space-y-3">
                <Button
                  onClick={() => {
                    window.open(
                      "https://wa.link/z0kwos?text=Hi! I'm interested in Villa 814. Can you provide details about availability and pricing?",
                      "_blank",
                    )
                    setIsEnquiryOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Connect on WhatsApp
                </Button>
                <Button
                  onClick={() => {
                    window.open("tel:+917695966679", "_blank")
                    setIsEnquiryOpen(false)
                  }}
                  variant="outline"
                  className={`w-full transition-all duration-300 ${
                    isDayMode
                      ? "border-ocean-200 hover:bg-ocean-50 text-ocean-700"
                      : "border-gray-600 hover:bg-gray-800 text-slate-200"
                  }`}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Floating Connect Button - Responsive */}
      <Button
        onClick={() => setIsEnquiryOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-12 h-12 sm:w-16 sm:h-16 rounded-full transition-all duration-500 transform hover:scale-110 ${
          isDayMode
            ? "bg-gradient-to-r from-ocean-600 to-aqua-500 hover:from-ocean-700 hover:to-aqua-600 luxury-shadow-xl"
            : "bg-gradient-to-r from-ocean-500 to-aqua-400 hover:from-ocean-600 hover:to-aqua-500 shadow-glow"
        }`}
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
      </Button>
    </div>
  )
}
