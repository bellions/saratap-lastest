import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const Requote = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_0h22mce",
        "template_s4pai54",
        form.current,
        "XgFhrIlkm0TZhW9mY"
      )
      .then((res) => {
        console.log(res);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id="requote" className="bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-primary-100">
          <span className="bg-red-700 border border-red-700 border-y-4 px-2 rounded">
            <span className="bg-primary-500 border border-white border-y-2 px-2 rounded">
              REQUEST
            </span>{" "}
            A QUOTE
          </span>
        </h1>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-100 sm:text-xl">
          Fill out this form to tell us more about your challenges and we’ll be
          in touch.
        </p>
        <div className="flex flex-col items-center justify-center lg:bg-primary-100 md:bg-gray-900 py-10 mx-10 rounded-lg">
          {!isFormSubmitted ? (
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              <div className="flex gap-3 mb-3">
                <input
                  className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  required
                />
                <input
                  className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  required
                />
              </div>
              <div></div>
              <div className='flex gap-3 mb-3"'>
                <select
                  id="countries"
                  class="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                >
                  <option disabled selected hidden>
                    I need
                  </option>
                  <option value="Only freight forwarding">
                    Only freight forwarding
                  </option>
                  <option value="Only freight delivery">
                    Only freight delivery
                  </option>
                  <option value="All the way">All the way</option>
                  <option value="Air Cargo Charter">Air Cargo Charter</option>
                </select>
                <select
                  id="countries"
                  class="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                >
                  <option disabled selected hidden>
                    Via
                  </option>
                  <option value="Airfreight">Air freight</option>
                  <option value="Ocean Freight">Ocean Freight</option>
                  <option value="Land Freight">Land Freight</option>
                </select>
              </div>
              <div className="flex justify-center">
                <select
                  id="countries"
                  class="bg-gray-50 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                >
                  <option disabled selected hidden>
                    It is (Goods Description)
                  </option>
                  <option value="Appliances">Appliances</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Chemicals">Chemicals</option>
                  <option value="Dangerous Goods">Dangerous Goods</option>
                  <option value="Electronic Products">
                    Electronic Products
                  </option>
                  <option value="Garments & Accessories">
                    Garments & Accessories
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="flex gap-3 mb-3">
                <input
                  className="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                  type="text"
                  placeholder="Moving From (City, Country)"
                  name="from"
                  required
                />
                <input
                  className="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                  type="text"
                  placeholder="To (City, Country)"
                  name="to"
                  required
                />
              </div>
              <div className="flex justify-center">
                <input
                  className="w-full py-3 px-5 text-sm font-medium text-center text-primary-100 rounded-lg sm:w-fit bg-primary-500 hover:bg-primary-300 focus:ring-purple-800"
                  type="submit"
                  value={!loading ? "Submit Now" : "Sending..."}
                />
              </div>
            </form>
          ) : (
            <div className="mx-auto max-w-screen-md bg-gray-400 px-3 py-3 rounded">
              <h3 className="font-bold text-2xl text-primary-500">
                Thank you for getting in touch, We will get to you ASAP!
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Requote;
