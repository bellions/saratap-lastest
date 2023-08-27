import React from "react";

import Facebook from "../assets/1.png";
import Instagram from "../assets/2.png";
import Twitter from "../assets/3.png";

import { HiPhone } from "react-icons/hi";
import { IoMdMailUnread } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";

function Contact() {
  return (
    <div className="">
      <div className="w-5/6 mx-auto mt-6">
        <h1 className="font-bold text-7xl text-end text-secondary-100 mb-1">
          Get In touch
        </h1>
        <p className="text-end text-sm mb-3">
          We'd Love to Hear From You, Here's How you Can Reach Us
        </p>
        <div className="flex justify-center gap-5">
          <div className="">
            <div className="flex items-center gap-3 bg-white py-2 px-4 mb-3 drop-shadow-xl">
              <HiPhone className="text-primary-500 text-xl" />
              <div>
                <h1 className="font-bold text-primary-300">Phone Number</h1>
                <a href="" className="text-sm">
                  +2348033065809
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white py-2 px-4 p-2 mb-3 drop-shadow-xl">
              <IoMdMailUnread className="text-primary-500 text-xl" />
              <div>
                <h1 className="font-bold text-primary-300">Email Address</h1>
                <a href="" className="text-sm">
                  contact@saratapglobal.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white py-2 px-4 p-2 mb-3 drop-shadow-xl">
              <MdLocationOn className="text-primary-500 text-2xl" />
              <div>
                <h1 className="font-bold text-primary-300">Location</h1>
                <p className="text-sm">
                  Cabin No. 1, Directly Opp. Total Deport, <br />
                  Along Warehouse, Nnamdi Azikiwe Int'l Airport, Abuja.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white py-2 px-4 p-2 mb-3 drop-shadow-xl">
              <AiOutlineFieldTime className="text-primary-500 text-2xl" />
              <div>
                <h1 className="font-bold text-primary-300">Working Hours</h1>
                <p className="text-sm">MON-FRI : 7:30am - 6:30pm</p>
              </div>
            </div>
            {/* Social Media  */}
            <div className="flex gap-3">
              <a href="">
                <img src={Facebook} alt="facebook" className="text-sm" />
              </a>
              <a href="">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>
          </div>
          {/* send div  */}
          <div className="w-[70%] bg-white py-6 px-5 drop-shadow-xl rounded">
            <h1 className="text-2xl font-extrabold text-primary-300">
              Send Message
            </h1>
            <p className="text-sm mt-3 mb-8">
              Didn't find what you're looking for? We'd love hear from you. Fill
              out the form <br /> below and we'll get back to you soon.
            </p>
            <form className="mb-10">
              <div className="flex gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-[50%] h-10 border border-gray-400 px-3 text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-[50%] h-10 border border-gray-400 px-3 text-sm"
                />
              </div>
              <div className="flex gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-[50%] h-10  border border-gray-400 px-3 text-sm"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-[50%] h-10  border border-gray-400 px-3 text-sm"
                />
              </div>
              <div className="">
                <textarea
                  placeholder="Message..."
                  className="w-full h-[100px] border border-gray-400 px-3 py-2 text-sm"
                />
                <button className="bg-primary-500 text-white p-3 rounded text-sm">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-white p-7 flex flex-col items-center mt-5 ">
        <h1 className="text-primary-300 font-medium text-3xl mb-0 mt-8">
          Find Us on Google Maps
        </h1>
        <p className="text-center text-sm mb-8 mt-5">
          We're the most reliable customs brokers that is easy to locate, All
          you need is to reach out via internet & <br /> physical appearance
          then immediately your request would be process.
        </p>
        <div className="w-[100%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.628831964379!2d7.264999488854972!3d9.006258900000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7195d1abacc9%3A0xc905ee88d56fa2ff!2sNnamdi%20Azikiwe%20International%20Airport!5e0!3m2!1sen!2sng!4v1688348355425!5m2!1sen!2sng"
            width="600"
            height="450"
            className="border-0 w-full rounded-xl"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
