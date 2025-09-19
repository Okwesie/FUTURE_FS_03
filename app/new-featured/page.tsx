import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, ShoppingBag } from "lucide-react"

const featuredProducts = [
  {
    id: 1,
    name: "Air Jordan 1 Retro High OG",
    price: "$170",
    originalPrice: "$170",
    image: "/futuristic-nike-air-jordan-basketball-shoe-red-bla.jpg",
    badge: "Just In",
    rating: 4.8,
    colors: 3,
  },
  {
    id: 2,
    name: "Nike Air Max 270",
    price: "$150",
    originalPrice: "$150",
    image: "/nike-air-max-270-futuristic-design-purple-black.jpg",
    badge: "Bestseller",
    rating: 4.9,
    colors: 5,
  },
  {
    id: 3,
    name: "Nike React Infinity Run",
    price: "$160",
    originalPrice: "$160",
    image: "/futuristic-nike-react-running-shoe-white-blue-tech.jpg",
    badge: "New",
    rating: 4.7,
    colors: 4,
  },
  {
    id: 4,
    name: "Nike Dunk Low",
    price: "$100",
    originalPrice: "$100",
    image: "/nike-dunk-low-sneaker-modern-design-orange-white.jpg",
    badge: "Popular",
    rating: 4.6,
    colors: 8,
  },
]

export default function NewFeaturedPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">New & Featured</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover the latest drops and most popular styles from Nike. Fresh designs, innovative technology, and
            timeless classics.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer border-0 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{product.badge}</Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{product.colors} colors</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-foreground">{product.price}</span>
                    </div>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <ShoppingBag className="w-4 h-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
