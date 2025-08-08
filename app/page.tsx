'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Bone, Baby, Brain, Phone, Mail, MapPin, Eye, Target, ChevronLeft, ChevronRight, Flame, Users } from 'lucide-react'
import { BurnsCentreSection } from "@/components/burns-centre-section"
import { AdoptionSection } from "@/components/adoption-section"
import { AppointmentForm } from "@/components/appointment-form"

export default function GKFHospital() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const hospitalImages = [
    {
      src: "/modern-hospital-exterior.png",
      alt: "Grace Kennett Foundation Hospital Building",
      title: "Welcome to Grace Kennett Foundation",
      subtitle: "Healing Lives, Transforming Communities"
    },
    {
      src: "/hospital-interior-lobby.png", 
      alt: "Hospital Reception and Lobby Area",
      title: "Compassionate Healthcare",
      subtitle: "Serving the Community with Love"
    },
    {
      src: "/hospital-operation-theater.png",
      alt: "Advanced Operation Theater",
      title: "Specialized Burns Treatment", 
      subtitle: "Expert Care for Critical Cases"
    },
    {
      src: "/hospital-patient-room.png",
      alt: "Comfortable Patient Room",
      title: "Child Welfare & Adoption",
      subtitle: "Creating Families, Changing Lives"
    },
    {
      src: "/hospital-emergency-department.png",
      alt: "Emergency Department",
      title: "Community Outreach",
      subtitle: "Volunteering & Social Service"
    }
  ]

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hospitalImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [hospitalImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % hospitalImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + hospitalImages.length) % hospitalImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-5 text-center sticky top-0 z-50">
        <div className="flex items-center justify-center gap-4 mb-2">
          <Image
            src="/grace-kennett-foundation-logo.png"
            alt="Grace Kennett Foundation Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Grace Kennett Foundation</h1>
            <p className="text-blue-100 mt-1">Healing Lives, Transforming Communities</p>
          </div>
          {/* QR Code added here */}
          <div className="ml-4">
            <Image
              src="/gkf-qr-code.png"
              alt="QR Code for Grace Kennett Foundation"
              width={60}
              height={60}
              className="rounded"
            />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-950 sticky top-[88px] z-40">
        <ul className="flex justify-center flex-wrap">
          <li>
            <Link href="#home" className="block px-4 py-4 text-white hover:bg-blue-700 transition-colors rounded">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="block px-4 py-4 text-white hover:bg-blue-700 transition-colors rounded">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#hospital" className="block px-4 py-4 text-white hover:bg-blue-700 transition-colors rounded">
              Hospital
            </Link>
          </li>
          <li>
            <Link href="#burns-centre" className="block px-4 py-4 text-white hover:bg-blue-700 transition-colors rounded">
              Burns Centre
            </Link>
          </li>
          <li>
            <Link href="#adoption" className="block px-4 py-4 text-white hover:bg-blue-700 transition-colors rounded">
              Adoption
            </Link>
          </li>
          <li>
            <Link href="#volunteering" className="block px-4 py-4 text-white hover:bg-blue-700 transition-colors rounded">
              Volunteering
            </Link>
          </li>
          <li>
            <Link href="#save-a-child" className="block px-4 py-4 text-white hover:bg-blue-700 transition-colors rounded">
              Save A Child
            </Link>
          </li>
          <li>
            <Link href="#contact" className="block px-4 py-4 text-white hover:bg-blue-700 transition-colors rounded">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Carousel Section */}
      <section id="home" className="relative h-[500px] overflow-hidden">
        {/* Image Slides */}
        <div className="relative h-full">
          {hospitalImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center z-10">
          <div className="px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg transition-all duration-500">
              {hospitalImages[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl mb-6 drop-shadow-lg transition-all duration-500">
              {hospitalImages[currentSlide].subtitle}
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="#appointment">Book Appointment</Link>
            </Button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {hospitalImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 z-20 bg-black/30 text-white px-3 py-1 rounded-full text-sm">
          {currentSlide + 1} / {hospitalImages.length}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">About Grace Kennett Foundation</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Grace Kennett Foundation is a charitable organization dedicated to providing comprehensive healthcare services, 
            specialized burns treatment, child welfare, and community development programs. We are committed to healing lives 
            and transforming communities through compassionate care and social service.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-600">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-blue-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 text-lg leading-relaxed">
                  To be the leading healthcare provider in South India, recognized for our commitment to excellence, 
                  innovation, and compassionate care. We envision a future where every patient receives world-class 
                  medical treatment with dignity and respect.
                </p>
              </CardContent>
            </Card>

            {/* Mission Card */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-600">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-700">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 text-lg leading-relaxed">
                  To provide comprehensive, accessible, and affordable healthcare services through advanced medical 
                  technology, skilled professionals, and patient-centered care. We are committed to improving the 
                  health and well-being of our community.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Compassion</h4>
                <p className="text-sm text-gray-600">Caring for every patient with empathy and kindness</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Excellence</h4>
                <p className="text-sm text-gray-600">Striving for the highest standards in healthcare</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Integrity</h4>
                <p className="text-sm text-gray-600">Maintaining honesty and transparency in all we do</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">Embracing cutting-edge medical technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BurnsCentreSection />
      <AdoptionSection />

      {/* Services Section */}
      <section id="hospital" className="py-12 md:py-16 px-4 text-center bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">Hospital Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-blue-600">General Medicine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Comprehensive medical care for all ages</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Flame className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <CardTitle className="text-blue-600">Burns Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Specialized care for burn injuries and recovery</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Baby className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <CardTitle className="text-blue-600">Pediatric Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Expert care for children and infants</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <CardTitle className="text-blue-600">Community Health</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Outreach programs and preventive care</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-12 md:py-16 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">Our Doctors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Dr. Grace Kennett</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Founder & Chief Medical Officer</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Flame className="w-10 h-10 text-red-600" />
                </div>
                <CardTitle className="text-blue-600">Dr. Rajesh Kumar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Burns Specialist</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Baby className="w-10 h-10 text-pink-600" />
                </div>
                <CardTitle className="text-blue-600">Dr. Lakshmi Devi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Pediatrician & Child Welfare</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
                <CardTitle className="text-blue-600">Dr. Suresh Babu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">General Medicine</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-purple-600" />
                </div>
                <CardTitle className="text-blue-600">Dr. Kamala Devi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Community Health</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-10 h-10 text-yellow-600" />
                </div>
                <CardTitle className="text-blue-600">Dr. Murugan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Surgery & Emergency Care</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 px-4 text-center bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-blue-600 mb-2" />
              <p className="text-gray-700">6, Kennett Road<br />Madurai, Tamil Nadu, India</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-blue-600 mb-2" />
              <p className="text-gray-700">+91 452 2607767<br />+91 99865 40401</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-blue-600 mb-2" />
              <p className="text-gray-700">info@gkfmadurai.in</p>
            </div>
          </div>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="mailto:info@gkfmadurai.in">Email Us</Link>
          </Button>
        </div>
      </section>

      {/* Appointment Form Section */}
      <AppointmentForm />

      {/* Footer */}
      <footer className="bg-blue-950 text-white text-center py-4">
        <p>&copy; 2025 Grace Kennett Foundation. All rights reserved.</p>
      </footer>
    </div>
  )
}
