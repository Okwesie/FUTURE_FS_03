import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function KidsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Kids' Shoes & Clothing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for play, designed to last. Let them run, jump, and explore in comfort.
          </p>
        </div>

        {/* Age Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👶</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Baby & Toddler</h3>
              <p className="text-muted-foreground mb-4">0-4 Years</p>
              <Button variant="outline" size="sm">
                Shop Now
              </Button>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧒</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Little Kids</h3>
              <p className="text-muted-foreground mb-4">3-7 Years</p>
              <Button variant="outline" size="sm">
                Shop Now
              </Button>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏃</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Big Kids</h3>
              <p className="text-muted-foreground mb-4">7-15 Years</p>
              <Button variant="outline" size="sm">
                Shop Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Popular with Kids</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={`/kids-nike-shoes-colorful-playful-design-.jpg?height=200&width=300&query=kids nike shoes colorful playful design ${i}`}
                      alt={`Kids Product ${i}`}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Kids' Favorite</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground mb-2">Nike Kids' Shoe {i}</h3>
                    <p className="text-muted-foreground text-sm mb-3">Perfect for active kids</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground">$65</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Add to Bag
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-muted/30 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">Made for Adventure</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            From first steps to championship games, Nike kids' gear grows with them. Durable, comfortable, and always
            ready for the next adventure.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore All Kids' Products
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
