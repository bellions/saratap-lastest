import React from "react";
import Ethopia from "../assets/ethopia-logo.png";
import Turkishairline from "../assets/turkishairline_logo.avif";
import Britishair from "../assets/british-airline.svg";
import Airfrance from "../assets/airfrance-logo.svg";
import Luf from "../assets/luf-logo.svg";
import Emirate from "../assets/emirates-logo.svg";

import Nnpc from "../assets/nnpc.png";
import Firstbank from "../assets/First-Bank.svg";
import Shell from "../assets/shell-logo.svg";
import Cbn from "../assets/cbnlogotrans.gif";
import Inec from "../assets/inec-logo.png";
import Dangote from "../assets/dangote-logo.png";
import Un from "../assets/un-logo.png";
import Nimassa from "../assets/nimmasa-logo.png";
import Bankofindustry from "../assets/Bol-logo.png";

function Partner() {
  return (
    <div className="w-5/6 mx-auto mt-6">
      <div className="flex gap-20 ">
        <div className="w-[50%]">
          <h1 className="text-secondary-100 text-4xl font-semibold mb-0 text-center">
            Partners
          </h1>
          <div className="bg-primary-500 mx-auto w-10 mt-0 mb-4 h-1"></div>
          <p className="font-sen font-sm mb-4">
            We've got long-term relationship and partnership with various
            airline companies that would make your business shippment faster and
            reliable.
          </p>
          <div className="grid grid-cols-2 gap-4 bg-white p-5 drop-shadow-xl">
            <img
              src={Ethopia}
              className="w-50 h-30 p-2 bg-white drop-shadow-xl"
              alt="ethopia"
            />
            <img
              src={Turkishairline}
              className="bg-primary-300 p-5 drop-shadow-xl"
              alt="Turkishairlineopia"
            />
            <img
              src={Britishair}
              className="bg-primary-100 p-5 drop-shadow-xl"
              alt="Britishair"
            />
            <img
              src={Airfrance}
              className="bg-primary-100 p-5 drop-shadow-xl"
              alt="Airfrance"
            />
            <img
              src={Luf}
              className="bg-primary-300 p-5 drop-shadow-xl"
              alt="Luf"
            />

            <img
              src={Emirate}
              className="bg-red-500 p-5 drop-shadow-xl"
              alt="Emirate"
            />
          </div>
        </div>
        <div className="w-[50%] ">
          <h1 className="text-secondary-100 text-4xl font-semibold mb-0 text-center">
            Clients
          </h1>
          <div className="bg-primary-500 mx-auto w-10 mt-0 mb-4 h-1"></div>
          <p className="font-sen font-sm mb-4">
            Our company has helped so many organisation in carrying out the
            shippment in both import and export. These are few of companies we
            work with
          </p>
          <div className="grid grid-cols-3 gap-4 bg-white p-5 drop-shadow-xl">
            <img
              src={Cbn}
              className="bg-primary-100 w-20  drop-shadow-xl"
              alt="Cbn"
            />
            <img
              src={Shell}
              className="bg-primary-100 w-20 max-w-20  drop-shadow-xl"
              alt="Shell"
            />
            <img
              src={Nnpc}
              className="bg-primary-100  drop-shadow-xl"
              alt="Nnpc"
            />
            <img
              src={Firstbank}
              className="bg-primary-100  drop-shadow-xl"
              alt="Firstbank"
            />
            <img
              src={Inec}
              className="bg-primary-100  drop-shadow-xl"
              alt="inec"
            />
            <img
              src={Dangote}
              className="bg-primary-300  drop-shadow-xl"
              alt="dangote"
            />
            <img
              src={Un}
              className="bg-white p-1 drop-shadow-xl"
              alt="united nation"
            />
            <img
              src={Nimassa}
              className="bg-white p-1 drop-shadow-xl"
              alt="nimmasa"
            />
            <img
              src={Bankofindustry}
              className="bg-white p-1 drop-shadow-xl"
              alt="bank of industry"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
