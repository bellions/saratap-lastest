import React from "react";
import Container from "../assets/containerImage.jpg";
import Ceo from "../assets/ceo.jpeg";

function AboutPage() {
  return (
    <div className="w-5/6 mx-auto mt-6">
      <div className="">
        <h1 className="text-center font-bold text-3xl mb-2 ">About Us</h1>
        <p className="text-sm w-[50%] items-center mx-auto text-center">
          Saratap Global Services Ltd is your dedicated partner in fulfilling
          international air forwarding with speed, efficiency, and
          cost-effectiveness.
        </p>
        <h1 className="text-secondary-100 font-sen font-bold text-5xl ml-5 mt-7 leading-tight ">
          Our mission is to{" "}
          <span className="text-red-600">unlock reliable</span> & <br />
          <span className="text-red-600">efficient</span> freight forwarding
          <br />
          services.
        </h1>
      </div>

      <div className="flex gap-3">
        <p className="px-5 py-7 font-san text-primary-300 ">
          Saratap global services limited focuses on cultivating long-term
          relationships with clients to ensure they take full advantage of the
          diverse services offered by us in Africa and other areas across the
          globe.
        </p>
        <div className="flex justify-end gap-4 mt-8 mb-5">
          <div className="flex items-center justify-start bg-white h-28 w-28 rounded-xl">
            <div className="flex flex-col items-start justify-center pl-4">
              <p className="text-primary-500 text-3xl font-bold mt-4">500+</p>
              <p className="mb-4 mt-2 text-sm">
                Countries
                <br /> Covered
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start bg-white h-28 w-28 rounded-xl">
            <div className="flex flex-col items-start justify-center pl-4">
              <p className="text-primary-500 text-3xl font-bold mt-4">100%</p>
              <p className="mb-4 mt-2 text-sm">
                Fast, Efficient
                <br /> Delivery
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start bg-white h-28 w-28 rounded-xl">
            <div className="flex flex-col items-start justify-center pl-4">
              <p className="text-primary-500 text-3xl font-bold mt-4">25k+</p>
              <p className="mb-4 mt-2 text-sm">
                Happy
                <br /> Customers
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-4xl text-start mb-3 ml-7">
          <span className="text-primary-500">Who</span> We Are
        </h1>
        <div className="flex justify-center gap-8">
          <img
            src={Container}
            alt="who"
            className="max-w-[100%] h-[30%] object-fit-cover w-[30%]"
          />
          <p className="text-primary-300 w-[50%] leading-8">
            Saratap Global Services Limited Freight Logistics is a professional
            logistics company approved by the relevant state departments to
            operate international freight forwarding business. Our headquarters
            locates in Nigeria, and other branches Includes Lagos and London. We
            handle shipment from/to Nigeria, United state, Australia, Ireland,
            Saudi Arabia, India, Singapore, New Zealand, South Africa, dubai,
            China, Oman, UAE, Kuwait, Canada, Estonia, Latvia and so on (All
            over Nigeria). Although we can forward shipments almost from
            anywhere to any destination, our expertise fields are Nigeria
            shipping.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-center font-bold text-5xl">Mission</h1>
        <div className="bg-primary-500 mx-auto h-1 w-20 mb-3"></div>
        <div className="flex w-[100%] gap-3 mt-5">
          <div className="w-[33%] p-3 bg-white drop-shadow-xl rounded">
            <span className="text-primary-300 text-2xl font-bold">01.</span>
            <h1 className="text-primary-300 text-2xl font-bold mb-2">
              Strong long time relationship with our clients{" "}
            </h1>
            <p className="text-sm">
              With more than 500 excellent partners and branch offices in
              global.provide more professional, security, Competitive, efficient
              & reliable international logistics service and personalized
              solutions.
            </p>
          </div>

          <div className="w-[33%] p-3 bg-white drop-shadow-xl rounded">
            <span className="text-primary-300 text-2xl font-bold">02.</span>
            <h1 className="text-primary-300 text-2xl font-bold mb-2">
              Grow businesses by taken care of your logistics
            </h1>
            <p className="text-sm">
              it's time to adapt to your business to keep up with how the world
              of commerce is evolving. onlineize your offline logistics service.
              Booking, controlling and monitoring your shipments are all simple
              with saratap global
            </p>
          </div>
          <div className="w-[33%] p-3 bg-white drop-shadow-xl rounded">
            <span className="text-primary-300 text-2xl font-bold">03.</span>
            <h1 className="text-primary-300 text-2xl font-bold mb-2">
              Make flexible & effective service at every turn
            </h1>
            <p className="text-sm">
              Providing Full Range Of Transportation Worldwide in flexible and
              dynamic way that would be convinient for both the importer &
              Exporter
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-12">
        <span className=" text-primary-500 font-bold text-xl mt-2">
          Directions, That Matter!
        </span>
        <h1 className="text-center font-bold text-5xl mb-3">
          Message from the CEO
        </h1>
        <img
          src={Ceo}
          alt="ceo"
          className="rounded-full w-50 h-40 border-4 border-primary-500 "
        />
        <p className="text-primary-300 font-sen mt-4 w-[70%] bg-white drop-shadow-xl p-5">
          The history of saratap global services limited begun about 25years
          back which Alhaji Ibrahim Umar Akanbi was the co-founder of the
          company and as been effective since then till date in carrying out its
          primary purpose of growing businesses through the cargo means. As a
          leader in Nigeria's market,Through close partnerships with a number of
          distinctive air lines / shiping lines / express company / ground
          carriers, We can offer the best combination of space allocation and
          competitive prices for our clients. Our advantage as a direct partner
          has helped us create an integrated platform of flexible logistics
          solutions.{" "}
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
