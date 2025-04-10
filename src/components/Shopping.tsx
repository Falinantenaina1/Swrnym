import Image from "next/image"
import { Section } from "./Section"
import { Button } from "./ui/button"
import { ArrowUpRight, Star } from "lucide-react"

export const Shopping = () => {
    return (
        <Section id="shopping">
            <div className="grid grid-cols-1 lg:grid-cols-12 space-x-8 items-center">
                <div className="text-heading max-lg:hidden lg:col-span-3 space-y-2">
                    <Button className="block">Porche</Button>
                    <Button variant={"outline"} className="block">Lamborghini</Button>
                    <Button variant={"outline"} className="block">Honda Civic</Button>
                    <Button variant={"outline"} className="block">Tesla</Button>
                </div>
                <div className="space-y-16 md:flex justify-end lg:col-span-9 xl:gap-x-16">
                    <div className="relative mx-auto max-w-md md:min-w-sm  xl:w-full min-h-50 py-7 px-5 font-bold text-lg text-heading rounded-md bg-linear-to-b from-[#A4FEB1] to-background">
                        <h3 className=""><span className="border-t-3 border-heading">Concept</span> Yellow</h3>
                        <div className="absolute flex items-center justify-center top-4 right-4 size-8 rounded-full bg-heading text-white dark:text-black">
                            <ArrowUpRight />
                        </div>
                        <Image className="absolute -left-5 top-20" src="/yellow_car.png" alt="Yellow car" width={1130} height={479} />
                    </div>
                    <div className="p-6 space-y-4" >
                        <div className="max-w-sm mx-auto px-8 flex items-center gap-x-4">
                            <div className="w-full h-[3px] bg-heading"></div>
                            <h3 className="text-heading">Explore Our New Cars</h3>
                        </div>
                        <div className="text-white max-w-sm mx-auto  p-6 space-y-4 rounded-md bg-linear-to-b from-[#06558F] to-[#EEEEEE]">
                            <span className="font-bold text-3xl">$ 15,999</span>
                            <div className="flex">
                                <Star fill="#35FB59" color="#35FB59" />
                                <span>4.5</span>
                            </div>
                            <p>“I love this car, this car is amazing”</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
