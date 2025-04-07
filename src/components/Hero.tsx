import Image from "next/image"
import { Section } from "./Section"
import { Button } from "./ui/button"

export const Hero = () => {
  return (
    <Section id="hero">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8">
            <div className="flex flex-col justify-center gap-y-4">
                <h1 className="flex flex-col text-black font-bold text-3xl dark:text-white"><span>Buy Your</span><span>Dream Car</span></h1>
                <p>Your Dream Car Awaits: Shop with Us and Enjoy a Hassle-Free Buying Experience: We understand that buying a car can be stressful, which is why we've streamlined the process to make it as easy and straightforward as possible.</p>
                <div>
                    <Button>Buy Now</Button>
                    <Button variant={"link"}>Learn More</Button>
                </div>
            </div>
            <div>
                <div className="w-max text-center rounded-md py-4 px-8 ml-auto mr-[20%] dark:text-white bg-linear-to-r from-[#7976FA] to-background">
                    <span className="font-bold text-3xl">2.6K</span>
                    <p className="flex flex-col"><span>People Trusted</span><span>Our Company</span></p>
                </div>
                <Image className="w-full" src="/blue_car.png" alt="blue car" width={1280} height={1280} />
            </div>
        </div>
    </Section>
  )
}
