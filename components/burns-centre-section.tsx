import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Heart, Users, Award } from 'lucide-react'

export function BurnsCentreSection() {
  return (
    <section id="burns-centre" className="py-12 md:py-16 px-4 text-center bg-red-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-12">Burns Centre</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
          Our specialized Burns Centre provides comprehensive treatment and rehabilitation for burn victims, 
          offering hope and healing to those who need it most.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Flame className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <CardTitle className="text-red-700">Emergency Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">24/7 emergency treatment for burn injuries</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <CardTitle className="text-red-700">Rehabilitation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Comprehensive recovery and therapy programs</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <CardTitle className="text-red-700">Support Groups</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Emotional and psychological support services</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle className="text-red-700">Expert Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Specialized medical professionals and staff</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
