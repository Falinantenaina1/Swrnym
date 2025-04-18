import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import { ModeToggle } from "@/themes/ModeToggle"

export const MobileNavbar = () => {
    return (
        <div className="flex items-center gap-x-8 md:hidden">
            <ModeToggle />
            <Sheet>
                <SheetTrigger className="pr-6">
                    <Menu className="text-black dark:text-white size-10" />
                </SheetTrigger>
                <SheetContent className="text-black dark:text-white">
                    <SheetHeader>
                        <SheetTitle className="text-black dark:text-white">Menu</SheetTitle>
                    </SheetHeader>
                    <div className="flex flex-col px-8 space-y-3 text-xl">
                        <Link href="/">Vehicles</Link>
                        <Link href="/">Shopping Assist</Link>
                        <Link href="/">Inventory</Link>
                        <Link href="/" className={cn(buttonVariants({size: "lg"}),)}>Contact us</Link>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
