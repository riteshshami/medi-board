"use client"

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs"
import { ModeToggle } from "./theme-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { UserDropDown } from "./user-dropdown"
import { Pill } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
                <Pill className="h-8 w-8" />
                <span className="sr-only">Mediboard</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
                  Sign in
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserDropDown/>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  )
}
