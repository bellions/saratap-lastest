import React from "react";
import ContactButton from "./ContactButton";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import WorldImg from "../assets/world-img.webp";
import CustomImg from "../assets/customs-clearance.jpg";
import Ship from "../assets/ship.jpg";
import Warehouse from "../assets/Warehouse-Cargoland.jpg";
import Packaging from "../assets/packaging.jpg";
import LandVanImg from "../assets/delivery.jpg";
import Aircargo from "../assets/case-project.jpeg";

function Service() {
  return (
    <div className="w-5/6 mx-auto mt-6">
      <div className="flex gap-5">
        {/* Side services content */}
        <div>
          <div className="secondary-100 w-80 p-5 border border-primary-500  rounded-xl mb-5">
            <h1 className="text-primary-500 tracking-widest font-semibold text-lg mb-2">
              Recent Services
            </h1>
            <div className="flex flex-col gap-3">
              <a href="#custom-clearance" className="flex items-center gap-1 ">
                <BsFillArrowRightCircleFill className="text-primary-500" />{" "}
                Customs Clearance
              </a>
              <a href="#oceanFreight" className="flex items-center gap-1 ">
                {" "}
                <BsFillArrowRightCircleFill className="text-primary-500" />
                Ocean Freight
              </a>
              <a href="#airFreight" className="flex items-center gap-1 ">
                <BsFillArrowRightCircleFill className="text-primary-500" />
                Air Freight
              </a>
              <a href="#truckFreight" className="flex items-center gap-1 ">
                <BsFillArrowRightCircleFill className="text-primary-500" />
                Trucking Freight
              </a>
              <a href="#warehouse" className="flex items-center gap-1 ">
                <BsFillArrowRightCircleFill className="text-primary-500" />
                Ware housing
              </a>
              <a href="#packaging" className="flex items-center gap-1 ">
                <BsFillArrowRightCircleFill className="text-primary-500" />
                Packaging
              </a>
            </div>
          </div>
          <div className="secondary-100 flex flex-col items-center w-80 p-5 py-10 border border-primary-500 rounded-xl mb-0">
            <h1 className="font-bold text-center mb-5">
              Ask more about the services you need and get best offer
            </h1>
            <ContactButton />
          </div>
        </div>
        {/* Other side of the services page */}
        <div className="w-75">
          <h1 className="text-4xl text-secondary-100 font-semibold py-5">
            Services Overview
          </h1>
          <p>
            Saratap Global Services Limited is a professional cargo company who
            seeks to be a premier, profitable provider of global supply chain
            services to help enable sustainable trade and commerce in key
            markets and regions. Our company focuses on cultivating long-term
            relationships with clients to ensure they take full advantage of the
            diverse services offered by us in Africa and other areas across the
            globe.
          </p>
          <div className="flex items-center mt-5 gap-2">
            <div className="flex-1">
              <img
                className="rounded-full h-50 w-50 pl-10 pr-10 pb-10 object-cover  shadow-xl dark:shadow-gray-800"
                src={WorldImg}
                alt=""
              />
            </div>
            <div className="flex-1">
              <h3 className="text-primary-500 text-lg text-center font-medium">
                Moving Your Products Across <br /> All Borders
              </h3>
              <p className="text-sm font-light">
                We're your one-stop forwarding partner offering forward-thinking
                and creative solutions for seamless global logistics. Our deep
                expertise and care to deliver products in optimal condition
                ensure proper completion of your supply chain requirements
                wherever the sourcing begins or ends.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div id="custom-clearance" className="">
          <h1 className="text-secondary-100 text-4xl font-semibold mb-2 text-center">
            Customs Clearance
          </h1>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-3"></div>
          <div className="flex gap-5 items-center ">
            <img src={CustomImg} alt="" className="w-[50%] rounded-full" />
            <p className="flex flex-col items-end  font-sen">
              Saratap Global is a full-service custom brokerage company,
              providing expert guidance and support for businesses navigating
              the complex world of international trade. Our team of licensed
              brokers and trade specialists handle the entire customs clearance
              process, ensuring that your shipments comply with all regulations
              and requirements. From classification and valuation to compliance
              and documentation, we provide personalized and efficient service
              to simplify the customs clearance process for you. Choose Saratap
              for your custom brokerage needs and experience a seamless and
              stress-free import and export process. Handling every customs
              requirement needed, we prepare the proper documents and pay
              attention to every duty involved.
            </p>
          </div>
          <p className="font-sen mt-3">
            A customs broker is a professional who provides expert services by
            arranging the customs clearance process for you during a shipment.
            The customs broker ensures that a shipment meets all standards and
            regulations for the import or export of goods. Nonny Global offer
            experienced and efficient customs clearance of shipments to Nigeria.
            Our clearing and freight forwarding services are tailored to suit
            each importer or exporters needs. We comprehend the intricacies of
            dealing with cross-border shipments better than the most. The
            extensive customs brokerage, clearance services accompanied with top
            to bottom mastery in international customs guidelines with local
            customs understanding of Nigeria. While guaranteeing the smooth and
            quick progression of international shipments to and fro any area
            around the world. Nonny Global Services team of experts document a
            considerable amount of customs entries every year and handle all
            parts of customs processes. Including import and export clearance,
            certificates of origin presentations, pro forma solicitations,
            payment of the customs duty, examination and booking,
            issuance/payment of debit notes. Our aptitude in the field
            additionally covers customs guidelines, bond requirements, duty
            rates, and petition and protest procedures.
          </p>
        </div>
        <div id="oceanFreight" className="mt-5">
          <h1 className="text-secondary-100 text-4xl font-semibold mb-2 text-center">
            Ocean Freight
          </h1>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-3"></div>
          <div className="flex flex-row-reverse gap-5 items-center ">
            <img src={Ship} alt="" className="w-[50%] rounded-full" />
            <p className="flex flex-col items-end font-sen">
              Saratap Global is a leading provider of ocean freight services,
              delivering goods from one port to another with efficiency and
              reliability. We handle shipments of all sizes and provide
              customizable solutions for clients’ transportation needs. With a
              team of experienced logistics professionals and a vast network of
              partners, we ensure secure and timely delivery of cargo across the
              world. Choose Cargoland for your next ocean shipment and
              experience seamless and cost-effective transportation. We use Sea
              Freight for our client shipment. Complete ocean freight services
              are at our fingertips. Utilizing high productivity carriers in all
              trade lanes between ports throughout the world, Saratab Ventures
              Limited can handle your shipment from port-to-port or door-to-door
              on a single Bill of Lading.
            </p>
          </div>
        </div>
        <div id="airFreight" className="mt-5">
          <h1 className="text-secondary-100 text-4xl font-semibold mb-2 text-center">
            Air Freight
          </h1>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-3"></div>
          <div className="flex gap-5 items-center ">
            <img src={Aircargo} alt="truck" className="w-[50%] rounded-full" />
            <p>
              Saratab Global Services Limited can make urgent and time-critical
              airborne deliveries around the world within a matter of hours. We
              have an in-depth understanding of global cargo routes and air
              cargo schedules, always exploring multiple options to prevent
              unexpected delays. Saratab ensures that each airborne vehicle
              meets the highest safety standards so that your cargo arrives at
              its destination safely and securely.Saratab Global Services
              Limited can make urgent and time-critical airborne deliveries
              around the world within a matter of hours. We have an in-depth
              understanding of global cargo routes and air cargo schedules,
              always exploring multiple options to prevent unexpected delays.
              Saratab ensures that each airborne vehicle meets the highest
              safety standards so that your cargo arrives at its destination
              safely and securely.
            </p>
          </div>
        </div>
        <div id="truckFreight" className="mt-5">
          <h1 className="text-secondary-100 text-4xl font-semibold mb-2 text-center">
            Trucking Freight
          </h1>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-3"></div>
          <div className="flex flex-row-reverse gap-5 items-center ">
            <img
              src={LandVanImg}
              alt="truck"
              className="w-[50%] rounded-full"
            />
            <p className="flex flex-col items-end font-sen">
              Saratap Global is a leading provider of ocean freight services,
              delivering goods from one port to another with efficiency and
              reliability. We handle shipments of all sizes and provide
              customizable solutions for clients’ transportation needs. With a
              team of experienced logistics professionals and a vast network of
              partners, we ensure secure and timely delivery of cargo across the
              world. Choose Cargoland for your next ocean shipment and
              experience seamless and cost-effective transportation. Seeing that
              each client has different schedules, we prepare a quick
              arrangement of trucks prepared to take on a fast route to your
              destinations, smoothing the process and saving much time.
            </p>
          </div>
        </div>
        <div id="warehouse" className="mt-5">
          <h1 className="text-secondary-100 text-4xl font-semibold mb-2 text-center">
            Ware Housing
          </h1>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-3"></div>
          <div className="flex gap-5 items-center ">
            <img
              src={Warehouse}
              alt="warehouse"
              className="w-[50%] rounded-full"
            />
            <p>
              We're leading provider of warehousing and storage solutions,
              offering secure and flexible options for businesses of all sizes.
              Our state-of-the-art facilities are equipped with advanced
              technology and equipped with the latest security measures,
              ensuring the safe and efficient storage of your goods. Our team of
              experts provides personalized service and tailored solutions to
              meet the specific needs of each customer, including inventory
              management, order fulfillment, and transportation services. Trust
              Cargoland to handle your warehousing needs and enjoy peace of mind
              knowing your goods are in safe and capable hands.
            </p>
          </div>
          <p className="font-sen mt-3">
            When there is a need to store goods overnight, we have warehouses
            near airports or ports, which we are connected with, allowing us to
            easily bring our goods quickly to their destination. Business
            Oriented Warehouse Solutions Improve your distribution and shipping
            of your goods with our warehouse facilities’ geographical
            advantages. By having your goods stored in the right location, we
            help you ensure 99% of on-time delivery of your business orders.
          </p>
          <span>
            Saratap Global Services Limited warehouses can handle the demand for
            increased storage space among eCommerce that are growing their
            business through our custom supply chain solutions. The solution we
            provide can increase the efficiency of your transportation
            capabilities.
          </span>
        </div>
        <div id="packaging" className="mt-5">
          <h1 className="text-secondary-100 text-4xl font-semibold mb-2 text-center">
            Packaging
          </h1>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-3"></div>
          <div className="flex flex-row-reverse gap-5 items-center ">
            <img
              src={Packaging}
              alt="packaging"
              className="w-[50%] rounded-full"
            />
            <p>
              As experts in handling different types of goods from various
              industries, we document every damaged packaging and offer
              suggestions for repackaging to prevent any delays. After we pick
              up the goods, we will inspect your packaging. For any broken
              packaging, we offer advice on repackaging based on industry
              standards and the requirements for transporting your goods on the
              air. Should you ask for repackaging, we will provide the service
              for a fee. Since freight stations will only transport quality
              packages, we avoid transporting damaged packaging to ensure that
              your goods are not broken and we prevent any losses. To avoid any
              delays, we check the packaging of your goods and identify
              repackaging solutions we can recommend.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
