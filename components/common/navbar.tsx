"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
// import { ModeToggle } from "../theme-button"
import { Button } from "@/components/ui/button"
import Link from "next/link"
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
                    <div className="flex flex-row justify-between gap-8">
                        <Link href="/">
                            <p>Home</p>
                        </Link>
                        <Link href="/medicines">
                            <p>Dashboard</p>
                        </Link>
                        <Link href="/">
                            <p>About Us</p>
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        {/* <ModeToggle /> */}
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button variant="outline" size="sm" className='hover:text-black'>
                                    Sign in
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: "w-10 h-10",
                                    },
                                }}
                            />
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    )
}
