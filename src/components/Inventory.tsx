import Link from "next/link"
import { Section } from "./Section"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import Image from "next/image"

export const Inventory = () => {
    return (
        <Section id="inventory">
            <div className="space-y-4 md:space-y-8 xl:space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4 items-center">
                    <div>
                        <h2 className="flex flex-col font-bold text-heading text-2xl md:text-3xl"><span>Drive into adventure:</span><span>Buy your dream car today!</span></h2>
                    </div>
                    <div className="space-y-4">
                        <p>Are you looking for hassle free way to get around town or embark on an exiting road trip? Look no further than our car service!</p>
                        <Link href="/" className={cn(buttonVariants())}>Learn more</Link>
                    </div>
                </div>
                <Image src="/black_car.jpg" alt="black car" width={1280} height={606} className="rounded-4xl" />
                <div className="grid grid-cols-2 md:grid-cols-4 items space-x-2 space-y-2">
                    <div>Awarded by world best</div>
                    <div className="max-md:grid md:flex md:gap-x-2 grid-cols-3 items-center"><span className="col-span-1 text-heading text-2xl md:text-3xl">#1</span><span className="col-span-2">On top selling company</span></div>
                    <div className="max-md:grid md:flex md:gap-x-2 grid-cols-3 items-center"><span className="col-span-1 text-heading text-2xl md:text-3xl">67k</span><span className="col-span-2">User Rating</span></div>
                    <div className="max-md:grid md:flex md:gap-x-2 grid-cols-3 items-center"><span className="col-span-1 text-heading text-2xl md:text-3xl">100k</span><span className="col-span-2">Successfull sales</span></div>
                </div>
            </div>
        </Section>
    )
}
