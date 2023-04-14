import { ImFacebook } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import psvWhiteLogo from "../assets/psv_logo_white.png";

export function Footer() {
  return (
    <div className="bg-[#020019] w-100vw text-white p-5 flex-inline justify-center py-[4vh]">
      <div className="flex justify-center mb-4 md:mb-5 mt-4">
        <img src={psvWhiteLogo} className="h-14" />
      </div>

      <div className="flex justify-center mb-4 md:mb-5 gap-4">
        <div
          onClick={() => {
            window.open(
              "https://www.facebook.com/parthstudentventure",
              "_blank",
              "noreferrer"
            );
          }}
        >
          <ImFacebook className="w-4 h-4 social cursor-pointer" />
        </div>

        <div
          onClick={() => {
            window.open(
              "https://www.instagram.com/parthstudentventure/",
              "_blank",
              "noreferrer"
            );
          }}
        >
          <AiFillInstagram className="w-4 h-4 social cursor-pointer" />
        </div>

        <div
          onClick={() => {
            window.open(
              "https://www.linkedin.com/company/parthstudentventure/",
              "_blank",
              "noreferrer"
            );
          }}
        >
          <FaLinkedinIn className="w-4 h-4 social cursor-pointer" />
        </div>
      </div>

      <div className=" text-xs whitespace-nowrap md:text-sm tracking-wider text-center mb-4">
        <p>
          © Copyright {new Date().getFullYear()}, All Rights Reserved |{" "}
          <a
            target="_blank"
            className="cursor-pointer text-white"
            href="https://parthstudent.vc/"
          >
            Parth Student Venture
          </a>
        </p>
      </div>
    </div>
  );
}
