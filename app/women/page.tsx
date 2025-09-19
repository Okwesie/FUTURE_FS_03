import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WomenPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Women's Shoes & Clothing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed for the modern athlete. Style that moves with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/women-s-nike-athletic-shoes.jpg"
                  alt="Women's Shoes"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Women's Shoes</h3>
                    <p className="text-sm opacity-90 mb-4">Step into comfort and style</p>
                    <Button variant="secondary" size="sm">
                      Shop Collection
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/women-s-nike-athletic-wear.jpg"
                  alt="Women's Clothing"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Athletic Wear</h3>
                    <p className="text-sm opacity-90 mb-4">Performance meets fashion</p>
                    <Button variant="secondary" size="sm">
                      Shop Collection
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/women-s-nike-accessories.jpg"
                  alt="Women's Accessories"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Accessories</h3>
                    <p className="text-sm opacity-90 mb-4">Complete your look</p>
                    <Button variant="secondary" size="sm">
                      Shop Collection
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Empowering Every Move</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our women's collection celebrates strength, style, and individuality. Find your perfect fit for every
            workout and every day.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Shop All Women's
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
