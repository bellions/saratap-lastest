import { motion } from "framer-motion"
import { staggerContainer,travelVariants,fadeIn } from "../utils/motion"
import AboutImage from "../assets/about.png"

function About() {
  return (
    <section>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true, amount:0.25 }}
            className="w-5/6 mx-auto mt-16 flex md:flex-row flex-col items-center gap-12"
        >
            <motion.div
                variants={travelVariants("left")}
            >
                <img src={AboutImage} alt="about image" />
            </motion.div>
            <motion.div variants={fadeIn("left","tween",0.2,1)} className="md:text-start text-center">
                <p className="text-primary-500 tracking-widest font-semibold">Know More About Us Today</p>
                <h1 className="text-5xl text-secondary-100 font-semibold py-5">Our Stories Have <br/> Adventures</h1>
                <p className="md:px-0 px-6">“Saratap Global” we called as BUSINESS LOGISITICS. As one of the Nigeria leading<br/> non-asset based supply chain management companies, we Design and articulate <br/>industry-leading solutions in both freight management and contract logistics.<br className="md:block hidden"/></p>
                <div className="flex gap-4 mt-8">
                    <div className="flex items-center justify-start bg-white h-28 w-28 rounded-xl">
                        <div className="flex flex-col items-start justify-center pl-4">
                            <p className="text-primary-500 text-3xl font-bold mt-4">500+</p>
                            <p className="mb-4 mt-2 text-sm">Countries<br/> Covered</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start bg-white h-28 w-28 rounded-xl">
                        <div className="flex flex-col items-start justify-center pl-4">
                            <p className="text-primary-500 text-3xl font-bold mt-4">100%</p>
                            <p className="mb-4 mt-2 text-sm">Fast, Efficient<br/> Delivery</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start bg-white h-28 w-28 rounded-xl">
                        <div className="flex flex-col items-start justify-center pl-4">
                            <p className="text-primary-500 text-3xl font-bold mt-4">25k+</p>
                            <p className="mb-4 mt-2 text-sm">Happy<br/> Customers</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default About