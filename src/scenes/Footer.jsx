import { Link } from "react-router-dom";
import Logo from "../assets/saratapLogoNew.png";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-5/6 mx-auto py-20">
      <div className="flex md:flex-row flex-col items-center justify-between">
        <div className="flex flex-col items-start gap-10 basis-1/3">
          <div className="flex items-center justify-center gap-2">
            <img src={Logo} alt="logo" />
          </div>
          <p>
            Actively Meeting Your Forwarding Needs
            <br /> <b>RC - 6901532</b>
          </p>
          <div className="flex gap-2">
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="instagram" />
            <img src={Twitter} alt="twitter" />
          </div>
        </div>
        <div className="flex items-start justify-between md:gap-0 gap-4 md:mt-0 mt-4 basis-2/3">
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-secondary-100">Quick Contact</h1>
            <div className="flex flex-col gap-3">
              <Link
                to="tel:+2348033065809"
                className="flex items-center gap-1 "
              >
                <BiSolidPhoneCall className="text-primary-500" /> +2348033065809
              </Link>
              <Link
                to="https://api.whatsapp.com/send?phone=2348033065809"
                className="flex items-center gap-1 "
              >
                {" "}
                <BiLogoWhatsapp className="text-primary-500" />
                +2348033065809
              </Link>
              <Link
                to="mailto:contact@saratapglobal.com"
                className="flex items-center gap-1 "
              >
                <BiMailSend className="text-primary-500" />
                contact@saratapglobal.com
              </Link>
              <Link
                to="https://maps.google.com/maps/dir//Nnamdi+Azikiwe+International+Airport+Abuja,+Federal+Capital+Territory/@9.0062589,7.2695056,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x104e7195d1abacc9:0xc905ee88d56fa2fLink"
                className="flex items-center gap-1 "
              >
                <FaMapLocationDot className="text-primary-500" />
                3, Nnamdi Azikiwe International
                <br /> Airport, Abuja, Nigeria.
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-secondary-100">Our Services</h1>
            <div className="flex flex-col gap-3">
              <Link
                to="/our-service#custom-clearance"
                className="flex items-center gap-1 "
              >
                <BsFillArrowRightCircleFill className="text-primary-500" />{" "}
                Customs Clearance
              </Link>
              <Link
                to="/our-service#oceanFreight"
                className="flex items-center gap-1 "
              >
                {" "}
                <BsFillArrowRightCircleFill className="text-primary-500" />
                Ocean Freight
              </Link>
              <Link
                to="/our-service#airFreight"
                className="flex items-center gap-1 "
              >
                <BsFillArrowRightCircleFill className="text-primary-500" />
                Air Freight
              </Link>
              <Link
                to="/our-service#truckFreight"
                className="flex items-center gap-1 "
              >
                <BsFillArrowRightCircleFill className="text-primary-500" />
                Trucking Freight
              </Link>
              <Link
                to="/our-service#warehouse"
                className="flex items-center gap-1 "
              >
                <BsFillArrowRightCircleFill className="text-primary-500" />
                Ware Housing
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-semibold text-secondary-100">Legal</h1>
            <div className="flex flex-col gap-3">
              <p className="text-sm">- Terms & Conditions</p>
              <p className="text-sm">- Acceptable Products & Use Policy</p>
              <p className="text-sm">- Privacy Policy</p>
              <p className="text-sm">- Frequently Asked Questions</p>
            </div>
          </div>
          <div className="flex flex-col  gap-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
