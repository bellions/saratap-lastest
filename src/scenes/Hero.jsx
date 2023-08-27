import { motion } from "framer-motion"
import { textVariant, staggerContainer } from "../utils/motion"
import HeroImage from "../assets/hero.png"
import ContactButton from "./ContactButton"

function Hero() {
  return (
    <section>
        <div className="w-5/6 mx-auto mt-10">
            <div className="flex items-start justify-between md:flex-row flex-col">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once:true, amount:0.25 }}
                    className="flex flex-col items-start gap-8 mt-16"
                >
                    <motion.h1
                        variants={textVariant(1.1)}
                        className="text-secondary-100 font-sen font-bold md:text-7xl text-5xl"
                    >
                        <span className="text-primary-500">Saratap Global </span><br/>is Already <br/> <span className="text-red-600">Miles</span> Ahead
                    </motion.h1>
                    <p className="font-light">
                    With a keen dedication to excellence, Saratap Global offers swift,<br/> reliable, and efficient air freight forwarding service to various<br/> locations. You’d be amazed at how far and fast we go to meet your forwarding needs.
                    </p>
                    <ContactButton />
                </motion.div>
                <motion.div className="flex items-center md:mt-0 mt-10">
                    <img className="rounded-full h-100 w-100 pl-10 pr-10 pb-10  shadow-xl dark:shadow-gray-800" src={HeroImage} alt="hero image" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero