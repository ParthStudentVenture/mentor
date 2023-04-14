import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { mentor } from "../pages/Home";

export function Card({ mentor }: { mentor: mentor }) {
  function sendEmailToMentor(email: string) {
    const emailLink = `mailto:R${email}?subject=Mentorship by PSV`;
    window.location.href = emailLink;
  }

  return (
    <div className="border border-slate-100 shadow-md bg-white p-4 rounded-lg text-left m-2 text-sm capitalize">
      <div>
        <span className="opacity-50">Name : </span> {mentor.name}
      </div>
      <div>
        <span className="opacity-50">Expertise Industry :</span>{" "}
        {mentor.expertise}
      </div>
      <div>
        <span className="opacity-50">Current engagement :</span>{" "}
        {mentor.engagement}
      </div>

      <div className="flex mt-5 justify-end gap-2">
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
  );
}
