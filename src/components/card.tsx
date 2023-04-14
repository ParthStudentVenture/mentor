import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { mentor } from "../pages/Home";
import defaultMentor from "../assets/default_mentor.webp";

export function Card({ mentor }: { mentor: mentor }) {
  function sendEmailToMentor(email: string) {
    const emailLink = `mailto:R${email}?subject=Mentorship by PSV`;
    window.location.href = emailLink;
  }

  return (
    <div className="border border-slate-100 shadow-md bg-white p-4 md:p-6 rounded-xl text-left m-2 text-sm capitalize">
      <div className="flex mb-6">

        <img src={defaultMentor} className="w-[10rem] h-[10rem] rounded-xl mr-auto" />

        <div className="flex justify-end gap-2 mb-auto">
          {mentor.email && (
            <div
              className="text-white bg-slate-700 p-1.5 rounded-md gap-3 cursor-pointer"
              onClick={() => sendEmailToMentor(mentor.email)}
            >
              <HiOutlineMail />
            </div>
          )}

          {mentor.linkedin && (
            <div
              className="text-white bg-blue-500 p-1.5 rounded-md gap-3 cursor-pointer"
              onClick={() => {
                window.open(mentor.linkedin, "_blank", "noreferrer");
              }}
            >
              <FaLinkedinIn />
            </div>
          )}
        </div>
      </div>

      <div className="leading-6">
        <p className="font-bold">
          <span className="opacity-50 font-normal">Name : </span> {mentor.name}
        </p>
        <p>
          <span className="opacity-50">Expertise Industry :</span>{" "}
          {mentor.expertise}
        </p>
        <p>
          <span className="opacity-50">Current engagement :</span>{" "}
          {mentor.engagement}
        </p>
      </div>
    </div>
  );
}
