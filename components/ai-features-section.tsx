"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Palette, Zap, Target, Sparkles, ArrowRight, Bot, Cpu } from "lucide-react"
import { useState } from "react"

const aiFeatures = [
  {
    icon: Brain,
    title: "AI Fit Prediction",
    description:
      "Advanced algorithms analyze your foot shape and movement patterns to recommend the perfect size and style.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    demo: "95% accuracy rate",
  },
  {
    icon: Palette,
    title: "Color AI Designer",
    description: "Generate unique colorways based on your style preferences and current fashion trends.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    demo: "1M+ combinations",
  },
  {
    icon: Target,
    title: "Performance Optimizer",
    description: "AI analyzes your athletic performance to suggest shoes that enhance your specific sport activities.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    demo: "12% improvement",
  },
  {
    icon: Sparkles,
    title: "Style Predictor",
    description: "Machine learning predicts upcoming trends and suggests products before they become mainstream.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    demo: "6 months ahead",
  },
]

const aiStats = [
  { label: "AI Models Trained", value: "50+", icon: Bot },
  { label: "Data Points Analyzed", value: "10B+", icon: Cpu },
  { label: "Personalized Recommendations", value: "99.2%", icon: Target },
  { label: "Customer Satisfaction", value: "4.9/5", icon: Sparkles },
]

export function AIFeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <Zap className="w-4 h-4" />
            <span>Powered by Artificial Intelligence</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            The Future of <span className="text-primary">Athletic Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Experience Nike's revolutionary AI technology that personalizes every aspect of your athletic journey, from
            product recommendations to performance optimization.
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {aiFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card
                key={index}
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 bg-card/50 backdrop-blur-sm ${
                  activeFeature === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-full ${feature.bgColor} flex items-center justify-center mb-4`}
                  >
                    <IconComponent className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{feature.description}</p>
                  <Badge className={`${feature.bgColor} ${feature.color} border-0`}>{feature.demo}</Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* AI Demo Section */}
        <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Experience AI in Action</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Our AI technology doesn't just recommend products—it creates personalized experiences that adapt to your
                unique style, performance needs, and preferences in real-time.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Real-time foot scanning and analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-foreground">Predictive performance modeling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Dynamic style recommendations</span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Try AI Fitting
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm">
                <img
                  src="/ai-shoe-scanning-technology-holographic-display.jpg"
                  alt="AI Shoe Scanning Technology"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-foreground">
                  Live Demo
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {aiStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
