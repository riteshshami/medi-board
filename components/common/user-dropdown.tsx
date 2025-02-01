"use client"

import { useState } from "react"
import { UserButton } from "@clerk/nextjs"
import { useClerk } from "@clerk/clerk-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Pill, User, LogOut } from "lucide-react"
import Link from "next/link"
import { Separator } from "../ui/separator"

export function UserDropDown() {
  const [open, setOpen] = useState(false)
  const { signOut } = useClerk()

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-10 h-10",
              },
            }}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <Link href="/medicines" className="flex items-center">
            <Pill className="mr-2 h-4 w-4" />
            <span>Medicines</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <Separator className="my-4" />
        <DropdownMenuItem onSelect={() => signOut()} className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
