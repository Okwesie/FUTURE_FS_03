"use client"

import type React from "react"

import { Analytics } from "@vercel/analytics/next"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function SearchParamsHandler() {
  const searchParams = useSearchParams()
  // This component can handle search params if needed
  return null
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsHandler />
        {children}
      </Suspense>
      <Analytics />
    </>
  )
}
