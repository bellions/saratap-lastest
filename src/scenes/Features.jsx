import {FaTruck} from "react-icons/fa"
import {FaBoxesPacking} from "react-icons/fa6"
import {HiBriefcase} from "react-icons/hi"
import {HiLibrary} from "react-icons/hi"
import {BsFillPersonVcardFill} from "react-icons/bs"
import {BsCarFrontFill} from "react-icons/bs"

const Features = () => {
  return (
    <section className="bg-secondary-100">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary-100">We’re more than an

Air Freight Forwarder</h2>
                <p className="text-primary-100 sm:text-xl">Saratap Global offers swift, reliable, and efficient air freight forwarding service to various locations. You’d be amazed at how far and fast we go to meet your forwarding needs.</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <FaTruck />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary-100">Freight Pickup</h3>
                    <p className="text-primary-100">We immediately contact your Chinese shipper as soon as we receive the order.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <FaBoxesPacking />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary-100">Packaging</h3>
                    <p className="text-primary-100">Professional repacking suggestions to ensure safe and undamaged cargo.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <HiBriefcase />                 
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary-100">Delivery</h3>
                    <p className="text-primary-100">Regional delivery services allow us to reach any location with ease.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <HiLibrary />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary-100">Warehousing</h3>
                    <p className="text-primary-100">In-house warehouses located in central locations for convenient temporary storage.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <BsFillPersonVcardFill />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary-100">Customs Clearance</h3>
                    <p className="text-primary-100">We simplifies custom clearance where our experts guide you on the procedures and rules of the countries.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                        <BsCarFrontFill />
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-primary-100">Express Courier</h3>
                    <p className="text-primary-100">The wise choice for your small cargo from China to the world.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features