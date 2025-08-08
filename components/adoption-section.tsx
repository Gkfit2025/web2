import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Baby, Home, Heart, Users } from 'lucide-react'

export function AdoptionSection() {
  return (
    <section id="adoption" className="py-12 md:py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-900 mb-12">Adoption Services</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
          We facilitate loving adoptions, creating families and providing children with the care and opportunities they deserve.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Baby className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <CardTitle className="text-orange-600">Child Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Comprehensive care for children awaiting adoption</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Home className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <CardTitle className="text-orange-600">Family Matching</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Careful matching of children with loving families</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <CardTitle className="text-orange-600">Counseling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Support and guidance throughout the process</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <CardTitle className="text-orange-600">Follow-up Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Ongoing support for families and children</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
