"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NikeLogo } from "./nike-logo"
import { MobileMenu } from "./mobile-menu"
import { Search, ShoppingBag, User } from "lucide-react"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <MobileMenu />
            <div className="flex items-center space-x-2 ml-2 md:ml-0">
              <Link href="/" className="flex items-center space-x-2">
                <NikeLogo className="w-8 h-6 text-primary" />
                <span className="text-xl font-bold text-foreground">NIKE</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/new-featured" className="text-foreground hover:text-primary transition-colors font-medium">
              New & Featured
            </Link>
            <Link href="/men" className="text-foreground hover:text-primary transition-colors font-medium">
              Men
            </Link>
            <Link href="/women" className="text-foreground hover:text-primary transition-colors font-medium">
              Women
            </Link>
            <Link href="/kids" className="text-foreground hover:text-primary transition-colors font-medium">
              Kids
            </Link>
            <Link href="/jordan" className="text-foreground hover:text-primary transition-colors font-medium">
              Jordan
            </Link>
            <Link href="/sale" className="text-foreground hover:text-primary transition-colors font-medium">
              Sale
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="w-5 h-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden xs:flex">
              <User className="w-5 h-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="w-5 h-5" />
              <span className="sr-only">Shopping bag</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
