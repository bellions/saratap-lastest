import {motion} from "framer-motion"
import Line from "../assets/stick.svg"
import Stars from "../assets/star.svg"
import Ceo from "../assets/ceo.png"
import { fadeIn, staggerContainer, travelVariants } from "../utils/motion"

const Customers = () => {
  return (
    <section>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true, amount:0.25 }}
            className="flex items-center justify-between w-5/6 mx-auto mt-10"
        >
            <motion.div variants={fadeIn("right","tween",0.2,1)}>
                <img src={Line} alt="yellow line" />
                <h1 className="text-secondary-100 font-bold text-5xl pt-2 pb-4 px-10">Message from the CEO</h1>
                <div className="py-7 px-7 rounded-xl bg-white">
                    <p className="py-4 px-2">Saratap Global maintains its commitment to honest, respectful, responsible, and<br/> accountable transactions at all times. Working with us entails clear communication<br/> and relevant information delivered to the proper people at the right time.</p>
                    <img className="px-2" src={Stars} alt="stars" />
                    <p className="text-secondary-100 text-sm py-4 px-2">Directions, That Matter!</p>
                    <p className="text-xs px-2">Chief Executive Officer</p>
                </div>
            </motion.div>
            <motion.div variants={travelVariants("right")}>
                <img className="rounded-full" src={Ceo} alt="ceo image" />
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Customers