"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-primary rounded-full animate-float"></div>
        <div
          className="absolute top-20 sm:top-40 right-16 sm:right-32 w-12 sm:w-24 h-12 sm:h-24 bg-secondary rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-16 sm:bottom-32 left-1/4 w-20 sm:w-40 h-20 sm:h-40 bg-accent rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-14 sm:w-28 h-14 sm:h-28 bg-primary rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-0">
        <div className="space-y-6 sm:space-y-8">
          {/* AI Badge */}
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-card-foreground">
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 text-primary" />
            <span>AI-Powered Design Experience</span>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-8xl font-bold text-balance leading-tight">
              <span className="text-foreground">JUST</span>
              <br />
              <span className="text-primary animate-gradient bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                DO IT
              </span>
            </h1>
            <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty px-4 sm:px-0">
              Experience the future of athletic innovation with AI-curated products, personalized recommendations, and
              cutting-edge design.
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl px-4 sm:px-0">
            <div
              className={`relative transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src="/futuristic-nike-air-jordan-sneaker-floating-in-spa.jpg"
                alt="AI-Enhanced Nike Sneaker"
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl animate-pulse-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl sm:rounded-2xl"></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Shop AI Collection
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Play className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
              Watch Story
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-border mx-4 sm:mx-0">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">50M+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Athletes Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-secondary">AI-First</div>
              <div className="text-sm sm:text-base text-muted-foreground">Design Process</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent">100%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Sustainable Future</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 sm:h-3 bg-muted-foreground rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
