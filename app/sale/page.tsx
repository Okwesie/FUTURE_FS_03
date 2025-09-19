import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Timer, Percent } from "lucide-react"

export default function SalePage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Sale Hero */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Percent className="w-8 h-8" />
            <h1 className="text-5xl sm:text-6xl font-bold">SALE</h1>
          </div>
          <p className="text-2xl mb-6">Up to 50% off select styles</p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <Timer className="w-5 h-5" />
            <span>Limited time offer</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Sale Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/futuristic-nike-air-jordan-basketball-shoe-red-bla.jpg"
                  alt="Men's Sale"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Badge className="bg-red-600 text-white mb-3">Up to 40% Off</Badge>
                    <h3 className="text-2xl font-bold mb-2">Men's Sale</h3>
                    <Button variant="secondary">Shop Men's</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/women-s-nike-shoes-sale.jpg"
                  alt="Women's Sale"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Badge className="bg-red-600 text-white mb-3">Up to 50% Off</Badge>
                    <h3 className="text-2xl font-bold mb-2">Women's Sale</h3>
                    <Button variant="secondary">Shop Women's</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/kids-nike-shoes-sale-colorful.jpg"
                  alt="Kids' Sale"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Badge className="bg-red-600 text-white mb-3">Up to 30% Off</Badge>
                    <h3 className="text-2xl font-bold mb-2">Kids' Sale</h3>
                    <Button variant="secondary">Shop Kids'</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Sale Items */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Best Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={`/nike-sale-shoes-.jpg?height=200&width=300&query=nike sale shoes ${i}`}
                      alt={`Sale Item ${i}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-red-600 text-white">{30 + i * 5}% OFF</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Nike Sale Item {i}</h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="font-bold text-foreground">${120 - i * 10}</span>
                      <span className="text-muted-foreground line-through text-sm">${160 - i * 10}</span>
                    </div>
                    <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                      Add to Bag
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Don't Miss Out</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            These deals won't last long. Shop now and save on your favorite Nike styles while supplies last.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Shop All Sale Items
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
