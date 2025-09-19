import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Filter, Grid, List } from "lucide-react"

export default function MenPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Men's Shoes & Clothing</h1>
            <p className="text-xl text-muted-foreground">Performance meets style in every design</p>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/futuristic-nike-air-jordan-basketball-shoe-red-bla.jpg"
                  alt="Men's Shoes"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Shoes</h3>
                    <Button variant="secondary">Shop Now</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/men-s-athletic-clothing-nike.jpg"
                  alt="Men's Clothing"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Clothing</h3>
                    <Button variant="secondary">Shop Now</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/nike-accessories-men-s-gear.jpg"
                  alt="Men's Accessories"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Accessories</h3>
                    <Button variant="secondary">Shop Now</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Built for Performance</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            From the court to the street, our men's collection delivers the innovation and style you need to perform at
            your best.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Explore All Men's Products
          </Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
