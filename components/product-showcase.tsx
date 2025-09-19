"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Zap, Star } from "lucide-react"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Air Jordan AI-1",
    category: "Basketball",
    price: "$180",
    originalPrice: "$220",
    image: "/futuristic-nike-air-jordan-basketball-shoe-red-bla.jpg",
    rating: 4.9,
    reviews: 2847,
    isNew: true,
    isAI: true,
    colors: ["bg-red-500", "bg-black", "bg-white"],
  },
  {
    id: 2,
    name: "React Infinity AI",
    category: "Running",
    price: "$160",
    originalPrice: null,
    image: "/futuristic-nike-react-running-shoe-white-blue-tech.jpg",
    rating: 4.8,
    reviews: 1923,
    isNew: false,
    isAI: true,
    colors: ["bg-blue-500", "bg-white", "bg-gray-400"],
  },
  {
    id: 3,
    name: "Dunk Low AI-Enhanced",
    category: "Lifestyle",
    price: "$110",
    originalPrice: "$130",
    image: "/nike-dunk-low-sneaker-modern-design-orange-white.jpg",
    rating: 4.7,
    reviews: 3156,
    isNew: true,
    isAI: true,
    colors: ["bg-orange-500", "bg-white", "bg-green-500"],
  },
  {
    id: 4,
    name: "Air Max 270 AI",
    category: "Lifestyle",
    price: "$150",
    originalPrice: null,
    image: "/nike-air-max-270-futuristic-design-purple-black.jpg",
    rating: 4.6,
    reviews: 892,
    isNew: false,
    isAI: true,
    colors: ["bg-purple-500", "bg-black", "bg-pink-400"],
  },
]

export function ProductShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <Zap className="w-4 h-4" />
            <span>AI-Curated Collection</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Designed by AI, <span className="text-primary">Perfected by Athletes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our revolutionary collection where artificial intelligence meets athletic performance, creating the
            perfect fusion of style, comfort, and innovation.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-card/50 backdrop-blur-sm ${
                hoveredProduct === product.id ? "ring-2 ring-primary" : ""
              }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isNew && <Badge className="bg-secondary text-secondary-foreground">New</Badge>}
                    {product.isAI && (
                      <Badge className="bg-primary text-primary-foreground">
                        <Zap className="w-3 h-3 mr-1" />
                        AI
                      </Badge>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(product.id)
                    }}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        favorites.has(product.id) ? "fill-primary text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </Button>

                  {/* Quick Add to Cart */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Quick Add
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Color Options */}
                  <div className="flex items-center space-x-2 mb-4">
                    {product.colors.map((color, index) => (
                      <div key={index} className={`w-4 h-4 rounded-full border-2 border-border ${color}`} />
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-foreground">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
          >
            View All AI Collection
          </Button>
        </div>
      </div>
    </section>
  )
}
