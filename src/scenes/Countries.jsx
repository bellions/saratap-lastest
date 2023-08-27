import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { fadeIn,staggerContainer } from "../utils/motion"
import {exploreCountries} from "../constants"

const ExploreCountry = ({country,image,index}) => {
    return(
        <motion.div
            variants={fadeIn("right", "spring", index*0.5,0.75)}
            className="flex flex-col items-center justify-center"
        >
            <Tilt options={{
                max:25,
                scale: 1,
                speed: 250
            }}>
                <img src={image} alt={country} className="hover:cursor-pointer mt-10 sm:mt-0" />
            </Tilt>
            <p className="mt-5 font-semibold text-center">{country}</p>
        </motion.div>
    )
}

function Countries() {
  return (
    <section>
        <div className="w-5/6 mx-auto mt-20">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once:true,amount:0.25 }}
            >
                <h1 className="text-secondary-100 text-4xl font-semibold text-center">Top Countries</h1>
                <p className="mt-2 text-center">
                We offer wide range of services in the field of International Freight Forwarding,<br/> Transportation, Custom clearance, Warehousing and distribution
                </p>
                <div className="flex sm:flex-row flex-col items-center justify-between py-10">
                    {exploreCountries.map((country, index) => {
                        return (
                            <ExploreCountry key={country.title} country={country.title} image={country.imgUrl} index={index} />
                        )
                    })}
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default Countries