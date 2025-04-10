import { cn } from "@/lib/utils"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { ModeToggle } from "@/themes/ModeToggle"

export const DesktopNavbar = () => {
  return (
    <div className="max-md:hidden space-x-4 p-6 text-heading">
        <ModeToggle />
        <Link href="/">Vehicles</Link>
        <Link href="/">Shopping Assist</Link>
        <Link href="/">Inventory</Link>
        <Link href="/" className={cn(buttonVariants())}>Contact us</Link>
    </div>
  )
}
