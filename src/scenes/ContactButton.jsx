import { Link } from "react-router-dom";
import Fly from "../assets/fly.svg"

const ContactButton = () => {

  return (
    <div className="border border-primary-500 rounded-3xl">
        <Link to="/requote"><button className="text-primary-500 font-medium flex items-center justify-center gap-2 px-5 py-2">
          Request A Quote
          <img src={Fly} alt="fly" />
        </button></Link>
    </div>
  )
}

export default ContactButton