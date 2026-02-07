"use client"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
// Select components removed - using text inputs instead
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Users,
  Bed,
  Car,
  Waves,
  MapPin,
  Star,
  MessageCircle,
  Home,
  Utensils,
  Music,
  Shield,
  Zap,
  Coffee,
  Crown,
  Sparkles,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
  Sun,
  Moon,
  Award,
} from "lucide-react"

// The form data is now handled entirely on the client and sent via the booking API

export default function Villa814Page() {
  const [selectedDate, setSelectedDate] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("")
  const [bookingType, setBookingType] = useState("")
  const [groupType, setGroupType] = useState("")
  const [message, setMessage] = useState("")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isDayMode, setIsDayMode] = useState(false)
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  const handleBookingSubmit = () => {
    // Send form data directly via email - no database storage needed
    const emailSubject = "Villa 814 Luxury Reservation Request"
    const emailBody = `Dear Sunshine Villas Team,

I would like to make a reservation for Villa 814. Please find the details below:

VILLA 814 - LUXURY BOOKING INQUIRY
===================================

Check-in Date: ${selectedDate || "Not specified"}
Check-out Date: ${checkOut || "Not specified"}
Number of Guests: ${guests || "Not specified"}
Occasion Type: ${bookingType || "Not specified"}
Group Composition: ${groupType || "Not specified"}
Special Requests: ${message || "None"}

Request Date: ${new Date().toLocaleString()}

Please confirm availability and provide pricing details.

Looking forward to your response.

Best regards,
Villa 814 Guest`

    const mailtoLink = `mailto:beachvilla814@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
  }

  const toggleMode = () => {
    setIsDayMode(!isDayMode)
  }

  const galleryImages = [
    { src: "/images/villa-day.jpg", title: "Villa Exterior Day", category: "exterior" },
    { src: "/images/villa-night-exterior.jpg", title: "Villa Night Architecture", category: "exterior" },
    { src: "/images/villa-exterior-angular.jpg", title: "Modern Angular Design", category: "exterior" },
    { src: "/images/villa-poolside-pavilion.jpg", title: "Poolside Pavilion", category: "exterior" },
    { src: "/images/villa-poolside-view.jpg", title: "Pool & Landscape", category: "exterior" },
    { src: "/images/villa-rooftop-terrace.jpg", title: "Rooftop Terrace", category: "exterior" },
    { src: "/images/villa-living-dining.jpg", title: "Living & Dining Area", category: "interior" },
    {
      src: "/images/villa-master-bedroom-new.jpg",
      title: "Master Bedroom",
      category: "interior",
    },
    {
      src: "/images/villa-bedroom-simple.jpg",
      title: "Modern Bedroom with Garden View",
      category: "interior",
    },
    { src: "/images/villa-bathroom-luxury-new.jpg", title: "Luxury Bathroom", category: "interior" },
    { src: "/images/bathroom-luxury.jpg", title: "Spa Bathroom", category: "interior" },
    { src: "/images/interior-staircase.jpg", title: "Grand Staircase", category: "interior" },
  ]

  const amenities = [
    { icon: <Waves className="w-6 h-6" />, text: "Private villa with infinity swimming pool", premium: true },
    { icon: <Bed className="w-6 h-6" />, text: "3 Master AC Bedrooms with 5 luxury bathrooms", premium: true },
    {
      icon: <Home className="w-6 h-6" />,
      text: 'Premium furnishing: Sofa, 75" TV, Smart Fridge, High-speed WiFi',
      premium: false,
    },
    { icon: <Music className="w-6 h-6" />, text: "Professional party speaker system", premium: false },
    { icon: <MapPin className="w-6 h-6" />, text: "Two private balconies with ocean views", premium: true },
    { icon: <Star className="w-6 h-6" />, text: "Exclusive private terrace", premium: true },
    { icon: <Utensils className="w-6 h-6" />, text: "Gourmet kitchen with living room AC", premium: false },
    { icon: <Coffee className="w-6 h-6" />, text: "Expansive lawn with luxury sitout area", premium: false },
    { icon: <Car className="w-6 h-6" />, text: "8-car parking with valet service", premium: true },
    { icon: <Users className="w-6 h-6" />, text: "24/7 dedicated caretaker service", premium: true },
    { icon: <Home className="w-6 h-6" />, text: "Extra beds and premium seating arrangements", premium: false },
    { icon: <Waves className="w-6 h-6" />, text: "Poolside luxury sitout area", premium: true },
    { icon: <Zap className="w-6 h-6" />, text: "Uninterrupted power backup", premium: false },
    { icon: <Shield className="w-6 h-6" />, text: "24-hour premium drinking water", premium: false },
    {
      icon: <Music className="w-6 h-6" />,
      text: "Perfect for celebrations: Parties, Bachelor events, Anniversaries, Film shoots",
      premium: true,
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div
      className={`min-h-screen custom-scrollbar transition-colors duration-1000 ${
        isDayMode ? "bg-gradient-to-b from-pearl-50 to-white" : "bg-gradient-to-b from-slate-900 to-slate-800"
      }`}
    >
      {/* Luxury Navigation - Mobile Responsive */}
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
            {/* Back to Home - Mobile Responsive */}
            <Link
              href="/"
              className={`group flex items-center space-x-2 sm:space-x-3 transition-all duration-300 ${
                isDayMode ? "text-gray-700 hover:text-ocean-600" : "text-slate-200 hover:text-aqua-400"
              }`}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-ocean-500 to-aqua-400 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="font-medium text-sm sm:text-base hidden sm:inline">Back to Home</span>
              <span className="font-medium text-sm sm:hidden">Back</span>
            </Link>

            {/* Villa 814 Title - Mobile Responsive */}
            <div className="text-center flex-1 mx-4">
              <h1 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-gradient-ocean">Villa 814</h1>
              <p className={`text-xs sm:text-sm hidden sm:block ${isDayMode ? "text-gray-600" : "text-gray-400"}`}>
                Luxury Villa
              </p>
            </div>

            {/* Day/Night Toggle - Mobile Responsive */}
            <div className="flex items-center">
              <Button
                onClick={toggleMode}
                variant="outline"
                size="sm"
                className={`relative overflow-hidden transition-all duration-500 px-2 sm:px-3 py-1 sm:py-2 ${
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
                  <span className="font-medium text-xs sm:text-sm hidden sm:inline">{isDayMode ? "Night" : "Day"}</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 transition-opacity duration-1000">
            <Image
              src={isDayMode ? "/images/villa-day.jpg" : "/images/villa-night.jpg"}
              alt="Villa 814 Aerial View"
              fill
              className="object-cover animate-pulse-slow"
              priority
              style={{
                animation: "zoomIn 20s ease-in-out infinite alternate",
              }}
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
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gold-400 rounded-full animate-float opacity-70"></div>
          <div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-aqua-400 rounded-full animate-float opacity-60"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-ocean-400 rounded-full animate-float opacity-50"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="animate-slide-up">
            <Badge
              className={`mb-6 sm:mb-8 px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-lg font-medium bg-gradient-to-r from-gold-500/20 to-gold-400/20 border border-gold-400/30 backdrop-blur-luxury transition-colors duration-1000 ${isDayMode ? "text-gray-800" : "text-white"}`}
            >
              <Crown className="w-4 h-4 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              <span className="hidden sm:inline">Flagship Luxury Villa</span>
              <span className="sm:hidden">Luxury Villa</span>
            </Badge>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-none">
              <span
                className={`block transition-colors duration-1000 ${
                  isDayMode ? "text-gray-800 text-shadow-luxury" : "text-gray-100"
                }`}
              >
                Villa
              </span>
              <span className="block text-gradient-gold animate-pulse-slow">814</span>
            </h1>
            <p
              className="text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-white"
              style={{
                textShadow:
                  "2px 2px 4px rgba(0, 0, 0, 0.8), -1px -1px 2px rgba(0, 0, 0, 0.8), 1px -1px 2px rgba(0, 0, 0, 0.8), -1px 1px 2px rgba(0, 0, 0, 0.8)",
              }}
            >
              Experience the pinnacle of luxury living in our masterfully designed villa. Every detail crafted to
              perfection, every moment designed to inspire awe and create lasting memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="group px-12 py-4 text-xl font-semibold bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-700 hover:to-gold-600 transition-all duration-500 transform hover:scale-105 luxury-shadow-xl"
                onClick={() => setIsGalleryOpen(true)}
              >
                <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin transition-transform" />
                Explore Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Architectural Excellence Section */}
      <section
        className={`py-32 transition-colors duration-1000 ${isDayMode ? "bg-white" : "bg-gradient-to-b from-slate-900 to-slate-800"}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <Badge
                className={`mb-6 px-6 py-3 text-sm font-medium ${isDayMode ? "bg-ocean-100 text-ocean-800 border-ocean-200" : "bg-slate-800/90 text-aqua-400 border-gray-700"}`}
              >
                <Award className="w-4 h-4 mr-2" />
                Architectural Excellence
              </Badge>
              <h2
                className={`text-5xl md:text-6xl font-display font-bold mb-8 transition-colors duration-1000 ${isDayMode ? "text-gray-800" : "text-gray-100"}`}
              >
                Villa 814
                <span className="block text-gradient-ocean">Luxury Redefined</span>
              </h2>
              <p
                className={`text-xl md:text-2xl font-serif max-w-4xl mx-auto transition-colors duration-1000 ${isDayMode ? "text-gray-600" : "text-slate-300"}`}
              >
                A masterpiece of contemporary design where every element harmonizes to create an unparalleled luxury
                experience
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h3
                  className={`text-3xl font-display font-bold mb-8 transition-colors duration-1000 ${isDayMode ? "text-gray-800" : "text-gray-100"}`}
                >
                  Premium Amenities & Features
                </h3>
                <div className="space-y-6">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 ${
                          amenity.premium
                            ? "bg-gradient-to-r from-gold-500 to-gold-400"
                            : "bg-gradient-to-r from-ocean-500 to-aqua-400"
                        }`}
                      >
                        {amenity.icon}
                      </div>
                      <div className="flex-1">
                        <span
                          className={`leading-relaxed text-lg transition-colors duration-1000 ${isDayMode ? "text-gray-700" : "text-slate-200"}`}
                        >
                          {amenity.text}
                        </span>
                        {amenity.premium && (
                          <Badge className="ml-3 bg-gold-100 text-gold-800 border-gold-200 text-xs">Premium</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="overflow-hidden luxury-shadow-xl hover:scale-105 transition-transform duration-500">
                  <div className="relative h-80">
                    <Image
                      src="/images/villa-living-room-main.jpg"
                      alt="Villa 814 Living Room"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-white/90 text-gray-800">Living Room</Badge>
                    </div>
                  </div>
                </Card>
                <div className="grid grid-cols-2 gap-6">
                  <Card className="overflow-hidden luxury-shadow hover:scale-105 transition-transform duration-500">
                    <div className="relative h-40">
                      <Image
                        src="https://hebbkx1anhila5yf.blob.vercel-storage.com/WhatsApp%20Image%202025-07-04%20at%208.52.02%20PM-TtqvKM36Ckx5NFaooPjpGekFSNX1d5.jpeg"
                        alt="Master Bedroom"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-white/90 text-gray-800 text-xs">Master Suite</Badge>
                      </div>
                    </div>
                  </Card>
                  <Card className="overflow-hidden luxury-shadow hover:scale-105 transition-transform duration-500">
                    <div className="relative h-40">
                      <Image src="/images/villa-spa-bathroom.jpg" alt="Spa Bathroom" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <Badge className="bg-white/90 text-gray-800 text-xs">Luxury Spa Bath</Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Bali Themed Bathroom Experience Section */}
      <section
        className={`py-32 transition-colors duration-1000 ${isDayMode ? "bg-gradient-to-b from-pearl-50 to-ocean-50/20" : "bg-gradient-to-b from-slate-800/95 via-slate-900 to-slate-800/95"}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <Badge
                className={`mb-6 px-6 py-3 text-sm font-medium ${isDayMode ? "bg-teal-100 text-teal-800 border-teal-200" : "bg-slate-800/90 text-teal-400 border-gray-700"}`}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Bali Experience
              </Badge>
              <h2
                className={`text-5xl md:text-6xl font-display font-bold mb-8 transition-colors duration-1000 ${isDayMode ? "text-gray-800" : "text-gray-100"}`}
              >
                Bali Themed
                <span className="block text-gradient-ocean">Shower Experience</span>
              </h2>
              <p
                className={`text-xl md:text-2xl font-serif max-w-4xl mx-auto transition-colors duration-1000 ${isDayMode ? "text-gray-600" : "text-slate-300"}`}
              >
                Immerse yourself in our signature Bali-inspired bathroom featuring tropical aesthetics and luxury
                amenities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Card
                  className={`overflow-hidden transition-all duration-1000 ${isDayMode ? "bg-white border-ocean-200/50 luxury-shadow-xl" : "bg-slate-800/90 border-gray-700/50 shadow-glow"}`}
                >
                  <div className="relative h-96 md:h-[500px]">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-lg">
                      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VIDEO-2025-07-12-21-00-27-gobymK3sPIiUxDM7Ieb6b3cuelWqwW.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-gradient-to-r from-teal-500/90 to-aqua-500/90 text-white font-semibold">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Bali Themed Bathroom
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <h3
                  className={`text-3xl font-display font-bold mb-8 transition-colors duration-1000 ${isDayMode ? "text-gray-800" : "text-gray-100"}`}
                >
                  Tropical Luxury Experience
                </h3>
                <div className="space-y-6">
                  <p
                    className={`text-lg leading-relaxed transition-colors duration-1000 ${isDayMode ? "text-gray-600" : "text-slate-300"}`}
                  >
                    Step into our Bali-themed bathroom and transport yourself to a tropical paradise. This unique space
                    combines traditional Balinese design elements with modern luxury amenities.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Natural stone and bamboo accents",
                      "Rain shower with tropical ambiance",
                      "Premium spa-grade amenities",
                      "Ambient lighting for relaxation",
                      "Tropical plant arrangements",
                      "Luxury towels and bathrobes",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-aqua-400 rounded-full"></div>
                        <span
                          className={`text-base transition-colors duration-1000 ${
                            isDayMode ? "text-gray-600" : "text-slate-300"
                          }`}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Card
                    className={`p-6 transition-all duration-1000 ${isDayMode ? "bg-gradient-to-r from-teal-50 to-aqua-50 border-teal-200/50" : "bg-gradient-to-r from-slate-800 to-gray-800 border-gray-700/50"}`}
                  >
                    <p
                      className={`text-lg font-serif italic transition-colors duration-1000 ${isDayMode ? "text-teal-700" : "text-teal-300"}`}
                    >
                      "Experience the serenity of Bali without leaving Chennai. Our themed bathroom offers a perfect
                      blend of tropical aesthetics and modern luxury."
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Interactive */}
      <section
        className={`py-32 transition-colors duration-1000 ${isDayMode ? "bg-gradient-to-b from-pearl-50 to-ocean-50/20" : "bg-gradient-to-b from-slate-800/95 via-slate-900 to-slate-800/95"}`}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge
              className={`mb-6 px-6 py-3 text-sm font-medium ${isDayMode ? "bg-teal-100 text-teal-800 border-teal-200" : "bg-slate-800/90 text-teal-400 border-gray-700"}`}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Visual Journey
            </Badge>
            <h2
              className={`text-5xl md:text-6xl font-display font-bold mb-8 transition-colors duration-1000 ${isDayMode ? "text-gray-800" : "text-gray-100"}`}
            >
              Villa 814
              <span className="block text-gradient-ocean">Gallery</span>
            </h2>
            <p className={`text-xl transition-colors duration-1000 ${isDayMode ? "text-gray-600" : "text-slate-300"}`}>
              Explore every exquisite detail of our architectural masterpiece
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <Card
                key={index}
                className="group overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] relative"
                onClick={() => {
                  setCurrentImageIndex(index)
                  setIsGalleryOpen(true)
                }}
              >
                <div className="relative h-64">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/90 text-gray-800 text-xs">{image.title}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`text-xs ${
                        image.category === "exterior"
                          ? "bg-ocean-500/90 text-white border-ocean-300"
                          : "bg-teal-500/90 text-white border-teal-300"
                      }`}
                    >
                      {image.category}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Gallery Modal */}
          {isGalleryOpen && (
            <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
              <div className="relative max-w-6xl w-full">
                <Button
                  onClick={() => setIsGalleryOpen(false)}
                  variant="outline"
                  size="sm"
                  className="absolute top-4 right-4 z-10 bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <X className="w-4 h-4" />
                </Button>
                <div className="relative h-96 md:h-[600px]">
                  <Image
                    src={galleryImages[currentImageIndex].src || "/placeholder.svg"}
                    alt={galleryImages[currentImageIndex].title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex items-center justify-between mt-6">
                  <Button
                    onClick={prevImage}
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <div className="text-center">
                    <h3 className="text-xl font-display font-bold text-white mb-2">
                      {galleryImages[currentImageIndex].title}
                    </h3>
                    <p className="text-gray-300">
                      {currentImageIndex + 1} of {galleryImages.length}
                    </p>
                  </div>
                  <Button
                    onClick={nextImage}
                    variant="outline"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Location Section - Google Maps */}
      <section
        className={`py-32 transition-colors duration-1000 ${isDayMode ? "bg-white" : "bg-gradient-to-b from-slate-900 to-slate-800"}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge
                className={`mb-6 px-6 py-3 text-sm font-medium ${isDayMode ? "bg-ocean-100 text-ocean-800 border-ocean-200" : "bg-slate-800/90 text-ocean-400 border-gray-700"}`}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Prime Location
              </Badge>
              <h2
                className={`text-5xl md:text-6xl font-display font-bold mb-8 transition-colors duration-1000 ${isDayMode ? "text-gray-800" : "text-gray-100"}`}
              >
                Villa 814
                <span className="block text-gradient-ocean">Location</span>
              </h2>
              <p
                className={`text-xl transition-colors duration-1000 ${isDayMode ? "text-gray-600" : "text-slate-300"}`}
              >
                Perfectly positioned in Chennai's prestigious coastal district
              </p>
            </div>

            <Card
              className={`overflow-hidden transition-all duration-1000 ${isDayMode ? "bg-white border-ocean-200/50 luxury-shadow-xl" : "bg-slate-800/90 border-gray-700/50 shadow-glow"}`}
            >
              <CardContent className="p-0">
                <div className="relative h-96 md:h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0123456789!2d80.2430251!3d12.8466285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b007d49b61d%3A0x11c44f2842e90ab9!2sVilla%20814!5ef0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b007d49b61d%3A0x11c44f2842e90ab9!2sVilla%20814\`\`\`
sVilla%20814!5ef0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b007d49b61d%3A0x11c44f2842e90ab9!2sVilla%20814!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-r from-ocean-500 to-aqua-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <h3
                        className={`text-lg font-display font-bold mb-2 transition-colors duration-1000 ${isDayMode ? "text-gray-800" : "text-gray-100"}`}
                      >
                        Address
                      </h3>
                      <p
                        className={`transition-colors duration-1000 ${isDayMode ? "text-gray-600" : "text-slate-300"}`}
                      >
                        Villa 814, Chennai Coastal District, Tamil Nadu
                      </p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-aqua-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Car className="w-8 h-8 text-white" />
                      </div>
                      <h3
                        className={`text-lg font-display font-bold mb-2 transition-colors duration-1000 ${isDayMode ? "text-gray-800" : "text-gray-100"}`}
                      >
                        Accessibility
                      </h3>
                      <p
                        className={`transition-colors duration-1000 ${isDayMode ? "text-gray-600" : "text-slate-300"}`}
                      >
                        Easy access via major highways, 8-car parking available
                      </p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Waves className="w-8 h-8 text-white" />
                      </div>
                      <h3
                        className={`text-lg font-display font-bold mb-2 transition-colors duration-1000 ${isDayMode ? "text-gray-800" : "text-gray-100"}`}
                      >
                        Coastal Views
                      </h3>
                      <p
                        className={`transition-colors duration-1000 ${isDayMode ? "text-gray-600" : "text-slate-300"}`}
                      >
                        Minutes from pristine beaches and scenic coastal attractions
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section - Luxury */}
      <section
        className={`py-32 transition-colors duration-1000 ${isDayMode ? "bg-gradient-to-b from-ocean-50/30 to-aqua-50/20" : "bg-gradient-to-b from-slate-900 to-slate-800"}`}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge
                className={`mb-6 px-6 py-3 text-sm font-medium ${isDayMode ? "bg-gold-100 text-gold-800 border-gold-200" : "bg-slate-800/90 text-gold-400 border-gray-700"}`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Luxury Reservations
              </Badge>
              <h2
                className={`text-5xl md:text-6xl font-display font-bold mb-8 transition-colors duration-1000 ${isDayMode ? "text-gray-800" : "text-gray-100"}`}
              >
                Reserve Your
                <span className="block text-gradient-gold">Extraordinary Experience</span>
              </h2>
              <p
                className={`text-xl transition-colors duration-1000 ${isDayMode ? "text-gray-600" : "text-slate-300"}`}
              >
                Let us craft a bespoke luxury experience tailored exclusively for your celebration
              </p>
            </div>

            <Card
              className={`luxury-shadow-xl backdrop-blur-luxury transition-all duration-1000 ${isDayMode ? "bg-white/90 border-white/50" : "bg-slate-800/90 border-gray-700/50"}`}
            >
              <CardHeader className="text-center pb-8">
                <CardTitle
                  className={`text-3xl font-display font-bold transition-colors duration-1000 ${isDayMode ? "text-gray-800" : "text-gray-100"}`}
                >
                  Villa 814 Reservation
                </CardTitle>
                <p className={`mt-2 transition-colors duration-1000 ${isDayMode ? "text-gray-600" : "text-slate-300"}`}>
                  Complete the form below for personalized service
                </p>
              </CardHeader>
              <CardContent className="space-y-8 p-8 relative">
                <div
                  className="absolute inset-0 rounded-b-lg bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url(/images/villa-interior-pool-view.jpg)",
                    filter: "blur(3px)",
                  }}
                ></div>
                <div className="absolute inset-0 rounded-b-lg bg-black/50 backdrop-blur-sm"></div>
                <div className="relative z-10 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label
                        htmlFor="checkin"
                        className={`text-base font-semibold transition-colors duration-1000 text-white`}
                      >
                        Check-in Date
                      </Label>
                      <Input
                        id="checkin"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="h-12 border-gray-300 focus:border-ocean-500 focus:ring-ocean-500 bg-white/90"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="checkout"
                        className={`text-base font-semibold transition-colors duration-1000 text-white`}
                      >
                        Check-out Date
                      </Label>
                      <Input
                        id="checkout"
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="h-12 border-gray-300 focus:border-ocean-500 focus:ring-ocean-500 bg-white/90"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <Label
                        htmlFor="guests"
                        className={`text-base font-semibold transition-colors duration-1000 text-white`}
                      >
                        Number of Guests
                      </Label>
                      <Input
                        id="guests"
                        type="text"
                        placeholder="e.g., 5 guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="h-12 border-gray-300 focus:border-ocean-500 focus:ring-ocean-500 bg-white/90"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="booking-type"
                        className={`text-base font-semibold transition-colors duration-1000 text-white`}
                      >
                        Occasion Type
                      </Label>
                      <Input
                        id="booking-type"
                        type="text"
                        placeholder="e.g., Birthday, Wedding, Family Retreat, Corporate Event"
                        value={bookingType}
                        onChange={(e) => setBookingType(e.target.value)}
                        className="h-12 border-gray-300 focus:border-ocean-500 focus:ring-ocean-500 bg-white/90"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="group-type"
                      className={`text-base font-semibold transition-colors duration-1000 text-white`}
                    >
                      Group Composition
                    </Label>
                    <Input
                      id="group-type"
                      type="text"
                      placeholder="e.g., Family with Children, Bachelor Group, Couples, Corporate Team"
                      value={groupType}
                      onChange={(e) => setGroupType(e.target.value)}
                      className="h-12 border-gray-300 focus:border-ocean-500 focus:ring-ocean-500 bg-white/90"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className={`text-base font-semibold transition-colors duration-1000 text-white`}
                    >
                      Special Requests & Preferences
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your vision for this special occasion. Any specific requirements, dietary preferences, or special arrangements you'd like us to prepare..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="min-h-32 border-gray-300 focus:border-ocean-500 focus:ring-ocean-500 bg-white/90"
                      rows={6}
                    />
                  </div>

                  <Button
                    onClick={handleBookingSubmit}
                    size="lg"
                    className="w-full text-base sm:text-lg md:text-xl font-semibold py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 transition-all duration-500 transform hover:scale-105 luxury-shadow-xl group"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:animate-pulse"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="hidden sm:inline">Reserve Villa 814 via Email</span>
                    <span className="sm:hidden">Reserve via Email</span>
                    <Crown className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:animate-bounce" />
                  </Button>
                  <p className={`text-center text-xs sm:text-sm transition-colors duration-1000 text-white/80`}>
                    Your luxury reservation request will be sent directly to our concierge team via email for
                    immediate attention and personalized service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-16 transition-colors duration-1000 ${isDayMode ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white" : "bg-gradient-to-b from-gray-950 to-gray-900 text-gray-300"}`}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-full gradient-ocean flex items-center justify-center">
              {/* Remove Crown icon */}
            </div>
            <div>
              <h3 className="text-3xl font-display font-bold text-gradient-ocean">Sunshine Villas</h3>
              <p className="text-sm text-gray-400">Villa 814</p>
            </div>
          </div>
          <p className="text-lg mb-6 text-gray-400">Where architectural poetry meets coastal luxury in Chennai</p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400 mb-6">
            <span>📞 +91 76959 66679</span>
            <span>📧 beachvilla814@gmail.com</span>
            <span>📍 Chennai Coastal District</span>
          </div>
          <div className="mb-6">
            <Button
              onClick={() => window.open("https://www.instagram.com/villa_814?igsh=MWVwMnNocWl1eXVidw==", "_blank")}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transition-all duration-300 px-6 py-3 rounded-full"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @villa_814
            </Button>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-sm text-gray-500">
              © 2024 Sunshine Villas. All rights reserved. | Crafted with passion for luxury hospitality.
            </p>
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
                  <MessageCircle className="w-4 h-4 mr-2" />
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
                  <MessageCircle className="w-4 h-4 mr-2" />
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
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
      </Button>
    </div>
  )
}
