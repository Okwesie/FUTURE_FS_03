"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Search, ShoppingBag, User } from "lucide-react"
import { NikeLogo } from "./nike-logo"

const navigationItems = [
  { name: "New & Featured", href: "/new-featured" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "Kids", href: "/kids" },
  { name: "Jordan", href: "/jordan" },
  { name: "Sale", href: "/sale" },
]

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full sm:w-80 p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <NikeLogo className="h-8 w-auto" />
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-4">
            <ul className="space-y-4">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer Actions */}
          <div className="p-6 border-t space-y-4">
            <Button variant="outline" className="w-full justify-start bg-transparent" onClick={() => setIsOpen(false)}>
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <Button variant="outline" className="w-full justify-start bg-transparent" onClick={() => setIsOpen(false)}>
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Button>
            <Button className="w-full justify-start bg-primary hover:bg-primary/90" onClick={() => setIsOpen(false)}>
              <ShoppingBag className="mr-2 h-4 w-4" />
              Bag (0)
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
