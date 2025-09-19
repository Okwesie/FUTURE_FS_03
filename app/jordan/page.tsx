import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function JordanPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-black to-red-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">JORDAN</h1>
          <p className="text-xl mb-8">Greatness is a mindset</p>
          <Button size="lg" variant="secondary">
            Shop Jordan Collection
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Jordan Products */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Iconic Jordan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="/futuristic-nike-air-jordan-basketball-shoe-red-bla.jpg"
                    alt="Air Jordan 1"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-red-600 text-white">Classic</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Air Jordan 1 Retro High OG</h3>
                  <p className="text-muted-foreground mb-4">The shoe that started it all</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">$170</span>
                    <Button className="bg-red-600 hover:bg-red-700">Shop Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="/air-jordan-4-retro-basketball-shoe.jpg"
                    alt="Air Jordan 4"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-blue-600 text-white">Retro</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Air Jordan 4 Retro</h3>
                  <p className="text-muted-foreground mb-4">Championship legacy</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">$200</span>
                    <Button className="bg-red-600 hover:bg-red-700">Shop Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src="/air-jordan-11-retro-basketball-shoe.jpg"
                    alt="Air Jordan 11"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-black text-white">Premium</Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Air Jordan 11 Retro</h3>
                  <p className="text-muted-foreground mb-4">Legendary performance</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-foreground">$220</span>
                    <Button className="bg-red-600 hover:bg-red-700">Shop Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Jordan Legacy */}
        <div className="text-center bg-gradient-to-r from-red-50 to-black/5 rounded-2xl p-12">
          <h2 className="text-4xl font-bold text-foreground mb-6">The Jordan Legacy</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From the hardwood to the streets, Jordan represents more than just basketball. It's about pushing
            boundaries, defying expectations, and inspiring greatness in every step.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Explore Jordan History
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
