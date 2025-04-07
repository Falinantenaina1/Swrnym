import Image from "next/image"
import Link from "next/link"
import { DesktopNavbar } from "./DesktopNavbar"
import { MobileNavbar } from "./MobileNavbar"

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between md:px-5">
        <Link href="/">
            <Image className="size-20 dark:hidden" src="/logo_dark.svg" alt="logo" width={46} height={46} />
            <Image className="hidden dark:block size-20" src="/logo_light.svg" alt="logo" width={46} height={46} />
        </Link>
        <DesktopNavbar />
        <MobileNavbar />
    </nav>
  )
}
